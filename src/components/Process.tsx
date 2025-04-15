
import { CheckCircle2, ClipboardCheck, CreditCard } from 'lucide-react';

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">How It Works</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our simple 3-step process gets you the funds you need quickly and efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="text-center animate-fade-in">
            <div className="bg-pactgreen-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="text-pactgreen-600 h-10 w-10" />
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-10 right-0 w-full border-t-2 border-dashed border-pactgreen-300"></div>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 relative z-10 border-2 border-pactgreen-500 text-pactgreen-600 font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Complete Application</h3>
            <p className="text-gray-600">
              Fill out our simple online application form in minutes. No complicated paperwork required.
            </p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-pactgreen-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-pactgreen-600 h-10 w-10" />
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-10 right-0 w-full border-t-2 border-dashed border-pactgreen-300"></div>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 relative z-10 border-2 border-pactgreen-500 text-pactgreen-600 font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Get Approved</h3>
            <p className="text-gray-600">
              Receive a quick decision on your application. Most customers are approved within minutes.
            </p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-pactgreen-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CreditCard className="text-pactgreen-600 h-10 w-10" />
            </div>
            <div className="relative">
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 relative z-10 border-2 border-pactgreen-500 text-pactgreen-600 font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Receive Funds</h3>
            <p className="text-gray-600">
              Once approved, funds are transferred directly to your bank account, often on the same day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
