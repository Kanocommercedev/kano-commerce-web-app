import Header from "@/components/Header";
import EnhancedHero from "@/components/EnhancedHero";
import HomeSummary from "@/components/HomeSummary";
import CommissionerMessage from "@/components/CommissionerMessage";
import Opportunities from "@/components/Opportunities";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EnhancedHero />
      <HomeSummary />
      <CommissionerMessage />
      <Opportunities />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
