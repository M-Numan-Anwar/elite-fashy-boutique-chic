
import { Button } from "@/components/ui/button";

const Story = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 border border-elite-gold rounded-sm -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Elite Fashy Story" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-elite-gold rounded-sm -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-elite-gold">Story</span>
            </h2>
            <div className="h-1 w-20 bg-elite-gold mb-6"></div>
            <p className="mb-4 text-elite-taupe">
              Elite Fashy was born from a passion for exquisite craftsmanship and timeless design. Established in 2015, we set out to create luxury handbags and accessories that marry traditional artisanship with contemporary aesthetics.
            </p>
            <p className="mb-6 text-elite-taupe">
              Each Elite Fashy piece is meticulously crafted with the finest materials sourced from around the world. Our designs celebrate the modern woman who values both elegance and functionality in her daily life.
            </p>
            <p className="mb-8 font-medium italic">
              "We believe that luxury is not just about the brand name, but about the quality, durability, and the joy a beautiful accessory brings to your everyday life."
            </p>
            <Button className="bg-elite-DEFAULT hover:bg-elite-taupe text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
