import React, { useState } from 'react';
import { Package, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Language, Translations } from '../utils/translations';

interface ProductListProps {
  language: Language;
  t: Translations;
}

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image?: string;
}

const products: Product[] = [
  { id: 'SOL-25', name: 'BANAFERT Solide 25kg', price: 150, unit: 'sac' },
  { id: 'SOL-5', name: 'BANAFERT Solide 5kg', price: 40, unit: 'sac' },
  { id: 'LIQ-20', name: 'BANAFERT Liquide 20L', price: 200, unit: 'bidon' },
  { id: 'LIQ-5', name: 'BANAFERT Liquide 5L', price: 60, unit: 'bidon' },
];

const ProductList: React.FC<ProductListProps> = ({ language, t }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + (quantities[product.id] || 0) * product.price;
    }, 0);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-vert-foret mb-2">{t.productsTitle}</h1>
        <p className="text-gray-600 mb-6">{t.productsDescription}</p>

        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <Package className="w-10 h-10 text-terre-cuite" />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.price} DH / {product.unit}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantities[product.id] || 0}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">{t.total}</span>
            <span className="text-xl font-bold text-vert-foret">{getTotal()} DH</span>
          </div>
          <button className="w-full bg-terre-cuite text-white py-3 rounded-lg hover:bg-vert-foret transition flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            {t.orderNow}
          </button>
        </div>
      </div>
    </div>
 
