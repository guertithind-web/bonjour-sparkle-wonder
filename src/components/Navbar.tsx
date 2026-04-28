import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import logo from "@/assets/lacaissepay-logo.png";

const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "Fr" },
  { code: "ar", label: "العربية", short: "Ar" },
  { code: "en", label: "English", short: "En" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.solutions"), href: "#solutions" },
    { label: t("nav.advantages"), href: "#avantages" },
  ];

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors ${
            mobile ? "py-2" : ""
          }`}
          aria-label="Change language"
        >
          <Globe className="h-4 w-4" />
          <span>{current.short}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`cursor-pointer ${lang === l.code ? "font-bold" : ""}`}
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(346,65%,22%)]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="LacaissePay" className="h-10 w-auto" />
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
            <a href="#contact">{t("nav.cta")}</a>
          </Button>
          <LangSwitcher />
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
            <a href="#contact" onClick={() => setOpen(false)}>{t("nav.cta")}</a>
          </Button>
          <div className="pt-1">
            <LangSwitcher mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
