import imranPhoto from "@/assets/media/collaborators/imran.png";
import dwarikanathPhoto from "@/assets/media/collaborators/dwarikanath.png";
import behzadPhoto from "@/assets/media/collaborators/behzad.png";
import zongyuanPhoto from "@/assets/media/collaborators/zongyuange.png";
import ulasPhoto from "@/assets/media/collaborators/ulas.png";
import marcosPhoto from "@/assets/media/collaborators/marcos.png";
import mauricioPhoto from "@/assets/media/collaborators/mauricioreyes.png";

export type CollaboratorRole = {
  title: string;
  /** Link for this role line (usually a lab / group page). */
  href?: string;
};

export type Collaborator = {
  name: string;
  roles: CollaboratorRole[];
  affiliation: string;
  /** Personal homepage. */
  website?: string;
  scholar?: string;
  linkedin?: string;
  /** Optional photo or GIF URL. Leave empty to show an initials block. */
  image?: string;
};

export const supervisors: Collaborator[] = [
  {
    name: "Imran Razzak",
    roles: [
      { title: "Associate Professor of Computational Biology" },
      { title: "Director, GenMI Lab", href: "https://www.genmi.info/" },
    ],
    affiliation: "MBZUAI, UAE",
    website: "https://imranrazzak.github.io/",
    scholar: "https://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/imran-razzak-88a88b17/",
    image: imranPhoto,
  },
];

export const collaborators: Collaborator[] = [
  {
    name: "Dwarikanath Mahapatra",
    roles: [{ title: "Assistant Professor of Computer Science" }],
    affiliation: "Khalifa University, UAE",
    website: "https://www.ku.ac.ae/college-people/dwarikanath-mahapatra/",
    scholar: "https://scholar.google.com/citations?user=j5K7HPoAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/dwarikanath-mahapatra-10897635",
    image: dwarikanathPhoto,
  },
  {
    name: "Behzad Bozorgtabar",
    roles: [
      { title: "Associate Professor of AI & Computer Vision" },
      {
        title: "Director, A3 Lab",
        href: "https://ece.au.dk/en/research/key-areas-in-research-and-development/signal-processing-and-machine-learning/translate-to-english-research-groups-alt/adaptive-agentic-ai-a3-lab",
      },
    ],
    affiliation: "Aarhus University, Denmark",
    website: "https://behzadbozorgtabar.com/",
    scholar: "https://scholar.google.com/citations?user=kxAk6AoAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/behzad-bozorgtabar-72838560",
    image: behzadPhoto,
  },
  {
    name: "Zongyuan Ge",
    roles: [
      { title: "Associate Professor" },
      { title: "Director, AIM for Health Lab", href: "https://www.monash.edu/it/aimh-lab" },
    ],
    affiliation: "Monash University, Australia",
    website: "https://zongyuange.github.io/",
    scholar: "https://scholar.google.com/citations?user=Q0gUrcIAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/zongyuange",
    image: zongyuanPhoto,
  },
  {
    name: "Ulas Bagci",
    roles: [
      { title: "Associate Professor of Radiology" },
      {
        title: "Director, Machine and Hybrid Intelligence Lab",
        href: "https://bagcilab.com/",
      },
    ],
    affiliation: "Northwestern University, USA",
    website: "https://bagcilab.com/",
    scholar: "https://scholar.google.com/citations?user=9LUdPM4AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/ulasbagci",
    image: ulasPhoto,
  },
  {
    name: "Marcos Matabuena",
    roles: [{ title: "Assistant Professor of Epidemiology" }],
    affiliation: "MBZUAI, UAE",
    website: "https://mbzuai.ac.ae/study/faculty/marcos-matabuena/",
    scholar: "https://scholar.google.com/citations?user=qaEtbuEAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/marcos-matabuena-268366126",
    image: marcosPhoto,
  },
  {
    name: "Mauricio Reyes",
    roles: [
      { title: "Associate Professor" },
      {
        title: "Head, Medical Image Analysis Group",
        href: "https://www.artorg.unibe.ch/research/mia/index_eng.html",
      },
    ],
    affiliation: "University of Bern, Switzerland",
    website: "https://mauricioreyes.me/",
    scholar: "https://scholar.google.com/citations?user=Bd_3KGcAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/mauricioreyes",
    image: mauricioPhoto,
  },
];

export type Endorsement = {
  quote: string;
  name: string;
  /** Short title, e.g. Associate Professor. */
  role: string;
  /** University, Country. */
  affiliation: string;
  /** University homepage. */
  affiliationHref?: string;
  /** Personal homepage / profile link for the endorser. */
  href?: string;
};

export const endorsements: Endorsement[] = [
  {
    quote:
      "Abhijit combines research depth with the discipline to turn ideas into reliable systems. He is a strong contributor to trustworthy medical AI and a pleasure to supervise.",
    name: "Imran Razzak",
    role: "Associate Professor",
    affiliation: "MBZUAI, UAE",
    affiliationHref: "https://mbzuai.ac.ae/",
    href: "https://imranrazzak.github.io/",
  },
  {
    quote:
      "Working with Abhijit on medical vision and multimodal learning has been excellent — careful reasoning, strong engineering judgment, and a clear sense of what matters in practice.",
    name: "Behzad Bozorgtabar",
    role: "Associate Professor",
    affiliation: "Aarhus University, Denmark",
    affiliationHref: "https://www.au.dk/",
    href: "https://behzadbozorgtabar.com/",
  },
  {
    quote:
      "Abhijit brings clarity and rigor to collaborative research. He thinks carefully about uncertainty and builds work that is both scientifically sound and clinically relevant.",
    name: "Dwarikanath Mahapatra",
    role: "Assistant Professor",
    affiliation: "Khalifa University, UAE",
    affiliationHref: "https://www.ku.ac.ae/",
    href: "https://www.ku.ac.ae/college-people/dwarikanath-mahapatra/",
  },
];
