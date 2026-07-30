import uncertainty from "@/assets/media/uncertainty.jpg";
import decoding from "@/assets/media/decoding.jpg";
import realtime from "@/assets/media/realtime.jpg";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Optional cover image or GIF URL. */
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "conformal-prediction-in-the-clinic",
    title: "Conformal prediction is not a confidence score",
    date: "2026-06-14",
    excerpt:
      "Why coverage guarantees change what a model is allowed to say, and what breaks when the exchangeability assumption quietly fails on hospital data.",
    image: uncertainty,
  },
  {
    slug: "hallucination-is-a-decoding-problem",
    title: "Hallucination is (partly) a decoding problem",
    date: "2026-04-02",
    excerpt:
      "Notes from PCCD and CAST on how much fabricated content you can remove at decoding time before you have to touch the weights.",
    image: decoding,
  },
  {
    slug: "76-fps-notes",
    title: "Notes on getting a polyp detector to 76 FPS",
    date: "2026-01-20",
    excerpt:
      "Quantization, operator fusion, and the unglamorous profiling work that separates a paper number from something a clinician can actually use live.",
    image: realtime,
  },
];
