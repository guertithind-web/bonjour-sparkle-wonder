import { motion } from "framer-motion";
import { Eye, Lock, Scale } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import bankAlMaghrib from "@/assets/bank-almaghrib.jpg";

const SecuritySection = () => {
  const { t } = useLang();

  const points = [
    { key: "1", icon: Eye, useImage: false },
    { key: "2", icon: Lock, useImage: false },
    { key: "3", icon: null, useImage: true },
    { key: "4", icon: Scale, useImage: false },
  ];

  return (
    <section id="securite" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t("sec.title.pre")} <span className="text-gradient">{t("sec.title.highlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center flex flex-col items-center px-1"
              >
                <div className="w-full aspect-square max-w-[130px] sm:max-w-[110px] md:max-w-[130px] rounded-2xl bg-white flex items-center justify-center mb-3 shadow-sm">
                  {p.useImage ? (
                    <img src={bankAlMaghrib} alt="Bank Al-Maghrib" className="w-full h-full object-contain rounded-2xl" />
                  ) : Icon ? (
                    <Icon className="h-10 w-10 sm:h-8 sm:w-8 md:h-10 md:w-10 text-foreground" strokeWidth={1.5} />
                  ) : null}
                </div>
                <h3 className="font-bold text-sm sm:text-xs md:text-sm mb-1.5">{t(`sec.${p.key}.title`)}</h3>
                <p className="text-muted-foreground text-xs sm:text-[0.7rem] md:text-xs leading-snug">{t(`sec.${p.key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
