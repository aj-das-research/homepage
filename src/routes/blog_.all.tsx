import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { MediaThumb } from "@/components/MediaThumb";
import { ImageLightbox } from "@/components/ImageLightbox";
import { formatPostDate, posts } from "@/data/posts";

export const Route = createFileRoute("/blog_/all")({
  head: () => ({
    meta: [
      { title: "All Blogs — Abhijit Das" },
      {
        name: "description",
        content:
          "Full archive of notes on trustworthy medical AI, conformal prediction, hallucination in vision-language models, and shipping fast inference.",
      },
      { property: "og:title", content: "All Blogs — Abhijit Das" },
      {
        property: "og:description",
        content: "Complete list of short essays on machine learning research and engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog/all" },
    ],
    links: [{ rel: "canonical", href: "/blog/all" }],
  }),
  component: AllBlogs,
});

const postImages = posts.flatMap((post) =>
  post.image
    ? [{ src: post.image, alt: post.title, caption: post.title }]
    : [],
);

function AllBlogs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const indexBySrc = new Map(postImages.map((img, i) => [img.src, i]));

  return (
    <PageLayout
      title="All blogs"
      intro="Full archive of notes on research, methodology, and the engineering that makes models usable."
    >
      <p className="text-meta mb-6 text-muted-foreground">
        <Link
          to="/blog"
          className="text-accent transition-colors hover:text-foreground"
        >
          ← Back to featured
        </Link>
      </p>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="list-row flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:gap-5"
          >
            <MediaThumb
              src={post.image}
              alt={post.title}
              onOpen={
                post.image && indexBySrc.has(post.image)
                  ? () => setActiveIndex(indexBySrc.get(post.image!)!)
                  : undefined
              }
            />
            <div>
              <p className="text-meta text-muted-foreground">
                {formatPostDate(post.date)}
              </p>
              <h2 className="mt-1 font-serif text-xl text-foreground">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="prose-justify mt-1.5 text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <ImageLightbox
        images={postImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </PageLayout>
  );
}
