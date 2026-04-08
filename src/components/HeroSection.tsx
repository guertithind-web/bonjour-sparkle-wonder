import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCards from "@/assets/hero-cards.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-[hsl(346,65%,20%)] via-[hsl(346,65%,28%)] to-[hsl(348,60%,35%)]">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rose/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-rose/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.2] tracking-tight text-white mb-6">
              Avec <span className="text-rose">LaCaissePay</span>, vous disposez d'une solution de paiement{" "}
              moderne, flexible et 100% digitale.
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              Que vous vendiez en magasin, en ligne ou en déplacement, nous vous offrons les outils essentiels pour encaisser, suivre et développer votre activité.
            </p>

            <Button size="lg" className="px-10 h-14 rounded-xl bg-white text-primary hover:bg-white/90 font-bold text-base shadow-lg" asChild>
              <a href="#contact">Parler à un expert</a>
            </Button>
          </motion.div>

          {/* Hero image - Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroCards}
              alt="Cartes bancaires LaCaissePay Visa"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
