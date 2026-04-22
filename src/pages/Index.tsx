import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyUsSection from "@/components/WhyUsSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const SectionDivider = () => (
  <div className="container mx-auto px-4">
    <Separator className="bg-border/60" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <SolutionsSection />
      <SectionDivider />
      <WhyUsSection />
      <SectionDivider />
      <SecuritySection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
