import { motion } from 'motion/react';
import { Leaf, Flame } from 'lucide-react';

export default function Speciality() {
  const types = [
    {
      title: 'Shakahari',
      tag: '100% Vegetarian',
      desc: 'Pure veg, keep it safe with Taste',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
      icon: <Leaf className="w-5 h-5 text-green-600" />,
      color: 'bg-green-50',
      cta: 'Explore Veg Menu'
    },
    {
      title: 'Mansahari',
      tag: 'Non-Vegetarian',
      desc: 'Bold taste, made right',
      image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&q=80&w=400',
      icon: <Flame className="w-5 h-5 text-red-600" />,
      color: 'bg-red-50',
      cta: 'Explore Non-Veg Menu'
    }
  ];

  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-on-surface mb-4">Our Speciality</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {types.map((type, idx) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#fffcfb] p-6 rounded-3xl border border-brand-outline/10 flex items-center gap-6 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative w-40 h-40 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                </motion.div>
                <div className={`absolute -top-3 -right-3 w-10 h-10 ${type.color} rounded-full flex items-center justify-center shadow-md`}>
                  {type.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${type.title === 'Shakahari' ? 'text-green-600' : 'text-red-600'}`}>
                    {type.tag}
                  </span>
                </div>
                <h3 className="text-3xl font-serif text-brand-on-surface mb-2">{type.title}</h3>
                <p className="text-brand-on-surface/50 text-sm mb-6">{type.desc}</p>
                <button className="text-sm font-bold text-brand-primary flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                  {type.cta}
                  <span className="text-lg">→</span>
                </button>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
