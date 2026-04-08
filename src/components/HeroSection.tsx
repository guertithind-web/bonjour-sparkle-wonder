import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
            🇲🇦 Solution 100% marocaine
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Avec <span className="text-gradient">LaCaissePay</span>, vous disposez d'une solution de paiement{" "}
            <span className="text-gradient">moderne, flexible</span> et 100% digitale.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Que vous vendiez en magasin, en ligne ou en déplacement, nous vous offrons les outils essentiels pour encaisser, suivre et développer votre activité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 text-base px-8 h-12 shadow-lg shadow-primary/25" asChild>
              <a href="#contact">
                <MessageCircle className="h-5 w-5" />
                Parler à un expert
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12" asChild>
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
