import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { MediaThumb } from "@/components/MediaThumb";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Ongoing Projects — Abhijit Das" },
      {
        name: "description",
        content:
          "Active research threads: hallucination control in medical VLMs, conformal prediction, annotation-efficient learning, interpretability, and multi-omic discovery.",
      },
      { property: "og:title", content: "Ongoing Projects — Abhijit Das" },
      {
        property: "og:description",
        content: "Current research directions in trustworthy clinical AI and agent safety.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageLayout
      title="Ongoing projects"
      intro="The research areas and systems I am actively working on."
    >
      <ul className="space-y-12">
        {projects.map((project) => (
          <li key={project.title} className="list-row flex flex-col gap-5 sm:flex-row">
            <MediaThumb src={project.image} alt={project.title} />
            <div>
              <h2 className="font-serif text-xl leading-snug text-foreground">{project.title}</h2>
              <p className="text-meta mt-1 uppercase tracking-[0.1em] text-accent">
                {project.works}
              </p>
              <p className="prose-justify mt-4 text-muted-foreground">{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
