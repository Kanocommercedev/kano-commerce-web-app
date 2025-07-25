import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactUs;