import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/data/projects";

export const Route = createFileRoute("/projects_/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.title} — Abhijit Das`
      : "Project — Abhijit Das";
    const description = project?.summary ?? "Research project details.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: project ? `/projects/${project.slug}` : "/projects",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: project ? `/projects/${project.slug}` : "/projects",
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const statusLabel = project.status === "active" ? "Active" : "Closed";
  const abstract = project.abstract?.filter(Boolean) ?? [];

  return (
    <main className="rise-in mx-auto w-full max-w-[48rem] px-6 py-12 sm:py-16">
      <p className="mb-8 text-[13px] text-muted-foreground">
        <Link
          to="/projects"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          ← Projects
        </Link>
      </p>

      <article>
        <header className="border-b border-border pb-6 text-center">
          <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
            {statusLabel} project
          </p>
          <h1 className="font-serif text-[1.75rem] leading-snug tracking-tight text-foreground sm:text-[2.1rem]">
            {project.title}
          </h1>
          <p className="mt-4 font-serif text-[15px] text-muted-foreground">
            Abhijit Das
          </p>
        </header>

        {project.image ? (
          <figure className="mt-8">
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto max-h-[22rem] w-auto max-w-full border border-border object-contain"
            />
          </figure>
        ) : null}

        {abstract.length > 0 ? (
          <section className="mt-8 space-y-4 border-t border-border pt-6">
            <h2 className="font-serif text-[15px] font-semibold tracking-wide text-foreground">
              Abstract
            </h2>
            {abstract.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="prose-justify font-serif text-[16px] leading-relaxed text-foreground/90"
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
