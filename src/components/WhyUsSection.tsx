import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Zap, ShieldCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Conçu pour les professionnels marocains",
    desc: "Auto-entrepreneurs, commerçants, indépendants : nous comprenons vos besoins.",
  },
  {
    icon: Zap,
    title: "Rapide et sans complications",
    desc: "Pas de paperasse, pas de procédures lourdes. Tout est pensé pour vous simplifier la vie.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité maximale",
    desc: "Vos données et transactions sont protégées par les standards les plus avancés du secteur.",
  },
  {
    icon: Layers,
    title: "Une solution tout-en-un",
    desc: "Plus besoin de jongler entre plusieurs services : vos paiements, votre compte pro et votre gestion financière sont regroupés au même endroit.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="avantages" className="py-24 md:py-36 bg-secondary/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Pourquoi choisir <span className="text-gradient">LaCaissePay</span> ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 mt-1">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-[0.925rem] leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-12 h-14 text-base rounded-full bg-gradient-brand shadow-brand hover:shadow-brand-lg transition-shadow duration-300 font-bold" asChild>
            <a href="#contact">Je suis intéressé</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
