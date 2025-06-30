import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SaloLogo from "@/assets/salo-logo.svg";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Track which section is currently visible
  useEffect(() => {
    if (location !== "/" && location !== "/about") {
      setActiveSection("other");
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isAboutVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        setActiveSection(isAboutVisible ? "about" : "home");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMobileMenu();
    
    // If we're not on the home page, navigate to it first
    if (location !== "/" && location !== "/about") {
      window.location.href = "/#about";
    } else {
      // Scroll to about section
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-coffee-light/90 backdrop-blur-xl border-b border-coffee-secondary/30 sticky top-0 z-50">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4" onClick={closeMobileMenu}>
            <img src={SaloLogo} alt="Salo Logo" className="w-20 rounded-full" />
            <div className="space-y-1">
              <div className="font-body text-xs text-coffee-brown uppercase tracking-wider">Salo</div>
              <div className="font-body text-xs text-coffee-brown uppercase tracking-wider">Coffee</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              if (item.path === "/about") {
                return (
                  <button
                    key={item.path}
                    onClick={handleAboutClick}
                    className={`font-body text-base font-medium transition-all duration-300 relative ${
                      activeSection === "about"
                        ? "text-coffee-primary"
                        : "text-coffee-brown hover:text-coffee-primary"
                    }`}
                  >
                    {item.label}
                    {activeSection === "about" && (
                      <div className="absolute -bottom-2 left-0 right-0 h-px bg-coffee-primary" />
                    )}
                  </button>
                );
              }
              if (item.path === "/") {
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      if (location === "/" || location === "/about") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        window.location.href = "/";
                      }
                    }}
                    className={`font-body text-base font-medium transition-all duration-300 relative ${
                      activeSection === "home" && (location === "/" || location === "/about")
                        ? "text-coffee-primary"
                        : "text-coffee-brown hover:text-coffee-primary"
                    }`}
                  >
                    {item.label}
                    {activeSection === "home" && (location === "/" || location === "/about") && (
                      <div className="absolute -bottom-2 left-0 right-0 h-px bg-coffee-primary" />
                    )}
                  </button>
                );
              }
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-body text-base font-medium transition-all duration-300 relative ${
                    location === item.path
                      ? "text-coffee-primary"
                      : "text-coffee-brown hover:text-coffee-primary"
                  }`}
                >
                  {item.label}
                  {location === item.path && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-coffee-primary" />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-coffee-primary hover:bg-coffee-light"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => {
                if (item.path === "/about") {
                  return (
                    <button
                      key={item.path}
                      onClick={handleAboutClick}
                      className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg text-left ${
                        activeSection === "about"
                          ? "text-coffee-primary bg-coffee-light font-semibold"
                          : "text-neutral-600 hover:text-coffee-primary hover:bg-coffee-light/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }
                if (item.path === "/") {
                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        if (location === "/" || location === "/about") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          window.location.href = "/";
                        }
                        closeMobileMenu();
                      }}
                      className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg text-left ${
                        activeSection === "home" && (location === "/" || location === "/about")
                          ? "text-coffee-primary bg-coffee-light font-semibold"
                          : "text-neutral-600 hover:text-coffee-primary hover:bg-coffee-light/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                      location === item.path
                        ? "text-coffee-primary bg-coffee-light font-semibold"
                        : "text-neutral-600 hover:text-coffee-primary hover:bg-coffee-light/50"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
