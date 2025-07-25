import { Card, CardContent } from "@/components/ui/card";
import { Quote, User, Award, MapPin } from "lucide-react";

const CommissionerMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20" aria-labelledby="leadership-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="leadership-heading" className="text-3xl lg:text-4xl font-bold text-government-green mb-4">
            Leadership Messages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our distinguished leaders share their vision for Kano State's commercial development and economic prosperity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Governor's Message */}
          <Card className="relative overflow-hidden group hover-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-government-green/5 to-government-gold/5"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-government-green flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/lovable-uploads/25ad5031-2e95-4982-b4c0-95a714f27876.png" 
                    alt="Gov. Abba Kabir Yusuf"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-government-green mb-1">
                    Gov. Abba Kabir Yusuf
                  </h3>
                  <p className="text-government-red font-semibold">Executive Governor</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Kano State</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-government-gold mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "Our administration is committed to transforming Kano State into Nigeria's premier commercial hub. Through strategic investments, innovative policies, and unwavering support for businesses, we are building a sustainable economic foundation that will benefit generations to come."
                </blockquote>
                
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-government-gold" />
                  <span className="text-sm text-muted-foreground">Leading Economic Transformation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commissioner's Message */}
          <Card className="relative overflow-hidden group hover-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-government-red/5 to-government-gold/5"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-government-red flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/lovable-uploads/87501d1e-bf06-4636-854e-f2003a775cba.png" 
                    alt="Hon Shehu Wada Sagagi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-government-green mb-1">
                    Hon Shehu Wada Sagagi
                  </h3>
                  <p className="text-government-red font-semibold">Commissioner, Ministry for Commerce & Investment</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Ministry of Commerce, Industry, Cooperatives and Solid Minerals</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-government-gold mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "The Ministry of Commerce, Industry, Cooperatives and Solid Minerals is your partner in business success. We are dedicated to simplifying processes, reducing bureaucracy, and creating an enabling environment where every entrepreneur can thrive. Together, we are writing the next chapter of Kano's commercial excellence."
                </blockquote>
                
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-government-gold" />
                  <span className="text-sm text-muted-foreground">Empowering Business Growth</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommissionerMessage;