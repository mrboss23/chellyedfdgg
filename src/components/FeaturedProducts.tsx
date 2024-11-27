import React from 'react';
import { ProductCard } from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Rose Facial Serum',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80',
    description: 'Hydrating serum with rose extract',
  },
  {
    id: 2,
    name: 'Vitamin C Cream',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80',
    description: 'Brightening cream with vitamin C',
  },
  {
    id: 3,
    name: 'Gentle Cleanser',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&q=80',
    description: 'Mild facial cleanser for all skin types',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Bestselling Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}