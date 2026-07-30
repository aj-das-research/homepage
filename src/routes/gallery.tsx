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
        <p className="border-t border-border pt-8 text-muted-foreground">
          No photos yet. Add an album in{" "}
          <code className="font-mono text-[15px] text-foreground">src/data/gallery.ts</code>.
        </p>
      ) : (
        <div className="space-y-16">
          {gallery.map((album) => (
            <section key={album.title}>
              <header className="mb-6 border-b border-border pb-3">
                <h2 className="font-serif text-2xl text-foreground">
                  {album.url ? (
                    <a href={album.url} target="_blank" rel="noreferrer">
                      {album.title}
                    </a>
                  ) : (
                    album.title
                  )}
                </h2>
                {(album.location || album.date) && (
                  <p className="mt-1 text-[15px] text-muted-foreground">
                    {album.location ? (
                      album.mapsUrl ? (
                        <a href={album.mapsUrl} target="_blank" rel="noreferrer">
                          {album.location}
                        </a>
                      ) : (
                        album.location
                      )
                    ) : null}
                    {album.location && album.date ? " · " : null}
                    {album.date ?? null}
                  </p>
                )}
              </header>
              <GalleryMosaic photos={album.photos} title={album.title} />
            </section>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
