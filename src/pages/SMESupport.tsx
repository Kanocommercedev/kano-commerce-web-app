import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, TrendingUp, BookOpen, Handshake, CreditCard } from "lucide-react";

const SMESupport = () => {
  const supportPrograms = [
    {
      title: "Business Training & Mentorship",
      description: "Comprehensive training programs covering business management, financial literacy, and market strategies.",
      icon: BookOpen,
      benefits: ["Free training sessions", "Expert mentorship", "Networking opportunities"]
    },
    {
      title: "Access to Finance",
      description: "Connect with financial institutions and access micro-credit facilities at competitive rates.",
      icon: CreditCard,
      benefits: ["Low-interest loans", "Collateral-free options", "Quick approval process"]
    },
    {
      title: "Market Linkage",
      description: "Connect small businesses with larger markets and procurement opportunities.",
      icon: Handshake,
      benefits: ["Government contracts", "Export opportunities", "Supply chain integration"]
    },
    {
      title: "Technology Support",
      description: "Digital transformation assistance and access to modern business tools and technologies.",
      icon: TrendingUp,
      benefits: ["Digital marketing", "E-commerce setup", "Technology training"]
    }
  ];

  const eligibilityCriteria = [
    "Small or Medium Enterprise registered in Kano State",
    "Annual turnover not exceeding ₦100 million",
    "Employs fewer than 200 people",
    "Has been in operation for at least 6 months",
    "Demonstrates growth potential and sustainability"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-government-gold to-government-gold-light text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-government-green" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-government-green">SME Support Programs</h1>
            <p className="text-xl text-government-green/90 max-w-3xl mx-auto mb-8">
              Empowering Small and Medium Enterprises through comprehensive support programs, 
              training, financing, and market access opportunities.
            </p>
            <Button size="lg" className="bg-government-green hover:bg-government-green-dark text-white font-semibold">
              Join Support Program
            </Button>
          </div>
        </section>

        {/* Support Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Support Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to help SMEs grow and thrive in the competitive market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {supportPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-professional transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-government-gold to-government-gold-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-government-green" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {program.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-government-green mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-government-gold rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-6 bg-government-gold hover:bg-government-gold-light text-government-green">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Eligibility & Application */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
                <p className="text-muted-foreground mb-8">
                  To qualify for our SME support programs, your business must meet the following criteria:
                </p>
                
                <div className="space-y-4">
                  {eligibilityCriteria.map((criteria, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-government-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-government-green">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{criteria}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="shadow-professional h-fit">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-government-gold" />
                  <CardTitle className="text-2xl">Join Our Community</CardTitle>
                  <CardDescription>
                    Become part of a thriving community of successful entrepreneurs
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-government-green">500+</div>
                      <div className="text-sm text-muted-foreground">SMEs Supported</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-government-gold">₦2B+</div>
                      <div className="text-sm text-muted-foreground">Funding Facilitated</div>
                    </div>
                  </div>
                  <Button className="w-full bg-government-green hover:bg-government-green-dark">
                    Apply Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Applications are processed within 7-14 business days
                  </p>
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

export default SMESupport;