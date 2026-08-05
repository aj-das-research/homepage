import { useMemo, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import type { GeoProjection } from "d3-geo";
import worldData from "world-atlas/countries-110m.json";
import {
  getConferencePins,
  getVenueCounts,
  type ConferencePin,
  type VenueCount,
} from "@/data/conference-map";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const WIDTH = 960;
const HEIGHT = 480;

type WorldCountry = GeometryCollection;

function MapSvg({
  landPath,
  projection,
  pins,
  activeId,
  onHover,
  onPinClick,
  pinScale = 1,
}: {
  landPath: string;
  projection: GeoProjection;
  pins: ConferencePin[];
  activeId: string | null;
  onHover: (id: string | null) => void;
  onPinClick?: (id: string) => void;
  pinScale?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="block h-auto w-full"
      role="img"
      aria-label="World map of conference publication venues"
    >
      <rect width={WIDTH} height={HEIGHT} fill="transparent" />
      <path
        d={landPath}
        className="fill-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)] stroke-[color-mix(in_oklab,var(--color-foreground)_16%,transparent)]"
        strokeWidth={0.6}
      />

      {pins.map((pin) => {
        const coords = projection([pin.lon, pin.lat]);
        if (!coords) return null;
        const [x, y] = coords;
        const isActive = activeId === pin.id;
        const r = (6 + Math.min(pin.count, 4)) * pinScale;
        const fillClass = pin.upcoming ? "fill-upcoming" : "fill-accent";
        const glowClass = pin.upcoming ? "fill-upcoming/20" : "fill-accent/15";

        return (
          <g
            key={pin.id}
            transform={`translate(${x},${y})`}
            className="cursor-pointer"
            onMouseEnter={() => onHover(pin.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(pin.id)}
            onBlur={() => onHover(null)}
            onClick={(event) => {
              event.stopPropagation();
              onPinClick?.(pin.id);
            }}
            tabIndex={0}
            role="listitem"
            aria-label={`${pin.city}: ${pin.venues.join(", ")}, ${pin.count} papers`}
          >
            <circle
              r={r * 2.2}
              className={`${glowClass}${pin.upcoming ? " animate-pulse" : ""}`}
              style={pin.upcoming ? { animationDuration: "2.4s" } : undefined}
            />
            <circle
              r={isActive ? r + 2 : r}
              className={`${fillClass} stroke-[color-mix(in_oklab,var(--color-background)_70%,transparent)] transition-[r] duration-200`}
              strokeWidth={1.5}
            />
          </g>
        );
      })}
    </svg>
  );
}

function VenueList({
  venues,
  activeId,
  onHover,
  onSelect,
  className = "",
}: {
  venues: VenueCount[];
  activeId: string | null;
  onHover: (id: string | null) => void;
  onSelect?: (id: string) => void;
  className?: string;
}) {
  return (
    <ul className={className}>
      {venues.map((item) => {
        const isActive = activeId === item.pinId;
        return (
          <li key={item.venue}>
            <button
              type="button"
              className={`w-full border-0 bg-transparent p-0 text-left font-normal transition-opacity ${
                item.upcoming
                  ? "text-upcoming"
                  : isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
              } ${isActive ? "opacity-100" : "opacity-90"}`}
              onMouseEnter={() => onHover(item.pinId)}
              onMouseLeave={() => onHover(null)}
              onFocus={() => onHover(item.pinId)}
              onBlur={() => onHover(null)}
              onClick={() => onSelect?.(item.pinId)}
            >
              {item.venue}
              <span
                className={
                  item.upcoming ? "text-upcoming" : "text-muted-foreground"
                }
              >
                {" "}
                · {item.count}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function ConferenceMap() {
  const pins = useMemo(() => getConferencePins(), []);
  const venues = useMemo(() => getVenueCounts(), []);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const { landPath, projection } = useMemo(() => {
    const topology = worldData as unknown as Topology<{
      countries: WorldCountry;
    }>;
    const countries = feature(
      topology,
      topology.objects.countries,
    ) as FeatureCollection<Geometry>;

    const projection = geoEqualEarth()
      .fitSize([WIDTH, HEIGHT], countries)
      .precision(0.5);
    const path = geoPath(projection);
    const landPath = path(countries) ?? "";

    return { landPath, projection };
  }, []);

  const activePin = pins.find((pin) => pin.id === activeId) ?? null;

  const openMap = (pinId?: string) => {
    if (pinId) setActiveId(pinId);
    setOpen(true);
  };

  return (
    <>
      <div className="flex w-full items-start gap-3" aria-label="Conference map">
        <div
          onClick={() => openMap()}
          className="media-hover relative min-w-0 flex-1 cursor-zoom-in overflow-hidden bg-secondary/40"
          aria-label="Open conference map"
        >
          <MapSvg
            landPath={landPath}
            projection={projection}
            pins={pins}
            activeId={activeId}
            onHover={setActiveId}
            onPinClick={openMap}
          />
        </div>

        <VenueList
          venues={venues}
          activeId={activeId}
          onHover={setActiveId}
          onSelect={openMap}
          className="w-[7.25rem] shrink-0 space-y-0.5 pt-0.5 text-xs leading-tight sm:w-[8rem]"
        />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="w-[min(96vw,56rem)] max-w-none gap-4 p-4 sm:p-6"
          aria-describedby={undefined}
        >
          <DialogTitle className="font-serif text-xl font-normal tracking-normal sm:text-2xl">
            Conference venues
          </DialogTitle>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="min-w-0 flex-1 overflow-hidden bg-secondary/40">
              <MapSvg
                landPath={landPath}
                projection={projection}
                pins={pins}
                activeId={activeId}
                onHover={setActiveId}
                onPinClick={setActiveId}
                pinScale={1.15}
              />
            </div>

            <div className="w-full shrink-0 sm:w-44">
              <VenueList
                venues={venues}
                activeId={activeId}
                onHover={setActiveId}
                onSelect={setActiveId}
                className="space-y-1 text-sm leading-snug"
              />

              {activePin ? (
                <p className="mt-4 text-sm leading-snug text-muted-foreground">
                  <span
                    className={
                      activePin.upcoming
                        ? "font-semibold text-upcoming"
                        : "font-semibold text-foreground"
                    }
                  >
                    {activePin.city}
                  </span>
                  {activePin.country ? `, ${activePin.country}` : null}
                  <br />
                  {activePin.venues.join(", ")}
                  <br />
                  {activePin.count}{" "}
                  {activePin.count === 1 ? "paper" : "papers"}
                  {activePin.upcoming ? " · upcoming" : null}
                </p>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">
                  Hover or select a venue.
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
