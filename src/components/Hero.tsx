
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Quick & Easy Financial Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl text-pactgreen-600 font-semibold mb-6">
              Snap Credit • Online Loan • EZloan
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              PACT OWOH LIMITED provides flexible financial solutions designed to meet your needs. 
              Apply online and get approved in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pactgreen-600 hover:bg-pactgreen-700 text-lg px-8 py-6 h-auto">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-pactgreen-600 text-pactgreen-600 hover:bg-pactgreen-50 text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-1 hero-gradient rounded-xl blur-xl opacity-70"></div>
              <div className="relative bg-white p-6 sm:p-10 rounded-xl shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Loan Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">I want to borrow</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input 
                        type="number" 
                        placeholder="5,000" 
                        className="w-full pl-8 pr-3 py-2 border rounded-md focus:ring-pactgreen-500 focus:border-pactgreen-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Over a period of</label>
                    <select className="w-full px-3 py-2 border rounded-md focus:ring-pactgreen-500 focus:border-pactgreen-500">
                      <option>3 months</option>
                      <option>6 months</option>
                      <option>12 months</option>
                      <option>24 months</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <Button className="w-full bg-pactgreen-600 hover:bg-pactgreen-700">
                      Calculate & Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
