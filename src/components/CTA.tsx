
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg opacity-90 mb-8">
            Apply now and get the funds you need to achieve your goals. Our simple application process takes just minutes to complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pactgreen-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-medium">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
