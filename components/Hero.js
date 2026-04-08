import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video Wrapper */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/background-feed.mp4"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Rewrite Real Estate. Be the Operator.</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl">Join a peer-to-peer marketplace that moves as fast as you do. View, stream, and trade in real-time.</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
            Become an Operator
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition">
            Explore Feed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
