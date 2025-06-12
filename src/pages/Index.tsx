
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarketStats from "@/components/MarketStats";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MarketStats />
      <Features />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
