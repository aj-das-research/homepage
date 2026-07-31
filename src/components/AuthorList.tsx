import { profile } from "@/data/profile";

export function AuthorList({ authors }: { authors: string }) {
  const parts = authors.split(/(Abhijit Das)/g);
  return (
    <p className="text-meta leading-snug text-muted-foreground">
      {parts.map((part, i) =>
        part === "Abhijit Das" ? (
          <a
            key={i}
            href={profile.scholar}
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}
