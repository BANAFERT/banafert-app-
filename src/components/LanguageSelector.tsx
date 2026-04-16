import React from 'react';
import { Languages } from 'lucide-react';
import { Language, Translations } from '../utils/translations';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange, t }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => onLanguageChange(language === 'fr' ? 'ar' : 'fr')}
        className="bg-vert-foret text-white p-3 rounded-full shadow-lg hover:bg-terre-cuite transition flex items-center gap-2"
        aria-label={t.switchLanguage}
      >
        <Languages className="w-5 h-5" />
        <span className="text-sm hidden sm:inline">{language === 'fr' ? 'العربية' : 'Français'}</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
