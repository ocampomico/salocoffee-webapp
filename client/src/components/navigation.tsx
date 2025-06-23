import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
            {navItems.map((item) => (
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
            ))}
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
              {navItems.map((item) => (
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
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
