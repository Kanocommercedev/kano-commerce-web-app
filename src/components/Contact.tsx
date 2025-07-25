import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  return (
    <main>
      <section id="contact" className="py-16 bg-government-green-light" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 id="contact-heading" className="text-3xl lg:text-4xl font-bold text-government-green mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with the Ministry of Commerce for assistance, inquiries, or feedback about our services.
            </p>
          </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-government-green flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Phone Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Main Office</p>
                  <p className="text-muted-foreground">+234-64-632-540</p>
                </div>
                <div>
                  <p className="font-semibold">SME Support</p>
                  <p className="text-muted-foreground">+234-64-632-541</p>
                </div>
                <div>
                  <p className="font-semibold">Business Registration</p>
                  <p className="text-muted-foreground">+234-64-632-542</p>
                </div>
                <div>
                  <p className="font-semibold">Emergency Hotline</p>
                  <p className="text-muted-foreground text-green-600 font-semibold">+234-80-COMMERCE</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-government-green flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Email Addresses</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">General Inquiries</p>
                  <p className="text-muted-foreground">kanocommerce.ng@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Business Registration</p>
                  <p className="text-muted-foreground">kanocommerce.ng@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Investment Opportunities</p>
                  <p className="text-muted-foreground">kanocommerce.ng@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Commissioner's Office</p>
                  <p className="text-muted-foreground">kanocommerce.ng@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-government-green flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-muted-foreground">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">
                    Emergency services available 24/7 via hotline
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-government-green flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" noValidate aria-label="Contact form">
                  <fieldset className="grid md:grid-cols-2 gap-4">
                    <legend className="sr-only">Personal Information</legend>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-government-green mb-1">
                        First Name <span className="text-government-red" aria-label="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-government-green focus:border-government-green transition-colors"
                        required
                        aria-required="true"
                        aria-describedby="firstName-error"
                        placeholder="Enter your first name"
                      />
                      <div id="firstName-error" className="text-sm text-government-red mt-1 hidden" role="alert"></div>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-government-green mb-1">
                        Last Name <span className="text-government-red" aria-label="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-government-green focus:border-government-green transition-colors"
                        required
                        aria-required="true"
                        aria-describedby="lastName-error"
                        placeholder="Enter your last name"
                      />
                      <div id="lastName-error" className="text-sm text-government-red mt-1 hidden" role="alert"></div>
                    </div>
                  </fieldset>
                  
                  <fieldset className="grid md:grid-cols-2 gap-4">
                    <legend className="sr-only">Contact Information</legend>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-government-green mb-1">
                        Email Address <span className="text-government-red" aria-label="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-government-green focus:border-government-green transition-colors"
                        required
                        aria-required="true"
                        aria-describedby="email-error email-help"
                        placeholder="your.email@example.com"
                      />
                      <div id="email-help" className="text-xs text-muted-foreground mt-1">We'll use this to respond to your inquiry</div>
                      <div id="email-error" className="text-sm text-government-red mt-1 hidden" role="alert"></div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-government-green mb-1">
                        Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-government-green focus:border-government-green transition-colors"
                        aria-describedby="phone-help"
                        placeholder="+234-XX-XXXX-XXXX"
                      />
                      <div id="phone-help" className="text-xs text-muted-foreground mt-1">Include country code for international numbers</div>
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-government-green mb-1">
                      Subject <span className="text-government-red" aria-label="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-government-green focus:border-government-green transition-colors"
                      required
                      aria-required="true"
                      aria-describedby="subject-error subject-help"
                    >
                      <option value="">Select the topic of your inquiry</option>
                      <option value="business-registration">Business Registration</option>
                      <option value="trade-license">Trade License</option>
                      <option value="sme-support">SME Support</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="complaint">Complaint</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <div id="subject-help" className="text-xs text-muted-foreground mt-1">Choose the category that best describes your inquiry</div>
                    <div id="subject-error" className="text-sm text-government-red mt-1 hidden" role="alert"></div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-government-green mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-government-green"
                      placeholder="Please provide details about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded border-input text-government-green focus:ring-government-green"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for updates and opportunities
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    variant="government" 
                    size="lg" 
                    className="w-full"
                    aria-describedby="submit-help"
                  >
                    <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                    Send Message
                  </Button>
                  <div id="submit-help" className="text-xs text-muted-foreground text-center">
                    We typically respond within 1-2 business days
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-government-green flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-government-green mb-2">Ministry of Commerce Headquarters</h4>
                    <p className="text-muted-foreground">
                      Ministry of Commerce Complex<br />
                      Ibrahim Taiwo Road<br />
                      Kano State Secretariat<br />
                      Kano, Nigeria
                    </p>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="bg-government-green-light rounded-lg p-8 text-center">
                    <MapPin className="h-16 w-16 text-government-green mx-auto mb-4" />
                    <h5 className="font-semibold text-government-green mb-2">Interactive Map</h5>
                    <p className="text-muted-foreground mb-4">
                      View our exact location and get directions
                    </p>
                    <a 
                      href="https://www.google.com/maps/@12.007263,8.4742436,12864m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="government-outline">
                        <Globe className="mr-2 h-4 w-4" />
                        View on Google Maps
                      </Button>
                    </a>
                  </div>

                  {/* Additional Offices */}
                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <h5 className="font-semibold text-government-green mb-2">Business Registration Center</h5>
                      <p className="text-sm text-muted-foreground">
                        Kano Business Hub<br />
                        Zoo Road, Kano
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-government-green mb-2">SME Support Office</h5>
                      <p className="text-sm text-muted-foreground">
                        Industrial Area<br />
                        Sharada, Kano
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media and Additional Contact Options */}
        <div className="mt-16 bg-government-green text-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <p className="text-white/90">
              Follow us on social media for the latest updates and announcements
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold mb-2">Emergency Contact</h4>
              <p className="text-white/90 text-sm">
                For urgent business matters outside office hours
              </p>
              <Button variant="gold" size="sm" className="mt-2">
                Call Emergency Line
              </Button>
            </div>
            <div>
              <h4 className="font-bold mb-2">WhatsApp Support</h4>
              <p className="text-white/90 text-sm">
                Get quick answers to common questions
              </p>
              <Button variant="gold" size="sm" className="mt-2">
                Chat on WhatsApp
              </Button>
            </div>
            <div>
              <h4 className="font-bold mb-2">Live Chat</h4>
              <p className="text-white/90 text-sm">
                Real-time support during business hours
              </p>
              <Button variant="gold" size="sm" className="mt-2">
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;