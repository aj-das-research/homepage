import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/mentors", label: "Collaborators" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3.5 sm:flex-row sm:items-baseline sm:justify-between">
        <Link
          to="/"
          className="nav-link font-serif text-xl font-bold"
        >
          Abhijit Das
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {nav.slice(1).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link"
                  activeProps={{ className: "font-bold" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
