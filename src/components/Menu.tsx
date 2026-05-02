import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const menuPages = [
  { id: 1, title: 'Special Biryani', url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Special Thali', url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Starters & Soups', url: 'https://images.unsplash.com/photo-1601050690597-df056fb1779f?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Chinese Starters', url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Tandoori Starters', url: 'https://images.unsplash.com/photo-1626777552726-4a6b547b4e5c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Chicken Raan', url: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Main Course Veg', url: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Veg Handi & Dal', url: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Sea Food', url: 'https://images.unsplash.com/photo-1559737558-2f5a35f4520b?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: 'Main Course Non-Veg', url: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800' },
  { id: 11, title: 'Mutton Specials', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' },
  { id: 12, title: 'Rice & Fry', url: 'https://images.unsplash.com/photo-1512058560566-42724afbc2bc?auto=format&fit=crop&q=80&w=800' },
  { id: 13, title: 'Roti & Desserts', url: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800' },
  { id: 14, title: 'Beverages', url: 'https://images.unsplash.com/photo-1513558111212-5649c5e22c95?auto=format&fit=crop&q=80&w=800' },
];

export default function Menu() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const navigateLightbox = (direction: number) => {
    if (selectedImage === null) return;
    const newIndex = (selectedImage + direction + menuPages.length) % menuPages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id="menu" className="py-24 bg-brand-surface relative overflow-hidden group/section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60 mb-2 block">
            The Full Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-on-surface mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-brand-primary rounded-full mb-6" />
          <p className="text-brand-on-surface/50 italic text-sm">
            Explore the heritage of flavors, from slow-cooked biryanis to authentic starters. Swipe to browse.
          </p>
        </div>
      </div>

      {/* Main Carousel Container */}
      <div className="relative group/carousel">
        {/* Navigation Buttons - Side Mounted */}
        <button 
          onClick={() => carouselScroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 opacity-0 group-hover/section:opacity-100 -translate-x-4 group-hover/section:translate-x-0 hidden md:flex"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button 
          onClick={() => carouselScroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 opacity-0 group-hover/section:opacity-100 translate-x-4 group-hover/section:translate-x-0 hidden md:flex"
          aria-label="Next page"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Swiping Carousel */}
        <div 
          ref={carouselRef}
          className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 sm:px-6 lg:px-[calc((100vw-min(1280px,calc(100vw-4rem)))/2)] pb-12 scroll-smooth"
        >
          {menuPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
              className="min-w-[80vw] sm:min-w-[45vw] md:min-w-[320px] snap-center cursor-pointer relative aspect-[3/4.2] bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border border-brand-outline/5 transition-all duration-500 group"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={page.url}
                  alt={page.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-on-surface/90 via-transparent to-transparent opacity-60 z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-xl">
                  <ZoomIn className="w-8 h-8" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2 block"
                  >
                    Section {index + 1}
                  </motion.span>
                  <h4 className="text-white font-serif text-2xl leading-tight">
                    {page.title}
                  </h4>
                  <div className="w-0 group-hover:w-16 h-0.5 bg-brand-primary mt-4 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-on-surface/95 backdrop-blur-md p-4 md:p-8"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              layoutId={`menu-card-${menuPages[selectedImage].id}`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-4xl w-full h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-full w-full flex items-center justify-center p-2 relative">
                <img
                  src={menuPages[selectedImage].url}
                  alt={menuPages[selectedImage].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 text-white text-center">
                <h3 className="text-3xl font-serif mb-2 tracking-tight">{menuPages[selectedImage].title}</h3>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-[1px] bg-white/20" />
                  <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
                    Heritage Guide Page {selectedImage + 1}
                  </p>
                  <div className="w-8 h-[1px] bg-white/20" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
