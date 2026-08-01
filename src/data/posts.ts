import uncertainty from "@/assets/media/uncertainty.jpg";
import decoding from "@/assets/media/decoding.jpg";
import realtime from "@/assets/media/realtime.jpg";
import interpretability from "@/assets/media/interpretability.jpg";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Optional cover image or GIF URL. */
  image?: string;
  /**
   * Long-form body for the detail page.
   * Leave empty until you are ready to write it.
   */
  body?: string[];
};

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const posts: Post[] = [
  {
    slug: "placeholder-what-models-see",
    title: "What models see when they say they understand",
    date: "2026-07-28",
    excerpt:
      "Placeholder note on probing vision–language representations — what lights up inside the model, and how far that is from a clinical explanation you can trust.",
    image: interpretability,
  },
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

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
