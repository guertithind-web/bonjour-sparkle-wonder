import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Zap, ShieldCheck, Layers, ArrowRight } from "lucide-react";

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
    <section id="avantages" className="py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Pourquoi nous</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Pourquoi choisir LaCaissePay ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-brand transition-all duration-300">
                <r.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-[0.925rem] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-12 h-14 text-base rounded-xl bg-gradient-brand shadow-brand hover:shadow-brand-lg transition-shadow duration-300 font-bold gap-2.5" asChild>
            <a href="#contact">
              Je suis intéressé
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
