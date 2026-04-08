import { motion } from "framer-motion";
import dashboardLaptop from "@/assets/dashboard-laptop.jpg";
import carteBancaire from "@/assets/carte-bancaire.jpg";
import tpeDevice from "@/assets/tpe-device.jpg";
import phoneWhatsapp from "@/assets/phone-whatsapp.jpg";
import ecommerceLaptop from "@/assets/ecommerce-laptop.jpg";
import paymentLinkMsg from "@/assets/payment-link-msg.jpg";

const solutions = [
  {
    title: "Compte professionnel digital",
    desc: "Ouvrez votre compte pro en quelques minutes et accédez à une plateforme sécurisée, conçue pour optimiser vos flux financiers et accélérer votre croissance.",
    image: dashboardLaptop,
    alt: "Dashboard LaCaissePay - Compte professionnel",
  },
  {
    title: "Carte bancaire LaCaissePay",
    desc: "Centralisez toutes vos dépenses, contrôlez vos paiements et gardez une visibilité totale grâce à une interface 100% digitale et intuitive.",
    image: carteBancaire,
    alt: "Cartes bancaires LaCaissePay",
  },
  {
    title: "QR Code de paiement",
    desc: "Une technologie simple et efficace : vos clients scannent, vous encaissez instantanément. Idéal pour les commerces rapides et les services mobiles.",
    image: phoneWhatsapp,
    alt: "QR Code paiement mobile",
  },
  {
    title: "Terminal de paiement nouvelle génération",
    desc: "Un TPE intelligent, compact et connecté, pensé pour des encaissements rapides, fiables et adaptés aux environnements à fort trafic.",
    image: tpeDevice,
    alt: "Terminal de paiement TPE LaCaissePay",
  },
  {
    title: "Intégration paiement e-commerce",
    desc: "Activez le paiement en ligne sur votre site de commande grâce à une intégration simple via plugin WordPress ou API. Une solution flexible pour adapter LaCaissePay à votre parcours d'achat digital.",
    image: ecommerceLaptop,
    alt: "Intégration e-commerce WordPress",
  },
  {
    title: "Lien de paiement instantané",
    desc: "Transformez vos conversations WhatsApp, SMS ou email en transactions sécurisées. Un outil puissant pour les ventes à distance et les paiements rapides.",
    image: paymentLinkMsg,
    alt: "Lien de paiement WhatsApp",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Des solutions de paiement intelligentes
            <br />
            pour <span className="text-gradient">développer votre activité.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="p-8 pb-4">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-[0.925rem] leading-relaxed">{s.desc}</p>
              </div>
              <div className="px-8 pb-8 flex justify-center items-center">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full max-h-64 object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
