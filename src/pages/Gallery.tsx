import { useState } from "react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import GalleryLightbox from "@/components/GalleryLightbox";
import CallToAction from "@/components/CallToAction";
import { galleryImages } from "@/data/content";
import { cn, asset } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms & Suites" },
  { id: "facilities", label: "Facilities" },
  { id: "events", label: "Events & Conference" },
] as const;

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const images = filter === "all" ? galleryImages : galleryImages.filter((i) => i.category === filter);

  return (
    <>
      <Seo
        title="Gallery"
        description="Take a visual tour of Kakanfo Inn & Conference Centre — our rooms, suites, conference venues, dining rooms and leisure facilities."
        keywords="Kakanfo Inn gallery, Ibadan hotel photos, conference centre pictures, hotel rooms Ibadan"
        path="/gallery"
      />

      <PageHero
        eyebrow="Gallery"
        title="A look inside Kakanfo Inn"
        description="Rooms that rest, venues that impress, and grounds that hold a party well. Wander through a few of our favourite corners."
        image={asset("/images/halls/lekan-are-hall-1.jpg")}
      />

      <section className="container-site py-16 md:py-20">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={cn(
                "rounded-sm border px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                filter === f.id
                  ? "border-forest-950 bg-forest-950 text-cream-100"
                  : "border-forest-950/15 bg-transparent text-forest-800 hover:border-forest-950/40"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <GalleryLightbox images={images} columns={3} />
        </div>
      </section>

      <CallToAction
        title="See it in person"
        subtitle="Photographs are nice — a walk through the grounds is better. Our reception is open 24 hours for tours."
      />
    </>
  );
}
