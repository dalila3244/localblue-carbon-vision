
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          <div className="flex items-center">
            <Waves className="h-8 w-8 text-ocean mr-2" />
            <span className="font-bold text-xl md:text-2xl">LocalBlue<span className="text-ocean">X</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-ocean transition-colors">Why LocalBlueX</a>
            <a href="#process" className="text-gray-600 hover:text-ocean transition-colors">How It Works</a>
            <a href="#pilot" className="text-gray-600 hover:text-ocean transition-colors">Pilot 2026</a>
            <a href="#contact" className="text-gray-600 hover:text-ocean transition-colors">Get Involved</a>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean">Why LocalBlueX</a>
            <a href="#process" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean">How It Works</a>
            <a href="#pilot" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean">Pilot 2026</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean">Get Involved</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
