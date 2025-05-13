
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

const Counter = ({ end, duration, suffix, prefix, description }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [inView, end, duration]);
  
  return (
    <div ref={ref} className="mb-8">
      <div className="text-3xl md:text-4xl font-bold text-ocean flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <span>{count}</span>
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const PainPointSection = () => {
  return (
    <section className="bg-sand py-24" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Counter 
              end={30} 
              duration={2000} 
              prefix="€" 
              suffix="/ ha / year" 
              description="Average cost of coastal MRV today" 
            />
            <Counter 
              end={5} 
              duration={2000} 
              prefix="+" 
              suffix="t CO₂ / ha / yr" 
              description="Carbon locked in mangroves" 
            />
            <Counter 
              end={67} 
              duration={2000} 
              suffix="%" 
              description="Coastal projects lacking finance" 
            />
          </div>
          
          <div className="text-gray-800 font-inter">
            <p className="text-lg leading-relaxed">
              LocalBlueX works in two tiers. Tier 1 is a free citizen-science toolkit—phones plus mini-drones—that lets coastal communities map mangroves, seagrass and salt marshes. Tier 2 feeds that imagery into an AI engine that auto-generates verified, insured blue-carbon credits and EU-ready compliance dashboards—cutting monitoring costs by 70% while funding local restoration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
