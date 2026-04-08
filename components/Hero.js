import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-between">
      <div className="max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          Real Estate, redefined.
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Peer-to-peer property transactions. List for free, sell faster, and join a marketplace designed for operators. 
        </p>
        
        <div className="cta-container">
          <a href="#register" className="btn-operator hover:bg-gray-200 transition">
            Become an Operator
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.obirealestate.android" className="link-download hover:text-gray-300">
            Download OBI App →
          </a>
        </div>
      </div>

      {/* Embedded App Mockup Teaser */}
      <div className="hidden md:block relative w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-4 border-gray-700 overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600" 
          className="w-full h-full object-cover" 
          alt="App UI"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
};

export default Hero;
