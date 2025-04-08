
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Fashion Influencer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Elite Fashy's handbags are exceptional in quality and design. The attention to detail and craftsmanship is truly remarkable. My Milano Leather Tote has become my everyday essential."
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Corporate Executive",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 5,
    text: "I've invested in luxury bags for years, and Elite Fashy stands out for their balance of elegance and functionality. My Vienna Pearl Handbag receives compliments everywhere I go."
  },
  {
    id: 3,
    name: "Olivia Martinez",
    role: "Fashion Blogger",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    text: "The Paris Evening Clutch from Elite Fashy is simply stunning. The quality exceeds expectations, and the customer service was impeccable. Highly recommend to anyone seeking luxury accessories."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-elite-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="h-1 w-20 bg-elite-gold mx-auto mb-4"></div>
          <p className="text-elite-taupe">
            Hear from our valued customers about their Elite Fashy experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 shadow-sm rounded-lg">
              {/* Rating Stars */}
              <div className="flex mb-4 text-elite-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i < testimonial.rating ? "text-elite-gold" : "text-gray-300"}
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="rounded-full h-12 w-12 object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium text-elite-DEFAULT">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-elite-taupe">
                    {testimonial.role}
                  </p>
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
