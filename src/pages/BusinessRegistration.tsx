import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const BusinessRegistration = () => {
  const registrationSteps = [
    {
      step: "1",
      title: "Prepare Required Documents",
      description: "Gather all necessary documents including identification, business plan, and location permits.",
      icon: FileText
    },
    {
      step: "2", 
      title: "Submit Application",
      description: "Complete the business registration form and submit with required documents.",
      icon: Building2
    },
    {
      step: "3",
      title: "Processing & Review",
      description: "Our team reviews your application and conducts necessary verifications.",
      icon: Clock
    },
    {
      step: "4",
      title: "Certificate Issuance",
      description: "Receive your business registration certificate and commence operations.",
      icon: CheckCircle
    }
  ];

  const requirements = [
    "Valid means of identification (National ID, Driver's License, or International Passport)",
    "Completed business registration form",
    "Business plan or proposal",
    "Proof of business location/address",
    "Passport photographs (2 copies)",
    "Evidence of payment of registration fee"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-green to-government-green-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-government-gold" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Registration</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Register your business with the Kano State Ministry of Commerce and gain access to 
              official recognition, government support, and business opportunities.
            </p>
            <Button size="lg" className="bg-government-gold hover:bg-government-gold-light text-government-green font-semibold">
              Start Registration Process
            </Button>
          </div>
        </section>

        {/* Registration Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Registration Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to register your business with us
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {registrationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="text-center border-border/50 hover:shadow-professional transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-government-green to-government-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-government-green mb-2">Step {step.step}</div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Required Documents</h2>
                <p className="text-muted-foreground mb-8">
                  Ensure you have all the necessary documents before starting your registration process.
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-government-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="shadow-professional">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Need Assistance?</CardTitle>
                  <CardDescription>
                    Our team is ready to help you with your business registration process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-government-green" />
                    <span>+234 64 983 456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-government-green" />
                    <span>registration@commerce.kn.gov.ng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-government-green" />
                    <span>Ministry of Commerce, Kano State</span>
                  </div>
                  <Button className="w-full mt-6 bg-government-green hover:bg-government-green-dark">
                    Contact Support Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BusinessRegistration;