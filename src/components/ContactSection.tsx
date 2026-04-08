import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message envoyé !", description: "Nous reviendrons vers vous rapidement." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            Remplissez le formulaire ci-dessous et un expert vous contactera sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="border border-border/60 rounded-2xl shadow-lg shadow-primary/[0.03]">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <Label htmlFor="name" className="text-sm font-semibold">Nom & Prénom</Label>
                    <Input id="name" placeholder="Mohammed Alami" required maxLength={100} className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="email@exemple.ma" required maxLength={255} className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="phone" className="text-sm font-semibold">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+212 6XX XXX XXX" required className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="volume" className="text-sm font-semibold">Volume de transactions</Label>
                    <Input id="volume" placeholder="Ex: 50 000 MAD/mois" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2.5 sm:col-span-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                    <Textarea id="message" placeholder="Décrivez votre besoin..." rows={5} required maxLength={1000} className="rounded-xl" />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full h-14 text-base gap-2.5 rounded-xl bg-gradient-brand shadow-brand hover:shadow-brand-lg transition-shadow duration-300 font-bold" disabled={loading}>
                      <Send className="h-5 w-5" />
                      {loading ? "Envoi en cours..." : "Envoyer"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pt-2"
          >
            {[
              { icon: Phone, label: "Téléphone", value: "+212 5XX-XXXXXX" },
              { icon: Mail, label: "Email", value: "contact@lacaissepay.ma" },
              { icon: MapPin, label: "Adresse", value: "Casablanca, Maroc" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5">{item.label}</p>
                  <p className="text-muted-foreground text-[0.925rem]">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
