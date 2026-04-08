const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#" className="text-2xl font-extrabold">
              <span className="text-rose">LaCaisse</span><span className="text-background">Pay</span>
            </a>
            <p className="mt-5 text-sm text-background/50 leading-relaxed">
              La solution de paiement digitale conçue pour les professionnels marocains.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-background mb-5 text-sm uppercase tracking-[0.15em]">Solutions</h4>
            <ul className="space-y-3 text-sm text-background/50">
              <li><a href="#solutions" className="hover:text-background transition-colors">Compte digital</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">Carte bancaire</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">QR Code</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">Terminal TPE</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-5 text-sm uppercase tracking-[0.15em]">Liens rapides</h4>
            <ul className="space-y-3 text-sm text-background/50">
              <li><a href="#avantages" className="hover:text-background transition-colors">Avantages</a></li>
              <li><a href="#securite" className="hover:text-background transition-colors">Sécurité</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-5 text-sm uppercase tracking-[0.15em]">Contact</h4>
            <ul className="space-y-3 text-sm text-background/50">
              <li>📞 +212 5XX-XXXXXX</li>
              <li>📧 contact@lacaissepay.ma</li>
              <li>📍 Casablanca, Maroc</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/35">
          © {new Date().getFullYear()} LaCaissePay. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
