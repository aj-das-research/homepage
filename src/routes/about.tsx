import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { profile, education, experience, skills, awards } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact — Abhijit Das" },
      {
        name: "description",
        content:
          "Biography, education, experience, and contact details for Abhijit Das, machine learning researcher at MBZUAI and CTO of MedOS.",
      },
      { property: "og:title", content: "About & Contact — Abhijit Das" },
      {
        property: "og:description",
        content: "Background, roles, skills, and how to get in touch.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="ink-mark text-label text-accent">{children}</h2>
  );
}

function About() {
  return (
    <PageLayout title="About">
      <div className="space-y-3.5">
        {profile.longBio.map((para) => (
          <p key={para.slice(0, 32)} className="prose-justify text-muted-foreground">
            {para}
          </p>
        ))}
      </div>

      <section className="mt-10">
        <SectionHeading>Education</SectionHeading>
        <ul className="mt-5 space-y-6">
          {education.map((item) => (
            <li key={item.school}>
              <h3 className="font-serif text-xl text-foreground">
                {item.school}
              </h3>
              <p className="text-meta text-muted-foreground">
                {item.place} · {item.period}
              </p>
              <p className="mt-1 italic text-foreground">{item.degree}</p>
              {item.notes.length > 0 ? (
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <SectionHeading>Experience</SectionHeading>
        <ul className="mt-5 space-y-7">
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`}>
              <h3 className="font-serif text-xl text-foreground">{job.org}</h3>
              <p className="italic text-foreground">{job.role}</p>
              <p className="text-meta text-muted-foreground">
                {job.place} · {job.period}
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="pl-4 -indent-4">
                    — {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <SectionHeading>Skills</SectionHeading>
        <dl className="mt-5 space-y-3">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="font-semibold text-foreground">{group.label}</dt>
              <dd className="text-muted-foreground">{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <SectionHeading>Awards</SectionHeading>
        <ul className="mt-5 space-y-3">
          {awards.map((award) => (
            <li key={award.title}>
              <p className="text-foreground">{award.title}</p>
              <p className="text-muted-foreground">{award.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <SectionHeading>Contact</SectionHeading>
        <dl className="mt-5 space-y-2">
          <div className="flex gap-4">
            <dt className="w-28 shrink-0 text-muted-foreground">Email</dt>
            <dd>
              <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="w-28 shrink-0 text-muted-foreground">Phone</dt>
            <dd className="text-foreground">{profile.phone}</dd>
          </div>
          <div className="flex gap-4">
            <dt className="w-28 shrink-0 text-muted-foreground">Based in</dt>
            <dd className="text-foreground">{profile.location}</dd>
          </div>
          <div className="flex gap-4">
            <dt className="w-28 shrink-0 text-muted-foreground">Elsewhere</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-1">
              <a className="underline underline-offset-4" href={profile.scholar} target="_blank" rel="noreferrer">
                Google Scholar
              </a>
              <a className="underline underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="underline underline-offset-4" href={profile.cvUrl} target="_blank" rel="noreferrer">
                CV (PDF)
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </PageLayout>
  );
}
