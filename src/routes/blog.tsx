import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ImageLightbox } from "@/components/ImageLightbox";
import { formatPostDate, posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Abhijit Das" },
      {
        name: "description",
        content:
          "Notes on trustworthy medical AI, conformal prediction, hallucination in vision-language models, and shipping fast inference.",
      },
      { property: "og:title", content: "Blog — Abhijit Das" },
      {
        property: "og:description",
        content: "Short essays on machine learning research and the engineering behind it.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const FEATURED_COUNT = 4;

function Blog() {
  const featured = posts.slice(0, FEATURED_COUNT);
  const featuredImages = featured.flatMap((post) =>
    post.image
      ? [{ src: post.image, alt: post.title, caption: post.title }]
      : [],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const indexBySrc = new Map(featuredImages.map((img, i) => [img.src, i]));

  return (
    <PageLayout
      title="Blog"
      intro="Occasional notes on research, methodology, and the engineering that makes models usable."
    >
      <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        {featured.map((post) => {
          const canOpen =
            Boolean(post.image) && indexBySrc.has(post.image!);
          const openIndex = post.image
            ? indexBySrc.get(post.image)
            : undefined;

          return (
            <li key={post.slug} className="min-w-0">
              {post.image ? (
                <button
                  type="button"
                  onClick={canOpen ? () => setActiveIndex(openIndex!) : undefined}
                  aria-label={`View ${post.title}`}
                  className={`media-hover mb-3 block w-full border-0 bg-transparent p-0 text-left ${
                    canOpen ? "cursor-zoom-in" : ""
                  }`}
                >
                  <figure className="aspect-video overflow-hidden border border-border bg-secondary">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                </button>
              ) : null}
              <p className="text-meta text-muted-foreground">
                {formatPostDate(post.date)}
              </p>
              <h2 className="mt-1 font-serif text-xl leading-snug text-foreground">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="prose-justify mt-1.5 text-[16px] leading-snug text-muted-foreground">
                {post.excerpt}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 text-[15px]">
        <Link
          to="/blog/all"
          className="text-accent transition-colors hover:text-foreground"
        >
          See all blogs →
        </Link>
      </p>

      <ImageLightbox
        images={featuredImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </PageLayout>
  );
}
