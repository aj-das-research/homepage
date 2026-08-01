import faithfulReasoning from "@/assets/media/faithful-reasoning.jpg";
import uncertainty from "@/assets/media/uncertainty.jpg";
import interpretability from "@/assets/media/interpretability.jpg";
import phenotype from "@/assets/media/phenotype.jpg";

export type ProjectStatus = "active" | "closed";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  /** Short line under the title on the listing page. */
  summary: string;
  /** Hero image on the listing and detail pages. */
  image?: string;
  /**
   * Long-form abstract / body for the detail page.
   * Leave empty until you are ready to write it.
   */
  abstract?: string[];
};

export const projects: Project[] = [
  {
    slug: "scientific-foundation-models",
    title: "Scientific Foundation Models",
    status: "active",
    summary:
      "Building foundation models that encode scientific structure — multimodal, trustworthy, and usable across discovery workflows.",
    image: faithfulReasoning,
    abstract: [],
  },
  {
    slug: "autonomous-scientific-discovery",
    title: "Autonomous Scientific Discovery",
    status: "active",
    summary:
      "Agentic systems that propose, test, and refine scientific hypotheses with experts in the loop.",
    image: phenotype,
    abstract: [],
  },
  {
    slug: "ai-for-ai",
    title: "AI For AI",
    status: "active",
    summary:
      "Using AI to understand, audit, and stabilize AI — interpretability, agent behavior, and safety under self-modification.",
    image: interpretability,
    abstract: [],
  },
  {
    slug: "ai-for-risk-mitigation-in-radiology-scans",
    title: "AI for Risk Mitigation in Radiology Scans",
    status: "closed",
    summary:
      "Risk-aware clinical AI for radiology: uncertainty, abstention, and hallucination control at deployment time.",
    image: uncertainty,
    abstract: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((project) => project.status === status);
}
