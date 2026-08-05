import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export type LightboxImage = {
  src: string;
  alt: string;
  /** Optional caption under the large image (e.g. title). */
  caption?: string;
};

export function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const active = activeIndex == null ? null : images[activeIndex];
  const showNav = images.length > 1;

  useEffect(() => {
    if (activeIndex == null || images.length < 2) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onChange((activeIndex - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onChange((activeIndex + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length, onChange]);

  return (
    <Dialog
      open={activeIndex != null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className="flex h-[100dvh] w-screen max-w-none translate-x-[-50%] translate-y-[-50%] items-center justify-center border-0 bg-transparent p-0 shadow-none sm:rounded-none"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">
          {active?.alt ?? "Image preview"}
        </DialogTitle>

        {showNav ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (activeIndex == null) return;
              onChange((activeIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        ) : null}

        {active ? (
          <div className="flex max-h-[100dvh] max-w-[100vw] flex-col items-center gap-3 px-16 py-12 sm:px-20">
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[82dvh] max-w-[min(92vw,1200px)] object-contain shadow-2xl"
            />
            <div className="max-w-[min(92vw,720px)] text-center">
              {active.caption ? (
                <p className="text-meta text-foreground">{active.caption}</p>
              ) : null}
              {showNav && activeIndex != null ? (
                <p className="text-meta mt-1 text-muted-foreground">
                  {activeIndex + 1} / {images.length}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {showNav ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (activeIndex == null) return;
              onChange((activeIndex + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
