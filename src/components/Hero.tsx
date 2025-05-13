
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

const Hero = () => {
  const [showBounce, setShowBounce] = useState(false);

  useEffect(() => {
    // Trigger bounce effect after 3 seconds
    const timer = setTimeout(() => {
      setShowBounce(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pt-[60px] overflow-hidden h-screen">
      {/* Video Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/80 to-ocean/60 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover transform scale-105 transition-transform duration-[4s] ease-linear"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-coastline-with-turquoise-water-43127-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] py-16 text-center">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white font-poppins">
              Map the Coast. Verify the Carbon. Fund the Future.
            </h1>
            
            <p className="text-lg md:text-xl text-sand max-w-2xl mx-auto font-inter">
              We turn community phone shots and low-cost drones into AI-verified, insured blue-carbon credits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button size="lg" className="bg-coral hover:bg-coral/90 shadow-lg text-white">
                Join the Pilot
              </Button>
              <Button size="lg" variant="outline" className="text-sand border-sand hover:bg-white/10 flex items-center">
                <Play className="mr-2 h-4 w-4" /> 60-sec Demo Video
              </Button>
            </div>
          </div>
          
          {/* Bounce down arrow */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${showBounce ? 'animate-bounce' : ''}`}>
            <ChevronDown className="h-10 w-10 text-sand opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
