import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { iconMap } from "@/lib/icons";
import { amenitiesList, coreValues, historyMilestones, mission, vision, chairman } from "@/data/content";
import { siteConfig } from "@/lib/site";

const STATS = [
  { value: "95", label: "Rooms & suites" },
  { value: "8", label: "Conference halls & venues" },
  { value: "2,000", label: "Largest hall capacity" },
  { value: "24/7", label: "Reception & security" },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Kakanfo Inn & Conference Centre, a subsidiary of Kakanfo Enterprises Limited, is a prestigious 5-star comfort hotel on Ring Road, Ibadan — ninety-five rooms, world class multipurpose halls, and warm Yoruba hospitality since 1988."
        keywords="about Kakanfo Inn, Ibadan hotel, conference centre Ibadan, Kakanfo Enterprises"
        path="/about"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Kakanfo Inn & Conference Centre",
          url: `${siteConfig.url}/about`,
          description:
            "A subsidiary of Kakanfo Enterprises Limited and a prestigious 5-star comfort hotel in Ibadan, Nigeria.",
        }}
      />

      <PageHero
        eyebrow="Our Story"
        title="A house that holds Ibadan's great occasions"
        description="Kakanfo Inn & Conference Centre, a subsidiary of Kakanfo Enterprises Limited, is a prestigious hotel with 5-star comfort. Set in a serene environment, seventy minutes' drive from Lagos, we have been welcoming the world to Ring Road, Ibadan since October 1988."
        image="/images/facilities/exterior-2.jpg"
      />

      {/* INTRO */}
      <section className="container-site py-16 md:py-24">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                The name Kakanfo is carried with honour. In Yoruba history, the Kakanfo was the
                commander of the empire's armies — a figure of strength, readiness, and service.
                Our hotel borrows that spirit: a house that stands ready to serve, whatever brings
                you to Ibadan.
              </p>
              <p>
                The inn began operations in October 1988 with forty-two rooms, expanded to
                eighty-two in 1999, and in 2018 grew to ninety-five beautifully crafted modern
                rooms. In September 2022, world class multipurpose halls with a modern kitchen and
                a large cold storage facility were added to the property.
              </p>
              <p>
                Today the house offers Classic Studios, Luxury Rooms, Classic Suites and
                one- and two-bedroom Presidential Suites — ninety-five rooms across five
                categories, designed and equipped to suit your needs, certified to ISO
                standard {siteConfig.iso}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 border-t border-forest-950/10">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "px-6 py-9",
                    i % 2 === 1 && "border-l border-forest-950/10",
                    i >= 2 && "border-t border-forest-950/10"
                  )}
                >
                  <p className="font-display text-4xl font-light text-primary">{s.value}</p>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-4 border-t border-forest-950/10 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-brass-500/40 bg-brass-500/10 text-brass-600">
                <Award className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-forest-950">ISO certified quality.</span>{" "}
                Kakanfo Inn &amp; Conference Centre holds ISO certification number {siteConfig.iso}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="border-y border-forest-950/10 bg-background py-16 md:py-24">
        <div className="container-site grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow-rule text-brass-500">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-500">
                Our Vision
              </span>
            </p>
            <p className="mt-6 font-display text-2xl font-light leading-snug text-forest-950 sm:text-[1.75rem]">
              {vision}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow-rule text-brass-500">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-500">
                Our Mission
              </span>
            </p>
            <p className="mt-6 font-display text-2xl font-light leading-snug text-forest-950 sm:text-[1.75rem]">
              {mission}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="container-site py-16 md:py-24">
        <SectionHeading
          eyebrow="Core Values"
          title="What the house stands on"
          description="Four commitments that govern every welcome, every stay, and every event we host."
        />
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <div className="h-full border-t border-forest-950/10 pt-6">
                <p className="font-display text-sm font-normal tracking-[0.3em] text-brass-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-normal text-forest-950">{v.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HISTORY */}
      <section className="bg-forest-950 py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Since 1988"
            title="A house that grew with the city"
            light
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {historyMilestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="border-t border-white/15 pt-6">
                  <p className="font-display text-4xl font-light text-brass-400">{m.year}</p>
                  <h3 className="mt-3 font-display text-lg font-normal text-cream-100">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-200/70">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHAIRMAN */}
      <section className="container-site py-16 md:py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-sm bg-forest-950 p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brass-500/70 via-brass-500/40 to-transparent" />
              <div className="overflow-hidden rounded-sm">
                <img
                  src={chairman.image}
                  alt={`${chairman.name}, ${chairman.title}`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <h2 className="mt-8 font-display text-3xl font-light text-cream-100">
                {chairman.name}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brass-300">
                {chairman.title}
              </p>
              <p className="mt-1 text-sm text-cream-200/60">{chairman.role}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-300">
                  Education
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream-200/75">
                  {chairman.education.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-400" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow-rule text-brass-500">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-500">
                Leadership
              </span>
            </p>
            <h3 className="mt-6 font-display text-3xl font-light leading-[1.08] text-forest-950 sm:text-4xl">
              A lifetime in the business of hospitality
            </h3>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Adedamola Are rose from hotel management to global leadership before bringing
              that world class standard home to Ibadan:
            </p>
            <ol className="mt-6 space-y-6">
              {chairman.career.map((c, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-display text-sm font-normal tracking-[0.3em] text-brass-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-forest-950/10 pt-6 leading-relaxed text-muted-foreground">
              {chairman.closing}
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/contact">
                  Meet the team
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="border-t border-forest-950/10 bg-background py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything, on the grounds"
            description="The essentials are covered so you can focus on the reason you came to Ibadan."
          />
          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {amenitiesList.map((a, i) => {
              const Icon = iconMap[a.icon] ?? null;
              return (
                <Reveal key={a.name} delay={(i % 4) * 0.07}>
                  <div className="group flex h-full flex-col border-t border-forest-950/10 pt-6">
                    {Icon && (
                      <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-brass-500" />
                    )}
                    <h3 className="mt-4 font-display text-lg font-medium text-forest-950">{a.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction
        title="Come and see for yourself"
        subtitle="Tours are welcome any hour. Call us and we will have the kettle on."
      />
    </>
  );
}
