import Header from "@/components/Header";
import EnhancedAbout from "@/components/EnhancedAbout";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <EnhancedAbout />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;