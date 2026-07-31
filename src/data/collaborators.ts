import imranPhoto from "@/assets/media/collaborators/imran.png";
import dwarikanathPhoto from "@/assets/media/collaborators/dwarikanath.png";
import behzadPhoto from "@/assets/media/collaborators/behzad.png";
import zongyuanPhoto from "@/assets/media/collaborators/zongyuange.png";
import ulasPhoto from "@/assets/media/collaborators/ulas.png";
import marcosPhoto from "@/assets/media/collaborators/marcos.png";
import mauricioPhoto from "@/assets/media/collaborators/mauricioreyes.png";
import imranRecommendation from "@/assets/media/recommendations/imran.png";
import behzadRecommendation from "@/assets/media/recommendations/behzad.png";
import rafiqPhoto from "@/assets/media/student_collaborators/rafiq.png";
import cristinaPhoto from "@/assets/media/student_collaborators/cristina.png";
import ebadPhoto from "@/assets/media/student_collaborators/ebad.png";
import adinathPhoto from "@/assets/media/student_collaborators/adinath.png";
import amnaPhoto from "@/assets/media/student_collaborators/amna.png";
import yifanPhoto from "@/assets/media/student_collaborators/yifan.png";
import xiangPhoto from "@/assets/media/collaborators/xiang.png";
import utathyaPhoto from "@/assets/media/student_collaborators/utathya.png";
import shreyaPhoto from "@/assets/media/student_collaborators/shreya.png";
import vandanPhoto from "@/assets/media/student_collaborators/vandan.png";
import sayantanPhoto from "@/assets/media/student_collaborators/sayantan.png";
import joyPhoto from "@/assets/media/student_collaborators/joy.png";
import debayanPhoto from "@/assets/media/student_collaborators/debayan.png";
import shadabPhoto from "@/assets/media/student_collaborators/shadab.png";
import rishabhPhoto from "@/assets/media/student_collaborators/rishabh.png";
import debeshPhoto from "@/assets/media/student_collaborators/debesh.png";

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
      { title: "CEO, MedOS Limited", href: "https://www.medos.tech" },
    ],
    affiliation: "MBZUAI, UAE",
    website: "https://imranrazzak.github.io/",
    scholar: "https://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/imran-razzak-88a88b17/",
    image: imranPhoto,
  },
];

export const mentors: Collaborator[] = [
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

/** Students / peers shown as a compact photo grid. */
export type PeerCollaborator = {
  name: string;
  image?: string;
  href?: string;
};

/**
 * Drop small headshots under src/assets/media/student_collaborators/ and add entries here.
 */
export const peerCollaborators: PeerCollaborator[] = [
  {
    name: "Adinath Dukre",
    image: adinathPhoto,
    href: "https://www.linkedin.com/in/adinath-dukre-6a3261243/",
  },
  {
    name: "Amna Bano",
    image: amnaPhoto,
    href: "https://www.linkedin.com/in/amna-bano-0379523a2/",
  },
  {
    name: "Cristina Correa",
    image: cristinaPhoto,
    href: "https://www.linkedin.com/in/cristina-correa-segade/",
  },
  {
    name: "Debayan Ganguly",
    image: debayanPhoto,
    href: "https://www.linkedin.com/in/debayan-ganguly-2442931b/",
  },
  {
    name: "Debesh Jha",
    image: debeshPhoto,
    href: "https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/",
  },
  {
    name: "Ebad Shabbir",
    image: ebadPhoto,
    href: "https://www.linkedin.com/in/ebad-shabbir-b9b34a282/",
  },
  {
    name: "Joy Dhar",
    image: joyPhoto,
    href: "https://www.linkedin.com/in/joy-dhar-42930a248/",
  },
  {
    name: "Rafiq Ali",
    image: rafiqPhoto,
    href: "https://www.linkedin.com/in/rafiq-ali-a2236a299/",
  },
  {
    name: "Rishabh Lalla",
    image: rishabhPhoto,
    href: "https://www.linkedin.com/in/rishabh-lalla/",
  },
  {
    name: "Sayantan Dutta",
    image: sayantanPhoto,
    href: "https://www.linkedin.com/in/sayantan-dutta/",
  },
  {
    name: "Shadab Khan",
    image: shadabPhoto,
    href: "https://www.linkedin.com/in/skhanshadab/",
  },
  {
    name: "Shreya Kumari",
    image: shreyaPhoto,
    href: "https://www.linkedin.com/in/shreyakumari0301/",
  },
  {
    name: "Utathya Aich",
    image: utathyaPhoto,
    href: "https://www.linkedin.com/in/utathyaaich/",
  },
  {
    name: "Vandan Gorade",
    image: vandanPhoto,
    href: "https://www.linkedin.com/in/vandan-g-b3851b168/",
  },
  {
    name: "Xiang Meng",
    image: xiangPhoto,
    href: "https://www.linkedin.com/in/xiang-meng-stat/",
  },
  {
    name: "Yifan Lu",
    image: yifanPhoto,
    href: "https://www.linkedin.com/in/yifan-lu-bb5347335/",
  },
];

export type Endorsement = {
  name: string;
  /** LinkedIn recommendation screenshot. */
  image: string;
  /** Optional link (e.g. LinkedIn / personal site). */
  href?: string;
};

export const endorsements: Endorsement[] = [
  {
    name: "Imran Razzak",
    image: imranRecommendation,
    href: "https://www.linkedin.com/in/imran-razzak-88a88b17/",
  },
  {
    name: "Behzad Bozorgtabar",
    image: behzadRecommendation,
    href: "https://www.linkedin.com/in/behzad-bozorgtabar-72838560",
  },
];
