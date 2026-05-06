import ContactSection from "@/components/ContactSection";
import Cursor from "@/components/Cursor";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OrderModal from "@/components/OrderModal";
import { OrderProvider } from "@/components/OrderContext";
import PricingSection from "@/components/PricingSection";
import StickyOrderButton from "@/components/StickyOrderButton";
import Testimonials from "@/components/Testimonials";
import TestimonialsHighlight from "@/components/TestimonialsHighlight";
import TrustSection from "@/components/TrustSection";

export default function Page() {
  return (
    <OrderProvider>
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="hairline mx-auto max-w-6xl" />
        <TestimonialsHighlight />
        <PricingSection />
        <div className="hairline mx-auto max-w-6xl" />
        <Testimonials />
        <div className="hairline mx-auto max-w-6xl" />
        <HowItWorks />
        <div className="hairline mx-auto max-w-6xl" />
        <TrustSection />
        <div className="hairline mx-auto max-w-6xl" />
        <FAQ />
        <div className="hairline mx-auto max-w-6xl" />
        <ContactSection />
      </main>
      <Footer />
      <StickyOrderButton />
      <OrderModal />
    </OrderProvider>
  );
}
