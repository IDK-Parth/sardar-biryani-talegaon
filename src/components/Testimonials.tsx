import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aditi Sharma',
      role: 'Food Critic, The Daily Flavor',
      text: 'The aroma alone is worth the trip. The way each spice tries the palate at different moments is a masterpiece of culinary engineering.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Rajiv Malhotra',
      role: 'Loyal Patron since 2010',
      text: "Whenever I miss home, I come here. Sardar's Biryani isn't just a meal, it's an emotion served on a plate.",
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#fff1ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-serif text-brand-on-surface mb-6 leading-tight">
              Echoes of
              <br />
              <span className="text-brand-primary italic">Delight</span>
            </h2>
            <p className="text-brand-on-surface/60 italic mb-8">
              "It's not just food; it's a nostalgic journey through the narrow spice lanes of the old city."
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
                ))}
              </div>
              <span className="font-bold text-brand-on-surface">4.9/5 Average</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-outline/10 relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-brand-on-surface">{t.name}</h4>
                    <p className="text-[11px] text-brand-on-surface/40 uppercase font-bold tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-brand-on-surface/70 leading-relaxed text-sm">
                  {t.text}
                </p>
                <div className="absolute top-8 right-10 text-brand-primary/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 15V7C1 4.79086 2.79086 3 5 3H8C9.10457 3 10 3.89543 10 5V6C10 7.10457 9.10457 8 8 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H8C9.10457 16 10 16.8954 10 18V21H7C3.68629 21 1 18.3137 1 15Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
