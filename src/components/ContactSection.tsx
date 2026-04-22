import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Mail } from "lucide-react";
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
    <section id="contact" className="py-24 md:py-36 bg-secondary/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight">
            Contactez-nous
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Nom & Prénom</Label>
                <Input id="name" required maxLength={100} className="h-12 rounded-lg border-border bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Email</Label>
                <Input id="email" type="email" required maxLength={255} className="h-12 rounded-lg border-border bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Téléphone</Label>
                <Input id="phone" type="tel" required className="h-12 rounded-lg border-border bg-background" />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Volume de transactions par jour</Label>
              <RadioGroup name="volume" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="200000-293888" id="vol-1" />
                  <Label htmlFor="vol-1" className="text-sm font-normal text-foreground cursor-pointer">entre 200000 et 293888</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="290000-293888" id="vol-2" />
                  <Label htmlFor="vol-2" className="text-sm font-normal text-foreground cursor-pointer">entre 290000 et 293888</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="290000-350888" id="vol-3" />
                  <Label htmlFor="vol-3" className="text-sm font-normal text-foreground cursor-pointer">entre 290000 et 350888</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Message</Label>
              <Textarea id="message" rows={6} required maxLength={1000} className="rounded-lg border-border bg-background" />
            </div>

            <div>
              <Button
                type="submit"
                size="lg"
                className="px-16 h-14 text-lg rounded-full bg-gradient-brand shadow-brand hover:shadow-brand-lg transition-shadow duration-300 font-bold"
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyez"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
