export type Update = {
  date: string; // ISO date, e.g. "2026-07-01"
  text: string;
  /** If set with linkLabel, only that phrase is linked; otherwise the full text is linked. */
  href?: string;
  linkLabel?: string;
};

// Newest first. Only the 5 most recent are shown on the landing page.
export const updates: Update[] = [
  {
    date: "2026-08-18",
    text: "Joining MBZUAI for a PhD in Machine Learning.",
    href: "https://mbzuai.ac.ae/",
    linkLabel: "MBZUAI",
  },

  {
    date: "2026-07-15",
    text: "Four papers accepted at MICCAI 2026 on OOD adaptation, hallucination mitigation in VLMs, medical image re-identification, and active visual prompting for foundation models.",
    href: "https://conferences.miccai.org/2026/en/",
    linkLabel: "MICCAI 2026",
  },
  {
    date: "2026-06-20",
    text: "Paper accepted at ECCV 2026 on hallucination mitigation for medical VQA.",
    href: "https://eccv.ecva.net/",
    linkLabel: "ECCV 2026",
  },
  {
    date: "2026-01-12",
    text: "Joined Prof. Imran Razzak's lab as Research Engineer I.",
    href: "https://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en",
    linkLabel: "Imran Razzak",
  },
];


