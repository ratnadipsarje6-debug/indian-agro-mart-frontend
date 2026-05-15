import React from 'react';

/**
 * Section highlighting the key benefits of choosing Indian Agro Mart.
 */
const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Quality Products',
      desc: 'High‑quality agricultural machinery built to last.',
    },
    {
      id: 2,
      title: 'Affordable Prices',
      desc: 'Competitive pricing for maximum value.',
    },
    {
      id: 3,
      title: 'Expert Support',
      desc: 'Friendly customer service and after‑sales support.',
    },
    {
      id: 4,
      title: 'Nationwide Delivery',
      desc: 'Fast and reliable shipping across India.',
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;