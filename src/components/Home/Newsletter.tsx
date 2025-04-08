
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-24 bg-elite-DEFAULT text-white relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1490114538077-0a7f8cb5d45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
        }}
      >
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Our <span className="gold-gradient">Elite Family</span>
          </h2>
          <p className="mb-8 text-white/80">
            Subscribe to receive exclusive offers, early access to new collections, and personalized style recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 focus:border-elite-gold text-white placeholder:text-white/60 flex-grow" 
            />
            <Button className="bg-elite-gold hover:bg-elite-gold/80 text-elite-DEFAULT whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          
          <p className="mt-4 text-xs text-white/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Elite Fashy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
