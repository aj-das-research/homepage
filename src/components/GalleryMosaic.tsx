import { useState } from "react";
import { chunkIntoSquareRows, squareGridDims } from "@/lib/square-photo-grid";
import type { GalleryPhoto } from "@/data/gallery";
import { ImageLightbox } from "@/components/ImageLightbox";

export function GalleryMosaic({
  photos,
  title,
}: {
  photos: GalleryPhoto[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  const indexed = photos.map((photo, index) => ({ photo, index }));
  const { cols, rows: rowCount } = squareGridDims(photos.length);
  const rows = chunkIntoSquareRows(indexed);
  const lightboxImages = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt ?? title,
    caption: photo.alt,
  }));

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div
        className="flex flex-col gap-2 sm:gap-3"
        style={{ aspectRatio: `${cols} / ${rowCount}` }}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex min-h-0 flex-1 gap-2 sm:gap-3">
            {row.map(({ photo, index }) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${photo.alt ?? title}`}
                className="media-hover relative min-w-0 flex-1 cursor-zoom-in overflow-hidden border border-border bg-transparent p-0 text-left"
              >
                <img
                  src={photo.src}
                  alt={photo.alt ?? title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
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
