import React from "react";

const logos = [
  { src: "/BrandLogos/NakedCoffee.png", alt: "Naked Coffee" },
  { src: "/BrandLogos/Nykaa.png", alt: "Nykaa" },
  { src: "/BrandLogos/Vodafone.png", alt: "Vodafone" },
  { src: "/BrandLogos/WomenWellness.png", alt: "Women Wellness" },
  { src: "/BrandLogos/dior.png", alt: "Dior" },
  { src: "/BrandLogos/sketchers.png", alt: "Sketchers" },
  { src: "/BrandLogos/Arrow.png", alt: "Arrow" },
  { src: "/BrandLogos/Desklot.png", alt: "Desklot" },
  { src: "/BrandLogos/Keventers.png", alt: "Keventers" },
  { src: "/BrandLogos/Lenskart.png", alt: "Lenskart" },
  { src: "/BrandLogos/Loreal.png", alt: "Loreal" },
  { src: "/BrandLogos/Medusa_Logo.png", alt: "Medusa Logo" },
];

const BrandLogos = () => {
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12 text-center">
        <h3 className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#869CA9] uppercase">
          Trusted by 100+ Global Enterprises
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left and Right Fade Overlays for seamless look */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee items-center gap-8 md:gap-32 px-4 md:px-8 py-4 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity duration-300 min-w-[80px] md:min-w-[150px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-16 h-auto md:w-auto md:max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
