import faithfulReasoning from "@/assets/media/faithful-reasoning.jpg";
import uncertainty from "@/assets/media/uncertainty.jpg";
import annotationEfficient from "@/assets/media/annotation-efficient.jpg";
import interpretability from "@/assets/media/interpretability.jpg";
import phenotype from "@/assets/media/phenotype.jpg";
import medos from "@/assets/media/medos.jpg";

export type Project = {
  title: string;
  works: string;
  description: string;
  /** Optional image or GIF URL illustrating the project. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Faithful reasoning & hallucination control in medical VLMs",
    works: "PCCD \u00b7 CAST \u00b7 Transductive Conformal Decoding",
    description:
      "Counterfactual, anatomy-guided, and contrastive decoding strategies that keep vision-language models tethered to what is actually in the image. The aim is a decoding-time intervention that reduces fabricated findings without retraining or extra annotation.",
    image: faithfulReasoning,
  },
  {
    title: "Risk-controlled uncertainty for clinical deployment",
    works: "CARTA \u00b7 OpenCP \u00b7 PROTON",
    description:
      "Atlas-aware and open-vocabulary conformal prediction paired with online out-of-distribution detection, so a deployed model can say how confident it is \u2014 and abstain \u2014 with formal coverage guarantees rather than heuristics.",
    image: uncertainty,
  },
  {
    title: "Annotation-efficient learning under distribution shift",
    works: "Structured Active Learning \u00b7 Prompt-and-Probe",
    description:
      "Structured active learning under correlated outputs, and black-box prompting of foundation models where weights are inaccessible. Both target the same constraint: clinical labels are scarce, expensive, and unevenly distributed.",
    image: annotationEfficient,
  },
  {
    title: "Mechanistic interpretability & agentic safety",
    works: "State Blindness \u00b7 ViTA \u00b7 GEM \u00b7 Behavioral Drift",
    description:
      "Understanding what vision-language models internally represent, and measuring behavioral drift in self-personalizing agents as a dynamical system \u2014 a follow-up to open questions from Anthropic's consciousness-cluster research.",
    image: interpretability,
  },
  {
    title: "Phenotype for ALL",
    works: "Autonomous multi-omic discovery engine",
    description:
      "A co-scientist that discovers pathways, biomarkers, and phenotypical associations independently while keeping experts in the loop, alongside a workflow tool that makes multi-omic study design simple and scalable for precision medicine.",
    image: phenotype,
  },
  {
    title: "MedOS",
    works: "Clinical AI platform",
    description:
      "Building the first dedicated clinical AI assistant as founding CTO, setting research and engineering direction with FDA approval on the priority track.",
    image: medos,
  },
];
