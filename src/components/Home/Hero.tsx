
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1617939533087-8b396c9e6d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6">
          Luxury That <br /> <span className="gold-gradient">Defines You</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
          Discover our exquisite collection of premium handbags and accessories, crafted for the modern woman who embraces elegance.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-elite-gold hover:bg-elite-gold/80 text-elite-DEFAULT px-8 py-6 text-lg font-medium">
            Shop Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
            View Collections
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
