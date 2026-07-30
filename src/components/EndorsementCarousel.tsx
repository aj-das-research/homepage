import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Endorsement } from "@/data/collaborators";

const AUTO_MS = 4000;
const SLIDE_MS = 550;
const GAP_PX = 16;

export function EndorsementCarousel({ items }: { items: Endorsement[] }) {
  const count = items.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [stepPx, setStepPx] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => {
      const visible = window.matchMedia("(min-width: 640px)").matches ? 2 : 1;
      const cardW = (el.clientWidth - GAP_PX * (visible - 1)) / visible;
      setStepPx(cardW + GAP_PX);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused || count < 2 || stepPx === 0) return;

    const id = window.setInterval(() => {
      if (lockedRef.current) return;
      lockedRef.current = true;
      setAnimate(true);
      setIndex((i) => i + 1);

      window.setTimeout(() => {
        setAnimate(false);
        setIndex((i) => (i >= count ? 0 : i < 0 ? count - 1 : i));
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setAnimate(true);
            lockedRef.current = false;
          });
        });
      }, SLIDE_MS);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, count, stepPx]);

  if (count === 0) return null;

  function slide(delta: 1 | -1) {
    if (lockedRef.current || count < 2) return;
    lockedRef.current = true;
    setAnimate(true);
    setIndex((i) => i + delta);

    window.setTimeout(() => {
      setAnimate(false);
      setIndex((i) => {
        if (i >= count) return 0;
        if (i < 0) return count - 1;
        return i;
      });
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true);
          lockedRef.current = false;
        });
      });
    }, SLIDE_MS);
  }

  const track = [...items, ...items, ...items];
  const offset = count + index;
  const cardWidth = stepPx > 0 ? stepPx - GAP_PX : undefined;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className="overflow-hidden"
        style={{ opacity: stepPx ? 1 : 0 }}
      >
        <div
          className="flex"
          style={{
            gap: GAP_PX,
            transform: stepPx ? `translateX(-${offset * stepPx}px)` : undefined,
            transition: animate
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
            willChange: "transform",
          }}
        >
          {track.map((item, i) => (
            <article
              key={`${item.name}-${i}`}
              className="flex min-h-[220px] shrink-0 flex-col justify-between border border-border bg-card p-6"
              style={cardWidth ? { width: cardWidth, maxWidth: cardWidth } : { width: "100%" }}
            >
              <blockquote>
                <span
                  aria-hidden
                  className="mb-2 block font-serif text-5xl leading-none text-accent"
                >
                  “
                </span>
                <p className="prose-justify font-serif leading-relaxed text-foreground">
                  {item.quote}
                </p>
              </blockquote>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-foreground">
                  —{" "}
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </p>
                <p className="text-meta mt-0.5 text-foreground">{item.role}</p>
                <p className="text-meta text-muted-foreground">
                  {item.affiliationHref ? (
                    <a href={item.affiliationHref} target="_blank" rel="noreferrer">
                      {item.affiliation}
                    </a>
                  ) : (
                    item.affiliation
                  )}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>

      {count > 1 ? (
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Previous endorsements"
              className="inline-flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next endorsements"
              className="inline-flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="text-[13px] text-muted-foreground">
            {((index % count) + count) % count + 1} / {count}
          </p>
        </div>
      ) : null}
    </div>
  );
}
