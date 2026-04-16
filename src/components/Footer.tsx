import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { Language, Translations } from '../utils/translations';

interface FooterProps {
  language: Language;
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ language, t }) => {
  return (
    <footer className="bg-brun-terre text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="font-bold text-lg">BANAFERT</span>
            </div>
            <p className="text-sm opacity-90">{t.footerDescription}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t.contact}</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@banafert.ma</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+212 5XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Marrakech, Maroc</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t.followUs}</h3>
            <p className="text-sm opacity-90">{t.slogan}</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs opacity-70">
          &copy; 2026 BANAFERT. {t.allRightsReserved}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
