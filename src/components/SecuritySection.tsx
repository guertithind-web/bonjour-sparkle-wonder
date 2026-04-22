import { motion } from "framer-motion";
import { Eye, Lock, Scale } from "lucide-react";
import bankAlMaghrib from "@/assets/bank-almaghrib.jpg";

const points = [
  {
    icon: Eye,
    title: "Transparence totale",
    desc: "Aucun frais caché, aucune surprise. Vous gardez une visibilité complète sur vos coûts et savez exactement ce que vous payez.",
    useImage: false,
  },
  {
    icon: Lock,
    title: "Sécurité de niveau bancaire",
    desc: "Vos fonds sont protégés selon les mêmes standards que les établissements financiers marocains. Notre infrastructure garantit une protection maximale de votre argent et de vos transactions.",
    useImage: false,
  },
  {
    icon: null,
    title: "Conforme aux exigences de Bank Al-Maghrib",
    desc: "LacaissePay applique les directives réglementaires marocaines pour assurer fiabilité, transparence et conformité à chaque étape de vos opérations.",
    useImage: true,
  },
  {
    icon: Scale,
    title: "Un cadre réglementé et supervisé",
    desc: "Nous opérons dans le cadre d'un agent d'institution de paiement, en collaboration avec des partenaires financiers agréés au Maroc. Chaque transaction respecte les protocoles en vigueur.",
    useImage: false,
  },
];

const SecuritySection = () => {
  return (
    <section id="securite" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight">
            Vos fonds sont en <span className="text-gradient italic">sécurité</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-3xl mx-auto">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-full aspect-square max-w-[100px] rounded-2xl bg-white flex items-center justify-center mb-2 shadow-sm">
                  {p.useImage ? (
                    <img src={bankAlMaghrib} alt="Bank Al-Maghrib" className="w-full h-full object-contain rounded-2xl" />
                  ) : Icon ? (
                    <Icon className="h-7 w-7 md:h-9 md:w-9 text-foreground" strokeWidth={1.5} />
                  ) : null}
                </div>
                <h3 className="font-bold text-[0.7rem] md:text-xs mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-[0.6rem] md:text-[0.7rem] leading-snug">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
