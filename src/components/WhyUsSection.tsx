import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Zap, ShieldCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Conçu pour les professionnels marocains",
    desc: "Adapté au marché local, aux réglementations et aux habitudes de paiement au Maroc.",
  },
  {
    icon: Zap,
    title: "Rapide et sans complications",
    desc: "Inscription simple, activation rapide et support réactif à chaque étape.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité maximale",
    desc: "Vos transactions et données sont protégées par les standards de sécurité les plus élevés.",
  },
  {
    icon: Layers,
    title: "Solution tout-en-un",
    desc: "Un seul outil pour gérer vos paiements en magasin, en ligne et à distance.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="avantages" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pourquoi nous</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Pourquoi choisir LaCaissePay ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-10 h-12 text-base shadow-lg shadow-primary/25" asChild>
            <a href="#contact">Je suis intéressé</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
