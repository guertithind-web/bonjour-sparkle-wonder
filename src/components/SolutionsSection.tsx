import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import solDashboard from "@/assets/sol-dashboard.png";
import solCards from "@/assets/sol-cards.png";
import solQrcode from "@/assets/sol-qrcode.png";
import solTpe from "@/assets/sol-tpe.png";
import solEcommerce from "@/assets/sol-ecommerce.png";
import solPaymentLink from "@/assets/sol-paymentlink.png";

const SolutionsSection = () => {
  const { t } = useLang();

  const solutions = [
    { key: "1", image: solDashboard, alt: "Dashboard LaCaissePay" },
    { key: "2", image: solCards, alt: "Cartes bancaires LaCaissePay" },
    { key: "3", image: solQrcode, alt: "QR Code paiement mobile" },
    { key: "4", image: solTpe, alt: "Terminal de paiement TPE" },
    { key: "5", image: solEcommerce, alt: "Intégration e-commerce" },
    { key: "6", image: solPaymentLink, alt: "Lien de paiement WhatsApp" },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight">
            {t("solutions.title.l1")}
            <br />
            {t("solutions.title.l2.pre")}{" "}
            <span className="text-gradient">{t("solutions.title.l2.highlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {solutions.map((s, i) => {
            const isPaymentLink = s.image === solPaymentLink;
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-[340px] sm:h-[360px] bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="px-6 pt-6 pb-2">
                  <h3 className="text-[1.15rem] font-bold mb-2 tracking-tight">
                    {t(`sol.${s.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-[0.875rem] leading-relaxed">
                    {t(`sol.${s.key}.desc`)}
                  </p>
                </div>
                <div className="flex-1 flex justify-center items-end overflow-hidden min-h-0">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className={`${
                      isPaymentLink ? "w-[115%] max-w-none scale-110" : "w-full"
                    } max-h-full object-contain object-bottom`}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
