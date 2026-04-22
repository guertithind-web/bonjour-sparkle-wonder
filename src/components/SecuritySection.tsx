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
    <section id="securite" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Vos fonds sont en <span className="text-gradient italic">sécurité</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-left"
            >
              <div className="w-full aspect-square max-w-[220px] rounded-[2.5rem] bg-white flex items-center justify-center mb-6 shadow-sm">
                {p.useImage ? (
                  <img src={bankAlMaghrib} alt="Bank Al-Maghrib" className="w-full h-full object-contain rounded-[2.5rem]" />
                ) : (
                  <p.icon className="h-16 w-16 text-foreground" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="font-bold text-base mb-4">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
