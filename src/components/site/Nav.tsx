import { Link } from "@tanstack/react-router";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full pl-3 pr-3 md:pl-5 md:pr-3 py-2 transition-all duration-500 border ${
            scrolled
              ? "glass-light border-gold/30 shadow-soft"
              : "bg-ivory/40 backdrop-blur-md border-gold/20"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="STM Holistic Healing Clinic"
              className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover ring-1 ring-gold/30"
            />
            <div className="leading-tight">
              <div className="font-serif text-base md:text-lg text-primary tracking-tight">STM</div>
              <div className="text-[9px] tracking-[0.22em] text-muted-foreground uppercase hidden sm:block">
                Om Sri Thirumoolar
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) =>
              l.isHash ? (
                <a
                  key={l.to}
                  href={l.to}
                  className="px-3.5 py-2 text-sm text-foreground/80 hover:text-primary transition"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3.5 py-2 text-sm text-foreground/80 hover:text-primary transition"
                  activeProps={{ className: "text-primary font-medium" }}
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
              className="lg:hidden p-2 text-primary"
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
