import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-200">
      <div className="container-site pt-20 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-200/60">
              A full service hotel and conference centre on Ring Road, Ibadan —
              stylish rooms, a business class event venue, and warm Yoruba
              hospitality since day one.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-brass-400" />
              <span className="text-cream-200/80">{siteConfig.reception}</span>
            </div>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-300">
              Explore
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {[...navLinks, { label: "Book Now", href: "/booking" }].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream-200/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-300">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-cream-200/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400/80" />
                <span>
                  {siteConfig.address.line1},
                  <br />
                  {siteConfig.address.line2},
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brass-400/80" />
                <span className="flex flex-col gap-1">
                  {siteConfig.phoneDisplay.map((p) => (
                    <a
                      key={p}
                      href={`tel:+234${p.slice(1)}`}
                      className="transition-colors hover:text-white"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex flex-col gap-1.5">
                {Object.entries(siteConfig.emails).map(([label, email]) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brass-400/80" />
                    {email}
                  </a>
                ))}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass-300">
              Visit
            </h3>
            <p className="mt-6 flex items-center gap-3 text-sm text-cream-200/70">
              <Clock className="h-4 w-4 shrink-0 text-brass-400/80" />
              {siteConfig.reception}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/60">
              Our front desk never closes. Arrive at any hour — a warm welcome
              is always waiting.
            </p>
          </div>
        </div>
      </div>

      <div className="container-site mt-16">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 py-7 text-xs text-cream-200/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass-400" />
            Made with pride in Ibadan, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
