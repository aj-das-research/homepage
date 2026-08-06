import { createFileRoute } from "@tanstack/react-router";
import { Mail, GraduationCap, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { updates } from "@/data/updates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhijit Das — PhD in ML, MBZUAI" },
      {
        name: "description",
        content:
          "Abhijit Das is a PhD student at MBZUAI working on scientific foundation models, autonomous discovery for personalized medicine, AI for AI, and scalable inference.",
      },
      { property: "og:title", content: "Abhijit Das — PhD in ML, MBZUAI" },
      {
        property: "og:description",
        content:
          "Research on scientific foundation models and world models, autonomous discovery for personalized medicine, alignment and interpretability, and AI scalability.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: profile.photoUrl },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          email: profile.email,
          image: profile.photoUrl,
          jobTitle: "PhD Student in Machine Learning",
          affiliation: {
            "@type": "Organization",
            name: "Mohamed bin Zayed University of Artificial Intelligence",
          },
          sameAs: [profile.github, profile.linkedin, profile.scholar],
        }),
      },
    ],
  }),
  component: Home,
});

const iconLinks = [
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  { href: profile.scholar, label: "Google Scholar", icon: GraduationCap },
  { href: profile.github, label: "GitHub", icon: Github },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.cvUrl, label: "Curriculum Vitae (PDF)", icon: FileText },
];

const latestUpdates = [...updates]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 5);

function formatUpdate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function renderLinkedText(text: string) {
  const parts = text.split(
    /(open to internships and visiting researcher positions|available here|\S+@\S+?\.ae)/g,
  );
  return parts.map((part, i) => {
    if (part === "open to internships and visiting researcher positions") {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part}
        </strong>
      );
    }
    if (part === "available here") {
      return (
        <a key={i} href={profile.cvUrl} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    }
    if (part === profile.email) {
      return (
        <a key={i} href={`mailto:${profile.email}`}>
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function renderUpdateText(text: string, href?: string, linkLabel?: string) {
  if (!href) return text;
  if (!linkLabel || !text.includes(linkLabel)) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    );
  }
  const parts = text.split(linkLabel);
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a key={i} href={href} target="_blank" rel="noreferrer">
            {linkLabel}
          </a>,
        ]
      : [part],
  );
}

function Home() {
  return (
    <main>
      <section className="rise-in mx-auto w-full max-w-6xl px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-12">
          {/* Left column: photo + designations + icon links */}
          <div className="space-y-4">
            <div className="media-hover aspect-[3/4] w-full max-w-[240px] overflow-hidden border border-border bg-card">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                width={780}
                height={1040}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>

            <div className="space-y-0.5">
              <p className="text-foreground">
                <span className="font-bold">PhD in Machine Learning</span>,{" "}
                <a href={profile.mbzuaiUrl} target="_blank" rel="noreferrer">
                  MBZUAI, UAE
                </a>
              </p>
              <p className="text-foreground">
                <span className="font-bold">CTO</span>,{" "}
                <a href={profile.medosUrl} target="_blank" rel="noreferrer">
                  MedOS Limited
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {iconLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:-translate-y-0.5 hover:border-accent"
                >
                  <Icon size={17} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: three compact bio sections */}
          <div className="space-y-3">
            <section>
              <h2 className="m-0 font-serif text-lg font-bold leading-none text-accent sm:text-xl">
                About Me
              </h2>
              <div className="mt-1 space-y-1.5">
                {profile.homeBio.about.map((para) => (
                  <p key={para.slice(0, 32)} className="prose-justify leading-snug text-foreground/90">
                    {renderLinkedText(para)}
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="m-0 font-serif text-lg font-bold leading-none text-accent sm:text-xl">
                Research Interests
              </h2>
              <ol className="mt-1 list-decimal space-y-0.5 pl-5 leading-snug text-foreground/90 marker:text-foreground">
                {profile.homeBio.researchInterests.map((item) => (
                  <li key={item.title} className="pl-1">
                    <span className="font-semibold text-foreground">
                      {item.title}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      ({item.detail}.)
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="m-0 font-serif text-lg font-bold leading-none text-accent sm:text-xl">
                What I See AI Do in Medicine in the Next 5 Years
              </h2>
              <p className="prose-justify mt-1 leading-snug text-foreground/90">
                {profile.homeBio.medicineVision}
              </p>
            </section>
          </div>
        </div>

        <figure className="mt-10 pt-2">
          <blockquote className="relative mx-auto max-w-2xl text-center">
            <span
              aria-hidden
              className="mb-1 block font-serif text-5xl leading-none text-accent"
            >
              “
            </span>
            <p className="font-serif text-xl font-bold text-foreground">
              {profile.quote.text}
            </p>
            <figcaption className="text-meta mt-3 font-semibold text-accent">
              — {profile.quote.author}
            </figcaption>
          </blockquote>
        </figure>

        <section className="mt-10">
          <h2 className="ink-mark font-serif text-xl font-bold text-foreground">Updates</h2>
          <ul className="mt-4 space-y-2.5">
            {latestUpdates.map((item) => (
              <li
                key={item.date + item.text}
                className="flex flex-col gap-0.5 sm:flex-row sm:gap-6"
              >
                <time
                  dateTime={item.date}
                  className="text-label shrink-0 text-accent sm:w-40"
                >
                  {formatUpdate(item.date)}
                </time>
                <p className="text-muted-foreground">
                  {renderUpdateText(item.text, item.href, item.linkLabel)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
