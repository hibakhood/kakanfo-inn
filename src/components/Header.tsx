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
      "relative text-[0.85rem] font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brass-500 after:transition-all after:duration-300",
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
      transparent
        ? "text-cream-100/90 hover:text-white"
        : "text-forest-800 hover:text-primary"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-forest-950/10 bg-[#FCFBF8]/85 backdrop-blur-xl"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link to="/" aria-label="Kakanfo Inn home">
          <Logo light={transparent} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <NavLink to={link.href} className={navClass}>
                  {link.label}
                  <ChevronDown className="ml-1 inline h-3 w-3" />
                </NavLink>
                <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[180px] rounded-md border border-forest-950/10 bg-[#FCFBF8] py-1 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      className={({ isActive }) =>
                        cn(
                          "block px-4 py-2 text-sm font-medium transition-colors",
                          isActive ? "bg-primary/10 text-primary" : "text-forest-800 hover:bg-secondary"
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
              "hidden items-center gap-2 text-sm font-medium transition-colors md:flex",
              transparent ? "text-cream-100/90 hover:text-white" : "text-forest-800 hover:text-primary"
            )}
          >
            <Phone className="h-4 w-4 text-brass-500" />
            {siteConfig.phoneDisplay[0]}
          </a>
          <Button asChild className="hidden sm:inline-flex">
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
            <SheetContent side="right" className="w-80 border-l border-forest-950/10 bg-[#FCFBF8]">
              <SheetHeader className="border-b border-forest-950/10 pb-4">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.href}>
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          cn(
                            "rounded-sm px-3 py-2.5 text-base font-medium transition-colors",
                            isActive ? "bg-primary/10 text-primary" : "text-forest-800 hover:bg-secondary"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                      <div className="ml-4 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive }) =>
                              cn(
                                "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                                isActive ? "bg-primary/10 text-primary" : "text-forest-800 hover:bg-secondary"
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
                          "rounded-sm px-3 py-2.5 text-base font-medium transition-colors",
                          isActive ? "bg-primary/10 text-primary" : "text-forest-800 hover:bg-secondary"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
                <div className="mt-4 flex flex-col gap-3 border-t border-forest-950/10 pt-4">
                  <Button asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                  <a
                    href={`tel:+234${siteConfig.phoneDisplay[0].slice(1)}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-forest-800"
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
