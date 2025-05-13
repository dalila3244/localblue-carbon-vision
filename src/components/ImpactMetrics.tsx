
import React, { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  CirclePercent, 
  BadgeCheck, 
  CircleDollarSign
} from "lucide-react";

const ImpactMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: <CirclePercent className="h-10 w-10 text-coral" />,
      value: "-70%",
      label: "MRV cost reduction",
      tooltip: "vs industry norm",
      delay: 0
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-coral" />,
      value: "3",
      label: "Letters of Intent",
      tooltip: "NGOs & municipality",
      delay: 200
    },
    {
      icon: <CirclePercent className="h-10 w-10 text-coral" />,
      value: "30%",
      label: "Revenue share",
      tooltip: "to local communities",
      delay: 400
    },
    {
      icon: <CircleDollarSign className="h-10 w-10 text-coral" />,
      value: "€1bn",
      label: "Potential market",
      tooltip: "blue-carbon pipeline",
      delay: 600
    }
  ];

  return (
    <section className="bg-ocean py-16 sm:py-24" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12 font-poppins">Impact & Traction</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`bg-ocean-dark/30 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${metric.delay}ms` }}
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-ocean-light mb-3">
                {metric.label}
              </div>
              <Badge variant="outline" className="bg-white/10 text-white border-none">
                {metric.tooltip}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
