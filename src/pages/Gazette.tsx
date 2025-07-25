import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, Scale } from "lucide-react";

const Gazette = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-government-green to-government-green-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kano State Official Gazette
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Published by Authority - Official Legal Documents and Laws
            </p>
            <div className="flex items-center justify-center space-x-6 mt-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>7th Assembly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-5 w-5" />
                <span>Official Legal Repository</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Current Gazette */}
            <Card className="mb-8 shadow-professional">
              <CardHeader className="bg-gradient-to-r from-government-green/5 to-government-gold/5">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-government-green mb-2">
                      Kano State Trade Registration Law 2014
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <FileText className="h-4 w-4" />
                        <span>Law No. 4 of 2014</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>27th February, 2014</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Scale className="h-4 w-4" />
                        <span>Vol. 46, No. 6</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="government" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-government-green mb-4">
                    A Law to provide for the establishment of Trade Registration and other matters connected thereto.
                  </h3>
                  
                  <div className="bg-muted/30 p-4 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Assented to this 5th day of March, 2014 (1435 AH)</strong>
                    </p>
                    <p className="text-sm">
                      Mohammed Rabi'u Musa, Governor, Kano State of Nigeria
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-government-green mb-3">Key Provisions</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Establishment of Trade Registry</li>
                        <li>• Registration requirements for all trades and businesses</li>
                        <li>• Regulation of Trade Associations</li>
                        <li>• Specialized market designations</li>
                        <li>• Employment terms and conditions</li>
                        <li>• Offences and penalties</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-government-green mb-3">Registration Fees</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Apex Association:</strong> ₦250,000 (Initial)</li>
                        <li>• <strong>Mother Association:</strong> ₦50,000 (Initial)</li>
                        <li>• <strong>Unit Association:</strong> ₦20,000 (Initial)</li>
                        <li>• <strong>Individual:</strong> ₦2,000 - ₦500,000</li>
                        <li>• <strong>Foreigner (Individual):</strong> ₦100,000</li>
                        <li>• <strong>Foreigner (Corporate):</strong> ₦200,000</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-government-green/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-government-green mb-3">Important Definitions</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Trade Registration:</strong> Registration of Trade and Businesses</p>
                        <p><strong>Apex Association:</strong> Market Associations composed of mother associations</p>
                        <p><strong>Mother Association:</strong> Umbrella market association within a market</p>
                      </div>
                      <div>
                        <p><strong>Unit Association:</strong> Group of individuals with similar business</p>
                        <p><strong>Specialized Market:</strong> Market for particular type of trade</p>
                        <p><strong>Registrar:</strong> Director in charge of Department of Commerce</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gazette Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-government-green">Publication Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Publisher:</span>
                      <span>Government Printing Press, Kano</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Assembly:</span>
                      <span>7th Assembly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Volume:</span>
                      <span>46</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Number:</span>
                      <span>6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span>27th February, 2014</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-government-green">Subscription Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual (Nigeria):</span>
                      <span>₦5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overseas (UK):</span>
                      <span>£100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overseas (US):</span>
                      <span>$150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Single Issue:</span>
                      <span>₦250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reference:</span>
                      <span>156/0414/500-c</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Authentication */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg text-government-green">Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    "This printed impression has been carefully compared with the Bill which has been passed 
                    by the House of Assembly and found by me to be a true and correctly printed copy of the said Law."
                  </p>
                  <div className="mt-4 text-sm">
                    <p><strong>Lawan Badamasi</strong></p>
                    <p className="text-muted-foreground">Clerk/Permanent Secretary, Kano State House of Assembly</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gazette;