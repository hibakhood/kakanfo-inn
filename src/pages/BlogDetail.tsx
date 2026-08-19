import { Link, useParams } from "react-router-dom";
import { ChevronRight, ArrowLeft, ArrowUpRight, CalendarDays, User } from "lucide-react";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import CallToAction from "@/components/CallToAction";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="font-display text-3xl font-normal text-forest-950">Article not found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          We couldn't find that story. It may have been moved or removed.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the blog
        </Link>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Seo
        title={`${post.title} — ${siteConfig.shortName}`}
        description={post.excerpt}
        keywords={`${post.title}, Kakanfo Inn blog, Ibadan news, hospitality news`}
        image={post.image}
        path={`/blog/${post.id}`}
        type="article"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "CEO's Blog", item: `${siteConfig.url}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.id}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            image: post.image ? `${siteConfig.url}${post.image}` : undefined,
            url: `${siteConfig.url}/blog/${post.id}`,
            mainEntityOfPage: `${siteConfig.url}/blog/${post.id}`,
          },
        ]}
      />

      <div className="border-b border-forest-950/10 pb-8 pt-24 md:pt-28">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/blog" className="hover:text-primary">CEO's Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="max-w-md truncate font-semibold text-forest-900">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="container-site py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow-rule text-primary">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-600">
              CEO's Blog
            </span>
          </p>
          <h1 className="mt-5 font-display text-3xl font-normal leading-snug text-forest-950 sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-brass-600" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-brass-600" /> {post.author}
            </span>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Read on the original site <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {post.image && (
            <div className="mt-8 overflow-hidden rounded-sm">
              <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" />
            </div>
          )}

          <div className="mt-10 space-y-5">
            {post.content.map((paragraph, i) => (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                <p className="text-base leading-relaxed text-forest-900/90 sm:text-lg sm:leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Link
            to="/blog"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the blog
          </Link>
        </div>
      </article>

      <section className="border-t border-forest-950/10 bg-forest-50/60 py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-normal text-forest-950">More from the blog</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedPost, i) => (
              <Reveal key={relatedPost.id} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col">
                  {relatedPost.image && (
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="relative block aspect-[4/3] overflow-hidden rounded-sm bg-forest-100"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream-100">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brass-400" />
                        {relatedPost.date}
                      </span>
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col pt-5">
                    <h3 className="font-display text-[1.1rem] font-normal leading-snug text-forest-950">
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="mt-5 inline-flex items-center gap-1.5 border-t border-forest-950/10 pt-5 text-sm font-semibold text-forest-950 transition-colors hover:text-primary"
                    >
                      Read article
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Planning your next stay, event or visit to Ibadan?"
        subtitle="Our team would love to hear from you — reach out and let us host you."
      />
    </>
  );
}
