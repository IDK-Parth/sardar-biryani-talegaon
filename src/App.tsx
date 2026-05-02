/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Speciality from './components/Speciality';
import TopDishes from './components/TopDishes';
import Menu from './components/Menu';
import Ambiance from './components/Ambiance';
import AwardsAndGuests from './components/AwardsAndGuests';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/10 selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <Speciality />
        <TopDishes />
        <Menu />
        <Ambiance />
        <AwardsAndGuests />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
