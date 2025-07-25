import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Clock, Award, DollarSign, AlertCircle } from "lucide-react";

const TradeLicenses = () => {
  const licenseTypes = [
    {
      title: "General Trading License",
      description: "For retail and wholesale businesses",
      fee: "₦25,000",
      duration: "12 months",
      icon: Shield
    },
    {
      title: "Import/Export License",
      description: "For international trade operations",
      fee: "₦75,000",
      duration: "24 months",
      icon: FileCheck
    },
    {
      title: "Manufacturing License",
      description: "For production and manufacturing businesses",
      fee: "₦50,000",
      duration: "24 months",
      icon: Award
    },
    {
      title: "Service Provider License",
      description: "For service-based businesses",
      fee: "₦20,000",
      duration: "12 months",
      icon: Clock
    }
  ];

  const applicationProcess = [
    "Complete the trade license application form",
    "Submit required supporting documents",
    "Pay applicable fees",
    "Attend verification meeting if required",
    "Receive your trade license certificate"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-red to-government-red-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-government-gold" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trade Licenses</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Obtain the necessary licenses to conduct legitimate trade activities in Kano State. 
              We offer various license categories to suit different business types.
            </p>
            <Button size="lg" className="bg-government-gold hover:bg-government-gold-light text-government-red font-semibold">
              Apply for License
            </Button>
          </div>
        </section>

        {/* License Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Available License Types</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the appropriate license for your business operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {licenseTypes.map((license, index) => {
                const Icon = license.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-professional transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-government-red to-government-red-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{license.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="mb-4">{license.description}</CardDescription>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <DollarSign className="h-4 w-4 text-government-green" />
                          <span className="font-semibold text-government-green">{license.fee}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{license.duration}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-government-red hover:bg-government-red-dark">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Application Process</h2>
                <p className="text-muted-foreground mb-8">
                  Follow these steps to apply for your trade license efficiently.
                </p>
                
                <div className="space-y-4">
                  {applicationProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-government-red text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="shadow-professional border-government-red/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-6 w-6 text-government-red" />
                    <CardTitle className="text-xl">Important Notice</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    All trade licenses must be renewed annually or biennially depending on the license type. 
                    Operating without a valid license may result in penalties.
                  </p>
                  <div className="bg-government-red/10 p-4 rounded-lg">
                    <p className="text-sm text-government-red font-semibold">
                      Processing Time: 5-10 business days
                    </p>
                  </div>
                  <Button className="w-full bg-government-red hover:bg-government-red-dark">
                    Download Application Form
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

export default TradeLicenses;