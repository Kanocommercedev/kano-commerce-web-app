import Header from "@/components/Header";
import EnhancedDepartments from "@/components/EnhancedDepartments";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Departments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <EnhancedDepartments />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Departments;