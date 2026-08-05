import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { GalleryMosaic } from "@/components/GalleryMosaic";
import { gallery } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Abhijit Das" },
      {
        name: "description",
        content:
          "Photos from conferences, university visits, and research events — MICCAI, ECCV, MBZUAI and beyond.",
      },
      { property: "og:title", content: "Gallery — Abhijit Das" },
      {
        property: "og:description",
        content: "Moments from conferences, universities, and events.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <PageLayout
      title="Gallery"
      intro="Photos from campus, conferences, and research events."
    >
      {gallery.length === 0 ? (
        <p className="text-muted-foreground">
          No photos yet. Add an album in{" "}
          <code className="font-mono text-meta text-foreground">src/data/gallery.ts</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {gallery.map((album, index) => (
            <GalleryMosaic
              key={album.title}
              album={album}
              layoutIndex={index}
            />
          ))}
        </div>
      )}
    </PageLayout>
  );
}
