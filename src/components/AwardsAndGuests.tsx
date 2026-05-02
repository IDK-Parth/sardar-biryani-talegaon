import { motion } from 'motion/react';
import { Award, Star } from 'lucide-react';

const awards = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1531050171651-61afc2286017?auto=format&fit=crop&q=80&w=800',
    title: 'Excellence in Heritage Flavors',
    source: 'Sakal Idols of Maharashtra',
    year: '2023'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1578574515323-c3c899c39c44?auto=format&fit=crop&q=80&w=800',
    title: 'Best Traditional Biryani',
    source: 'Culinary Excellence Awards',
    year: '2022'
  }
];

const guests = [
  { id: 1, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { id: 2, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  { id: 3, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
  { id: 4, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { id: 5, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { id: 6, url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' },
];

export default function AwardsAndGuests() {
  return (
    <section id="awards" className="py-24 bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-60 mb-2 block">
          Recognition & Respect
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-on-surface mb-8">Awards & Distinguished Guests</h2>
        <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
      </div>

      {/* Awards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
                <img 
                  src={award.url} 
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-secondary">
                  <Award className="w-8 h-8" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1 block">{award.year}</span>
                <h3 className="text-2xl font-serif text-brand-on-surface mb-2">{award.title}</h3>
                <p className="text-brand-on-surface/40 text-sm italic">{award.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Guests Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-4 text-brand-primary/30 mb-4">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
        </div>
        <p className="text-brand-on-surface/50 italic max-w-xl mx-auto">
          "The true reward is the smile of every guest who sits at our table. Here are just a few who have honored us with their presence."
        </p>
      </div>

      {/* Guest Carousel */}
      <div className="relative">
        <motion.div 
          className="flex gap-4 px-4"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {[...guests, ...guests].map((guest, idx) => (
            <motion.div 
              key={`${guest.id}-${idx}`}
              whileHover={{ scale: 1.05, rotate: -3 }}
              className="w-48 md:w-64 aspect-square rounded-3xl overflow-hidden shadow-md flex-shrink-0 border-4 border-white"
            >
              <img 
                src={guest.url} 
                alt="Honored Guest"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Soft Fades for Carousel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
