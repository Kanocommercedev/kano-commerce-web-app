import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, TrendingUp, Users, Briefcase, ArrowRight } from "lucide-react";

const Departments = () => {
  const departments = [
    {
      icon: Factory,
      title: "Industry Development",
      description: "Promoting industrial growth and manufacturing excellence across Kano State.",
      services: ["Industrial Licensing", "Manufacturing Support", "Technology Transfer", "Industrial Parks"],
      color: "bg-government-green"
    },
    {
      icon: TrendingUp,
      title: "Trade & Investment",
      description: "Facilitating domestic and international trade opportunities for businesses.",
      services: ["Trade Facilitation", "Export Promotion", "Investment Attraction", "Market Development"],
      color: "bg-government-gold"
    },
    {
      icon: Users,
      title: "Cooperative Services",
      description: "Supporting cooperative societies and group enterprises for economic empowerment.",
      services: ["Cooperative Registration", "Training Programs", "Financial Assistance", "Group Management"],
      color: "bg-government-green"
    },
    {
      icon: Briefcase,
      title: "SME Support",
      description: "Empowering small and medium enterprises with resources and guidance.",
      services: ["Business Development", "Capacity Building", "Access to Finance", "Mentorship Programs"],
      color: "bg-government-gold"
    }
  ];

  return (
    <section id="departments" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-government-green mb-4">
            Our Departments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized departments working together to drive commerce and industry development in Kano State.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`${dept.color} p-3 rounded-lg`}>
                    <dept.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-government-green group-hover:text-government-green-dark transition-colors">
                      {dept.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      {dept.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-government-green">Key Services:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dept.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-government-gold rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-government-green group-hover:text-white transition-all">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Department Contact Info */}
        <div className="mt-16 bg-government-green-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-government-green mb-4">
            Need Specific Department Assistance?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Each department has dedicated staff ready to assist you with specialized services. 
            Contact us to be directed to the right department for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="government" size="lg">
              Contact Departments
            </Button>
            <Button variant="government-outline" size="lg">
              Download Organization Chart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;