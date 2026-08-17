import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import CallToAction from "@/components/CallToAction";
import { asset } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import { useEventSpaces } from "@/hooks/useCatalog";
import { siteConfig } from "@/lib/site";
import { hostedEvents, conferenceCentreIntro } from "@/data/content";
import { Loader2 } from "lucide-react";

export default function Events() {
  const { spaces, loading } = useEventSpaces();

  return (
    <>
      <Seo
        title="Events & Conference"
        description="Hold your next event at Kakanfo Inn & Conference Centre — the 2,000 guest Lekan Are Hall, Nihinlola Hall, boardrooms and the Bawa Continent Garden in Ibadan."
        keywords="event venue Ibadan, conference centre Ibadan, wedding venue Ibadan, meeting rooms Ibadan, corporate events Ibadan"
        path="/events"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "Events & Conference", item: `${siteConfig.url}/events` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: (spaces ?? []).map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "EventVenue",
                name: s.name,
                url: `${siteConfig.url}/events/${s.slug}`,
                image: s.images[0],
              },
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Events & Conference"
        title="Spaces that hold the moment"
        description="From the 2,000 guest Lekan Are Hall to an intimate boardroom — eight flexible venues, one attentive team, and in house catering, AV and décor."
        image={asset("/images/halls/lekan-are-hall-1.jpg")}
      />

      <section className="border-b border-forest-950/10 bg-background">
        <div className="container-site grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <p className="eyebrow-rule text-brass-300">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-600">
                What we host
              </span>
            </p>
            <h2 className="mt-6 font-display text-3xl font-light leading-[1.08] text-forest-950 sm:text-4xl">
              {conferenceCentreIntro}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {hostedEvents.map((event) => (
                <li
                  key={event}
                  className="flex items-center gap-3 border border-forest-950/10 bg-white px-4 py-3 text-sm font-medium text-forest-950 transition-colors hover:border-brass-500/50 hover:bg-brass-500/5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                  {event}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-site py-16 md:py-20">
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spaces?.map((space) => (
              <EventCard key={space.id} space={space} />
            ))}
          </div>
        )}
      </section>

      <CallToAction
        title="Planning a wedding, summit or celebration?"
        subtitle="Tell us your guest count and we will recommend the perfect space — plus in house catering, décor and AV."
      />
    </>
  );
}
