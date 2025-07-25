import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Shield, 
  Users, 
  TrendingUp, 
  Download, 
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Business Premises Registration",
      description: "Register your business premises with the Kano State government for legal compliance and operations.",
      features: ["Online Application", "Fast Processing", "Legal Compliance", "Certificate Issuance"],
      duration: "3-5 Business Days",
      status: "Available Online",
      isPopular: true,
      fees: {
        newUrban: "₦10,000",
        newRural: "₦2,000",
        renewalUrban: "₦5,000",
        renewalRural: "₦1,000"
      }
    },
    {
      icon: Shield,
      title: "Trade License Registration",
      description: "Apply for individual or expatriate trade licenses to conduct commercial activities in Kano State.",
      features: ["Individual License", "Expatriate License", "Renewal Services", "Digital Certificates"],
      duration: "5-7 Business Days",
      status: "Available",
      isPopular: false,
      fees: {
        range: "₦2,000 - ₦1,000,000"
      }
    },
    {
      icon: Users,
      title: "Cooperative Society Registration",
      description: "Register your cooperative society and access group business benefits and support programs.",
      features: ["Group Registration", "Training Support", "Financial Guidance", "Legal Framework"],
      duration: "7-10 Business Days",
      status: "Available",
      isPopular: false
    },
    {
      icon: TrendingUp,
      title: "Petrol Station Processing",
      description: "Complete processing and licensing for petrol station operations in Kano State.",
      features: ["Site Approval", "License Processing", "Compliance Check", "Operational Permit"],
      duration: "2-3 Weeks",
      status: "Apply Now",
      isPopular: true
    },
    {
      icon: FileText,
      title: "Trade Association Registration",
      description: "Register your trade association (Mother, Apex, or Unit level) for collective business representation.",
      features: ["Mother Association", "Apex Association", "Unit Association", "Representation Rights"],
      duration: "1-2 Weeks",
      status: "Available",
      isPopular: false
    },
    {
      icon: Shield,
      title: "Mobile Phone Tower Registration",
      description: "Process registration and permits for mobile phone tower installations in Kano State.",
      features: ["Site Approval", "Environmental Clearance", "Installation Permit", "Compliance Monitoring"],
      duration: "2-4 Weeks",
      status: "Available",
      isPopular: false
    }
  ];

  const eServices = [
    {
      title: "Online Payment Portal",
      description: "Make secure payments for all government services using Remita",
      link: "#"
    },
    {
      title: "Payment Status Tracker",
      description: "Track and verify your payment status in real-time",
      link: "#"
    },
    {
      title: "POS E-Wallet Recharge",
      description: "Recharge your e-wallet for seamless transactions",
      link: "#"
    },
    {
      title: "Collector Account Creation",
      description: "Create collector accounts for revenue collection",
      link: "#"
    },
    {
      title: "Cabotage/Haulage Services",
      description: "Process shipping and haulage documentation",
      link: "#"
    },
    {
      title: "Business Profile Management",
      description: "Create and manage your business profile online",
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-government-green-light via-white to-government-green-light relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-government-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-government-green/5 rounded-full translate-x-1/2 translate-y-1/2 animate-bounce-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="bg-government-gold/10 text-government-green border-government-gold/20 px-4 py-2">
              Professional Services
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-green mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital services designed to support businesses at every stage of their journey in Kano State. 
            Experience world-class government services with efficiency and transparency.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`group card-hover-lift card-premium transition-all duration-500 border-0 animate-scale-in animate-delay-${(index + 1) * 100}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-government-green to-government-green-dark p-4 rounded-xl shadow-professional group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <CardTitle className="text-xl font-bold text-government-green group-hover:text-government-green-dark transition-colors">
                          {service.title}
                        </CardTitle>
                        {service.isPopular && (
                          <Badge className="bg-gradient-to-r from-government-gold to-yellow-400 text-government-green text-xs font-semibold px-3 py-1 shadow-sm animate-pulse-soft">
                            🌟 Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 p-2 rounded-lg bg-government-green-light/30 group-hover:bg-government-green-light/50 transition-colors">
                      <CheckCircle className="h-4 w-4 text-government-green flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-government-green/10">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4 text-government-green" />
                      <span className="text-sm font-medium text-government-green">{service.duration}</span>
                    </div>
                    <Badge className="bg-government-green/10 text-government-green border-government-green/20 text-xs font-semibold">
                      {service.status}
                    </Badge>
                  </div>
                  <Button 
                    variant="government" 
                    size="sm" 
                    className="bg-gradient-to-r from-government-green to-government-green-dark hover:shadow-glow group-hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* E-Services Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-government-green mb-4">
              E-Services Portal
            </h3>
            <p className="text-muted-foreground">
              Access our digital services for faster, more convenient government interactions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eServices.map((eService, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-government-green-light p-4 rounded-lg mb-4 group-hover:bg-government-green group-hover:text-white transition-all">
                  <Download className="h-8 w-8 mx-auto text-government-green group-hover:text-white" />
                </div>
                <h4 className="font-semibold text-government-green mb-2">
                  {eService.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {eService.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Access Service
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Service Hours and Contact */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-10 w-10 text-government-green mx-auto mb-4" />
            <h4 className="font-bold text-government-green mb-2">Service Hours</h4>
            <p className="text-sm text-muted-foreground">
              Monday - Friday: 8:00 AM - 4:00 PM<br />
              Saturday: 9:00 AM - 1:00 PM
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-10 w-10 text-government-green mx-auto mb-4" />
            <h4 className="font-bold text-government-green mb-2">Service Guarantee</h4>
            <p className="text-sm text-muted-foreground">
              All applications processed within stated timeframes or your money back.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-10 w-10 text-government-green mx-auto mb-4" />
            <h4 className="font-bold text-government-green mb-2">Customer Support</h4>
            <p className="text-sm text-muted-foreground">
              Dedicated support team available to assist with all service inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;