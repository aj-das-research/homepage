import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PersonPhoto } from "@/components/MediaThumb";
import { PersonLinks } from "@/components/PersonLinks";
import { EndorsementCarousel } from "@/components/EndorsementCarousel";
import {
  endorsements,
  mentors,
  peerCollaborators,
  supervisors,
  type Collaborator,
  type PeerCollaborator,
} from "@/data/collaborators";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — Abhijit Das" },
      {
        name: "description",
        content:
          "Research mentors and collaborators across MBZUAI, Khalifa University, Northwestern, Monash, Aarhus, and the University of Bern.",
      },
      { property: "og:title", content: "Mentors — Abhijit Das" },
      { property: "og:description", content: "The people behind the work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentors" },
    ],
    links: [{ rel: "canonical", href: "/mentors" }],
  }),
  component: MentorsPage,
});

function PersonGrid({
  people,
  photoSize = "md",
}: {
  people: Collaborator[];
  photoSize?: "md" | "lg";
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
      {people.map((person) => (
        <li key={person.name} className="flex items-start gap-4">
          <PersonPhoto src={person.image} name={person.name} size={photoSize} />
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
            <div className="text-meta mt-0.5 space-y-0 text-foreground leading-snug">
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
            <p className="text-meta leading-snug text-muted-foreground">{person.affiliation}</p>
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

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

/** Fill rows to max (e.g. 15 → 6/6/3), each row centered. */
function chunkTaperedRows<T>(items: T[], maxPerRow = 6): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += maxPerRow) {
    rows.push(items.slice(i, i + maxPerRow));
  }
  return rows;
}

function PeerCollaboratorCard({ person }: { person: PeerCollaborator }) {
  const { first, last } = splitName(person.name);
  const nameClass =
    "mt-1.5 flex flex-col items-center text-center font-serif text-xl leading-snug";
  const nameBody = (
    <>
      <span>{first}</span>
      {last ? <span>{last}</span> : null}
    </>
  );
  return (
    <li className="flex w-28 flex-col items-center sm:w-32">
      <PersonPhoto src={person.image} name={person.name} size="md" rounded />
      {person.href ? (
        <a
          href={person.href}
          target="_blank"
          rel="noreferrer"
          className={nameClass}
        >
          {nameBody}
        </a>
      ) : (
        <span className={`${nameClass} text-foreground`}>{nameBody}</span>
      )}
    </li>
  );
}

function PeerCollaboratorGrid({ people }: { people: PeerCollaborator[] }) {
  const rows = chunkTaperedRows(people, 6);
  return (
    <div className="flex flex-col items-center gap-y-6">
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex} className="flex flex-wrap justify-center gap-x-5">
          {row.map((person) => (
            <PeerCollaboratorCard key={person.name} person={person} />
          ))}
        </ul>
      ))}
    </div>
  );
}

function MentorsPage() {
  return (
    <PageLayout>
      <section>
        <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
          Supervisor
        </h2>
        <div className="mt-5">
          <PersonGrid people={supervisors} photoSize="lg" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
          Mentors
        </h2>
        <div className="mt-5">
          <PersonGrid people={mentors} />
        </div>
      </section>

      {peerCollaborators.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
            Collaborators
          </h2>
          <div className="mt-5">
            <PeerCollaboratorGrid people={peerCollaborators} />
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-serif text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
          Endorsements
        </h2>
        <div className="mt-5">
          <EndorsementCarousel items={endorsements} />
        </div>
      </section>
    </PageLayout>
  );
}
