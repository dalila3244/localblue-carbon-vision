
import React, { useState } from 'react';
import { Phone, Satellite, Shield, Coins } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const HowItWorksCards = () => {
  const [progress, setProgress] = useState(0);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1000);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      id: 1,
      label: "Capture",
      icon: <Phone className="h-12 w-12 text-mangrove" />,
      hoverText: "Phone photos are auto-GPS-tagged; mini-drones follow pre-set grids to hit 4 cm/px resolution for AI training.",
      content: (
        <div className="w-full">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="flex justify-center items-center h-32">
                  <Phone className="h-16 w-16 text-ocean" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center h-32">
                  <Satellite className="h-16 w-16 text-ocean" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative inset-auto" />
              <CarouselNext className="relative inset-auto" />
            </div>
          </Carousel>
        </div>
      )
    },
    {
      id: 2,
      label: "Verify",
      icon: <Shield className="h-12 w-12 text-mangrove" />,
      hoverText: "Satellite indices calibrate citizen images; our Bayesian model outputs ±10 % biomass error—auditor-ready.",
      content: (
        <div className="flex flex-col items-center justify-center h-32 space-y-4">
          <div className="w-full max-w-xs">
            <Progress value={progress} className="h-6" />
          </div>
          <p className="text-ocean font-medium">{progress === 100 ? "MRV Packet Complete" : "Verifying..."}</p>
        </div>
      )
    },
    {
      id: 3,
      label: "Fund",
      icon: <Coins className="h-12 w-12 text-mangrove" />,
      hoverText: "Smart-contract escrows 30 % of every credit sale to the local conservation fund—instantly, on chain.",
      content: (
        <div className="flex flex-col items-center justify-center h-32 space-y-2">
          <div className="relative flex items-center">
            <Coins className="h-16 w-16 text-coral animate-bounce" />
            <div className="ml-6 w-16 h-16 bg-nature-green rounded-lg flex justify-center items-center">
              <div className="w-8 h-8 bg-nature-soft rounded-full"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ocean font-poppins">How It Works</h2>
          <p className="text-xl text-ocean/70 max-w-3xl mx-auto font-inter">
            Our 3-step process makes blue carbon accessible and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card) => (
            <HoverCard key={card.id} openDelay={200} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Card className="relative overflow-hidden bg-white border border-ocean/10 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-6 text-ocean font-poppins">{card.label}</h3>
                    <div className="w-full">
                      {card.content}
                    </div>
                  </div>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4 bg-white border border-ocean/10 shadow-lg">
                <p className="text-ocean/80 font-inter">{card.hoverText}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCards;
