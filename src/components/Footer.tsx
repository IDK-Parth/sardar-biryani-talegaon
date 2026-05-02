import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="reservation" className="bg-[#1a1412] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-serif mb-6">Warm welcome</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              We are welcome to discover your atmosphere taste of Sardar Biryani House. 
              Every grain of long-grain slow dum basmati with completeness within premises and 
              dedication we have slow-cooked to fresh ingredients to condition and health affections.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6">Restaurant</h3>
            <div className="text-white/40 text-sm space-y-4">
              <p>
                Telegaon Dhamdhere Road,
                <br />
                Telegaon Dhamdhere, Tal. Shirur,
                <br />
                Dist. Pune
              </p>
              <div>
                <p className="text-white mb-1">Opening Hours:</p>
                <p>12:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6">Get in touch</h3>
            <div className="text-white/40 text-sm space-y-2">
              <p>+91 84593 32597</p>
              <p>+91 97675 50061</p>
              <p>+91 88508 11583</p>
              <p>+91 72494 91585</p>
              <p>+91 96228 11583</p>
              <p>+91 76665 35966</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-serif font-black text-2xl tracking-[0.2em]">Sardar Biryani House</span>
            <span className="font-serif font-black text-2xl tracking-[0.2em]"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
