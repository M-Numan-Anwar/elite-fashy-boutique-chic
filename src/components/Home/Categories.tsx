
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Handbags",
    description: "Elegant handbags for everyday luxury",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    url: "/category/handbags"
  },
  {
    id: 2,
    name: "Clutches",
    description: "Statement pieces for special occasions",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    url: "/category/clutches"
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complete your look with premium accessories",
    image: "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    url: "/category/accessories"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-elite-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Shop By Category
          </h2>
          <div className="h-1 w-20 bg-elite-gold mx-auto mb-4"></div>
          <p className="text-elite-taupe">
            Browse our carefully curated collection of premium handbags and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              to={category.url} 
              key={category.id}
              className="group overflow-hidden"
            >
              <div className="relative h-96 overflow-hidden">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-display font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {category.description}
                  </p>
                  <div className="inline-block">
                    <span className="text-elite-gold flex items-center space-x-2 transform translate-y-0 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>Shop Now</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <div className="h-0.5 w-0 bg-elite-gold group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
