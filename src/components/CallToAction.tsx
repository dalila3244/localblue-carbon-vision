
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-salt-marsh bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/80 to-ocean-dark/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center rounded-full bg-ocean/10 px-3 py-1 text-sm text-ocean mb-6">
                <Leaf className="mr-2 h-4 w-4" />
                <span>Join Our Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make a real climate impact?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a conservation organization looking to monetize carbon sequestration or a corporate buyer seeking high-quality offsets, LocalBlue X provides the technology and marketplace you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-ocean hover:bg-ocean-dark">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-ocean text-ocean hover:bg-ocean/5">
                  Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
                <p className="text-gray-600 mb-4">Stay updated with the latest news on blue carbon technology and market insights.</p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-ocean"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-ocean hover:bg-ocean-dark">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
