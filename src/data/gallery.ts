import mbzuai1 from "@/assets/media/mbzuai/image.png";
import mbzuai2 from "@/assets/media/mbzuai/image1.png";
import mbzuai3 from "@/assets/media/mbzuai/image2.png";
import mbzuai4 from "@/assets/media/mbzuai/image3.png";
import mbzuai5 from "@/assets/media/mbzuai/image4.png";
import lab1 from "@/assets/media/lab/photo1.jpeg";
import lab2 from "@/assets/media/lab/photo2.jpeg";
import ruya0 from "@/assets/media/ruyaaihackathon/photo0.jpeg";
import ruya1 from "@/assets/media/ruyaaihackathon/photo1.jpeg";
import ruya2 from "@/assets/media/ruyaaihackathon/photo2.jpeg";
import ruya3 from "@/assets/media/ruyaaihackathon/photo3.jpeg";
import ruya4 from "@/assets/media/ruyaaihackathon/photo4.jpeg";
import ruya5 from "@/assets/media/ruyaaihackathon/photo5.jpeg";
import ruya6 from "@/assets/media/ruyaaihackathon/photo6.jpeg";
import ruya7 from "@/assets/media/ruyaaihackathon/photo7.jpeg";
import ruya8 from "@/assets/media/ruyaaihackathon/photo8.jpeg";
import ruya9 from "@/assets/media/ruyaaihackathon/photo9.jpeg";
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
    title: "The Ruya AI Hackathon",
    url: "https://hackathon.ruya.ai/",
    location: "Dubai, UAE",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=American+University+in+Dubai",
    date: "February 2026",
    photos: [
      { src: ruya0, alt: "The Ruya AI Hackathon — venue and attendees" },
      { src: ruya1, alt: "The Ruya AI Hackathon — teams building" },
      { src: ruya2, alt: "The Ruya AI Hackathon — working session" },
      { src: ruya3, alt: "The Ruya AI Hackathon — event moment" },
      { src: ruya4, alt: "The Ruya AI Hackathon — participants" },
      { src: ruya5, alt: "The Ruya AI Hackathon — team collaboration" },
      { src: ruya6, alt: "The Ruya AI Hackathon — coding and demos" },
      { src: ruya7, alt: "The Ruya AI Hackathon — stage and presentations" },
      { src: ruya8, alt: "The Ruya AI Hackathon — group photo" },
      { src: ruya9, alt: "The Ruya AI Hackathon — closing moments" },
    ],
  },
  {
    title: "GenMI Lab Outings",
    url: "https://www.genmi.info/",
    location: "Abu Dhabi, UAE",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Abu+Dhabi+UAE",
    photos: [
      {
        src: lab1,
        alt: "GenMI Lab members at a group dinner during a lab outing",
      },
      {
        src: lab2,
        alt: "GenMI Lab members sharing a meal at a restaurant outing",
      },
    ],
  },
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
