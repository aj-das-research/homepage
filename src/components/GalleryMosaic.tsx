import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chunkIntoSquareRows } from "@/lib/square-photo-grid";
import type { GalleryPhoto } from "@/data/gallery";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function GalleryMosaic({
  photos,
  title,
}: {
  photos: GalleryPhoto[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goPrev = () => {
    setActiveIndex((i) => (i == null ? i : (i - 1 + photos.length) % photos.length));
  };

  const goNext = () => {
    setActiveIndex((i) => (i == null ? i : (i + 1) % photos.length));
  };

  useEffect(() => {
    if (activeIndex == null || photos.length < 2) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, photos.length]);

  if (photos.length === 0) return null;

  const indexed = photos.map((photo, index) => ({ photo, index }));
  const rows = chunkIntoSquareRows(indexed);
  const active = activeIndex == null ? null : photos[activeIndex];
  const showNav = photos.length > 1;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex aspect-square flex-col gap-2 sm:gap-3">
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

      <Dialog
        open={activeIndex != null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent
          className="flex h-[100dvh] w-screen max-w-none translate-x-[-50%] translate-y-[-50%] items-center justify-center border-0 bg-transparent p-0 shadow-none sm:rounded-none"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">{active?.alt ?? title}</DialogTitle>

          {showNav ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          ) : null}

          {active ? (
            <div className="flex max-h-[100dvh] max-w-[100vw] flex-col items-center gap-3 px-16 py-12 sm:px-20">
              <img
                src={active.src}
                alt={active.alt ?? title}
                className="max-h-[82dvh] max-w-[min(92vw,1200px)] object-contain shadow-2xl"
              />
              {showNav && activeIndex != null ? (
                <p className="text-[14px] text-muted-foreground">
                  {activeIndex + 1} / {photos.length}
                </p>
              ) : null}
            </div>
          ) : null}

          {showNav ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
