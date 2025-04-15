
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions or need assistance? Our team is here to help you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-md focus:ring-pactgreen-500 focus:border-pactgreen-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md focus:ring-pactgreen-500 focus:border-pactgreen-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border rounded-md focus:ring-pactgreen-500 focus:border-pactgreen-500"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:ring-pactgreen-500 focus:border-pactgreen-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button className="w-full bg-pactgreen-600 hover:bg-pactgreen-700">
                Send Message
              </Button>
            </form>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-pactgreen-100 p-2 rounded-full mr-4">
                    <Mail className="text-pactgreen-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <p className="text-gray-600">support@pactowoh.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pactgreen-100 p-2 rounded-full mr-4">
                    <Phone className="text-pactgreen-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pactgreen-100 p-2 rounded-full mr-4">
                    <MapPin className="text-pactgreen-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Address</h4>
                    <p className="text-gray-600">
                      1234 Finance Street<br />
                      Suite 500<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
