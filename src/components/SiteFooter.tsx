import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href={profile.scholar}
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Abhijit Das
          </a>
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a className="nav-link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="nav-link" href={profile.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
          <a className="nav-link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="nav-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
