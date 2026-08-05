import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { formatPostDate, getPostBySlug } from "@/data/posts";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} — Abhijit Das` : "Blog — Abhijit Das";
    const description = post?.excerpt ?? "Research note.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: post ? `/blog/${post.slug}` : "/blog",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: post ? `/blog/${post.slug}` : "/blog",
        },
      ],
    };
  },
  component: PostDetail,
});

function PostDetail() {
  const { post } = Route.useLoaderData();
  const body = post.body?.filter(Boolean) ?? [];

  return (
    <main className="rise-in mx-auto w-full max-w-[48rem] px-6 py-12 sm:py-16">
      <p className="text-meta mb-8 text-muted-foreground">
        <Link
          to="/blog"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          ← Blog
        </Link>
      </p>

      <article>
        <header className="border-b border-border pb-6 text-center">
          <p className="text-label mb-3 text-muted-foreground">
            {formatPostDate(post.date)}
          </p>
          <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-meta mt-4 text-muted-foreground">Abhijit Das</p>
        </header>

        {post.image ? (
          <figure className="mt-8">
            <img
              src={post.image}
              alt={post.title}
              className="mx-auto max-h-[22rem] w-auto max-w-full border border-border object-contain"
            />
          </figure>
        ) : null}

        {body.length > 0 ? (
          <section className="mt-8 space-y-4 border-t border-border pt-6">
            {body.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="prose-justify text-foreground/90"
              >
                {para}
              </p>
            ))}
          </section>
        ) : null}
      </article>
    </main>
  );
}
