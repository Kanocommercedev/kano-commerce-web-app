import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Departments from "./pages/Departments";
import ServicesPage from "./pages/Services";
import NewsPage from "./pages/NewsPage";
import ResourcesPage from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import BusinessRegistration from "./pages/BusinessRegistration";
import TradeLicenses from "./pages/TradeLicenses";
import SMESupport from "./pages/SMESupport";
import InvestmentOpportunities from "./pages/InvestmentOpportunities";
import TradeFairs from "./pages/TradeFairs";
import FormsDocuments from "./pages/FormsDocuments";
import Gazette from "./pages/Gazette";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          <Route path="/trade-licenses" element={<TradeLicenses />} />
          <Route path="/sme-support" element={<SMESupport />} />
          <Route path="/investment-opportunities" element={<InvestmentOpportunities />} />
          <Route path="/trade-fairs" element={<TradeFairs />} />
          <Route path="/forms-documents" element={<FormsDocuments />} />
          <Route path="/gazette" element={<Gazette />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
