import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Leaf } from "lucide-react";
import logo from "@/assets/stm-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="STM" className="h-14 w-14 rounded-full ring-1 ring-white/20" />
            <div>
              <div className="font-serif text-2xl">STM</div>
              <div className="text-xs tracking-[0.25em] uppercase text-white/60">
                Om Sri Thirumoolar
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-white/70 leading-relaxed">
            A sanctuary of Siddha and Ayurvedic wisdom in Puducherry — where ancient healing meets
            modern care, restoring balance to body, mind and spirit.
          </p>
          <div className="mt-6 flex items-center gap-2 text-gold">
            <Leaf size={16} />
            <span className="text-sm tracking-wide">Survive · Triumph · Merriment</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-5">Visit</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> No: 3, F-Lane, V.V.P Nagar, Thattanchavady, Puducherry – 605009</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5" /> <a href="tel:9952232078" className="hover:text-gold">9952232078</a></li>
            <li className="flex gap-2"><Clock size={16} className="mt-0.5" /> Mon – Sun · 7am – 9pm</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-5">Explore</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-gold">Our Heritage</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/treatments" className="hover:text-gold">Treatments</Link></li>
            <li><Link to="/appointment" className="hover:text-gold">Book a Visit</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} STM — Om Sri Thirumoolar Siddha & Ayurveda Clinic. All rights reserved.
      </div>
    </footer>
  );
}
