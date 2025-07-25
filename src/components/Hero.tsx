import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-government-green to-government-green-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Commerce & Trade in{" "}
              <span className="text-government-gold">Kano State</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The Ministry of Commerce is committed to fostering economic growth, 
              supporting businesses, and creating opportunities for traders and 
              entrepreneurs across Kano State.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="government-outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-government-green">
                Register Your Business <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border border-white/30 hover:bg-white/10">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-government-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold">15,000+</h3>
              <p className="text-white/80">Registered Businesses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Building className="h-12 w-12 text-government-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-white/80">Licensed Traders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center sm:col-span-2">
              <TrendingUp className="h-12 w-12 text-government-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold">₦2.5B+</h3>
              <p className="text-white/80">Annual Trade Volume</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5"></div>
    </section>
  );
};

export default Hero;