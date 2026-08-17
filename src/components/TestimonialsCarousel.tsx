import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

const PER_PAGE = 3;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const pages = Math.max(1, Math.ceil(testimonials.length / PER_PAGE));
  const page = Math.min(index, pages - 1);

  const items = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % pages);
    }, 7000);
    return () => clearInterval(id);
  }, [pages]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {items.map((t) => (
            <figure key={t.name} className="relative flex flex-col">
              <Quote className="h-9 w-9 text-brass-500/30" />
              <div className="mt-4 flex gap-1">
                <span className="sr-only">{t.rating} out of 5 stars</span>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brass-500 text-brass-500" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[1.05rem] font-normal leading-relaxed text-forest-950/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-forest-950/10 pt-5">
                <p className="font-semibold text-forest-950">{t.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              className={cn(
                "h-1 rounded-full transition-all",
                i === page ? "w-8 bg-brass-500" : "w-3 bg-forest-950/15 hover:bg-forest-950/30"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + pages) % pages)}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-950/15 text-forest-950 transition-colors hover:border-forest-950 hover:bg-forest-950 hover:text-cream-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % pages)}
            aria-label="Next testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-950/15 text-forest-950 transition-colors hover:border-forest-950 hover:bg-forest-950 hover:text-cream-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
