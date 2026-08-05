export function AuthorList({ authors }: { authors: string }) {
  const parts = authors.split(/(Abhijit Das)/g);
  return (
    <p className="text-meta text-muted-foreground">
      {parts.map((part, i) =>
        part === "Abhijit Das" ? (
          <span key={i} className="font-bold text-foreground">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}
