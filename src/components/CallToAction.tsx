import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";
const CallToAction = () => {
  return <section id="contact" className="section relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-salt-marsh bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-coral to-mangrove"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm text-white mb-6">
              <Leaf className="mr-2 h-4 w-4" />
              <span>Join Our Ecosystem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-poppins">Bring LocalBlueX to your coastline — or fund the next pilot</h2>
            <p className="text-lg text-white/90 mb-8 font-inter max-w-3xl">
              Whether you're a conservation organization, local community, or impact investor, LocalBlue X provides the technology and marketplace to turn coastal ecosystems into sustainable revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-ocean hover:bg-white/90 font-semibold">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Invest With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;