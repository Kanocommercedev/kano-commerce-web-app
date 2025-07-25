import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, TrendingUp, Award, Globe, CheckCircle } from "lucide-react";

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    businesses: 0,
    traders: 0,
    volume: 0,
    awards: 0
  });

  const slides = [
    {
      title: "Empowering Commerce & Trade in",
      highlight: "Kano State",
      subtitle: "Leading Nigeria's Commercial Renaissance",
      description: "The Ministry of Commerce is committed to fostering economic growth, supporting businesses, and creating opportunities for traders and entrepreneurs across Kano State.",
      cta: "Register Your Business",
      image: "business-registration"
    },
    {
      title: "Investment Opportunities in",
      highlight: "Nigeria's Commercial Hub",
      subtitle: "Gateway to West African Markets",
      description: "Discover exceptional investment opportunities in one of Africa's most dynamic commercial centers, with strategic location and business-friendly policies.",
      cta: "Explore Investments",
      image: "investment"
    },
    {
      title: "Supporting SMEs for",
      highlight: "Economic Growth",
      subtitle: "Empowering Small & Medium Enterprises",
      description: "Comprehensive support programs, funding opportunities, and capacity building initiatives designed to help small and medium enterprises thrive and scale.",
      cta: "Access SME Support",
      image: "sme-support"
    }
  ];

  const stats = [
    { icon: Users, label: "Registered Businesses", value: 15000, suffix: "+", color: "text-government-gold" },
    { icon: Building, label: "Licensed Traders", value: 500, suffix: "+", color: "text-government-gold" },
    { icon: TrendingUp, label: "Annual Trade Volume", value: 2.5, prefix: "₦", suffix: "B+", color: "text-government-gold" },
    { icon: Award, label: "Excellence Awards", value: 12, suffix: "+", color: "text-government-gold" }
  ];

  const achievements = [
    { icon: Globe, text: "International Trade Partners", count: "50+" },
    { icon: CheckCircle, text: "Business Success Rate", count: "95%" },
    { icon: TrendingUp, text: "Annual Growth Rate", count: "23%" },
    { icon: Award, text: "Recognition Awards", count: "12+" }
  ];

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        businesses: Math.floor(15000 * progress),
        traders: Math.floor(500 * progress),
        volume: Math.floor(2.5 * progress * 10) / 10,
        awards: Math.floor(12 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({
          businesses: 15000,
          traders: 500,
          volume: 2.5,
          awards: 12
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <main>
      <section 
        id="home" 
        className="relative min-h-screen bg-gradient-to-br from-government-green via-government-green to-government-green-dark text-white overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-float"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-white/80 animate-slide-in-left animate-delay-100">
              <a href="/" className="hover:text-government-gold transition-colors focus:outline-none focus:ring-2 focus:ring-government-gold rounded">
                Home
              </a>
              <span>/</span>
              <span className="text-government-gold" aria-current="page">Ministry of Commerce</span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-200"
              >
                {currentSlideData.title}{" "}
                <span className="text-government-gold animate-shimmer bg-gradient-to-r from-government-gold via-yellow-400 to-government-gold bg-clip-text text-transparent bg-[length:200%_100%]">
                  {currentSlideData.highlight}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-government-gold font-semibold animate-fade-in animate-delay-300">
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in animate-delay-500">
              {currentSlideData.description}
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up animate-delay-500" role="group" aria-label="Primary actions">
              <Button 
                variant="government-outline" 
                size="lg" 
                className="bg-government-red/20 border-government-red text-white hover:bg-government-red hover:text-white btn-professional group"
                aria-label={`${currentSlideData.cta} - Navigate to business registration`}
              >
                {currentSlideData.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border border-government-red/30 hover:bg-government-red/10 btn-professional"
                aria-label="Watch our ministry story video"
              >
                Watch Our Story
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-fade-in animate-delay-500">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center animate-scale-in animate-delay-${(index + 1) * 100}`}>
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2 animate-bounce-slow`} />
                  <div className="text-2xl lg:text-3xl font-bold">
                    {stat.prefix}{stat.value === 2.5 ? counters.volume : 
                     stat.value === 15000 ? counters.businesses.toLocaleString() :
                     stat.value === 500 ? counters.traders :
                     counters.awards}{stat.suffix}
                  </div>
                  <div className="text-xs lg:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Section */}
          <div className="relative animate-fade-in animate-delay-300">
            {/* Main Stats Card */}
            <div className="bg-white/10 glass-effect rounded-2xl p-8 shadow-professional-lg backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-government-gold mb-2">
                  Kano Commerce at a Glance
                </h3>
                <p className="text-white/80">Building Nigeria's Commercial Future</p>
              </div>
              
              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover-scale animate-scale-in animate-delay-${(index + 2) * 100}`}
                  >
                    <achievement.icon className="h-8 w-8 text-government-gold mx-auto mb-3" />
                    <div className="text-xl font-bold text-white mb-1">
                      {achievement.count}
                    </div>
                    <div className="text-xs text-white/80">
                      {achievement.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Digital Transformation</span>
                  <span className="text-sm text-government-gold">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-government-gold to-yellow-400 h-2 rounded-full w-[85%] animate-slide-in-right"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Business Satisfaction</span>
                  <span className="text-sm text-government-gold">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-government-gold to-yellow-400 h-2 rounded-full w-[92%] animate-slide-in-right animate-delay-200"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-government-gold/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-bounce-slow"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
          role="tablist"
          aria-label="Hero slide navigation"
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-government-gold focus:ring-offset-2 focus:ring-offset-government-green ${
                index === currentSlide 
                  ? 'bg-government-gold scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              role="tab"
              aria-selected={index === currentSlide}
              aria-controls={`slide-${index}`}
              aria-label={`View slide ${index + 1}: ${slide.title} ${slide.highlight}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-3 bg-government-gold rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-government-gold/5 rounded-full -translate-x-1/2 animate-float" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 animate-bounce-slow" aria-hidden="true"></div>
      </section>
    </main>
  );
};

export default EnhancedHero;