import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SoilAnalyzer from './components/SoilAnalyzer';
import ProductList from './components/ProductList';
import TrainingBooking from './components/TrainingBooking';
import LanguageSelector from './components/LanguageSelector';
import { translations, Language } from './utils/translations';

function App() {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('banafert_language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'ar')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('banafert_language', lang);
  };

  const t = translations[language];

  return (
    <BrowserRouter basename="/banafert-app">
      <div className="min-h-screen bg-[#F9F7F4] flex flex-col">
        <Header language={language} t={t} />
        <LanguageSelector language={language} onLanguageChange={handleLanguageChange} t={t} />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
          <Routes>
            <Route path="/" element={<SoilAnalyzer language={language} t={t} />} />
            <Route path="/products" element={<ProductList language={language} t={t} />} />
            <Route path="/training" element={<TrainingBooking language={language} t={t} />} />
          </Routes>
        </main>
        <Footer language={language} t={t} />
      </div>
    </BrowserRouter>
  );
}

export default App;
