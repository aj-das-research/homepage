import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PersonPhoto } from "@/components/MediaThumb";
import { PersonLinks } from "@/components/PersonLinks";
import { EndorsementCarousel } from "@/components/EndorsementCarousel";
import {
  collaborators,
  endorsements,
  supervisors,
  type Collaborator,
} from "@/data/collaborators";

export const Route = createFileRoute("/collaborators")({
  head: () => ({
    meta: [
      { title: "Collaborators — Abhijit Das" },
      {
        name: "description",
        content:
          "Researchers I work with across MBZUAI, Khalifa University, Northwestern, Monash, Aarhus, and the University of Bern.",
      },
      { property: "og:title", content: "Collaborators — Abhijit Das" },
      { property: "og:description", content: "The people behind the work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collaborators" },
    ],
    links: [{ rel: "canonical", href: "/collaborators" }],
  }),
  component: Collaborators,
});

function PersonGrid({ people }: { people: Collaborator[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
      {people.map((person) => (
        <li key={person.name} className="flex items-start gap-4">
          <PersonPhoto src={person.image} name={person.name} />
          <div>
            <h3 className="font-serif text-xl leading-snug text-foreground">
              {person.website ? (
                <a href={person.website} target="_blank" rel="noreferrer">
                  {person.name}
                </a>
              ) : (
                person.name
              )}
            </h3>
            <div className="text-meta mt-0.5 space-y-0.5 text-foreground">
              {person.roles.map((role) => (
                <p key={role.title}>
                  {role.href ? (
                    <a href={role.href} target="_blank" rel="noreferrer">
                      {role.title}
                    </a>
                  ) : (
                    role.title
                  )}
                </p>
              ))}
            </div>
            <p className="text-meta text-muted-foreground">{person.affiliation}</p>
            <PersonLinks
              website={person.website}
              scholar={person.scholar}
              linkedin={person.linkedin}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Collaborators() {
  return (
    <PageLayout
      title="Collaborators"
      intro="My supervisor, followed by amazing research collaborators."
    >
      <section>
        <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
          Supervisor
        </h2>
        <div className="mt-6">
          <PersonGrid people={supervisors} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
          Collaborators
        </h2>
        <div className="mt-6">
          <PersonGrid people={collaborators} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
          Endorsements
        </h2>
        <div className="mt-8">
          <EndorsementCarousel items={endorsements} />
        </div>
      </section>
    </PageLayout>
  );
}
