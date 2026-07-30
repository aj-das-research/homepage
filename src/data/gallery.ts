import mbzuai1 from "@/assets/media/mbzuai/image.png";
import mbzuai2 from "@/assets/media/mbzuai/image1.png";
import mbzuai3 from "@/assets/media/mbzuai/image2.png";
import mbzuai4 from "@/assets/media/mbzuai/image3.png";
import mbzuai5 from "@/assets/media/mbzuai/image4.png";
import { profile } from "@/data/profile";

export type GalleryPhoto = {
  src: string;
  alt?: string;
};

export type GalleryAlbum = {
  /** Event / place title shown above the photo grid. */
  title: string;
  /** Official event / institution URL for the title link. */
  url?: string;
  location?: string;
  /** Google Maps (or other) link for the location. */
  mapsUrl?: string;
  date?: string;
  photos: GalleryPhoto[];
};

/**
 * Add a new album for each event or place.
 * Drop images under src/assets/media/<album>/ and import them here.
 */
export const gallery: GalleryAlbum[] = [
  {
    title: "MBZUAI Campus",
    url: profile.mbzuaiUrl,
    location: "Abu Dhabi, UAE",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mohamed+bin+Zayed+University+of+Artificial+Intelligence+Masdar+City+Abu+Dhabi",
    photos: [
      { src: mbzuai1, alt: "MBZUAI campus building" },
      { src: mbzuai2, alt: "MBZUAI campus exterior with lattice canopy" },
      { src: mbzuai3, alt: "MBZUAI campus courtyard" },
      { src: mbzuai4, alt: "MBZUAI campus walkway" },
      { src: mbzuai5, alt: "MBZUAI campus street with university branding" },
    ],
  },
];
