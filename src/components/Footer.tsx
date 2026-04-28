import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 rounded-t-[2rem]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Présentation */}
          <div>
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed max-w-xl">
              <span className="font-bold text-primary-foreground">LacaissePay</span> – La solution de paiement digitale qui simplifie votre activité au Maroc.
              Encaissez plus simplement, gérez votre argent plus intelligemment et gardez le contrôle total sur votre activité.
            </p>
          </div>

          {/* Right: Informations + coordonnées en dessous */}
          <div className="md:text-left">
            <h3 className="text-2xl font-extrabold text-primary-foreground mb-6">Informations</h3>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-foreground shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-primary-foreground uppercase tracking-wide">Appelez-nous</p>
                  <p className="text-sm text-primary-foreground/70">(212) 5 20 65 75 40</p>
                  <p className="text-sm text-primary-foreground/70">(212) 6 82 67 23 17</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-foreground shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-primary-foreground uppercase tracking-wide">E-mail</p>
                  <p className="text-sm text-primary-foreground/70">contact@lacaisse.ma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/35">
          © {new Date().getFullYear()} LaCaissePay. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
