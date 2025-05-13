import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, MapPin } from "lucide-react";
const PilotHighlight = () => {
  const [signups, setSignups] = useState(68);
  const [carbonCredits, setCarbonCredits] = useState(0);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle intersection observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Animate carbon credits count when visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCarbonCredits(prev => {
          const next = prev + 15;
          if (next >= 750) {
            clearInterval(interval);
            return 750;
          }
          return next;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  return <section id="pilot" className="bg-coral py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-white text-2xl font-bold mb-4 font-poppins">Launching in Guadeloupe</h3>
            <p className="text-white/90 mb-8 text-lg">Our 2026 pilot program is rolling out across the protected mangrove forests of Guadeloupe, working with local communities and conservation groups to map, monitor, and monetize this crucial blue carbon ecosystem.</p>
            
            
            
            
            
            <Button size="lg" className="bg-white text-coral hover:bg-white/90">
              <Download className="mr-2 h-5 w-5" />
              Download Beta App
            </Button>
          </div>
          
          <div className="lg:w-1/2" ref={mapContainerRef}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] relative">
              {/* Map placeholder - in a real implementation, this would be a Leaflet map */}
              <div className="absolute inset-0 bg-ocean-coast bg-cover bg-center opacity-80"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-coral mr-2" />
                    <span className="text-ocean font-semibold">Guadeloupe Pilot Zone</span>
                  </div>
                  <p className="text-sm text-ocean/70 mt-1">16.2176° N, 61.3172° W</p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-white/70 text-sm mt-4">
              * For a fully interactive map, download the beta app or request a demo
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PilotHighlight;