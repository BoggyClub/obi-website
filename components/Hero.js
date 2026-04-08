import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center bg-black">
      {/* Left side: Uber-style content */}
      <div className="z-10 w-full md:w-1/2 p-12 md:pl-24">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          Real Estate, <br/>
          In Motion.
        </h1>
        <p className="text-xl mb-12 text-gray-300">
          Become an operator. Sign up to view, trade, and stream property in real-time.
        </p>
        
        <div className="flex flex-col gap-4">
          <button className="bg-white text-black px-10 py-5 rounded-md text-xl font-bold hover:bg-gray-200 transition">
            Sign up to ride
          </button>
          <a href="https://play.google.com/store/apps/details?id=com.obirealestate.android" className="underline text-gray-400 hover:text-white">
            Already have an account? Download the app
          </a>
        </div>
      </div>

      {/* Right side: Visual teaser */}
      <div className="absolute right-0 top-0 w-full md:w-3/5 h-full opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" 
          className="h-full w-full object-cover" 
          alt="Real Estate"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
