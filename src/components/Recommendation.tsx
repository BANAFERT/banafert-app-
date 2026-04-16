import React from 'react';
import { Droplets, Package, Leaf, TrendingUp, Calendar } from 'lucide-react';
import { Language, Translations } from '../utils/translations';

interface RecommendationProps {
  result: {
    soilType: string;
    humidity: number;
    fertility: string;
    waterAmount: number;
    waterDelay: number;
    banafertDose: number;
    bagsCount: number;
    priceEstimate: number;
    advice: string;
  };
  language: Language;
  t: Translations;
}

const Recommendation: React.FC<RecommendationProps> = ({ result, language, t }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
      <h2 className="text-xl font-bold text-vert-foret flex items-center gap-2">
        <Leaf className="w-5 h-5" />
        {t.diagnosticTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-beige-sable/30 rounded-lg p-4">
          <h3 className="font-semibold text-vert-foret mb-2">{t.soilAnalysis}</h3>
          <div className="space-y-2 text-sm">
            <p><strong>{t.soilType}:</strong> {result.soilType}</p>
            <p><strong>{t.humidity}:</strong> {result.humidity}%</p>
            <p><strong>{t.fertility}:</strong> {result.fertility}</p>
          </div>
        </div>

        <div className="bg-beige-sable/30 rounded-lg p-4">
          <h3 className="font-semibold text-vert-foret mb-2 flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            {t.irrigation}
          </h3>
          <div className="space-y-2 text-sm">
            <p><strong>{t.waterAmount}:</strong> {result.waterAmount} m³/ha</p>
            <p><strong>{t.waterDelay}:</strong> {t.within} {result.waterDelay} {t.hours}</p>
          </div>
        </div>

        <div className="bg-beige-sable/30 rounded-lg p-4">
          <h3 className="font-semibold text-vert-foret mb-2 flex items-center gap-2">
            <Package className="w-4 h-4" />
            {t.banafertRecommendation}
          </h3>
          <div className="space-y-2 text-sm">
            <p><strong>{t.dose}:</strong> {result.banafertDose} kg/ha</p>
            <p><strong>{t.bags}:</strong> {result.bagsCount} {t.bagsOf25kg}</p>
            <p><strong>{t.price}:</strong> {result.priceEstimate} DH</p>
          </div>
        </div>

        <div className="bg-beige-sable/30 rounded-lg p-4">
          <h3 className="font-semibold text-vert-foret mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            {t.advice}
          </h3>
          <p className="text-sm">{result.advice}</p>
        </div>
      </div>

      <div className="bg-vert-foret/10 rounded-lg p-4 flex items-start gap-3">
        <Calendar className="w-5 h-5 text-vert-foret flex-shrink-0 mt-0.5" />
        <p className="text-sm">{t.calendarAdvice}</p>
      </div>

      <button className="w-full bg-terre-cuite text-white py-3 rounded-lg hover:bg-vert-foret transition">
        {t.orderNow}
      </button>
    </div>
  );
};

export default Recommendation;
