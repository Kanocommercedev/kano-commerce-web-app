import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Megaphone } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Business Registration Portal Launched",
      excerpt: "The Ministry announces the launch of a digital platform for faster business registration processes...",
      date: "2025-01-15",
      author: "Ministry Press Office",
      category: "Announcement",
      featured: true
    },
    {
      id: 2,
      title: "SME Development Program Opens Applications",
      excerpt: "Applications are now open for the 2025 Small and Medium Enterprise Development Program with ₦500M funding...",
      date: "2025-01-12",
      author: "SME Department",
      category: "Program",
      featured: false
    },
    {
      id: 3,
      title: "Kano Trade Fair 2025 Registration Begins",
      excerpt: "The annual Kano International Trade Fair registration is now open for local and international exhibitors...",
      date: "2025-01-10",
      author: "Trade Department",
      category: "Event",
      featured: true
    },
    {
      id: 4,
      title: "New Investment Incentives Announced",
      excerpt: "Governor announces new tax incentives and support packages for businesses investing in Kano State...",
      date: "2025-01-08",
      author: "Investment Unit",
      category: "Policy",
      featured: false
    },
    {
      id: 5,
      title: "Cooperative Societies Training Workshop",
      excerpt: "Free training workshop for cooperative society leaders on modern management practices and financial literacy...",
      date: "2025-01-05",
      author: "Cooperative Services",
      category: "Training",
      featured: false
    },
    {
      id: 6,
      title: "Digital Payment System Integration",
      excerpt: "New digital payment options now available for all government services and business registrations...",
      date: "2025-01-03",
      author: "IT Department",
      category: "Technology",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Announcement": "bg-government-green text-white",
      "Program": "bg-government-gold text-government-green",
      "Event": "bg-blue-500 text-white",
      "Policy": "bg-purple-500 text-white",
      "Training": "bg-orange-500 text-white",
      "Technology": "bg-cyan-500 text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-government-green-light/20 via-background to-government-green-light/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-government-gold/5 rounded-full translate-x-1/3 animate-float"></div>
      <div className="absolute bottom-20 left-0 w-56 h-56 bg-government-green/5 rounded-full -translate-x-1/3 animate-bounce-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="bg-government-green/10 text-government-green border-government-green/20 px-4 py-2">
              Latest Updates
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-green mb-6">
            News & Announcements
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Stay informed with the latest developments, policy updates, and opportunities from the Ministry of Commerce. 
            Your gateway to current government initiatives and business opportunities.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16 animate-scale-in">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-government-green to-transparent flex-1"></div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-government-green to-government-green-dark text-white px-4 py-2 rounded-full shadow-professional">
              <Megaphone className="h-5 w-5" />
              <h3 className="text-lg font-bold">Featured Stories</h3>
            </div>
            <div className="h-px bg-gradient-to-r from-government-green via-transparent to-transparent flex-1"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((item, index) => (
              <Card key={item.id} className={`group card-hover-lift overflow-hidden border-0 animate-scale-in animate-delay-${(index + 1) * 200}`}>
                <div className="h-56 bg-gradient-to-br from-government-green via-government-green-dark to-government-green relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-government-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-government-gold rounded-full animate-bounce-slow"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-float"></div>
                  
                  <div className="absolute top-6 left-6">
                    <Badge className={`${getCategoryColor(item.category)} shadow-lg group-hover:scale-105 transition-transform`}>
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-government-gold transition-colors line-height-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2 bg-government-green-light/50 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4 text-government-green" />
                        <span className="font-medium">{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <Button 
                      variant="government" 
                      size="sm" 
                      className="bg-gradient-to-r from-government-green to-government-green-dark hover:shadow-glow group-hover:scale-105 transition-all duration-300"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular News Grid */}
        <div className="animate-fade-in">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-government-green to-government-gold rounded-full"></div>
            <h3 className="text-2xl font-bold text-gradient-green">Recent Updates</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-government-green/20 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item, index) => (
              <Card key={item.id} className={`group card-hover-lift card-premium border-0 animate-scale-in animate-delay-${(index + 1) * 100}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-government-green group-hover:text-government-green-dark transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 relative overflow-hidden">
          <div className="bg-gradient-to-br from-government-green via-government-green-dark to-government-green text-white rounded-2xl p-10 text-center shadow-professional-lg">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-government-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 animate-bounce-slow"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient-gold">Stay Informed</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Subscribe to our newsletter to receive the latest updates, announcements, 
                and exclusive opportunities directly in your inbox. Join thousands of informed citizens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-xl text-government-green focus:outline-none focus:ring-2 focus:ring-government-gold shadow-lg transition-all duration-300 hover:shadow-xl"
                />
                <Button 
                  variant="gold" 
                  size="lg"
                  className="sm:w-auto bg-gradient-to-r from-government-gold to-yellow-400 hover:shadow-glow font-semibold px-8"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button variant="government-outline" size="lg">
            View All News & Archives <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;