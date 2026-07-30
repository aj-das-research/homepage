import type { ReactNode } from "react";

export function PageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="rise-in mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-3xl text-justify hyphens-auto text-muted-foreground">
            {intro}
          </p>
        ) : null}
      </header>
      {children}
    </main>
  );
}
