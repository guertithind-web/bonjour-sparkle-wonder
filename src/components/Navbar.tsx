import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Solutions", href: "#solutions" },
    { label: "Avantages", href: "#avantages" },
    { label: "Sécurité", href: "#securite" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(346,65%,22%)]/95 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-[4.5rem] px-4">
        <a href="#" className="text-2xl font-extrabold tracking-tight">
          <span className="text-rose">LaCaisse</span><span className="text-white">Pay</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="rounded-xl px-6 bg-white text-primary hover:bg-white/90 font-bold" asChild>
            <a href="#contact">Demander un devis</a>
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[hsl(346,65%,22%)] border-b border-white/10 px-4 pb-5 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-semibold text-white/70 hover:text-white transition-colors py-2.5">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full rounded-xl bg-white text-primary hover:bg-white/90 font-bold" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Demander un devis</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
