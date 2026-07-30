import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { AuthorList } from "@/components/AuthorList";
import { MediaThumb } from "@/components/MediaThumb";
import { publications, patents } from "@/data/publications";
import { profile } from "@/data/profile";

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

function Publications() {
  return (
    <PageLayout
      title="Publications"
      intro="Selected papers, each with a short summary of the idea behind it. Full list also available on Google Scholar."
    >
      <a
        className="underline underline-offset-4 hover:text-muted-foreground"
        href={profile.scholar}
        target="_blank"
        rel="noreferrer"
      >
        Google Scholar profile →
      </a>

      {years.map((year) => {
        const items = publications.filter((p) => p.year === year);
        if (items.length === 0) return null;
        return (
          <section key={year} className="mt-14">
            <h2 className="pb-2 font-serif text-sm uppercase tracking-[0.14em] text-muted-foreground">
              {year}
            </h2>
            <ol className="mt-6 space-y-8">
              {items.map((pub) => (
                <li key={pub.title} className="flex flex-col gap-5 sm:flex-row">
                  <MediaThumb src={pub.image} alt={pub.title} />
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-foreground">
                      {pub.href ? (
                        <a href={pub.href} target="_blank" rel="noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <AuthorList authors={pub.authors} />
                    <p className="text-meta mt-1 italic text-accent">
                      {pub.venue}
                    </p>
                    <p className="prose-justify mt-2 text-muted-foreground">
                      {pub.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <section className="mt-14">
        <h2 className="pb-2 font-serif text-sm uppercase tracking-[0.14em] text-muted-foreground">
          Patents
        </h2>
        <ol className="mt-6 space-y-8">
          {patents.map((p) => (
            <li key={p.title}>
              <h3 className="font-serif text-xl leading-snug text-foreground">{p.title}</h3>
              <AuthorList authors={p.authors} />
            </li>
          ))}
        </ol>
      </section>
    </PageLayout>
  );
}
