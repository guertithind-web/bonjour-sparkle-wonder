import { motion } from "framer-motion";
import { Eye, Lock, Landmark, Scale, ShieldCheck } from "lucide-react";
import bankAlMaghrib from "@/assets/bank-almaghrib.jpg";

const points = [
  {
    icon: Eye,
    title: "Transparence totale",
    desc: "Aucun frais caché. Vous savez exactement ce que vous payez.",
    useImage: false,
  },
  {
    icon: Lock,
    title: "Sécurité de niveau bancaire",
    desc: "Vos fonds sont protégés selon les standards des établissements financiers marocains.",
    useImage: false,
  },
  {
    icon: Landmark,
    title: "Conforme à Bank Al-Maghrib",
    desc: "LaCaissePay applique les directives réglementaires marocaines à chaque opération.",
    useImage: true,
  },
  {
    icon: Scale,
    title: "Un cadre réglementé et supervisé",
    desc: "Agent d'institution de paiement en partenariat avec des acteurs financiers agréés au Maroc.",
    useImage: false,
  },
  {
    icon: ShieldCheck,
    title: "Protection contre la fraude",
    desc: "Détection et prévention des transactions suspectes en temps réel pour sécuriser chaque paiement.",
    useImage: false,
  },
];

const SecuritySection = () => {
  return (
    <section id="securite" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Vos fonds sont en <span className="text-gradient italic">sécurité</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-left"
            >
              <div className="w-full aspect-square max-w-[160px] rounded-[2rem] bg-white flex items-center justify-center mb-4 shadow-sm">
                {p.useImage ? (
                  <img src={bankAlMaghrib} alt="Bank Al-Maghrib" className="w-full h-full object-contain rounded-[2rem]" />
                ) : (
                  <p.icon className="h-12 w-12 text-foreground" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="font-bold text-sm md:text-base mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
