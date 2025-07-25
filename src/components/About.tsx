import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, History, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-government-green-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-government-green mb-4">
            About the Ministry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Kano State Ministry of Commerce is dedicated to promoting economic development, 
            facilitating trade, and supporting businesses across the state.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-government-green">
              Driving Economic Growth Since 1999
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As one of Nigeria's leading commercial hubs, Kano State has a rich history of trade 
              and commerce. Our ministry works tirelessly to maintain this legacy while adapting 
              to modern business practices and international standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We provide comprehensive support for businesses of all sizes, from small enterprises 
              to large corporations, ensuring they have the resources and regulatory framework 
              needed to thrive in today's competitive marketplace.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-government-green rounded-full"></div>
                <span className="text-sm text-muted-foreground">Business Registration & Licensing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-government-gold rounded-full"></div>
                <span className="text-sm text-muted-foreground">Trade Development Programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-government-green rounded-full"></div>
                <span className="text-sm text-muted-foreground">Investment Promotion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-government-gold rounded-full"></div>
                <span className="text-sm text-muted-foreground">MSME Support Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-government-green mx-auto mb-4" />
              <CardTitle className="text-government-green">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                To foster economic growth through strategic policies that support trade, 
                commerce, and business development in Kano State.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Eye className="h-12 w-12 text-government-green mx-auto mb-4" />
              <CardTitle className="text-government-green">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                To make Kano State the premier destination for business and investment 
                in Northern Nigeria and across West Africa.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <History className="h-12 w-12 text-government-green mx-auto mb-4" />
              <CardTitle className="text-government-green">Our Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Building on centuries of trading excellence, we continue Kano's legacy 
                as a major commercial center in Africa.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-government-green mx-auto mb-4" />
              <CardTitle className="text-government-green">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Integrity, transparency, innovation, and commitment to serving 
                businesses and citizens with excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-government-green mb-8">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-24 h-24 bg-government-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">HC</span>
              </div>
              <h4 className="text-xl font-bold text-government-green mb-2">
                Hon. Commissioner
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Ministry of Commerce & Industry
              </p>
              <p className="text-sm text-muted-foreground">
                Leading strategic initiatives to transform Kano State into a modern commercial hub.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-24 h-24 bg-government-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h4 className="text-xl font-bold text-government-green mb-2">
                Permanent Secretary
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Ministry of Commerce & Industry
              </p>
              <p className="text-sm text-muted-foreground">
                Overseeing day-to-day operations and ensuring efficient service delivery to businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;