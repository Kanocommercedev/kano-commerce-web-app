import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, MapPin, Users, Star, Globe } from "lucide-react";

const TradeFairs = () => {
  const upcomingFairs = [
    {
      title: "Kano International Trade Fair 2025",
      date: "March 15-25, 2025",
      location: "Kano International Trade Fair Complex",
      description: "The largest trade exhibition in Northern Nigeria featuring local and international exhibitors.",
      sectors: ["Agriculture", "Manufacturing", "Technology", "Fashion"],
      status: "Registration Open"
    },
    {
      title: "West Africa SME Expo",
      date: "June 10-15, 2025", 
      location: "Kano State Trade Center",
      description: "Focused on small and medium enterprises with networking and business matching opportunities.",
      sectors: ["SME", "Startups", "Innovation", "Finance"],
      status: "Early Bird"
    },
    {
      title: "Agricultural Products Exhibition",
      date: "September 20-30, 2025",
      location: "Dawanau Market Complex",
      description: "Showcase of agricultural products, equipment, and processing technologies.",
      sectors: ["Agriculture", "Food Processing", "Equipment", "Export"],
      status: "Planning Phase"
    }
  ];

  const benefits = [
    {
      title: "Market Expansion",
      description: "Access new markets and connect with potential customers from across West Africa",
      icon: Globe
    },
    {
      title: "Networking Opportunities", 
      description: "Build valuable business relationships with industry leaders and potential partners",
      icon: Users
    },
    {
      title: "Brand Visibility",
      description: "Showcase your products and services to thousands of trade visitors",
      icon: Star
    },
    {
      title: "Business Matching",
      description: "Connect with pre-qualified buyers and suppliers through our matching service",
      icon: Award
    }
  ];

  const participationPackages = [
    {
      name: "Standard Booth",
      price: "₦150,000",
      size: "3m x 3m",
      includes: ["Basic booth setup", "2 exhibitor passes", "Listing in catalog", "Basic furniture"]
    },
    {
      name: "Premium Booth", 
      price: "₦300,000",
      size: "6m x 3m",
      includes: ["Premium booth design", "4 exhibitor passes", "Featured catalog listing", "Premium furniture", "Welcome reception"]
    },
    {
      name: "Pavilion Space",
      price: "₦500,000",
      size: "9m x 6m",
      includes: ["Custom pavilion design", "8 exhibitor passes", "Premium branding", "VIP lounge access", "Dedicated marketing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-government-gold" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trade Fairs & Exhibitions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Participate in premier trade events that connect businesses, showcase innovations, 
              and create opportunities for growth across diverse sectors.
            </p>
            <Button size="lg" className="bg-government-gold hover:bg-government-gold-light text-secondary font-semibold">
              Register for Trade Fair
            </Button>
          </div>
        </section>

        {/* Upcoming Trade Fairs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Trade Fairs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't miss these exciting opportunities to showcase your business and connect with industry leaders
              </p>
            </div>
            
            <div className="space-y-8">
              {upcomingFairs.map((fair, index) => (
                <Card key={index} className="border-border/50 hover:shadow-professional transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-secondary">{fair.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{fair.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{fair.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          fair.status === 'Registration Open' ? 'bg-government-green/10 text-government-green' :
                          fair.status === 'Early Bird' ? 'bg-government-gold/10 text-government-gold' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {fair.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 text-base">
                      {fair.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fair.sectors.map((sector, idx) => (
                        <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                          {sector}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-secondary hover:bg-secondary/90">
                        Register as Exhibitor
                      </Button>
                      <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                        Get More Information
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Participation */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Participate?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the valuable benefits of participating in our trade fairs and exhibitions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center border-border/50 hover:shadow-professional transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Participation Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Participation Packages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the package that best suits your business needs and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {participationPackages.map((package_item, index) => (
                <Card key={index} className={`border-border/50 hover:shadow-professional transition-all duration-300 ${index === 1 ? 'border-secondary/50 relative' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold">{package_item.name}</CardTitle>
                    <div className="text-3xl font-bold text-secondary mt-2">{package_item.price}</div>
                    <CardDescription className="text-muted-foreground">
                      Booth Size: {package_item.size}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {package_item.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${index === 1 ? 'bg-secondary hover:bg-secondary/90' : 'bg-secondary/80 hover:bg-secondary'}`}>
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TradeFairs;