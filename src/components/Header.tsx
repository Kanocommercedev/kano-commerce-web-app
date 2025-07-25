import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Building } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: "Home", path: "/", label: "Home" },
    { name: "About Us", path: "/about-us", label: "About Us" },
    { name: "Departments", path: "/departments", label: "Departments" },
    { name: "Services", path: "/services", label: "Services" },
    { name: "News", path: "/news", label: "News" },
    { name: "Resources", path: "/resources", label: "Resources" },
    { name: "Contact", path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-md sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top bar with contact info */}
      <div className="bg-government-green text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+234646325400" 
                className="flex items-center space-x-1 hover:text-government-gold transition-colors focus:outline-none focus:ring-2 focus:ring-government-gold rounded px-1"
                aria-label="Call main office"
              >
                <Phone className="h-3 w-3" aria-hidden="true" />
                <span>+234-64-632-540</span>
              </a>
              <a 
                href="mailto:kanocommerce.ng@gmail.com" 
                className="flex items-center space-x-1 hover:text-government-gold transition-colors focus:outline-none focus:ring-2 focus:ring-government-gold rounded px-1"
                aria-label="Send email to general inquiries"
              >
                <Mail className="h-3 w-3" aria-hidden="true" />
                <span>kanocommerce.ng@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              <span>Kano State, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/" 
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-government-green rounded-lg p-2 -m-2"
              aria-label="Go to homepage"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden bg-white shadow-lg p-1">
                <img 
                  src="/lovable-uploads/09cae4d7-c688-42e1-802b-27a028d87b9f.png" 
                  alt="Ministry Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-government-green leading-tight">
                  KANO STATE MINISTRY OF COMMERCE
                </h1>
                <p className="text-xs sm:text-sm text-government-red font-medium">Ministry of Commerce</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Main navigation">
            {navigationLinks.map((link) => (
              <Button
                key={link.path}
                asChild
                variant={isActive(link.path) ? "government" : "ghost"}
                size="nav"
                className="font-medium"
              >
                <Link
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </Button>
            ))}
          </nav>


          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-government-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden mt-4 pb-4 border-t pt-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Button
                  key={link.path}
                  asChild
                  variant={isActive(link.path) ? "government" : "ghost"}
                  size="nav-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    to={link.path}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;