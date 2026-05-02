import { motion } from 'motion/react';

const ambianceImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', title: 'Elegant Interior' },
  { id: 2, url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800', title: 'Cozy Dining' },
  { id: 3, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', title: 'Authentic Decor' },
  { id: 4, url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800', title: 'Outdoor Haven' },
  { id: 5, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', title: 'Heritage Entrance' },
  { id: 6, url: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800', title: 'Gourmet Table' },
];

// Duplicate for seamless loop
const carouselImages = [...ambianceImages, ...ambianceImages];

export default function Ambiance() {
  return (
    <section id="ambiance" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60 mb-2 block">
              The Vibe
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-on-surface mb-6">A Setting as Rich as<br /><span className="italic text-brand-primary">Our Flavors</span></h2>
            <p className="text-brand-on-surface/50 leading-relaxed italic">
              "From our heritage stone walls to the lush greenery of our garden seating, every corner of Sardar Biryani House is designed to make your dining experience unforgettable."
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-brand-primary font-medium text-sm">
              <div className="w-12 h-[1px] bg-brand-primary" />
              Scroll to explore
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          className="flex gap-6 px-4"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {carouselImages.map((image, idx) => (
            <div 
              key={`${image.id}-${idx}`}
              className="relative w-[300px] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif italic text-xl mb-1">{image.title}</p>
                <div className="w-8 h-0.5 bg-brand-primary" />
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Soft Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-brand-surface border border-brand-outline/10 text-center">
            <h4 className="font-serif text-2xl mb-2 text-brand-primary italic">Heritage Interior</h4>
            <p className="text-sm text-brand-on-surface/50">Classic stone architecture infused with modern comfort.</p>
          </div>
          <div className="p-8 rounded-3xl bg-brand-surface border border-brand-outline/10 text-center">
            <h4 className="font-serif text-2xl mb-2 text-brand-primary italic">Garden Seating</h4>
            <p className="text-sm text-brand-on-surface/50">Dine under the stars in our lush, open-air garden space.</p>
          </div>
          <div className="p-8 rounded-3xl bg-brand-surface border border-brand-outline/10 text-center">
            <h4 className="font-serif text-2xl mb-2 text-brand-primary italic">Family Zones</h4>
            <p className="text-sm text-brand-on-surface/50">Dedicated spaces including a play area for the little ones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
