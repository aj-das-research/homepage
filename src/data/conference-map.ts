import { publications } from "@/data/publications";

export type VenueGeo = {
  city: string;
  country: string;
  lat: number;
  lon: number;
};

export type UpcomingPresentation = {
  conference: string;
  year: string;
  count: number;
  dates: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  href?: string;
};

/** Upcoming talks used on the publications header (and to enrich the map). */
export const upcomingPresentations: UpcomingPresentation[] = [
  {
    conference: "ECCV",
    year: "2026",
    count: 1,
    dates: "September 8–12, 2026",
    city: "Malmö",
    country: "Sweden",
    lat: 55.605,
    lon: 13.0038,
    href: "https://eccv.ecva.net/",
  },
  {
    conference: "MICCAI",
    year: "2026",
    count: 4,
    dates: "September 27 – October 1, 2026",
    city: "Strasbourg",
    country: "France",
    lat: 48.5734,
    lon: 7.7521,
    href: "https://conferences.miccai.org/2026/en/",
  },
];

/** Map publication venue strings to host cities (skip journals / preprints). */
export const venueGeoByName: Record<string, VenueGeo | null> = {
  Preprint: null,
  "Frontiers in Medicine": null,
  "ECCV 2026": {
    city: "Malmö",
    country: "Sweden",
    lat: 55.605,
    lon: 13.0038,
  },
  "MICCAI 2026": {
    city: "Strasbourg",
    country: "France",
    lat: 48.5734,
    lon: 7.7521,
  },
  "MICCAI 2024": {
    city: "Marrakesh",
    country: "Morocco",
    lat: 31.6295,
    lon: -7.9811,
  },
  "ICPR 2024": {
    city: "Kolkata",
    country: "India",
    lat: 22.5726,
    lon: 88.3639,
  },
  "IEEE EMBC 2024": {
    city: "Orlando",
    country: "USA",
    lat: 28.5383,
    lon: -81.3792,
  },
  "DDW 2024": {
    city: "Washington, D.C.",
    country: "USA",
    lat: 38.9072,
    lon: -77.0369,
  },
};

export type ConferencePin = {
  id: string;
  venues: string[];
  city: string;
  country: string;
  lat: number;
  lon: number;
  count: number;
  upcoming: boolean;
};

export type VenueCount = {
  venue: string;
  count: number;
  city: string;
  pinId: string;
  upcoming: boolean;
};

function upcomingVenueKeys() {
  return new Set(
    upcomingPresentations.map((talk) => `${talk.conference} ${talk.year}`),
  );
}

function upcomingCityKeys() {
  return new Set(
    upcomingPresentations.map((talk) => `${talk.city}|${talk.country}`),
  );
}

/** Paper counts per conference venue (mapped cities only). */
export function getVenueCounts(): VenueCount[] {
  const counts = new Map<string, number>();
  const upcomingVenues = upcomingVenueKeys();

  for (const pub of publications) {
    if (!venueGeoByName[pub.venue]) continue;
    counts.set(pub.venue, (counts.get(pub.venue) ?? 0) + 1);
  }

  for (const talk of upcomingPresentations) {
    const venue = `${talk.conference} ${talk.year}`;
    if (!venueGeoByName[venue]) continue;
    counts.set(venue, Math.max(counts.get(venue) ?? 0, talk.count));
  }

  return [...counts.entries()]
    .map(([venue, count]) => {
      const geo = venueGeoByName[venue]!;
      return {
        venue,
        count,
        city: geo.city,
        pinId: `${geo.city}-${geo.country}`.toLowerCase().replace(/\W+/g, "-"),
        upcoming: upcomingVenues.has(venue),
      };
    })
    .sort((a, b) => {
      if (a.upcoming !== b.upcoming) return a.upcoming ? -1 : 1;
      return b.count - a.count || a.venue.localeCompare(b.venue);
    });
}

/** Aggregate conference publications into map pins (one pin per city). */
export function getConferencePins(): ConferencePin[] {
  const byCity = new Map<
    string,
    {
      city: string;
      country: string;
      lat: number;
      lon: number;
      venues: Set<string>;
      count: number;
    }
  >();

  for (const pub of publications) {
    const geo = venueGeoByName[pub.venue];
    if (!geo) continue;
    const key = `${geo.city}|${geo.country}`;
    const existing = byCity.get(key);
    if (existing) {
      existing.venues.add(pub.venue);
      existing.count += 1;
    } else {
      byCity.set(key, {
        city: geo.city,
        country: geo.country,
        lat: geo.lat,
        lon: geo.lon,
        venues: new Set([pub.venue]),
        count: 1,
      });
    }
  }

  for (const talk of upcomingPresentations) {
    const venue = `${talk.conference} ${talk.year}`;
    const key = `${talk.city}|${talk.country}`;
    const existing = byCity.get(key);
    if (existing) {
      existing.venues.add(venue);
      existing.count = Math.max(existing.count, talk.count);
    } else {
      byCity.set(key, {
        city: talk.city,
        country: talk.country,
        lat: talk.lat,
        lon: talk.lon,
        venues: new Set([venue]),
        count: talk.count,
      });
    }
  }

  const upcomingCities = upcomingCityKeys();

  return [...byCity.values()]
    .map((entry) => ({
      id: `${entry.city}-${entry.country}`.toLowerCase().replace(/\W+/g, "-"),
      venues: [...entry.venues].sort(),
      city: entry.city,
      country: entry.country,
      lat: entry.lat,
      lon: entry.lon,
      count: entry.count,
      upcoming: upcomingCities.has(`${entry.city}|${entry.country}`),
    }))
    .sort((a, b) => {
      if (a.upcoming !== b.upcoming) return a.upcoming ? -1 : 1;
      return b.count - a.count || a.city.localeCompare(b.city);
    });
}
