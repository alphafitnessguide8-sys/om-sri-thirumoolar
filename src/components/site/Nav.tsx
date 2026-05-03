import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/stm-logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/treatments", label: "Treatments" },
  { to: "/appointment", label: "Appointment" },
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
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-light shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="STM Holistic Healing Clinic"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-primary/20 group-hover:ring-accent/60 transition"
            />
            <div className="leading-tight">
              <div className="font-serif text-lg text-primary">STM</div>
              <div className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                Om Sri Thirumoolar
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary transition relative"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/appointment" className="hidden sm:inline-flex btn-gold text-sm">
              Book Visit
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
          <div className="lg:hidden mt-2 glass-light rounded-3xl p-4 shadow-soft animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
