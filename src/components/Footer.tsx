import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Business Registration", href: "#services" },
    { title: "Trade Licenses", href: "#services" },
    { title: "SME Support", href: "#services" },
    { title: "Investment Opportunities", href: "#opportunities" },
    { title: "Trade Fairs", href: "#opportunities" },
    { title: "Forms & Documents", href: "#resources" }
  ];

  const departments = [
    { title: "Industry Development", href: "#departments" },
    { title: "Trade & Investment", href: "#departments" },
    { title: "Cooperative Services", href: "#departments" },
    { title: "SME Support", href: "#departments" }
  ];

  const governmentLinks = [
    { title: "Kano State Government", href: "#" },
    { title: "Federal Ministry of Trade", href: "#" },
    { title: "Corporate Affairs Commission", href: "#" },
    { title: "Nigerian Investment Promotion", href: "#" },
    { title: "Export Promotion Council", href: "#" }
  ];

  return (
    <footer className="bg-government-green text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-lg">
                <img 
                  src="/lovable-uploads/09cae4d7-c688-42e1-802b-27a028d87b9f.png" 
                  alt="Ministry Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ministry of Commerce</h3>
                <p className="text-white/80 text-sm">Kano State Government</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Empowering commerce and trade in Kano State through strategic policies, 
              business support services, and investment promotion initiatives that drive 
              economic growth and development.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-government-gold" />
                <span>+234-64-632-540</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-government-gold" />
                <span>kanocommerce.ng@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-government-gold" />
                <span>Ibrahim Taiwo Road, Kano State Secretariat</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-government-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/90 hover:text-government-gold transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-government-gold">Departments</h4>
            <ul className="space-y-2">
              {departments.map((dept, index) => (
                <li key={index}>
                  <a 
                    href={dept.href} 
                    className="text-white/90 hover:text-government-gold transition-colors text-sm"
                  >
                    {dept.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-government-gold">Related Links</h4>
            <ul className="space-y-2">
              {governmentLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/90 hover:text-government-gold transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-2 text-government-gold">Stay Updated</h4>
            <p className="text-white/90 text-sm">
              Subscribe to our newsletter for the latest news, opportunities, and updates
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-government-gold"
            />
            <button className="px-6 py-2 bg-government-gold text-government-green font-semibold rounded-md hover:bg-government-gold/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold mb-2 text-government-gold">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="text-center md:text-right">
              <h5 className="font-semibold mb-2 text-government-gold">Office Hours</h5>
              <div className="text-sm text-white/90">
                <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-government-green-dark py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <div className="mb-2 md:mb-0">
              <p>
                © {currentYear} Kano State Ministry of Commerce. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
              <div className="flex space-x-6">
                <a href="#" className="hover:text-government-gold transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-government-gold transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-government-gold transition-colors">
                  Accessibility
                </a>
                <a href="#" className="hover:text-government-gold transition-colors">
                  Contact
                </a>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-2 text-government-gold hover:text-government-gold-light transition-colors group"
              >
                <span>Back to Top</span>
                <div className="w-6 h-6 border border-government-gold rounded-full flex items-center justify-center group-hover:border-government-gold-light">
                  <svg className="w-3 h-3 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;