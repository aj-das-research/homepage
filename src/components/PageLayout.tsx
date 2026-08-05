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
    <main className="rise-in mx-auto w-full max-w-6xl px-6 py-10 sm:py-12">
      {showHeader ? (
        <header className="mb-7">
          {title ? (
            <h1 className="page-title font-serif text-3xl text-foreground sm:text-4xl">
              {title}
            </h1>
          ) : null}
          {intro ? (
            <p className="prose-justify mt-3 max-w-4xl text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </header>
      ) : null}
      {children}
    </main>
  );
}
