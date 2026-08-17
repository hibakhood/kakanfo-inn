import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/utils";
import CallToAction from "@/components/CallToAction";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  return (
    <>
      <Seo
        title="CEO's Blog"
        description="News and stories from the desk of the Kakanfo Inn & Conference Centre CEO — hospitality, community, culture and travel in Ibadan."
        keywords="Kakanfo Inn blog, CEO blog, hospitality news, Ibadan news, Kakanfo Inn news"
        path="/blog"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "CEO's Blog", item: `${siteConfig.url}/blog` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "CEO's Blog",
            url: `${siteConfig.url}/blog`,
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.date,
              author: { "@type": "Person", name: post.author },
              url: `${siteConfig.url}/blog/${post.id}`,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="From the desk of the CEO"
        title="CEO's Blog"
        description="News, milestones and stories from Kakanfo Inn & Conference Centre — hospitality, community, culture and travel in Ibadan."
        image={asset("/images/facilities/chairman.jpg")}
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 0.06} className="h-full">
              <article className="group flex h-full flex-col">
                {post.image && (
                  <Link
                    to={`/blog/${post.id}`}
                    className="relative block aspect-[4/3] overflow-hidden rounded-sm bg-forest-100"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream-100">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brass-400" />
                      {post.date}
                    </span>
                  </Link>
                )}

                <div className="flex flex-1 flex-col pt-5">
                  {!post.image && (
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brass-600">
                      {post.date}
                    </p>
                  )}
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {post.author}
                  </p>
                  <h2 className="mt-3 font-display text-[1.3rem] font-normal leading-snug text-forest-950">
                    <Link
                      to={`/blog/${post.id}`}
                      className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 border-t border-forest-950/10 pt-5 text-sm font-semibold text-forest-950 transition-colors hover:text-primary"
                  >
                    Read more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CallToAction
        title="Join the conversation"
        subtitle="Planning your next stay, event or visit to Ibadan? Our team would love to hear from you."
      />
    </>
  );
}
