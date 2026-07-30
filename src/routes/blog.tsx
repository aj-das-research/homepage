import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { MediaThumb } from "@/components/MediaThumb";
import { posts } from "@/data/posts";

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

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function Blog() {
  return (
    <PageLayout
      title="Blog"
      intro="Occasional notes on research, methodology, and the engineering that makes models usable."
    >
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug} className="list-row flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">
            <MediaThumb src={post.image} alt={post.title} />
            <div>
              <p className="text-meta text-muted-foreground">{formatDate(post.date)}</p>
              <h2 className="mt-2 font-serif text-xl leading-snug text-foreground">{post.title}</h2>
              <p className="prose-justify mt-3 text-muted-foreground">{post.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
