import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="text-6xl md:text-8xl font-black mb-6">
        The Future of <br/>
        Real Estate.
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-lg">
        OBI is your open marketplace connecting real estate operators and viewers.
      </p>
      
      <div className="cta-container">
        <a href="#register" className="btn-operator hover:bg-gray-200 transition">
          Become an Operator
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.obirealestate.android" className="link-download hover:text-gray-300">
          Download OBI App →
        </a>
      </div>
    </section>
  );
};

export default Hero;
