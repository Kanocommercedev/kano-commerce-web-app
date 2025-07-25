import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  Briefcase,
  GraduationCap,
  TrendingUp,
  Clock,
  ArrowRight
} from "lucide-react";

const Opportunities = () => {
  const tradeFairs = [
    {
      id: 1,
      title: "Kano International Trade Fair 2025",
      description: "The largest trade exhibition in Northern Nigeria showcasing local and international products",
      date: "March 15-25, 2025",
      location: "Kano Trade Fair Complex",
      participants: "500+ Exhibitors",
      category: "Trade Fair",
      status: "Registration Open",
      isHighlighted: true
    },
    {
      id: 2,
      title: "SME Expo Kano",
      description: "Platform for small and medium enterprises to showcase products and network",
      date: "April 10-12, 2025",
      location: "Kano Business Hub",
      participants: "200+ SMEs",
      category: "Exhibition",
      status: "Coming Soon",
      isHighlighted: false
    }
  ];

  const fundingPrograms = [
    {
      id: 1,
      title: "MSMEs Development Fund",
      description: "Financial support for micro, small and medium enterprises in Kano State",
      amount: "₦500M Total Fund",
      beneficiaries: "Up to 1,000 businesses",
      deadline: "February 28, 2025",
      category: "Funding",
      status: "Applications Open",
      requirements: ["Valid business registration", "Business plan", "Collateral"]
    },
    {
      id: 2,
      title: "Women Entrepreneurs Grant",
      description: "Special funding program to support women-owned businesses and startups",
      amount: "₦100M Total Fund",
      beneficiaries: "Up to 500 women",
      deadline: "March 15, 2025",
      category: "Grant",
      status: "Applications Open",
      requirements: ["Female ownership >51%", "Business registration", "Project proposal"]
    },
    {
      id: 3,
      title: "Youth Enterprise Scheme",
      description: "Supporting young entrepreneurs between ages 18-35 with business financing",
      amount: "₦200M Total Fund",
      beneficiaries: "Up to 800 youth",
      deadline: "April 30, 2025",
      category: "Scheme",
      status: "Opening Soon",
      requirements: ["Age 18-35", "Business idea", "Training completion"]
    }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: "Digital Marketing for SMEs",
      description: "Learn modern digital marketing strategies to grow your business online",
      duration: "2 weeks",
      mode: "Hybrid",
      nextSession: "February 5, 2025",
      capacity: "50 participants",
      fee: "Free",
      status: "Registration Open"
    },
    {
      id: 2,
      title: "Financial Management Workshop",
      description: "Essential financial management skills for business owners and managers",
      duration: "1 week",
      mode: "In-person",
      nextSession: "February 12, 2025",
      capacity: "30 participants",
      fee: "₦5,000",
      status: "Registration Open"
    },
    {
      id: 3,
      title: "Export-Import Procedures",
      description: "Comprehensive training on international trade procedures and documentation",
      duration: "3 days",
      mode: "In-person",
      nextSession: "February 20, 2025",
      capacity: "40 participants",
      fee: "₦10,000",
      status: "Almost Full"
    }
  ];

  const tenders = [
    {
      id: 1,
      title: "Supply of Office Equipment",
      description: "Procurement of computers, printers, and office furniture for ministry offices",
      value: "₦25,000,000",
      deadline: "February 15, 2025",
      category: "Procurement",
      status: "Open",
      requirements: ["Tax clearance", "Company registration", "Previous experience"]
    },
    {
      id: 2,
      title: "IT Infrastructure Upgrade",
      description: "Upgrade of network infrastructure and software systems across ministry locations",
      value: "₦50,000,000",
      deadline: "March 1, 2025",
      category: "Technology",
      status: "Open",
      requirements: ["IT certification", "5+ years experience", "Technical proposal"]
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      "Registration Open": "bg-green-500 text-white",
      "Applications Open": "bg-green-500 text-white",
      "Coming Soon": "bg-blue-500 text-white",
      "Opening Soon": "bg-blue-500 text-white",
      "Almost Full": "bg-orange-500 text-white",
      "Open": "bg-green-500 text-white",
      "Closed": "bg-red-500 text-white"
    };
    return colors[status as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section id="opportunities" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-government-green mb-4">
            Business Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover trade fairs, funding programs, training workshops, and tender opportunities available to businesses in Kano State.
          </p>
        </div>

        {/* Trade Fairs & Exhibitions */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="h-6 w-6 text-government-green" />
            <h3 className="text-2xl font-bold text-government-green">Trade Fairs & Exhibitions</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {tradeFairs.map((fair) => (
              <Card key={fair.id} className={`group hover:shadow-xl transition-all duration-300 bg-white border-0 ${fair.isHighlighted ? 'ring-2 ring-government-green' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getStatusColor(fair.status)}>
                      {fair.status}
                    </Badge>
                    {fair.isHighlighted && (
                      <Badge variant="secondary" className="bg-government-gold text-government-green">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-government-green group-hover:text-government-green-dark transition-colors">
                    {fair.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{fair.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-government-green" />
                      <span>{fair.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-government-green" />
                      <span>{fair.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <Users className="h-4 w-4 text-government-green" />
                      <span>{fair.participants}</span>
                    </div>
                  </div>
                  <Button variant="government" className="w-full">
                    Register to Exhibit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Funding Programs */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <DollarSign className="h-6 w-6 text-government-green" />
            <h3 className="text-2xl font-bold text-government-green">Funding Programs</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {fundingPrograms.map((program) => (
              <Card key={program.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-0">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getStatusColor(program.status)}>
                      {program.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-government-green group-hover:text-government-green-dark transition-colors">
                    {program.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-government-green" />
                      <span className="font-semibold">{program.amount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-government-green" />
                      <span>{program.beneficiaries}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-government-green" />
                      <span>Deadline: {program.deadline}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-government-green mb-2">Requirements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {program.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-government-green rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="government" className="w-full" disabled={program.status === "Opening Soon"}>
                    {program.status === "Opening Soon" ? "Opening Soon" : "Apply Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training & Workshops */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <GraduationCap className="h-6 w-6 text-government-green" />
            <h3 className="text-2xl font-bold text-government-green">Training & Workshops</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {trainingPrograms.map((training) => (
              <Card key={training.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-0">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getStatusColor(training.status)}>
                      {training.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {training.fee}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-government-green group-hover:text-government-green-dark transition-colors">
                    {training.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{training.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-semibold">{training.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Mode:</span>
                      <p className="font-semibold">{training.mode}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Next Session:</span>
                      <p className="font-semibold">{training.nextSession}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Capacity:</span>
                      <p className="font-semibold">{training.capacity}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="government" 
                    className="w-full" 
                    disabled={training.status === "Almost Full"}
                  >
                    {training.status === "Almost Full" ? "Limited Spots" : "Register Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tenders */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="h-6 w-6 text-government-green" />
            <h3 className="text-2xl font-bold text-government-green">Government Tenders</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {tenders.map((tender) => (
              <Card key={tender.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-0">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getStatusColor(tender.status)}>
                      {tender.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {tender.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-government-green group-hover:text-government-green-dark transition-colors">
                    {tender.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{tender.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-sm">Contract Value:</span>
                      <p className="font-bold text-government-green text-lg">{tender.value}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground text-sm">Deadline:</span>
                      <p className="font-semibold">{tender.deadline}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-government-green mb-2">Requirements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tender.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-government-green rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="government" className="w-full">
                    Download Tender Document <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe to Opportunities */}
        <div className="mt-16 bg-government-green text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on Opportunities</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to receive notifications about new funding programs, trade fairs, training opportunities, and tenders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md text-government-green focus:outline-none focus:ring-2 focus:ring-government-gold"
            />
            <Button variant="gold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;