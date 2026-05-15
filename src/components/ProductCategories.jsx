import React from 'react';

// Import representative images for each category
import catChaff from '../assets/chaff_s1.jpg';
import catMilking from '../assets/milking_19000.jpg';
import catPumps from '../assets/spray_pump.jpg';
import catAccessories from '../assets/battery_unit.jpg';

/**
 * Display a grid of product categories to guide users to different product types.
 */
const ProductCategories = () => {
  const categories = [
    { id: 'cat-chaff', name: 'Chaff Cutters', image: catChaff },
    { id: 'cat-milking', name: 'Milking Machines', image: catMilking },
    { id: 'cat-pumps', name: 'Pumps & Sprayers', image: catPumps },
    { id: 'cat-accessories', name: 'Accessories', image: catAccessories },
  ];

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Product Categories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 mb-4 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;