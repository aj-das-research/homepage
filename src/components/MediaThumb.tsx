export function MediaThumb({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) return null;
  return (
    <figure
      className={`media-hover aspect-video w-48 shrink-0 self-start overflow-hidden border border-border bg-secondary sm:w-64 md:w-72 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </figure>
  );
}

export function PersonPhoto({ src, name }: { src?: string; name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="media-hover aspect-square h-24 w-24 shrink-0 overflow-hidden border border-border bg-secondary sm:h-28 sm:w-28">
      {src ? (
        <img src={src} alt={name} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-serif text-lg text-muted-foreground">
          {initials}
        </span>
      )}
    </div>
  );
}
