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
      intro={
        <>
          For the published papers and preprints please visit my{" "}
          <a href={profile.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
          .
        </>
      }
    >
      {years.map((year) => {
        const items = publications.filter((p) => p.year === year);
        if (items.length === 0) return null;
        return (
          <section key={year} className="mt-10">
            <h2 className="pb-2 font-serif text-sm uppercase tracking-[0.14em] text-muted-foreground">
              {year}
            </h2>
            <ol className="mt-5 space-y-6">
              {items.map((pub) => (
                <li key={pub.title} className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                  <MediaThumb
                    src={pub.image}
                    alt={pub.title}
                    caption={pub.venue}
                    captionHref={pub.href}
                  />
                  <div className="min-w-0">
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
                    <p className="prose-justify mt-1.5 text-[16px] leading-snug text-muted-foreground">
                      {pub.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <section className="mt-10">
        <h2 className="pb-2 font-serif text-sm uppercase tracking-[0.14em] text-muted-foreground">
          Patents
        </h2>
        <ol className="mt-5 space-y-5">
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
