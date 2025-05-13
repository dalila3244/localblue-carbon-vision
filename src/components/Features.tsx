
import { Satellite, Shield, Compass, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Satellite className="h-10 w-10 text-ocean" />,
      title: "AI-Powered Monitoring",
      description: "Leverage satellite imagery and advanced machine learning algorithms to monitor coastal ecosystems with precision and accuracy."
    },
    {
      icon: <Shield className="h-10 w-10 text-ocean" />,
      title: "Verified Quantification",
      description: "Accurately measure and verify carbon sequestration rates in mangroves, seagrass beds, and salt marshes."
    },
    {
      icon: <Compass className="h-10 w-10 text-ocean" />,
      title: "Real-Time Analytics",
      description: "Access comprehensive data on carbon storage, ecosystem health, and restoration progress through our intuitive dashboard."
    },
    {
      icon: <Phone className="h-10 w-10 text-ocean" />,
      title: "Carbon Credit Marketplace",
      description: "Connect local communities and conservation organizations with corporate buyers seeking high-quality blue carbon offsets."
    }
  ];

  return (
    <section id="features" className="section bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ocean font-poppins">Powering Blue Carbon Projects Worldwide</h2>
          <p className="text-xl text-ocean/70 max-w-3xl mx-auto font-inter">
            Our platform makes it easy to monitor, verify, and monetize carbon sequestration in coastal ecosystems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-ocean/10 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group bg-white">
              <CardContent className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-ocean font-poppins">{feature.title}</h3>
                <p className="text-ocean/70 font-inter">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
