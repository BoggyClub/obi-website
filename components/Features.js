import React from 'react';

const Features = () => {
  const cards = [
    { title: "List Simply", desc: "Turn your local knowledge into listings in seconds." },
    { title: "Stream Live", desc: "Social-first property tours that connect you with buyers." },
    { title: "P2P Transactions", desc: "A peer-to-peer marketplace that moves at your speed." }
  ];

  return (
    <section className="bg-white text-black py-24 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-16">Everything you need to operate.</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <div key={i} className="border-t border-black pt-8">
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-lg text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
