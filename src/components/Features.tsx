
import { Zap, Check, Clock, Percent, ShieldCheck, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Financial Products</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Choose from our range of flexible loan products designed to meet your specific financial needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Snap Credit */}
          <div id="snap-credit" className="feature-card hover-scale">
            <div className="bg-pactgreen-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Zap className="text-pactgreen-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Snap Credit</h3>
            <p className="text-gray-600 mb-4">
              Get instant access to funds with our quickest loan option. Approved in minutes, funds in your account the same day.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Instant approval
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Same-day funding
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> No hidden fees
              </li>
            </ul>
            <Button className="w-full bg-pactgreen-600 hover:bg-pactgreen-700 mt-4">
              Apply for Snap Credit
            </Button>
          </div>

          {/* Online Loan */}
          <div id="online-loan" className="feature-card hover-scale">
            <div className="bg-pactgreen-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="text-pactgreen-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Online Loan</h3>
            <p className="text-gray-600 mb-4">
              Our standard loan product with competitive rates and flexible repayment options tailored to your budget.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Flexible terms
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Competitive rates
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Easy online application
              </li>
            </ul>
            <Button className="w-full bg-pactgreen-600 hover:bg-pactgreen-700 mt-4">
              Apply for Online Loan
            </Button>
          </div>

          {/* EZloan */}
          <div id="ez-loan" className="feature-card hover-scale">
            <div className="bg-pactgreen-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Percent className="text-pactgreen-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">EZloan</h3>
            <p className="text-gray-600 mb-4">
              Our most accessible loan option with simplified requirements and a straightforward application process.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Simplified process
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Minimal documentation
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-pactgreen-500 mr-2" /> Fixed payments
              </li>
            </ul>
            <Button className="w-full bg-pactgreen-600 hover:bg-pactgreen-700 mt-4">
              Apply for EZloan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
