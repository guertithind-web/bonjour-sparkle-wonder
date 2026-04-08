import { motion } from "framer-motion";
import { Eye, Lock, Landmark, Scale } from "lucide-react";

const points = [
  { icon: Eye, title: "Transparence totale", desc: "Aucun frais caché. Des tarifs clairs et accessibles à tout moment." },
  { icon: Lock, title: "Sécurité de niveau bancaire", desc: "Chiffrement SSL, tokenisation et surveillance continue de vos données." },
  { icon: Landmark, title: "Conforme Bank Al-Maghrib", desc: "Nous respectons toutes les exigences réglementaires de la banque centrale." },
  { icon: Scale, title: "Cadre réglementé", desc: "Agrément et conformité aux normes financières marocaines en vigueur." },
];

const SecuritySection = () => {
  return (
    <section id="securite" className="py-24 md:py-36 bg-secondary/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Confiance</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Sécurité & Confiance
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            Votre sécurité est notre priorité absolue. Nous investissons dans les meilleurs standards pour protéger votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-brand transition-all duration-300">
                <p.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-[0.925rem] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
