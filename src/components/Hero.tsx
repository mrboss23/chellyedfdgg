import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Discover Your Natural Beauty
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Luxurious skincare products made with natural ingredients to help you achieve your best skin ever.
            </p>
            <Button>Shop Now</Button>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&q=80"
              alt="Skincare products"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}