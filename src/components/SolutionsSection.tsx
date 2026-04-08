import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, CreditCard, QrCode, Smartphone, Globe, Link2 } from "lucide-react";

const solutions = [
  {
    icon: Wallet,
    title: "Compte professionnel digital",
    desc: "Gérez vos finances professionnelles avec un compte 100% en ligne, sans paperasse ni déplacements.",
  },
  {
    icon: CreditCard,
    title: "Carte bancaire",
    desc: "Acceptez les paiements par carte bancaire facilement, en magasin comme en ligne.",
  },
  {
    icon: QrCode,
    title: "QR Code de paiement",
    desc: "Proposez un paiement instantané par simple scan de QR Code depuis le smartphone de vos clients.",
  },
  {
    icon: Smartphone,
    title: "Terminal de paiement (TPE)",
    desc: "Un terminal moderne et compact pour encaisser vos clients en point de vente, partout au Maroc.",
  },
  {
    icon: Globe,
    title: "Intégration e-commerce",
    desc: "Connectez votre boutique WordPress ou votre site via notre API simple et bien documentée.",
  },
  {
    icon: Link2,
    title: "Lien de paiement",
    desc: "Envoyez un lien de paiement par WhatsApp, SMS ou Email et recevez votre argent en un clic.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-36 bg-secondary/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Nos Solutions</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Des solutions de paiement pour chaque besoin
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            Découvrez nos outils conçus pour simplifier vos encaissements et accélérer votre croissance.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {solutions.map((s) => (
            <motion.div key={s.title} variants={item}>
              <Card className="group h-full bg-card border border-border/60 hover:border-primary/25 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-400">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-gradient-brand transition-all duration-300">
                    <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-[0.925rem] leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
