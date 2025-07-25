import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Download, FileText, Search, Clock, Shield } from "lucide-react";

const FormsDocuments = () => {
  const documentCategories = [
    {
      title: "Business Registration Forms",
      icon: FileText,
      documents: [
        { name: "Business Registration Application Form", type: "PDF", size: "245 KB" },
        { name: "Change of Business Name Form", type: "PDF", size: "156 KB" },
        { name: "Business Certificate Renewal Form", type: "PDF", size: "198 KB" },
        { name: "Partnership Registration Form", type: "PDF", size: "312 KB" }
      ]
    },
    {
      title: "Trade License Documents",
      icon: Shield,
      documents: [
        { name: "Trade License Application Form", type: "PDF", size: "287 KB" },
        { name: "Import/Export License Form", type: "PDF", size: "356 KB" },
        { name: "Manufacturing License Application", type: "PDF", size: "423 KB" },
        { name: "License Renewal Application", type: "PDF", size: "201 KB" }
      ]
    },
    {
      title: "Investment & SME Forms",
      icon: Clock,
      documents: [
        { name: "Investment Registration Form", type: "PDF", size: "445 KB" },
        { name: "SME Support Program Application", type: "PDF", size: "234 KB" },
        { name: "Tax Incentive Application Form", type: "PDF", size: "167 KB" },
        { name: "Business Plan Template", type: "DOC", size: "890 KB" }
      ]
    }
  ];

  const guidelines = [
    {
      title: "Application Guidelines",
      description: "Step-by-step instructions for completing application forms",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "Document Requirements Checklist",
      description: "Complete list of required supporting documents for each service",
      type: "PDF",
      size: "756 KB"
    },
    {
      title: "Fee Structure Guide",
      description: "Comprehensive breakdown of all applicable fees and charges",
      type: "PDF", 
      size: "423 KB"
    },
    {
      title: "Frequently Asked Questions",
      description: "Common questions and detailed answers about our services",
      type: "PDF",
      size: "1.8 MB"
    }
  ];

  const onlineServices = [
    "Online application submission",
    "Document status tracking",
    "Payment processing",
    "Certificate verification",
    "Appointment scheduling",
    "Customer support chat"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-accent/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Newspaper className="h-16 w-16 mx-auto mb-6 text-government-gold" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Forms & Documents</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Download all necessary forms, applications, and supporting documents for your 
              business registration and licensing needs. Everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-government-gold hover:bg-government-gold-light text-accent font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Search Documents
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                View All Categories
              </Button>
            </div>
          </div>
        </section>

        {/* Document Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Document Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse documents by category and download what you need for your business operations
              </p>
            </div>
            
            <div className="space-y-8">
              {documentCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-professional transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-accent">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {category.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-foreground mb-1">{doc.name}</h4>
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <span>{doc.type}</span>
                                <span>•</span>
                                <span>{doc.size}</span>
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="ml-3 border-accent text-accent hover:bg-accent hover:text-white">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guidelines & Resources */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Guidelines & Resources</h2>
                <p className="text-muted-foreground mb-8">
                  Essential guides and resources to help you complete your applications correctly and efficiently.
                </p>
                
                <div className="space-y-4">
                  {guidelines.map((guide, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{guide.title}</CardTitle>
                            <CardDescription className="mt-1">{guide.description}</CardDescription>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-sm font-semibold text-accent">{guide.type}</div>
                            <div className="text-xs text-muted-foreground">{guide.size}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button className="w-full bg-accent hover:bg-accent/90">
                          <Download className="mr-2 h-4 w-4" />
                          Download Guide
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <Card className="shadow-professional h-fit">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Online Services</CardTitle>
                  <CardDescription>
                    Take advantage of our digital services for faster processing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {onlineServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Access Online Portal
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 • Secure • Fast Processing
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-4xl mx-auto shadow-professional border-accent/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">Need Help?</CardTitle>
                <CardDescription className="text-lg">
                  Our support team is here to assist you with any questions about forms and documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Online Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-government-green">1000+</div>
                    <div className="text-sm text-muted-foreground">Documents Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-government-gold">95%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Contact Support
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                    Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FormsDocuments;