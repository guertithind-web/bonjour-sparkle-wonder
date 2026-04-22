import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import whyTie from "@/assets/why-tie.png";
import whyRocket from "@/assets/why-rocket.png";
import whyShield from "@/assets/why-shield.png";
import whyHandHeart from "@/assets/why-hand-heart.png";

const reasons = [
  {
    image: whyTie,
    alt: "Cravate professionnelle",
    title: "Conçu pour les professionnels marocains",
    desc: "Auto-entrepreneurs, commerçants, indépendants : nous comprenons vos besoins.",
  },
  {
    image: whyRocket,
    alt: "Fusée rapide",
    title: "Rapide et sans complications",
    desc: "Pas de paperasse, pas de procédures lourdes. Tout est pensé pour vous simplifier la vie.",
  },
  {
    image: whyShield,
    alt: "Bouclier de sécurité",
    title: "Sécurité maximale",
    desc: "Vos données et transactions sont protégées par les standards les plus avancés du secteur.",
  },
  {
    image: whyHandHeart,
    alt: "Main tenant un cœur",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex gap-5 p-6 ${
                i % 2 === 0 ? "sm:border-r sm:border-border/60" : ""
              } ${i < reasons.length - 2 ? "border-b border-border/60" : ""} ${
                i === reasons.length - 2 ? "border-b sm:border-b-0 border-border/60" : ""
              }`}
            >
              <div className="w-14 h-14 flex items-center justify-center shrink-0 mt-1">
                <img src={r.image} alt={r.alt} className="w-full h-full object-contain" loading="lazy" />
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
