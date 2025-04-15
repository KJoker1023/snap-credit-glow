
import { Shield, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About PACT OWOH LIMITED</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Founded with a mission to provide accessible financial solutions to our customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 hero-gradient rounded-xl blur-lg opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Professional team at PACT OWOH LIMITED" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Journey</h3>
            <p className="text-gray-600 mb-6">
              PACT OWOH LIMITED was established to bridge the gap in the financial market by providing accessible, 
              transparent, and customer-focused lending solutions. Our team of experienced professionals is dedicated 
              to serving our customers with integrity and excellence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pactgreen-100 p-2 rounded-full mr-4">
                  <Shield className="text-pactgreen-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Trusted Financial Partner</h4>
                  <p className="text-gray-600">
                    We prioritize transparency and ethical lending practices to build long-term relationships with our customers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pactgreen-100 p-2 rounded-full mr-4">
                  <Award className="text-pactgreen-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Commitment to Excellence</h4>
                  <p className="text-gray-600">
                    Our team is dedicated to providing exceptional customer service and financial solutions tailored to your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pactgreen-100 p-2 rounded-full mr-4">
                  <Users className="text-pactgreen-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Community-Focused</h4>
                  <p className="text-gray-600">
                    We believe in contributing to the communities we serve and making a positive impact through responsible lending.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
