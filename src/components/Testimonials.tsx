
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Small Business Owner",
      testimonial: "Snap Credit helped me bridge a cash flow gap in my business. The application was easy and I received the funds the same day. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Education Professional",
      testimonial: "I needed a quick loan for an unexpected expense. The Online Loan application process was straightforward and the customer service was excellent.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Healthcare Worker",
      testimonial: "EZloan was truly easy! The minimal documentation required and the fixed payments make it simple to manage my budget. Thank you!",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what our customers have to say about their experience with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * testimonial.id}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <div className="bg-pactgreen-100 text-pactgreen-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
