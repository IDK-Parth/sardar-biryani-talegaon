import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ambiance', href: '#ambiance' },
    { name: 'Awards', href: '#awards' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Reservation', href: '#reservation' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-brand-outline/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">S</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-brand-primary">
              Sardar Biryani House
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-on-surface/70 hover:text-brand-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="spice-gradient text-white px-6 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 shadow-lg shadow-brand-primary/20"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
