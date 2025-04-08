
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Sample featured products data
const products = [
  {
    id: 1,
    name: "Milano Leather Tote",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Totes",
    isNew: true,
    rating: 4.8,
    url: "/product/1"
  },
  {
    id: 2,
    name: "Paris Evening Clutch",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    category: "Clutches",
    isNew: false,
    rating: 5.0,
    url: "/product/2"
  },
  {
    id: 3,
    name: "Rome Crossbody Bag",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1594223274512-ad4b5a3d6e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=757&q=80",
    category: "Crossbody",
    isNew: true,
    rating: 4.9,
    url: "/product/3"
  },
  {
    id: 4,
    name: "Vienna Pearl Handbag",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    category: "Handbags",
    isNew: false,
    rating: 4.7,
    url: "/product/4"
  }
];

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Trending Now
          </h2>
          <div className="h-1 w-20 bg-elite-gold mx-auto mb-4"></div>
          <p className="text-elite-taupe">
            Discover our most popular items that define luxury and elegance
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4">
                {/* New Tag */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-elite-gold px-3 py-1 text-xs font-semibold text-white">
                      NEW
                    </div>
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`h-5 w-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-elite-DEFAULT'}`} 
                  />
                </button>
                
                {/* Product Image */}
                <Link to={product.url}>
                  <div className="h-72 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-white text-elite-DEFAULT text-sm font-medium">
                      Quick View
                    </span>
                  </div>
                </Link>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-elite-taupe mb-2">{product.category}</div>
                <Link to={product.url} className="block">
                  <h3 className="font-medium mb-2 text-lg group-hover:text-elite-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="font-display text-lg mb-4">${product.price.toFixed(2)}</div>
                
                <Button className="w-full bg-elite-DEFAULT hover:bg-elite-taupe text-white">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-elite-gold text-elite-gold hover:bg-elite-gold hover:text-white px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
