import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-52 md:pb-40 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-brand opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-brand opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-primary text-sm font-bold mb-10 border border-primary/10"
          >
            🇲🇦 Solution 100% marocaine
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] tracking-tight mb-8">
            Avec <span className="text-gradient">LaCaissePay</span>, vous disposez d'une solution de paiement{" "}
            <span className="text-gradient">moderne, flexible</span> et 100% digitale.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Que vous vendiez en magasin, en ligne ou en déplacement, nous vous offrons les outils essentiels pour encaisser, suivre et développer votre activité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button size="lg" className="gap-2.5 text-base px-10 h-14 rounded-xl bg-gradient-brand shadow-brand hover:shadow-brand-lg transition-shadow duration-300 font-bold" asChild>
              <a href="#contact">
                <MessageCircle className="h-5 w-5" />
                Parler à un expert
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2.5 text-base px-10 h-14 rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-accent font-bold" asChild>
              <a href="#contact">
                Demander une démo
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
