import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Users, Maximize, LayoutGrid, Check, ArrowRight, Loader2 } from "lucide-react";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getEventBySlug } from "@/lib/data";
import { formatNaira, cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import type { EventSpace } from "@/types";

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [space, setSpace] = useState<EventSpace | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    let active = true;
    getEventBySlug(slug ?? "").then((s) => {
      if (active && s) {
        setSpace(s);
        setActiveImage(0);
      }
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (!space) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const gallery = space.images.length > 0 ? space.images : [space.images[0]];

  return (
    <>
      <Seo
        title={`${space.name} — ${siteConfig.shortName}`}
        description={space.description}
        keywords={`${space.name}, event venue Ibadan, conference Ibadan, ${space.name.toLowerCase()} price`}
        image={space.images[0]}
        path={`/events/${space.slug}`}
        type="article"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "Events & Conference", item: `${siteConfig.url}/events` },
              { "@type": "ListItem", position: 3, name: space.name, item: `${siteConfig.url}/events/${space.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "EventVenue",
            name: space.name,
            description: space.description,
            url: `${siteConfig.url}/events/${space.slug}`,
            image: space.images,
            maximumAttendeeCapacity: space.capacity,
            floorSize: { "@type": "QuantitativeValue", value: space.size_sqm, unitCode: "MTK" },
          },
        ]}
      />

      <div className="border-b border-forest-950/10 pb-8 pt-24 md:pt-28">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/events" className="hover:text-primary">Events & Conference</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-forest-900">{space.name}</span>
          </nav>
        </div>
      </div>

      <section className="container-site grid gap-10 py-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="overflow-hidden rounded-sm">
            <img
              key={activeImage}
              src={gallery[activeImage]}
              alt={`${space.name} — photo ${activeImage + 1}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={cn(
                    "w-24 overflow-hidden rounded-sm border-2 transition-all",
                    i === activeImage ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="brass">Event Space</Badge>
            {space.featured && <Badge>Featured</Badge>}
          </div>
          <h1 className="mt-4 font-display text-3xl font-normal text-forest-950 sm:text-4xl">{space.name}</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{space.description}</p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <span className="flex items-center gap-2 text-forest-800">
              <Users className="h-4 w-4 text-primary" /> Up to {space.capacity} guests
            </span>
            <span className="flex items-center gap-2 text-forest-800">
              <Maximize className="h-4 w-4 text-primary" /> {space.size_sqm} m²
            </span>
          </div>

          <Separator className="my-7" />

          <h2 className="font-display text-xl font-medium text-forest-950">Setup styles</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {space.setup_styles.map((s) => (
              <Badge key={s} variant="brass" className="px-3 py-1">{s}</Badge>
            ))}
          </div>

          <h2 className="mt-7 font-display text-xl font-medium text-forest-950">Venue amenities</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {space.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2.5 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                {a}
              </li>
            ))}
          </ul>

          <Separator className="my-7" />

          <div className="relative flex flex-wrap items-end justify-between gap-4 overflow-hidden rounded-sm bg-forest-950 p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brass-500/70 via-brass-500/40 to-transparent" />
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream-200/60">Per day</p>
              <p className="mt-1 font-display text-3xl font-light text-cream-100">
                {formatNaira(space.price_per_day)}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-cream-200/60">
                <LayoutGrid className="h-3.5 w-3.5" /> catering, décor and AV available in-house
              </p>
            </div>
            <Button asChild size="lg">
              <Link to={`/booking?type=event&slug=${space.slug}`}>
                Book Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction
        title={`Reserve the ${space.name}`}
        subtitle="Lock your date today — our events team will handle setup, catering and everything in between."
      />
    </>
  );
}
