import { motion } from 'motion/react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TopDishes() {
  const dishes = [
    {
      name: 'Murgh Heritage Biryani',
      price: '$18.50',
      description: 'Boneless chicken, saffron, long-grain basmati',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Paneer Tikka Angare',
      price: '$14.00',
      description: 'Clay-oven roasted cottage cheese, tandoori masala',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Shahi Gosht Dum',
      price: '$22.08',
      description: 'Premium lamb cuts, slow-cooked in its own juices',
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 bg-[#fffaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60 mb-2 block">
              Curated Favorites
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-on-surface">Top Dishes of the Week</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-brand-outline/20 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-outline/20 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-brand-outline/10 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.7 }}
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-on-surface/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                  <span className="text-white font-serif font-bold text-sm">{dish.price}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl font-serif text-brand-on-surface leading-tight">
                    {dish.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>
                <p className="text-brand-on-surface/50 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
