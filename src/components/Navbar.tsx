import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lacaissepay-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Solutions", href: "#solutions" },
    { label: "Avantages", href: "#avantages" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <div className="w-8 h-8 bg-rose rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2L8 6L4 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6L12 10L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              </svg>
            </div>
          </div>
          <div className="leading-none">
            <span className="text-xl font-extrabold text-white tracking-tight">Lacaisse</span>
            <br />
            <span className="text-sm font-bold text-rose tracking-wide">Pay</span>
          </div>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="rounded-full px-6 border-white/30 text-white hover:bg-white/10 font-semibold bg-transparent" asChild>
            <a href="#contact">Demande de devis</a>
          </Button>
          <span className="text-sm text-white/60 font-medium">Fr</span>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[hsl(346,65%,22%)]/95 backdrop-blur-xl border-b border-white/10 px-4 pb-5 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-semibold text-white/70 hover:text-white transition-colors py-2.5">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full rounded-xl bg-white text-primary hover:bg-white/90 font-bold" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Demande de devis</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
