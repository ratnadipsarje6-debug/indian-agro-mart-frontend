import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

/**
 * Section for displaying a selection of products in a responsive grid layout.
 */
const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;