import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, Newspaper, ArrowRight, Heart, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const HomeSummary = () => {
  const summaryCards = [
    {
      icon: Building2,
      title: "Our Departments",
      description: "Explore our specialized departments working to advance commerce and trade in Kano State.",
      link: "/departments",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: Briefcase,
      title: "Our Services",
      description: "Discover the comprehensive services we offer to support businesses and entrepreneurs.",
      link: "/services",
      color: "from-destructive/20 to-destructive/10"
    },
    {
      icon: Newspaper,
      title: "Latest News",
      description: "Stay updated with the latest announcements, policies, and developments.",
      link: "/news",
      color: "from-secondary/20 to-secondary/10"
    }
  ];

  const aboutHighlights = [
    {
      icon: Heart,
      title: "Our Mission",
      description: "To foster economic growth through strategic commerce development and business empowerment"
    },
    {
      icon: Shield,
      title: "Our Vision", 
      description: "To make Kano State the premier commercial destination in West Africa"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, innovation, and inclusive growth for all business stakeholders"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Quick Links Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-government-red mb-4">Quick Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fast access to our most requested services and resources
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { title: "Business Registration", icon: Building2, link: "/business-registration", color: "bg-gradient-to-br from-government-green to-government-green-dark" },
              { title: "Trade Licenses", icon: Shield, link: "/trade-licenses", color: "bg-gradient-to-br from-government-red to-government-red-dark" },
              { title: "SME Support", icon: Heart, link: "/sme-support", color: "bg-gradient-to-br from-government-gold to-government-gold-light" },
              { title: "Investment Opportunities", icon: Briefcase, link: "/investment-opportunities", color: "bg-gradient-to-br from-destructive to-destructive/80" },
              { title: "Trade Fairs", icon: Award, link: "/trade-fairs", color: "bg-gradient-to-br from-secondary to-secondary/80" },
              { title: "Forms & Documents", icon: Newspaper, link: "/forms-documents", color: "bg-gradient-to-br from-accent to-accent/80" },
              { title: "Gazette", icon: Shield, link: "/gazette", color: "bg-gradient-to-br from-primary to-primary/80" }
            ].map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <div className="bg-card rounded-xl p-6 text-center hover:shadow-professional transition-all duration-300 hover:scale-105 border border-border/50">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground leading-tight">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-government-red/10 mb-6">
            <Building2 className="h-8 w-8 text-government-red" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Strategic Services & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Empowering economic transformation through comprehensive commercial development, 
            strategic industry partnerships, and innovative business solutions that meet 
            international standards and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {summaryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:scale-105 border-border/50">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {card.description}
                  </CardDescription>
                  <Link to={card.link}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick About Section */}
        <div className="bg-card rounded-xl shadow-professional overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">About Our Ministry</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Kano State Ministry of Commerce, Industry, Cooperatives and Solid Minerals is dedicated to fostering economic growth, 
                supporting businesses, and creating opportunities for traders and entrepreneurs 
                across our great state. We serve as the bridge between government policy and 
                business success.
              </p>
              <div className="space-y-4 mb-8">
                {aboutHighlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-government-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="h-4 w-4 text-government-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about-us">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Read More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-government-green via-government-red/20 to-government-red p-8 lg:p-12 text-white">
              <Award className="h-12 w-12 text-secondary mb-4" />
              <h4 className="text-xl font-bold mb-3">Excellence in Service</h4>
              <p className="text-white/90 mb-6">
                Recognized for outstanding business support and economic development initiatives.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary">15K+</div>
                  <div className="text-sm text-white/80">Businesses Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">95%</div>
                  <div className="text-sm text-white/80">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSummary;