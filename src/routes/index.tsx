import { createFileRoute } from "@tanstack/react-router";
import { Mail, GraduationCap, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { updates } from "@/data/updates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhijit Das — Machine Learning Researcher, MBZUAI" },
      {
        name: "description",
        content:
          "Abhijit Das is a PhD student at MBZUAI working on trustworthy medical vision-language models, conformal prediction, and efficient deep learning.",
      },
      { property: "og:title", content: "Abhijit Das — Machine Learning Researcher, MBZUAI" },
      {
        property: "og:description",
        content:
          "Research on faithful multimodal reasoning, uncertainty and risk control, and real-time inference for clinical AI.",
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

function renderBio(para: string) {
  if (!para.includes("Access my CV") && !para.includes(profile.email)) return para;
  const parts = para.split(/(Access my CV|\S+@\S+?\.ae)/g);
  return parts.map((part, i) => {
    if (part === "Access my CV") {
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
      <section className="rise-in mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
        <h1 className="font-serif text-3xl text-foreground sm:text-4xl">About</h1>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          {/* Left column: photo + designations + icon links */}
          <div className="space-y-6">
            <div className="media-hover aspect-[3/4] w-full max-w-[260px] overflow-hidden border border-border bg-card">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                width={780}
                height={1040}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>

            <div className="space-y-1">
              <p className="text-foreground">
                PhD in Machine Learning,{" "}
                <a href={profile.mbzuaiUrl} target="_blank" rel="noreferrer">
                  MBZUAI
                </a>
              </p>
              <p className="text-foreground">
                CTO,{" "}
                <a href={profile.medosUrl} target="_blank" rel="noreferrer">
                  MedOS Limited
                </a>
              </p>
              <p className="text-muted-foreground">{profile.location}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {iconLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: about paragraph */}
          <div className="space-y-5">
            {profile.longBio.map((para) => (
              <p key={para.slice(0, 32)} className="prose-justify text-muted-foreground">
                {renderBio(para)}
              </p>
            ))}
          </div>
        </div>

        <figure className="mt-16 border-t border-border pt-10">
          <blockquote className="relative mx-auto max-w-2xl px-6 text-center">
            <span
              aria-hidden
              className="mb-2 block font-serif text-5xl leading-none text-accent"
            >
              “
            </span>
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              {profile.quote.text}
            </p>
            <figcaption className="mt-4 text-[15px] tracking-[0.04em] text-muted-foreground">
              — {profile.quote.author}
            </figcaption>
          </blockquote>
        </figure>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-serif text-xl text-foreground">Updates</h2>
          <ul className="mt-6 space-y-4">
            {latestUpdates.map((item) => (
              <li key={item.date + item.text} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <time
                  dateTime={item.date}
                  className="shrink-0 text-[15px] uppercase tracking-[0.08em] text-accent sm:w-40"
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
