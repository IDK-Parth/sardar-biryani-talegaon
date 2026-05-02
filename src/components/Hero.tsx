import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-brand-primary/5 rounded-full mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Est. 2012 for the taste for the food
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif text-brand-on-surface leading-[0.9] mb-8">
              The Art of
              <br />
              <span className="italic text-brand-primary">Slow Dum</span>
              <br />
              Cooking
            </h1>

            <p className="text-brand-on-surface/60 text-lg max-w-md leading-relaxed mb-10">
              Experience the aromatic legacy of Sardar Biryani House. 
              Every grain of long-grain basmati is infused with a secret blend 
              of 32 spices, slow-cooked in traditional clay pots for over six hours.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="spice-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-brand-primary/20"
              >
                View Full Menu
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(111, 51, 37, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold text-brand-primary border border-brand-primary/20"
              >
                Ambiance
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-primary/30 aspect-square">
              <motion.img
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800"
                alt="Authentic Dum Biryani"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-serif italic text-2xl mb-1 opacity-90">Authentic</p>
                <h3 className="font-serif text-4xl font-bold">Biryani</h3>
                <p className="text-sm opacity-70 mt-2">Slow cooked to perfection</p>
              </div>
            </div>

            {/* Floating Info Tag */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-brand-outline/10"
            >
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface/40">Chef's Choice</p>
                <h4 className="font-serif font-bold text-lg text-brand-on-surface">Hyderabadi Special</h4>
              </div>
            </motion.div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
