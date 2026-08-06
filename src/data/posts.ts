import whatModelsSee from "@/assets/media/blog-what-models-see-teaser.png";
import conformal from "@/assets/media/blog-conformal-teaser.png";
import hallucinationDecode from "@/assets/media/blog-hallucination-decode-teaser.png";
import fps76 from "@/assets/media/blog-76fps-teaser.png";

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
  status: "draft" | "published";
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
    image: whatModelsSee,
    status: "draft",
  },
  {
    slug: "conformal-prediction-in-the-clinic",
    title: "Conformal prediction is not a confidence score",
    date: "2026-06-14",
    excerpt:
      "Why coverage guarantees change what a model is allowed to say, and what breaks when the exchangeability assumption quietly fails on hospital data.",
    image: conformal,
    status: "draft",
  },

  {
    slug: "hallucination-is-a-decoding-problem",
    title: "Hallucination is (partly) a decoding problem",
    date: "2026-04-02",
    excerpt:
      "Notes from PCCD and CAST on how much fabricated content you can remove at decoding time before you have to touch the weights.",
    image: hallucinationDecode,
    status: "draft",
  },
  {
    slug: "76-fps-notes",
    title: "Notes on getting a polyp detector to 76 FPS",
    date: "2026-01-20",
    excerpt:
      "Quantization, operator fusion, and the unglamorous profiling work that separates a paper number from something a clinician can actually use live.",
    image: fps76,
    status: "draft",
  },
];

export const publishedPosts = posts.filter((post) => post.status === "published");
export const hasPublishedPosts = publishedPosts.length > 0;

export function getPostBySlug(slug: string): Post | undefined {
  return publishedPosts.find((post) => post.slug === slug);
}
