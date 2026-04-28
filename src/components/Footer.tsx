import { Phone, Mail } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="bg-primary text-primary-foreground py-12 rounded-t-[2rem]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Présentation */}
          <div>
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed max-w-xl">
              <span className="font-bold text-primary-foreground">LacaissePay</span> {t("footer.intro")}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/lacaissepay/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram LacaissePay"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.42.6.22 1 .49 1.5.97.5.5.75.9.97 1.5.17.4.36 1 .42 2.2.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.42 2.2-.22.6-.49 1-.97 1.5-.5.5-.9.75-1.5.97-.4.17-1 .36-2.2.42-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.22-1-.49-1.5-.97-.5-.5-.75-.9-.97-1.5-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-1.8.42-2.2.22-.6.49-1 .97-1.5.5-.5.9-.75 1.5-.97.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.7.07-1 .05-1.6.22-1.95.36-.5.2-.85.42-1.22.8-.38.37-.6.72-.8 1.22-.14.36-.31.95-.36 1.95C3 8.5 3 8.85 3 12s0 3.5.07 4.7c.05 1 .22 1.6.36 1.95.2.5.42.85.8 1.22.37.38.72.6 1.22.8.36.14.95.31 1.95.36 1.2.07 1.55.07 4.7.07s3.5 0 4.7-.07c1-.05 1.6-.22 1.95-.36.5-.2.85-.42 1.22-.8.38-.37.6-.72.8-1.22.14-.36.31-.95.36-1.95.07-1.2.07-1.55.07-4.7s0-3.5-.07-4.7c-.05-1-.22-1.6-.36-1.95-.2-.5-.42-.85-.8-1.22-.37-.38-.72-.6-1.22-.8-.36-.14-.95-.31-1.95-.36C15.5 4 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-2.07a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lacaissepay/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn LacaissePay"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.12 1.43-2.12 2.9V21H10V9z"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Informations + coordonnées en dessous */}
          <div className="md:text-left">
            <h3 className="text-2xl font-extrabold text-primary-foreground mb-6">{t("footer.info")}</h3>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-foreground shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-primary-foreground uppercase tracking-wide">{t("footer.callus")}</p>
                  <p className="text-sm text-primary-foreground/70">(212) 5 20 65 75 40</p>
                  <p className="text-sm text-primary-foreground/70">(212) 6 82 67 23 17</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-foreground shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-primary-foreground uppercase tracking-wide">{t("footer.email")}</p>
                  <p className="text-sm text-primary-foreground/70">contact@lacaisse.ma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/35">
          © {new Date().getFullYear()} LaCaissePay. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
