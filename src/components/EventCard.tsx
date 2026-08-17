import { Link } from "react-router-dom";
import { ArrowRight, LayoutGrid, Maximize, Users } from "lucide-react";
import type { EventSpace } from "@/types";
import { formatNaira } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  space: EventSpace;
}

export default function EventCard({ space }: EventCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to={`/events/${space.slug}`}
        className="relative block aspect-[4/3] overflow-hidden rounded-sm bg-forest-100"
      >
        <img
          src={space.images[0]}
          alt={space.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
        {space.featured && (
          <span className="absolute left-5 top-5 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cream-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
            Featured
          </span>
        )}
        <p className="absolute bottom-5 left-5 rounded-sm bg-forest-950/70 px-4 py-2.5 text-cream-100 backdrop-blur-sm">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream-200/80">
            From{" "}
          </span>
          <span className="font-display text-xl font-normal">
            {formatNaira(space.price_per_day)}
          </span>
          <span className="text-xs text-cream-200/80"> /day</span>
        </p>
      </Link>

      <div className="flex flex-1 flex-col pt-6">
        <Link to={`/events/${space.slug}`} className="group/title">
          <h3 className="font-display text-[1.35rem] font-normal leading-snug text-forest-950 underline-offset-4 transition-colors group-hover/title:text-primary">
            {space.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-brass-600" /> up to {space.capacity}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5 text-brass-600" /> {space.size_sqm} m²
          </span>
          <span className="flex items-center gap-1.5">
            <LayoutGrid className="h-3.5 w-3.5 text-brass-600" /> {space.setup_styles.length} setups
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {space.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-forest-950/10 pt-5">
          <Link
            to={`/events/${space.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-950 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            View venue
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Button asChild size="sm" variant="outline">
            <Link to={`/booking?type=event&slug=${space.slug}`}>Book</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
