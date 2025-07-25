import Header from "@/components/Header";
import News from "@/components/News";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <News />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NewsPage;