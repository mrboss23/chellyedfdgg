import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:bg-rose-50">
          <Heart className="w-5 h-5 text-rose-600" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}