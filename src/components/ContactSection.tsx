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
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous et un expert vous contactera sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom & Prénom</Label>
                    <Input id="name" placeholder="Mohammed Alami" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@exemple.ma" required maxLength={255} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+212 6XX XXX XXX" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Volume de transactions</Label>
                    <Input id="volume" placeholder="Ex: 50 000 MAD/mois" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Décrivez votre besoin..." rows={4} required maxLength={1000} />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full h-12 text-base gap-2" disabled={loading}>
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
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Téléphone</p>
                <p className="text-muted-foreground text-sm">+212 5XX-XXXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-muted-foreground text-sm">contact@lacaissepay.ma</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Adresse</p>
                <p className="text-muted-foreground text-sm">Casablanca, Maroc</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
