import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="bg-white/80 backdrop-blur-xl border-b border-neutral-200 sticky top-0 z-50 shadow-modern">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <div className="bg-coffee-primary p-2 rounded-xl shadow-modern">
              <Coffee className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gradient">Brew & Go</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.path === "/about") {
                return (
                  <button
                    key={item.path}
                    onClick={handleAboutClick}
                    className={`font-medium transition-all duration-200 relative ${
                      activeSection === "about"
                        ? "text-coffee-primary font-semibold"
                        : "text-neutral-600 hover:text-coffee-primary"
                    }`}
                  >
                    {item.label}
                    {activeSection === "about" && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coffee-primary rounded-full" />
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
                    className={`font-medium transition-all duration-200 relative ${
                      activeSection === "home" && (location === "/" || location === "/about")
                        ? "text-coffee-primary font-semibold"
                        : "text-neutral-600 hover:text-coffee-primary"
                    }`}
                  >
                    {item.label}
                    {activeSection === "home" && (location === "/" || location === "/about") && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coffee-primary rounded-full" />
                    )}
                  </button>
                );
              }
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition-all duration-200 relative ${
                    location === item.path
                      ? "text-coffee-primary font-semibold"
                      : "text-neutral-600 hover:text-coffee-primary"
                  }`}
                >
                  {item.label}
                  {location === item.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coffee-primary rounded-full" />
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
