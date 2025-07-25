import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Users, 
  TrendingUp, 
  Building, 
  Globe, 
  ArrowRight,
  Shield,
  Handshake,
  ChevronRight
} from "lucide-react";

const EnhancedAbout = () => {
  const objectives = [
    {
      icon: Building,
      title: "Business Registration & Licensing",
      description: "Facilitating business registration and licensing to encourage new businesses and entrepreneurship."
    },
    {
      icon: TrendingUp,
      title: "SME Development",
      description: "Providing training and capacity building programs for small and medium-sized enterprises (SMEs) to enhance their competitiveness."
    },
    {
      icon: Globe,
      title: "Trade Promotion",
      description: "Promoting exports and imports by establishing trade relationships with other states and countries, as well as providing necessary support services."
    },
    {
      icon: Shield,
      title: "Consumer Protection",
      description: "Enforcing consumer protection laws and regulations to ensure fair business practices and protect consumers' rights."
    },
    {
      icon: Handshake,
      title: "Investment Promotion",
      description: "Encouraging investment in the industrial sector through incentives and partnerships."
    },
    {
      icon: Users,
      title: "Informal Sector Support",
      description: "Developing and implementing policies that support the growth of the informal sector, which is a significant contributor to Kano's economy."
    }
  ];

  const additionalServices = [
    "Collaborating with other government agencies and stakeholders to address challenges facing businesses",
    "Encouraging the use of technology in business operations to improve efficiency and competitiveness",
    "Promoting trade fairs, exhibitions, and other events to showcase Kano's products and services",
    "Providing advisory services to businesses on various aspects of operations, including taxation, marketing, and human resources management"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-government-green-light/10 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-government-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-government-green/5 rounded-full -translate-x-1/2 translate-y-1/2 animate-bounce-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="bg-government-green/10 text-government-green border-government-green/20 px-4 py-2 text-sm">
              About Our Ministry
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-green mb-6">
            Empowering Kano's Economy
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Ministry of Commerce, Industry, Cooperatives and Solid Minerals is dedicated to promoting 
            economic growth, entrepreneurship, and trade within Kano State, Nigeria.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover-lift card-premium border-0 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-government-green to-government-green-dark rounded-xl mx-auto mb-4 flex items-center justify-center shadow-professional">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-government-green">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed text-base">
                To facilitate sustainable economic development through strategic policies, efficient service delivery, 
                and fostering an environment that promotes business growth, trade, and investment in Kano State.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover-lift card-premium border-0 animate-scale-in animate-delay-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-government-gold to-yellow-400 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-professional">
                <Eye className="h-8 w-8 text-government-green" />
              </div>
              <CardTitle className="text-2xl text-government-green">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed text-base">
                To be the leading state ministry in Nigeria, recognized for excellence in commerce, industry development, 
                and creating an enabling environment for businesses to thrive and contribute to Nigeria's economic growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Objectives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient-green mb-4">Our Key Objectives</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic goals aimed at promoting economic growth, entrepreneurship, and trade within Kano State.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className={`card-hover-lift group cursor-pointer border-0 animate-scale-in animate-delay-${(index + 1) * 100}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-government-green-light to-government-green/20 p-3 rounded-lg group-hover:bg-gradient-to-br group-hover:from-government-green group-hover:to-government-green-dark transition-all duration-300">
                      <objective.icon className="h-6 w-6 text-government-green group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-government-green mb-2 group-hover:text-government-green-dark transition-colors">
                        {objective.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-government-green-light/30 to-white rounded-2xl p-8 mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-government-green mb-4">Additional Services</h3>
            <p className="text-muted-foreground">
              Comprehensive support services to address various business needs and challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors group">
                <ChevronRight className="h-5 w-5 text-government-green mt-0.5 group-hover:translate-x-1 transition-transform" />
                <p className="text-sm text-muted-foreground leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-government-green via-government-green-dark to-government-green text-white rounded-2xl p-8 text-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-government-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 animate-bounce-slow"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-government-gold">Get in Touch</h3>
            <div className="space-y-2 mb-6">
              <p className="text-white/90">Post office Road, P.M.B 3085, Kano Municipal, Kano State, Nigeria</p>
              <p className="text-white/90">Telephone: +234-805-506-1500</p>
              <p className="text-white/90">E-Mail: kanocommerce.ng@gmail.com</p>
            </div>
            <Button 
              variant="gold" 
              size="lg"
              className="bg-gradient-to-r from-government-gold to-yellow-400 hover:shadow-glow font-semibold"
            >
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;