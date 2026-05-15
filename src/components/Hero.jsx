import React from 'react';

/**
 * A full‑screen hero section featuring a premium agricultural theme.
 * Uses a green gradient background with a dark overlay and highlights key text.
 */
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay for better contrast over the background image */}
      <div className="absolute inset-0 bg-green-900/60"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-20">
        <p className="text-accent uppercase tracking-wider text-sm md:text-base mb-4">
          COMPLETE AGRO SOLUTIONS
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Powering{' '}
          <span className="text-accent">Modern Agriculture</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          Grow More, Earn More, Work Smarter with premium agricultural machinery.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#products"
            className="bg-accent text-green-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition-colors"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-accent text-accent font-semibold px-6 py-3 rounded-full hover:bg-accent hover:text-green-900 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;