import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCards from "@/assets/hero-cards.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(346,65%,20%)] via-[hsl(346,65%,28%)] to-[hsl(348,60%,35%)]">
      {/* Background cards image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroCards}
          alt=""
          className="w-full h-full object-cover opacity-35"
          aria-hidden="true"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[hsl(346,65%,22%)]/40 pointer-events-none" />

      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] tracking-tight text-white mb-8">
            Avec{" "}
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white px-5 py-1.5 rounded-2xl border border-white/20">
              LacaissePay
            </span>{" "}
            ,vous disposez d'une solution de paiement moderne, flexible et 100% digitale.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Que vous vendiez en magasin, en ligne ou en déplacement, nous vous offrons les outils essentiels pour encaisser, suivre et développer votre activité.
          </p>

          <Button size="lg" className="px-12 h-16 rounded-2xl bg-white text-primary hover:bg-white/90 font-bold text-lg shadow-lg" asChild>
            <a href="#contact">Parler à un expert</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
