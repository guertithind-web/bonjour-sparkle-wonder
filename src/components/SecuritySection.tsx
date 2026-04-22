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
    <section id="securite" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Vos fonds sont en <span className="text-gradient italic">sécurité</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-left"
              >
                <div className="w-full aspect-square max-w-[180px] rounded-[2rem] bg-white flex items-center justify-center mb-5 shadow-sm">
                  {p.useImage ? (
                    <img src={bankAlMaghrib} alt="Bank Al-Maghrib" className="w-full h-full object-contain rounded-[2rem]" />
                  ) : Icon ? (
                    <Icon className="h-14 w-14 text-foreground" strokeWidth={1.5} />
                  ) : null}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
