import { useState } from "react";
import type { GalleryAlbum, GalleryPhoto } from "@/data/gallery";
import { ImageLightbox } from "@/components/ImageLightbox";

type CollageLayout = {
  /** Grid placement for the event text tile. */
  textClass: string;
  /** Flex alignment inside the text tile. */
  textAlign: string;
  /** CSS order for each photo (lower paints earlier in auto-placement). */
  photoOrder: (index: number) => number;
  /** Span classes for each photo. */
  photoSpan: (index: number, total: number) => string;
};

/**
 * Distinct collage recipes so text isn't always top-left —
 * each album can sit tall, wide, mid-flow, or as a bottom caption bar.
 */
const COLLAGE_LAYOUTS: CollageLayout[] = [
  {
    // Wide text block early in the flow (left emphasis)
    textClass: "col-span-2 row-span-2 order-[1]",
    textAlign: "justify-end text-left",
    photoOrder: (i) => i + 2,
    photoSpan: (i, total) => {
      if (total <= 4) return i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1";
      if (i % 7 === 0) return "col-span-2 row-span-2";
      if (i % 4 === 0) return "col-span-2 row-span-1";
      return "col-span-1 row-span-1";
    },
  },
  {
    // Photos first; text as a full-width caption bar at the bottom
    textClass:
      "col-span-2 row-span-1 order-[200] sm:col-span-3 lg:col-span-4",
    textAlign: "justify-center items-center text-center",
    photoOrder: (i) => i + 1,
    photoSpan: (i, total) => {
      if (total <= 2) return "col-span-1 row-span-2 sm:col-span-1 lg:col-span-2";
      if (i === 0) return "col-span-2 row-span-2";
      if (i % 3 === 0) return "col-span-1 row-span-2";
      return "col-span-1 row-span-1";
    },
  },
  {
    // Text mid-flow after the first pair of photos (right-leaning block)
    textClass: "col-span-2 row-span-2 order-[5]",
    textAlign: "justify-center text-left sm:text-right sm:items-end",
    photoOrder: (i) => (i < 2 ? i + 1 : i + 6),
    photoSpan: (i, total) => {
      if (total <= 5) {
        if (i === 0) return "col-span-1 row-span-2";
        if (i === 1) return "col-span-1 row-span-2";
        return "col-span-1 row-span-1";
      }
      if (i % 6 === 0) return "col-span-2 row-span-1";
      if (i % 5 === 0) return "col-span-1 row-span-2";
      return "col-span-1 row-span-1";
    },
  },
  {
    // Tall narrow text strip woven after one hero photo
    textClass: "col-span-1 row-span-3 order-[3] sm:col-span-1",
    textAlign: "justify-center text-left",
    photoOrder: (i) => (i === 0 ? 1 : i + 4),
    photoSpan: (i, total) => {
      if (i === 0) return "col-span-2 row-span-2 order-[1] sm:col-span-2";
      if (total > 4 && i % 4 === 0) return "col-span-2 row-span-1";
      return "col-span-1 row-span-1";
    },
  },
];

export function GalleryMosaic({
  album,
  layoutIndex = 0,
}: {
  album: GalleryAlbum;
  /** Picks a collage recipe so neighbouring albums feel different. */
  layoutIndex?: number;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { photos, title, url, location, mapsUrl, date } = album;
  const layout = COLLAGE_LAYOUTS[layoutIndex % COLLAGE_LAYOUTS.length]!;

  if (photos.length === 0) return null;

  const lightboxImages = photos.map((photo: GalleryPhoto) => ({
    src: photo.src,
    alt: photo.alt ?? title,
    caption: photo.alt,
  }));

  return (
    <div className="overflow-hidden bg-secondary/35">
      <div className="grid grid-cols-2 auto-rows-[7.25rem] sm:grid-cols-3 sm:auto-rows-[8.75rem] lg:grid-cols-4 lg:auto-rows-[9.5rem]">
        <div
          className={`${layout.textClass} ${layout.textAlign} flex flex-col px-5 py-5 sm:px-6 sm:py-6`}
        >
          <h2 className="font-serif text-xl font-bold leading-snug text-accent sm:text-2xl">
            {url ? (
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
          {(location || date) && (
            <p className="text-meta mt-2 italic text-muted-foreground">
              {location ? (
                mapsUrl ? (
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    {location}
                  </a>
                ) : (
                  location
                )
              ) : null}
              {location && date ? " · " : null}
              {date ?? null}
            </p>
          )}
          <p className="text-meta mt-3 text-muted-foreground/80">
            {photos.length} {photos.length === 1 ? "photo" : "photos"}
          </p>
        </div>

        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${photo.alt ?? title}`}
            style={{ order: layout.photoOrder(index) }}
            className={`${layout.photoSpan(index, photos.length)} group relative min-h-0 w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0`}
          >
            <img
              src={photo.src}
              alt={photo.alt ?? title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
          </button>
        ))}
      </div>

      <ImageLightbox
        images={lightboxImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </div>
  );
}
