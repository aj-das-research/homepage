import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ImageLightbox } from "@/components/ImageLightbox";
import { projects, projectsByStatus, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abhijit Das" },
      {
        name: "description",
        content:
          "Active and closed research projects: scientific foundation models, autonomous discovery, AI for AI, and risk mitigation in radiology.",
      },
      { property: "og:title", content: "Projects — Abhijit Das" },
      {
        property: "og:description",
        content:
          "Research programs in scientific AI, autonomous discovery, and trustworthy clinical systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projectImages = projects.flatMap((project) =>
  project.image
    ? [{ src: project.image, alt: project.title, caption: project.title }]
    : [],
);

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b border-border pb-2 font-serif text-sm uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </h2>
  );
}

function ProjectList({
  items,
  indexBySrc,
  onOpen,
}: {
  items: Project[];
  indexBySrc: Map<string, number>;
  onOpen: (index: number) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
      {items.map((project) => {
        const canOpen =
          Boolean(project.image) && indexBySrc.has(project.image!);
        const openIndex = project.image
          ? indexBySrc.get(project.image)
          : undefined;

        return (
          <li key={project.slug} className="min-w-0">
            {project.image ? (
              <button
                type="button"
                onClick={canOpen ? () => onOpen(openIndex!) : undefined}
                aria-label={`View ${project.title}`}
                className={`media-hover mb-3 block w-full border-0 bg-transparent p-0 text-left ${
                  canOpen ? "cursor-zoom-in" : ""
                }`}
              >
                <figure className="aspect-video overflow-hidden border border-border bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </button>
            ) : null}
            <h3 className="font-serif text-xl leading-snug text-foreground">
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="transition-colors hover:text-accent"
              >
                {project.title}
              </Link>
            </h3>
            <p className="prose-justify mt-2 text-[16px] leading-snug text-muted-foreground">
              {project.summary}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const indexBySrc = new Map(projectImages.map((img, i) => [img.src, i]));
  const active = projectsByStatus("active");
  const closed = projectsByStatus("closed");

  return (
    <PageLayout
      title="Projects"
      intro="Research programs I lead or contribute to."
    >
      <div className="space-y-10">
        <section className="space-y-5">
          <SectionHeading>Active Projects</SectionHeading>
          <ProjectList
            items={active}
            indexBySrc={indexBySrc}
            onOpen={setActiveIndex}
          />
        </section>

        <section className="space-y-5">
          <SectionHeading>Closed Projects</SectionHeading>
          <ProjectList
            items={closed}
            indexBySrc={indexBySrc}
            onOpen={setActiveIndex}
          />
        </section>
      </div>

      <ImageLightbox
        images={projectImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </PageLayout>
  );
}
