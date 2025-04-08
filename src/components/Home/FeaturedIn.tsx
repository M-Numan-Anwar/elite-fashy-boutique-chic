
const FeaturedIn = () => {
  const logos = [
    {
      name: "Vogue",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Vogue_logo.svg/1280px-Vogue_logo.svg.png",
    },
    {
      name: "Elle",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Elle_Logo.svg/2560px-Elle_Logo.svg.png",
    },
    {
      name: "Harper's Bazaar",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Harper%27s_Bazaar_Logo.svg/2560px-Harper%27s_Bazaar_Logo.svg.png",
    },
    {
      name: "Vanity Fair",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Vanity_Fair_Logo.svg/2560px-Vanity_Fair_Logo.svg.png",
    },
    {
      name: "GQ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/GQ_2016_logo.svg/2560px-GQ_2016_logo.svg.png",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-elite-taupe text-sm uppercase tracking-wider mb-10">
          As Featured In
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
