import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Factory, Wheat, Building, MapPin } from "lucide-react";

const InvestmentOpportunities = () => {
  const investmentSectors = [
    {
      title: "Agriculture & Agro-Processing",
      description: "Opportunities in rice production, groundnut processing, and livestock farming with government incentives.",
      potential: "₦50B+ Market",
      roi: "15-25% ROI",
      icon: Wheat,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Manufacturing & Industry",
      description: "Textile manufacturing, leather processing, and industrial parks with modern infrastructure.",
      potential: "₦100B+ Market",
      roi: "20-30% ROI", 
      icon: Factory,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Commercial Real Estate",
      description: "Shopping complexes, office buildings, and warehouses in strategic commercial zones.",
      potential: "₦75B+ Market",
      roi: "12-18% ROI",
      icon: Building,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Trade & Commerce",
      description: "Import/export businesses, wholesale markets, and distribution networks across West Africa.",
      potential: "₦200B+ Market",
      roi: "18-35% ROI",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const investmentIncentives = [
    "Tax holidays for pioneer industries (3-5 years)",
    "Import duty exemptions on machinery and equipment",
    "Free trade zone benefits and facilities",
    "One-stop investment facilitation services",
    "Land acquisition support at competitive rates",
    "Access to skilled workforce and training programs"
  ];

  const keyLocations = [
    {
      name: "Kano Free Trade Zone",
      description: "Strategic location for manufacturing and export businesses",
      advantages: ["Tax incentives", "Modern infrastructure", "Export facilities"]
    },
    {
      name: "Dawanau International Market",
      description: "Largest grain market in West Africa with massive trade potential",
      advantages: ["Agricultural hub", "Regional access", "Storage facilities"]
    },
    {
      name: "Bompai Industrial Area",
      description: "Established industrial zone with existing manufacturing base",
      advantages: ["Power supply", "Road network", "Industrial services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-destructive to-destructive/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-6 text-government-gold" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Opportunities</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover lucrative investment opportunities in Kano State's thriving economy. 
              From agriculture to manufacturing, we offer diverse sectors with attractive returns.
            </p>
            <Button size="lg" className="bg-government-gold hover:bg-government-gold-light text-destructive font-semibold">
              Explore Opportunities
            </Button>
          </div>
        </section>

        {/* Investment Sectors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">High-Potential Investment Sectors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore sectors with proven growth potential and government support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {investmentSectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-professional transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{sector.title}</CardTitle>
                          <CardDescription className="text-muted-foreground mb-4">
                            {sector.description}
                          </CardDescription>
                          <div className="flex space-x-4">
                            <div className="text-center">
                              <div className="text-sm font-semibold text-government-green">{sector.potential}</div>
                              <div className="text-xs text-muted-foreground">Market Size</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-semibold text-destructive">{sector.roi}</div>
                              <div className="text-xs text-muted-foreground">Expected ROI</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-destructive hover:bg-destructive/90">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment Incentives */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Investment Incentives</h2>
                <p className="text-muted-foreground mb-8">
                  Kano State offers attractive incentives to encourage both local and foreign investment.
                </p>
                
                <div className="space-y-4">
                  {investmentIncentives.map((incentive, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">✓</span>
                      </div>
                      <p className="text-muted-foreground">{incentive}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Investment Locations</h3>
                {keyLocations.map((location, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-destructive" />
                        <CardTitle className="text-lg">{location.name}</CardTitle>
                      </div>
                      <CardDescription>{location.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {location.advantages.map((advantage, idx) => (
                          <span key={idx} className="px-3 py-1 bg-destructive/10 text-destructive text-xs rounded-full">
                            {advantage}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-4xl mx-auto shadow-professional border-destructive/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">Ready to Invest?</CardTitle>
                <CardDescription className="text-lg">
                  Join the growing community of successful investors in Kano State
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-destructive">200+</div>
                    <div className="text-sm text-muted-foreground">Active Investors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-government-green">₦500B+</div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-government-gold">50,000+</div>
                    <div className="text-sm text-muted-foreground">Jobs Created</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90">
                    Schedule Investment Meeting
                  </Button>
                  <Button size="lg" variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">
                    Download Investment Guide
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

export default InvestmentOpportunities;