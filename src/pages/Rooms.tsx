import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import CallToAction from "@/components/CallToAction";
import { useRooms } from "@/hooks/useCatalog";
import { siteConfig } from "@/lib/site";
import { Loader2 } from "lucide-react";

export default function Rooms() {
  const { rooms, loading } = useRooms();

  return (
    <>
      <Seo
        title="Rooms & Suites"
        description="Browse rooms and suites at Kakanfo Inn & Conference Centre, Ibadan — from Classic Studios and Luxury Rooms to the Presidential Suites."
        keywords="hotel rooms Ibadan, book a room Ibadan, luxury suites Ibadan, Kakanfo Inn rooms"
        path="/rooms"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "Rooms & Suites", item: `${siteConfig.url}/rooms` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: (rooms ?? []).map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "HotelRoom",
                name: r.name,
                url: `${siteConfig.url}/rooms/${r.slug}`,
                image: r.images[0],
              },
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Accommodation"
        title="Rooms & Suites"
        description="Ninety-five rooms across five categories — Classic Studios, Luxury Rooms, Classic Suites and one- and two-bedroom Presidential Suites — each finished to premium, modern 5-star comfort. Whatever brings you to Ibadan, there is a room here that fits."
        image="/images/rooms/luxury-room-hero.jpg"
      />

      <section className="container-site py-16 md:py-20">
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms?.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </section>

      <CallToAction
        title="Not sure which room fits?"
        subtitle="Call our reception and we will help you choose — same warm welcome, no pressure."
      />
    </>
  );
}
