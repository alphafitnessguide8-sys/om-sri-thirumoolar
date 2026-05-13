import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/stm-logo.jpeg";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/services", label: "Services" },
  { to: "/#testimonials", label: "Testimonials", isHash: true },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/" && !scrolled;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = overHero
    ? "px-3.5 py-2 text-sm text-[#F7F2E8]/80 hover:text-[#F5D78A] transition relative"
    : "px-3.5 py-2 text-sm text-foreground/80 hover:text-primary transition relative";
  const activeCls = overHero
    ? "text-[#F5D78A] font-medium [text-shadow:0_0_18px_rgba(245,215,138,0.55)]"
    : "text-primary font-medium";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full pl-3 pr-3 md:pl-5 md:pr-3 py-2 transition-all duration-500 border ${
            overHero
              ? "bg-[#0e2519]/55 backdrop-blur-xl border-[#D4A24C]/35 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(245,215,138,0.12)]"
              : scrolled
              ? "glass-light border-gold/30 shadow-soft"
              : "bg-ivory/40 backdrop-blur-md border-gold/20"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="STM Holistic Healing Clinic"
              className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover ring-1 ring-gold/40"
            />
            <div className="leading-tight">
              <div className={`font-serif text-base md:text-lg tracking-tight ${overHero ? "text-[#F7F2E8]" : "text-primary"}`}>STM</div>
              <div className={`text-[9px] tracking-[0.22em] uppercase hidden sm:block ${overHero ? "text-[#F7F2E8]/60" : "text-muted-foreground"}`}>
                Om Sri Thirumoolar
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) =>
              l.isHash ? (
                <a key={l.to} href={l.to} className={linkBase}>
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className={linkBase}
                  activeProps={{ className: activeCls }}
                  activeOptions={{ exact: l.exact }}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/appointment" className="hidden sm:inline-flex btn-gold text-sm py-2 px-5">
              Book Consultation
            </Link>
            <button
              className={`lg:hidden p-2 ${overHero ? "text-[#F7F2E8]" : "text-primary"}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-light rounded-3xl p-4 shadow-soft border border-gold/30 animate-fade-in">
            {links.map((l) =>
              l.isHash ? (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
