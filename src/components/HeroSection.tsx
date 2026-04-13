import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCards from "@/assets/hero-cards.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-[hsl(346,65%,20%)] via-[hsl(346,65%,28%)] to-[hsl(348,60%,35%)]">
      {/* Background cards image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={heroCards}
          alt=""
          className="w-full h-full object-cover opacity-30 scale-110"
          aria-hidden="true"
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rose/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-rose/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.2] tracking-tight text-white mb-6">
            Avec{" "}
            <span className="inline-block bg-white/15 backdrop-blur-sm text-rose px-4 py-1 rounded-xl border border-white/20">
              LacaissePay
            </span>{" "}
            ,vous disposez d'une solution de paiement moderne, flexible et 100% digitale.
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Que vous vendiez en magasin, en ligne ou en déplacement, nous vous offrons les outils essentiels pour encaisser, suivre et développer votre activité.
          </p>

          <Button size="lg" className="px-10 h-14 rounded-xl bg-white text-primary hover:bg-white/90 font-bold text-base shadow-lg" asChild>
            <a href="#contact">Parler à un expert</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
