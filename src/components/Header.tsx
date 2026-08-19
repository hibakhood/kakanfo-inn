import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled;

  const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "group/nav relative px-1 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
      "after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:-translate-x-1/2 after:bg-brass-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
      isActive ? "after:w-full" : "after:w-0 group-hover/nav:after:w-full",
      transparent
        ? "text-cream-100/80 hover:text-white"
        : "text-forest-700 hover:text-forest-950"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-forest-950/10 bg-white/85 backdrop-blur-xl"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link to="/" aria-label="Kakanfo Inn home">
          <Logo light={transparent} />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <NavLink to={link.href} className={navClass}>
                  {link.label}
                  <ChevronDown className="ml-1 inline h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 min-w-[200px] -translate-x-1/2 rounded-lg border border-forest-950/5 bg-white p-1.5 shadow-lift opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                  {link.children.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-md px-4 py-2.5 text-[0.78rem] font-medium tracking-wide transition-all duration-200",
                          isActive
                            ? "bg-forest-800 text-white"
                            : "text-forest-700 hover:bg-forest-50 hover:text-forest-950"
                        )
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={link.href} to={link.href} className={navClass}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:+234${siteConfig.phoneDisplay[0].slice(1)}`}
            className={cn(
              "hidden items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors md:flex",
              transparent ? "text-cream-100/80 hover:text-white" : "text-forest-700 hover:text-forest-950"
            )}
          >
            <Phone className="h-4 w-4 text-brass-500" />
            {siteConfig.phoneDisplay[0]}
          </a>
          <Button asChild className="hidden sm:inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
            <Link to="/booking">Book Now</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={transparent ? "ghost" : "outline"}
                size="icon"
                className={cn("lg:hidden", transparent && "text-cream-100 hover:bg-white/10")}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l border-forest-950/5 bg-white">
              <SheetHeader className="border-b border-forest-950/10 pb-4">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-0.5" aria-label="Mobile">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.href}>
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          cn(
                            "rounded-md px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                            isActive ? "bg-forest-800 text-white" : "text-forest-700 hover:bg-forest-50"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                      <div className="ml-4 flex flex-col gap-0.5 border-l border-forest-950/10 pl-4">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive }) =>
                              cn(
                                "rounded-md px-3 py-2 text-[0.72rem] font-medium tracking-wide transition-colors",
                                isActive ? "text-forest-950" : "text-forest-600 hover:text-forest-900"
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      className={({ isActive }) =>
                        cn(
                          "rounded-md px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                          isActive ? "bg-forest-800 text-white" : "text-forest-700 hover:bg-forest-50"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
                <div className="mt-4 flex flex-col gap-3 border-t border-forest-950/10 pt-5">
                  <Button asChild className="text-[0.75rem] font-semibold uppercase tracking-[0.18em]">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                  <a
                    href={`tel:+234${siteConfig.phoneDisplay[0].slice(1)}`}
                    className="flex items-center justify-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest-700"
                  >
                    <Phone className="h-4 w-4 text-brass-500" /> {siteConfig.phoneDisplay[0]}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
