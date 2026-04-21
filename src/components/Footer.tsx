import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 rounded-t-[2rem]">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-extrabold text-primary-foreground mb-8">Informations</h3>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-foreground" />
              <div>
                <p className="text-sm font-bold text-primary-foreground uppercase tracking-wide">Appelez-nous</p>
                <p className="text-sm text-primary-foreground/60">(212) 5 20 65 75 40</p>
                <p className="text-sm text-primary-foreground/60">(212) 6 82 67 23 17</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary-foreground" />
            <div>
              <p className="text-sm font-bold text-primary-foreground uppercase tracking-wide">Envoyez-nous un e-mail</p>
              <p className="text-sm text-primary-foreground/60">contact@lacaisse.ma</p>
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
