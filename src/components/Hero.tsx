
import { Button } from "@/components/ui/button";
import { Satellite, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-ocean-coast bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/80 to-ocean/60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[90vh] py-16">
          <div className="lg:w-1/2 text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full bg-ocean/20 px-3 py-1 text-sm">
              <Satellite className="mr-2 h-4 w-4" />
              <span>Blue Carbon Innovation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-poppins">
              Quantifying Nature's Carbon Capture
            </h1>
            
            <p className="text-lg md:text-xl text-sand max-w-lg font-inter">
              LocalBlue X uses AI to monitor, quantify, and monetize carbon sequestration in coastal ecosystems for verified carbon credits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-mangrove hover:bg-mangrove/90 shadow-lg text-white">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="text-sand border-sand hover:bg-white/10">
                Partner With Us
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative max-w-md">
              <div className="bg-sand/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-float">
                <div className="flex justify-center mb-6">
                  <Leaf className="h-16 w-16 text-mangrove" />
                </div>
                <h3 className="text-2xl font-semibold text-ocean mb-4 text-center font-poppins">
                  Carbon Captured
                </h3>
                <div className="text-center text-5xl font-bold text-ocean mb-2">
                  2.4M
                </div>
                <p className="text-center text-ocean/70 mb-6 font-inter">
                  Metric tons of CO₂ verified by our platform
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-ocean/70">Mangroves</span>
                    <span className="font-medium text-ocean">852,000 tons</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-mangrove rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-ocean/70">Salt Marshes</span>
                    <span className="font-medium text-ocean">764,000 tons</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-mangrove rounded-full" style={{ width: '38%' }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-ocean/70">Seagrass Beds</span>
                    <span className="font-medium text-ocean">784,000 tons</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-mangrove rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-coral flex items-center justify-center text-white font-bold -rotate-12">
                <div className="text-center">
                  <div className="text-xs">VERIFIED</div>
                  <div>CREDITS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F7F6F4" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
