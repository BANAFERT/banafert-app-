import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingCart, Calendar, Home } from 'lucide-react';
import { Language, Translations } from '../utils/translations';

interface HeaderProps {
  language: Language;
  t: Translations;
}

const Header: React.FC<HeaderProps> = ({ language, t }) => {
  return (
    <header className="bg-vert-foret text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Leaf className="w-6 h-6" />
          <span>BANAFERT</span>
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-beige-sable transition flex items-center gap-1">
            <Home className="w-4 h-4" />
            {t.home}
          </Link>
          <Link to="/products" className="hover:text-beige-sable transition flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            {t.products}
          </Link>
          <Link to="/training" className="hover:text-beige-sable transition flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {t.training}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
