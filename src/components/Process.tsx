
import { ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Monitor",
      description: "Our AI analyzes satellite imagery to track changes in coastal ecosystems over time.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600",
      alt: "Satellite monitoring coastal ecosystems"
    },
    {
      number: "02",
      title: "Quantify",
      description: "Machine learning models calculate carbon sequestration rates with validated accuracy.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      alt: "Data analytics dashboard showing carbon metrics"
    },
    {
      number: "03",
      title: "Verify",
      description: "All data is verified through our transparent blockchain-based protocol.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=600",
      alt: "Verification process illustrated"
    },
    {
      number: "04",
      title: "Monetize",
      description: "Connect with carbon markets to sell verified blue carbon credits.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=600",
      alt: "Carbon credit marketplace interface"
    }
  ];

  return (
    <section id="process" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our end-to-end process transforms coastal ecosystem monitoring into verified carbon credits.
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 text-7xl font-bold text-gray-100">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="inline-flex items-center text-ocean font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={step.image} 
                    alt={step.alt}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
