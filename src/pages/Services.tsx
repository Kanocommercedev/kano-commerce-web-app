import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;