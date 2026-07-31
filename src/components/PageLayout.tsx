import type { ReactNode } from "react";

export function PageLayout({
  title,
  intro,
  children,
}: {
  title?: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  const showHeader = Boolean(title || intro);
  return (
    <main className="rise-in mx-auto w-full max-w-6xl px-6 py-12">
      {showHeader ? (
        <header className="mb-8">
          {title ? (
            <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {title}
            </h1>
          ) : null}
          {intro ? (
            <p className="mt-3 max-w-4xl text-justify hyphens-auto text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </header>
      ) : null}
      {children}
    </main>
  );
}
