import React, { useState, useRef } from 'react';
import { Camera, Mic, Loader2, Upload, X } from 'lucide-react';
import { analyzeSoilWithGemini } from '../services/geminiService';
import Recommendation from './Recommendation';
import { Language, Translations } from '../utils/translations';

interface SoilAnalyzerProps {
  language: Language;
  t: Translations;
}

interface AnalysisResult {
  soilType: string;
  humidity: number;
  fertility: string;
  waterAmount: number;
  waterDelay: number;
  banafertDose: number;
  bagsCount: number;
  priceEstimate: number;
  advice: string;
}

const SoilAnalyzer: React.FC<SoilAnalyzerProps> = ({ language, t }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!image) {
      setError(t.noImageError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const analysis = await analyzeSoilWithGemini(image, language);
      setResult(analysis);
    } catch (err) {
      setError(t.analysisError);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError(t.voiceNotSupported);
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = language === 'fr' ? 'fr-FR' : 'ar-MA';
    recognition.continuous = false;
    recognition.interimResults = false;

    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setIsListening(false);
      // Traiter la commande vocale ici
      if (transcript.toLowerCase().includes('photo') || transcript.toLowerCase().includes('صورة')) {
        fileInputRef.current?.click();
      } else if (transcript.toLowerCase().includes('analyse') || transcript.toLowerCase().includes('تحليل')) {
        if (image) handleAnalyze();
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setError(t.voiceError);
    };

    recognition.start();
  };

  const clearImage = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-vert-foret mb-4">{t.scanTitle}</h1>
        <p className="text-gray-600 mb-6">{t.scanDescription}</p>

        <div className="flex flex-col items-center gap-4">
          {!image ? (
            <div className="border-2 border-dashed border-beige-sable rounded-xl p-8 text-center w-full">
              <Camera className="w-12 h-12 text-terre-cuite mx-auto mb-4" />
              <p className="text-gray-500 mb-4">{t.takePhotoPrompt}</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={handleCameraClick}
                  className="bg-vert-foret text-white px-6 py-2 rounded-lg hover:bg-terre-cuite transition flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  {t.takePhoto}
                </button>
                <button
                  onClick={handleVoiceInput}
                  className={`border-2 border-vert-foret text-vert-foret px-6 py-2 rounded-lg transition flex items-center gap-2 ${isListening ? 'bg-red-100 border-red-500 text-red-500' : 'hover:bg-vert-foret hover:text-white'}`}
                >
                  <Mic className="w-4 h-4" />
                  {isListening ? t.listening : t.voiceCommand}
                </button>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                capture="environment"
                className="hidden"
              />
            </div>
          ) : (
            <div className="w-full">
              <div className="relative">
                <img src={image} alt="Soil" className="w-full rounded-lg max-h-96 object-cover" />
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-4 mt-4 justify-center">
                <button
                  onClick={handleCameraClick}
                  className="border border-vert-foret text-vert-foret px-4 py-2 rounded-lg hover:bg-vert-foret hover:text-white transition"
                >
                  {t.newPhoto}
                </button>
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="bg-terre-cuite text-white px-6 py-2 rounded-lg hover:bg-vert-foret transition disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  {loading ? t.analyzing : t.analyze}
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg w-full text-center">
              {error}
            </div>
          )}
        </div>
      </div>

      {result && <Recommendation result={result} language={language} t={t} />}
    </div>
  );
};

export default SoilAnalyzer;
