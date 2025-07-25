import Header from "@/components/Header";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Resources />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ResourcesPage;