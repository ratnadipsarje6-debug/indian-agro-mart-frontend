import React from 'react';

/**
 * Introduction section that welcomes visitors and briefly describes the business.
 */
const Introduction = () => {
  return (
    <section id="introduction" className="py-16 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Welcome to Indian Agro Mart
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Indian Agro Mart Enterprises is your trusted partner for high-quality
          agricultural machinery. We offer a diverse range of products designed
          to increase efficiency, productivity and profitability for farmers
          across India.
        </p>
      </div>
    </section>
  );
};

export default Introduction;