
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PainPointSection from "@/components/PainPointSection";
import Features from "@/components/Features";
import HowItWorksCards from "@/components/HowItWorksCards";
import CallToAction from "@/components/CallToAction";
import PilotHighlight from "@/components/PilotHighlight";
import ImpactMetrics from "@/components/ImpactMetrics";
import { Waves, Mail, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <NavBar />
      <Hero />
      <PainPointSection />
      <Features />
      
      {/* Stats Section */}
      <section className="bg-ocean py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <p className="text-ocean-light">Conservation Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <p className="text-ocean-light">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.4M</div>
              <p className="text-ocean-light">CO₂ Tons Sequestered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$18M</div>
              <p className="text-ocean-light">Carbon Credits Sold</p>
            </div>
          </div>
        </div>
      </section>
      
      <HowItWorksCards />
      <PilotHighlight />
      <ImpactMetrics />
      <CallToAction />
      
      {/* Footer with updated structure */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <Waves className="h-8 w-8 text-ocean mr-2" />
                <span className="font-bold text-2xl">LocalBlue<span className="text-ocean">X</span></span>
              </div>
              <p className="text-gray-400 max-w-xs mb-4">
                AI-powered platform monitoring and monetizing carbon sequestration in coastal ecosystems.
              </p>
              
              {/* Office locations */}
              <div className="text-gray-400 mb-6">
                <div className="mb-1"><strong>Paris Office:</strong> 15 Rue de la Paix, 75002 Paris</div>
                <div><strong>Guadeloupe Field Station:</strong> Pointe-à-Pitre 97110</div>
              </div>
              
              {/* Contact */}
              <div className="flex space-x-4 mb-6">
                <a href="mailto:contact@localblue-x.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h5 className="font-semibold mb-4">Platform</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketplace</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Company</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Resources</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Connect</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* EU funding disclaimer */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="bg-gray-800 p-3 rounded text-sm text-gray-400 mb-4">
              This project has received funding from the European Union's Horizon Europe research and innovation program under grant agreement No. 123456789.
            </div>
          </div>
          
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © 2025 LocalBlue X. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Media Kit PDF</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
