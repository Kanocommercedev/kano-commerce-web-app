import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Factory, TrendingUp, Users, Briefcase, ArrowRight, Target, Globe, Zap, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const EnhancedDepartments = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredDept, setHoveredDept] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const departments = [
    {
      icon: Factory,
      title: "Industry Development",
      subtitle: "Manufacturing Excellence",
      description: "Promoting industrial growth and manufacturing excellence across Kano State with cutting-edge technology and sustainable practices.",
      services: ["Industrial Licensing", "Manufacturing Support", "Technology Transfer", "Industrial Parks"],
      color: "bg-government-green",
      gradient: "from-government-green to-government-green-dark",
      stats: { projects: "150+", investments: "₦25B", jobs: "50K+" },
      achievements: ["Leading industrial hub", "Modern manufacturing", "Sustainable practices", "Innovation centers"]
    },
    {
      icon: TrendingUp,
      title: "Trade & Investment",
      subtitle: "Global Commerce Gateway",
      description: "Facilitating domestic and international trade opportunities for businesses, connecting Kano to global markets.",
      services: ["Trade Facilitation", "Export Promotion", "Investment Attraction", "Market Development"],
      color: "bg-government-gold",
      gradient: "from-government-gold to-yellow-500",
      stats: { partners: "200+", exports: "₦40B", markets: "35" },
      achievements: ["International partnerships", "Export excellence", "Market expansion", "Trade facilitation"]
    },
    {
      icon: Users,
      title: "Cooperative Services",
      subtitle: "Community Empowerment",
      description: "Supporting cooperative societies and group enterprises for economic empowerment and community development.",
      services: ["Cooperative Registration", "Training Programs", "Financial Assistance", "Group Management"],
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-800",
      stats: { cooperatives: "500+", members: "25K", funds: "₦5B" },
      achievements: ["Community development", "Financial inclusion", "Capacity building", "Group enterprises"]
    },
    {
      icon: Briefcase,
      title: "SME Support",
      subtitle: "Entrepreneurial Excellence",
      description: "Empowering small and medium enterprises with resources, guidance, and innovative support programs.",
      services: ["Business Development", "Capacity Building", "Access to Finance", "Mentorship Programs"],
      color: "bg-purple-600",
      gradient: "from-purple-600 to-purple-800",
      stats: { smes: "1000+", funding: "₦15B", success: "85%" },
      achievements: ["Startup support", "Growth acceleration", "Innovation hubs", "Mentorship programs"]
    }
  ];

  const keyInitiatives = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive strategic planning for sustainable economic development"
    },
    {
      icon: Globe,
      title: "International Relations",
      description: "Building global partnerships and trade relationships"
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Leveraging technology for modern business solutions"
    },
    {
      icon: Shield,
      title: "Business Protection",
      description: "Ensuring secure and compliant business environment"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="departments" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-government-green-light/30 to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-government-gold/10 rounded-full translate-x-1/2 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Badge className="mb-4 px-4 py-2 bg-government-green text-white">
            Our Departments
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-government-green mb-6">
            Specialized Expertise for{" "}
            <span className="text-government-gold">Every Business Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our specialized departments work in harmony to drive commerce and industry development, 
            offering comprehensive solutions tailored to your business requirements.
          </p>
        </div>

        {/* Key Initiatives Bar */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-4 gap-6">
            {keyInitiatives.map((initiative, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-lg shadow-professional hover-scale transition-all duration-300 animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <initiative.icon className="h-10 w-10 text-government-green mx-auto mb-4" />
                <h4 className="font-bold text-government-green mb-2">{initiative.title}</h4>
                <p className="text-sm text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-16 ${isVisible ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
          {departments.map((dept, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-professional-lg overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white"
              onMouseEnter={() => setHoveredDept(index)}
              onMouseLeave={() => setHoveredDept(null)}
            >
              {/* Department Header */}
              <div className={`relative h-32 bg-gradient-to-r ${dept.gradient} text-white p-6 flex items-center justify-between overflow-hidden`}>
                <div className="flex items-center space-x-4 z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <dept.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{dept.title}</h3>
                    <p className="text-white/90 text-sm">{dept.subtitle}</p>
                  </div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>

                {/* Services Grid */}
                <div>
                  <h4 className="font-semibold text-government-green mb-3 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Key Services
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {dept.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex} 
                        className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                          hoveredDept === index ? 'bg-government-green-light' : 'bg-gray-50'
                        }`}
                      >
                        <div className="w-2 h-2 bg-government-gold rounded-full"></div>
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div className="bg-government-green-light p-4 rounded-lg">
                  <h4 className="font-semibold text-government-green mb-3">Department Impact</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(dept.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-government-green">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-government-green mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dept.achievements.map((achievement, achIndex) => (
                      <Badge 
                        key={achIndex} 
                        variant="outline" 
                        className="justify-start p-2 text-xs border-government-green/30"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="government" 
                  className="w-full group-hover:scale-105 transition-all duration-300"
                >
                  Explore Department
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Department Collaboration Section */}
        <div className={`${isVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
          <Card className="border-0 shadow-professional-lg bg-gradient-to-r from-government-green to-government-green-dark text-white overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Integrated Department Solutions
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Our departments don't work in isolation. We provide integrated solutions that 
                    leverage the expertise of multiple departments to deliver comprehensive support 
                    for your business needs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-government-gold rounded-full"></div>
                      <span className="text-sm">Cross-departmental project management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-government-gold rounded-full"></div>
                      <span className="text-sm">Unified business support services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-government-gold rounded-full"></div>
                      <span className="text-sm">Integrated digital platforms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-government-gold rounded-full"></div>
                      <span className="text-sm">Collaborative innovation initiatives</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <h4 className="text-2xl font-bold text-government-gold mb-2">24/7</h4>
                    <p className="text-white/90 mb-4">Department Coordination</p>
                    <p className="text-sm text-white/80">
                      Seamless collaboration across all departments for your success
                    </p>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-government-gold/20 rounded-full animate-bounce-slow"></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="gold" size="lg" className="flex-1">
                  Contact All Departments
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-white/10 border-white text-white hover:bg-white hover:text-government-green">
                  Download Organization Chart
                </Button>
              </div>
              
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-government-gold/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnhancedDepartments;