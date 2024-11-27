import React from 'react';
import { ShoppingCart, Heart, Menu } from 'lucide-react';
import { Link } from './ui/Link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif font-bold text-rose-600">
              Chelly's
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products">Products</Link>
            <Link href="/routines">Routines</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-rose-50 rounded-full">
              <Heart className="w-6 h-6 text-rose-600" />
            </button>
            <button className="p-2 hover:bg-rose-50 rounded-full">
              <ShoppingCart className="w-6 h-6 text-rose-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-rose-50 rounded-full">
              <Menu className="w-6 h-6 text-rose-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}