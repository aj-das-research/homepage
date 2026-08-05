import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { AuthorList } from "@/components/AuthorList";
import { MediaThumb } from "@/components/MediaThumb";
import { ImageLightbox } from "@/components/ImageLightbox";
import { publications, patents } from "@/data/publications";
import { upcomingPresentations } from "@/data/conference-map";
import { profile } from "@/data/profile";
import { ConferenceMap } from "@/components/ConferenceMap";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Abhijit Das" },
      {
        name: "description",
        content:
          "Papers and patents by Abhijit Das in medical vision-language models, uncertainty, and efficient deep learning.",
      },
      { property: "og:title", content: "Publications — Abhijit Das" },
      {
        property: "og:description",
        content: "Papers and patents in medical vision-language models, conformal prediction, and efficient deep learning.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/publications" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: Publications,
});

const years = ["2026", "2025", "2024"];

const publicationImages = publications.flatMap((pub) =>
  pub.image
    ? [{ src: pub.image, alt: pub.title, caption: pub.title }]
    : [],
);

function Publications() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const indexBySrc = new Map(publicationImages.map((img, i) => [img.src, i]));

  return (
    <PageLayout>
      <header className="mb-7 grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:gap-8">
        <div>
          <h1 className="page-title font-serif text-3xl text-foreground sm:text-4xl">
            Publications
          </h1>
          <p className="prose-justify mt-3 max-w-lg text-muted-foreground">
            For the published papers and preprints please visit my{" "}
            <a href={profile.scholar} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
            .
          </p>
          <ul className="mt-4 max-w-lg space-y-1.5 text-sm leading-snug text-muted-foreground">
            {upcomingPresentations.map((talk) => {
              const paperWord = talk.count === 1 ? "paper" : "papers";
              const conference = talk.href ? (
                <a
                  href={talk.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-upcoming font-semibold"
                >
                  {talk.conference}
                </a>
              ) : (
                <span className="font-semibold text-upcoming">{talk.conference}</span>
              );
              return (
                <li key={`${talk.conference}-${talk.year}`}>
                  Presenting {talk.count} {paperWord} at {conference} on{" "}
                  {talk.dates} at {talk.city}.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:pt-1">
          <ConferenceMap />
        </div>
      </header>

      {years.map((year) => {
        const items = publications.filter((p) => p.year === year);
        if (items.length === 0) return null;
        return (
          <section key={year} className="mt-6">
            <h2 className="ink-mark text-label text-accent">{year}</h2>
            <ol className="mt-2.5 space-y-2.5">
              {items.map((pub) => (
                <li key={pub.title} className="flex flex-row items-start gap-3">
                  <MediaThumb
                    src={pub.image}
                    alt={pub.title}
                    size="sm"
                    onOpen={
                      pub.image && indexBySrc.has(pub.image)
                        ? () => setActiveIndex(indexBySrc.get(pub.image!)!)
                        : undefined
                    }
                  />
                  <div className="min-w-0 leading-tight">
                    <h3 className="font-normal text-foreground">
                      {pub.href ? (
                        <a href={pub.href} target="_blank" rel="noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <AuthorList authors={pub.authors} />
                    <p className="text-meta mt-0.5 italic font-normal text-muted-foreground">{pub.venue}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <section className="mt-6">
        <h2 className="ink-mark text-label text-accent">Patents</h2>
        <ol className="mt-2.5 space-y-2">
          {patents.map((p) => (
            <li key={p.title} className="leading-tight">
              <h3 className="font-normal text-foreground">{p.title}</h3>
              <AuthorList authors={p.authors} />
            </li>
          ))}
        </ol>
      </section>

      <ImageLightbox
        images={publicationImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </PageLayout>
  );
}
