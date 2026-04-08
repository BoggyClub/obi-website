import React from 'react';

const InteractiveFeedTeaser = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-10 text-center mb-16">
        <h2 className="text-5xl font-black mb-6">Real Estate, in motion.</h2>
        <p className="text-xl text-gray-400">See the market through the eyes of the operators.</p>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto pb-8 hide-scrollbar">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex-shrink-0 w-[240px] h-[400px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer">
            <img 
              src={`https://images.unsplash.com/photo-15${1000 + item}-01?q=80&w=400`}
              className="w-full h-full object-cover"
              alt="Feed Item"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveFeedTeaser;
