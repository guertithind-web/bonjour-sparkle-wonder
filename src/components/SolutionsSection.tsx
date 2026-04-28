import { motion } from "framer-motion";
import solDashboard from "@/assets/sol-dashboard.png";
import solCards from "@/assets/sol-cards.png";
import solQrcode from "@/assets/sol-qrcode.png";
import solTpe from "@/assets/sol-tpe.png";
import solEcommerce from "@/assets/sol-ecommerce.png";
import solPaymentLink from "@/assets/sol-paymentlink.png";

const solutions = [
  {
    title: "Compte professionnel digital",
    desc: "Ouvrez votre compte pro en quelques minutes et accédez à une plateforme sécurisée, conçue pour optimiser vos flux financiers et accélérer votre croissance.",
    image: solDashboard,
    alt: "Dashboard LaCaissePay - Compte professionnel",
  },
  {
    title: "Carte bancaire LaCaissePay",
    desc: "Centralisez toutes vos dépenses, contrôlez vos paiements et gardez une visibilité totale grâce à une interface 100% digitale et intuitive.",
    image: solCards,
    alt: "Cartes bancaires LaCaissePay",
  },
  {
    title: "QR Code de paiement",
    desc: "Une technologie simple et efficace : vos clients scannent, vous encaissez instantanément. Idéal pour les commerces rapides et les services mobiles.",
    image: solQrcode,
    alt: "QR Code paiement mobile",
  },
  {
    title: "Terminal de paiement nouvelle génération",
    desc: "Un TPE intelligent, compact et connecté, pensé pour des encaissements rapides, fiables et adaptés aux environnements à fort trafic.",
    image: solTpe,
    alt: "Terminal de paiement TPE LaCaissePay",
  },
  {
    title: "Intégration paiement e-commerce",
    desc: "Activez le paiement en ligne sur votre site de commande grâce à une intégration simple via plugin WordPress ou API. Une solution flexible pour adapter LaCaissePay à votre parcours d'achat digital.",
    image: solEcommerce,
    alt: "Intégration e-commerce WordPress",
  },
  {
    title: "Lien de paiement instantané",
    desc: "Transformez vos conversations WhatsApp, SMS ou email en transactions sécurisées. Un outil puissant pour les ventes à distance et les paiements rapides.",
    image: solPaymentLink,
    alt: "Lien de paiement WhatsApp",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight">
            Des solutions de paiement intelligentes
            <br />
            pour <span className="text-gradient">développer votre activité.</span>
          </h2>
        </div>

        {/* Grille 2 colonnes avec hauteurs asymétriques par ligne */}
        <div className="grid grid-cols-2 gap-4">
          {solutions.map((s, i) => {
            const isPaymentLink = s.image === solPaymentLink;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-[360px] bg-card rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="px-6 pt-6 pb-2">
                  <h3 className="text-[1.15rem] font-bold mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.875rem] leading-relaxed">
                    {s.desc}
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
