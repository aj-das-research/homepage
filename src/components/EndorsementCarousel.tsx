import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Endorsement } from "@/data/collaborators";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function EndorsementCarousel({ items }: { items: Endorsement[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex == null || items.length < 2) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((i) =>
          i == null ? i : (i - 1 + items.length) % items.length,
        );
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((i) => (i == null ? i : (i + 1) % items.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  if (items.length === 0) return null;

  const active = activeIndex == null ? null : items[activeIndex];
  const showNav = items.length > 1;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.name}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View recommendation from ${item.name}`}
              className="media-hover relative flex h-[180px] w-full cursor-zoom-in items-center justify-center overflow-hidden border border-border bg-white p-2 sm:h-[200px] sm:p-3 md:h-[220px]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-2 top-0 font-serif text-4xl leading-none text-accent sm:left-3 sm:text-5xl"
              >
                “
              </span>
              <img
                src={item.image}
                alt={`Recommendation from ${item.name}`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </button>
          </li>
        ))}
      </ul>

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
          <DialogTitle className="sr-only">
            {active
              ? `Recommendation from ${active.name}`
              : "Endorsement"}
          </DialogTitle>

          {showNav ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) =>
                  i == null ? i : (i - 1 + items.length) % items.length,
                );
              }}
              aria-label="Previous endorsement"
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          ) : null}

          {active ? (
            <div className="flex max-h-[100dvh] max-w-[100vw] flex-col items-center gap-3 px-16 py-12 sm:px-20">
              <div className="flex h-[min(62dvh,480px)] w-[min(92vw,960px)] items-center justify-center border border-border bg-white p-4 sm:p-6">
                <img
                  src={active.image}
                  alt={`Recommendation from ${active.name}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-meta text-muted-foreground">
                {active.name}
                {showNav && activeIndex != null
                  ? ` - ${activeIndex + 1} / ${items.length}`
                  : ""}
              </p>
            </div>
          ) : null}

          {showNav ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) =>
                  i == null ? i : (i + 1) % items.length,
                );
              }}
              aria-label="Next endorsement"
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
