import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileText, 
  BookOpen, 
  Calculator, 
  Clipboard,
  Search,
  Filter
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const resources = [
    {
      id: 1,
      title: "Business Registration Form (CAC-1)",
      description: "Official form for business name registration with the Corporate Affairs Commission",
      category: "Forms",
      type: "PDF",
      size: "2.3 MB",
      downloads: 1250,
      isNew: false
    },
    {
      id: 2,
      title: "Trade License Application Form",
      description: "Complete application form for obtaining trade licenses in Kano State",
      category: "Forms",
      type: "PDF",
      size: "1.8 MB",
      downloads: 890,
      isNew: false
    },
    {
      id: 3,
      title: "SME Development Guidelines 2025",
      description: "Comprehensive guidelines for small and medium enterprise development programs",
      category: "Guidelines",
      type: "PDF",
      size: "5.2 MB",
      downloads: 567,
      isNew: true
    },
    {
      id: 4,
      title: "Investment Opportunities Report",
      description: "Annual report highlighting investment opportunities across various sectors",
      category: "Reports",
      type: "PDF",
      size: "8.1 MB",
      downloads: 432,
      isNew: true
    },
    {
      id: 5,
      title: "Cooperative Society Registration Kit",
      description: "Complete documentation package for registering cooperative societies",
      category: "Forms",
      type: "ZIP",
      size: "3.7 MB",
      downloads: 234,
      isNew: false
    },
    {
      id: 6,
      title: "Export Procedures Manual",
      description: "Step-by-step guide for export procedures and documentation requirements",
      category: "Guidelines",
      type: "PDF",
      size: "4.5 MB",
      downloads: 345,
      isNew: false
    },
    {
      id: 7,
      title: "Tax Incentives Brochure",
      description: "Information on available tax incentives for businesses in Kano State",
      category: "Brochures",
      type: "PDF",
      size: "2.1 MB",
      downloads: 678,
      isNew: true
    },
    {
      id: 8,
      title: "Industrial Development Policy",
      description: "Official policy document outlining industrial development strategies",
      category: "Policies",
      type: "PDF",
      size: "6.8 MB",
      downloads: 123,
      isNew: false
    }
  ];

  const categories = ["All", "Forms", "Guidelines", "Reports", "Brochures", "Policies"];

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "ZIP":
        return <Download className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Forms": "bg-government-green text-white",
      "Guidelines": "bg-government-gold text-government-green",
      "Reports": "bg-blue-500 text-white",
      "Brochures": "bg-purple-500 text-white",
      "Policies": "bg-orange-500 text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section id="resources" className="py-16 bg-government-green-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-government-green mb-4">
            Business Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access essential documents, forms, guidelines, and reports to support your business operations in Kano State.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-government-green"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "government" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-0">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getCategoryColor(resource.category)} text-xs`}>
                    {resource.category}
                  </Badge>
                  {resource.isNew && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-government-green group-hover:text-government-green-dark transition-colors line-clamp-2">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {getTypeIcon(resource.type)}
                      <span>{resource.type}</span>
                    </div>
                    <span>{resource.size}</span>
                  </div>
                  <span>{resource.downloads} downloads</span>
                </div>

                <Button variant="government" className="w-full group-hover:scale-105 transition-transform">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Tools */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <Calculator className="h-12 w-12 text-government-green mx-auto mb-4" />
            <h4 className="font-bold text-government-green mb-2">Fee Calculator</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Calculate fees for various business registration and licensing services.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Use Calculator
            </Button>
          </Card>

          <Card className="text-center p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <Clipboard className="h-12 w-12 text-government-green mx-auto mb-4" />
            <h4 className="font-bold text-government-green mb-2">Document Checklist</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Interactive checklist to ensure you have all required documents.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Checklist
            </Button>
          </Card>

          <Card className="text-center p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="h-12 w-12 text-government-green mx-auto mb-4" />
            <h4 className="font-bold text-government-green mb-2">Resource Library</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Browse our comprehensive library of business resources and guides.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Browse Library
            </Button>
          </Card>
        </div>

        {/* Help Section */}
        <div className="bg-government-green text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding Resources?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our support team is ready to help you find the right documents and resources for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-government-green">
              Request Custom Document
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;