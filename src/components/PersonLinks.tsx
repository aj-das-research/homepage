import { Globe, GraduationCap, Linkedin } from "lucide-react";

type PersonLinksProps = {
  website?: string;
  scholar?: string;
  linkedin?: string;
};

const iconClass =
  "inline-flex h-8 w-8 items-center justify-center";

export function PersonLinks({ website, scholar, linkedin }: PersonLinksProps) {
  if (!website && !scholar && !linkedin) return null;

  return (
    <div className="mt-2 flex items-center gap-1.5">
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          aria-label="Website"
          className={iconClass}
        >
          <Globe size={17} strokeWidth={1.75} />
        </a>
      ) : null}
      {scholar ? (
        <a
          href={scholar}
          target="_blank"
          rel="noreferrer"
          aria-label="Google Scholar"
          className={iconClass}
        >
          <GraduationCap size={17} strokeWidth={1.75} />
        </a>
      ) : null}
      {linkedin ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={iconClass}
        >
          <Linkedin size={17} strokeWidth={1.75} />
        </a>
      ) : null}
    </div>
  );
}
