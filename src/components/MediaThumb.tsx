export function MediaThumb({
  src,
  alt,
  caption,
  captionHref,
  className = "",
}: {
  src?: string;
  alt: string;
  /** Optional line under the image (e.g. venue / preprint). */
  caption?: string;
  /** When set, caption links to the same URL as the paper title. */
  captionHref?: string;
  className?: string;
}) {
  if (!src) return null;
  return (
    <div className={`w-48 shrink-0 self-start sm:w-64 md:w-72 ${className}`}>
      <figure className="media-hover aspect-video overflow-hidden border border-border bg-secondary">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </figure>
      {caption ? (
        <p className="text-meta mt-1.5 italic leading-snug text-accent">
          {captionHref ? (
            <a href={captionHref} target="_blank" rel="noreferrer">
              {caption}
            </a>
          ) : (
            caption
          )}
        </p>
      ) : null}
    </div>
  );
}

export function PersonPhoto({
  src,
  name,
  size = "md",
  rounded = false,
}: {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  /** Circular crop (e.g. student collaborators). */
  rounded?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  const sizeClass =
    size === "lg"
      ? "h-28 w-28 sm:h-36 sm:w-36"
      : size === "sm"
        ? "h-14 w-14 sm:h-16 sm:w-16"
        : "h-24 w-24 sm:h-28 sm:w-28";

  const initialsClass =
    size === "sm" ? "font-serif text-xs" : "font-serif text-lg";

  return (
    <div
      className={`media-hover aspect-square shrink-0 overflow-hidden border border-border bg-secondary ${sizeClass} ${
        rounded ? "rounded-full" : ""
      }`}
    >
      {src ? (
        <img src={src} alt={name} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <span
          className={`flex h-full w-full items-center justify-center text-muted-foreground ${initialsClass}`}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
