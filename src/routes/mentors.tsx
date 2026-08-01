import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
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

/** Fill rows to max (e.g. 15 → 6/6/3), each row centered. */
function chunkTaperedRows<T>(items: T[], maxPerRow = 6): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += maxPerRow) {
    rows.push(items.slice(i, i + maxPerRow));
  }
  return rows;
}

function PeerCollaboratorCard({ person }: { person: PeerCollaborator }) {
  const labelClass =
    "mt-1.5 text-center font-serif text-[15px] leading-snug";
  return (
    <li className="flex w-32 flex-col items-center sm:w-40">
      <div className="relative">
        <PersonPhoto src={person.image} name={person.name} size="md" rounded />
        {person.scholar ? (
          <a
            href={person.scholar}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} on Google Scholar`}
            className="absolute -right-1 -top-1 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:border-accent hover:text-accent"
          >
            <GraduationCap size={14} strokeWidth={2} />
          </a>
        ) : null}
      </div>
      {person.href ? (
        <a
          href={person.href}
          target="_blank"
          rel="noreferrer"
          className={labelClass}
        >
          {person.name}
        </a>
      ) : (
        <span className={`${labelClass} text-foreground`}>{person.name}</span>
      )}
      {person.institute ? (
        <p className="mt-0.5 whitespace-nowrap text-center font-serif text-[12px] leading-snug text-muted-foreground">
          {person.institute}
        </p>
      ) : null}
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
      <figure className="mb-10 border-b border-border pb-8">
        <blockquote className="relative mx-auto max-w-5xl text-left sm:text-justify">
          <span
            aria-hidden
            className="float-left mr-2 font-serif text-4xl leading-none text-accent sm:text-5xl"
          >
            “
          </span>
          <p className="font-serif text-lg leading-snug text-foreground sm:text-xl">
            My journey so far is dedicated to those who shaped my path.{" "}
            <a
              href="https://www.linkedin.com/in/debayan-ganguly-2442931b/"
              target="_blank"
              rel="noreferrer"
            >
              Debayan Ganguly
            </a>{" "}
            first pushed me toward AI;{" "}
            <a
              href="https://www.linkedin.com/in/dwarikanath-mahapatra-10897635"
              target="_blank"
              rel="noreferrer"
            >
              Dwarikanath Mahapatra
            </a>{" "}
            and my supervisor,{" "}
            <a
              href="https://www.linkedin.com/in/imran-razzak-88a88b17/"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Imran Razzak
            </a>
            , have given me immense support — I remain always grateful. And to
            my parents: thank you for the values you gave me. I hope to make you
            all proud through my work in health sciences and AI.
          </p>
        </blockquote>
      </figure>

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
