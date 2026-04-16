export type Language = 'fr' | 'ar';

export interface Translations {
  home: string;
  products: string;
  training: string;
  contact: string;
  followUs: string;
  slogan: string;
  allRightsReserved: string;
  footerDescription: string;
  switchLanguage: string;
  scanTitle: string;
  scanDescription: string;
  takePhotoPrompt: string;
  takePhoto: string;
  voiceCommand: string;
  listening: string;
  newPhoto: string;
  analyze: string;
  analyzing: string;
  noImageError: string;
  analysisError: string;
  voiceNotSupported: string;
  voiceError: string;
  diagnosticTitle: string;
  soilAnalysis: string;
  soilType: string;
  humidity: string;
  fertility: string;
  irrigation: string;
  waterAmount: string;
  waterDelay: string;
  within: string;
  hours: string;
  banafertRecommendation: string;
  dose: string;
  bags: string;
  bagsOf25kg: string;
  price: string;
  advice: string;
  calendarAdvice: string;
  orderNow: string;
  productsTitle: string;
  productsDescription: string;
  total: string;
}

export const translations: Record<Language, Translations> = {
  fr: {
    home: 'Accueil',
    products: 'Produits',
    training: 'Formation',
    contact: 'Contact',
    followUs: 'Suivez-nous',
    slogan: 'Du déchet à la ressource',
    allRightsReserved: 'Tous droits réservés',
    footerDescription: 'Fertilisant organique 100% naturel – Économie circulaire marocaine',
    switchLanguage: 'Changer la langue',
    scanTitle: 'Analyse de sol',
    scanDescription: 'Prenez une photo de votre sol pour obtenir une recommandation personnalisée BANAFERT',
    takePhotoPrompt: 'Prenez une photo de votre sol ou utilisez la commande vocale',
    takePhoto: '📸 Prendre une photo',
    voiceCommand: '🎤 Commande vocale',
    listening: '🎤 Écoute...',
    newPhoto: 'Nouvelle photo',
    analyze: 'Analyser',
    analyzing: 'Analyse en cours...',
    noImageError: 'Veuillez d’abord prendre une photo',
    analysisError: 'Erreur lors de l’analyse. Réessayez.',
    voiceNotSupported: 'La reconnaissance vocale n’est pas supportée par votre navigateur',
    voiceError: 'Erreur de reconnaissance vocale',
    diagnosticTitle: '🌱 Diagnostic BANAFERT',
    soilAnalysis: '📸 Analyse du sol',
    soilType: 'Type de sol',
    humidity: 'Humidité estimée',
    fertility: 'Fertilité',
    irrigation: '💧 Irrigation',
    waterAmount: 'Quantité d’eau',
    waterDelay: 'Délai',
    within: 'dans',
    hours: 'heures',
    banafertRecommendation: '📦 BANAFERT',
    dose: 'Dose',
    bags: 'Sacs',
    bagsOf25kg: 'sacs de 25 kg',
    price: 'Prix estimé',
    advice: '📌 Conseil',
    calendarAdvice: 'Ajoutez cette recommandation à votre calendrier agricole',
    orderNow: '🛒 Commander BANAFERT',
    productsTitle: 'Nos produits',
    productsDescription: 'Découvrez notre gamme de fertilisants organiques',
    total: 'Total',
  },
  ar: {
    home: 'الرئيسية',
    products: 'المنتجات',
    training: 'التدريب',
    contact: 'اتصل بنا',
    followUs: 'تابعونا',
    slogan: 'من النفايات إلى المورد',
    allRightsReserved: 'جميع الحقوق محفوظة',
    footerDescription: 'سماد عضوي 100% طبيعي – اقتصاد دائري مغربي',
    switchLanguage: 'تغيير اللغة',
    scanTitle: 'تحليل التربة',
    scanDescription: 'التقط صورة لتربتك للحصول على توصية مخصصة من BANAFERT',
    takePhotoPrompt: 'التقط صورة لتربتك أو استخدم الأمر الصوتي',
    takePhoto: '📸 التقط صورة',
    voiceCommand: '🎤 أمر صوتي',
    listening: '🎤 يستمع...',
    newPhoto: 'صورة جديدة',
    analyze: 'تحليل',
    analyzing: 'جاري التحليل...',
    noImageError: 'الرجاء التقاط صورة أولاً',
    analysisError: 'خطأ في التحليل. حاول مرة أخرى',
    voiceNotSupported: 'المتصفح لا يدعم التعرف على الصوت',
    voiceError: 'خطأ في التعرف على الصوت',
    diagnosticTitle: '🌱 تشخيص BANAFERT',
    soilAnalysis: '📸 تحليل التربة',
    soilType: 'نوع التربة',
    humidity: 'الرطوبة المقدرة',
    fertility: 'الخصوبة',
    irrigation: '💧 الري',
    waterAmount: 'كمية الماء',
    waterDelay: 'المدة',
    within: 'خلال',
    hours: 'ساعة',
    banafertRecommendation: '📦 بانافيرت',
    dose: 'الجرعة',
    bags: 'أكياس',
    bagsOf25kg: 'كيس من 25 كغ',
    price: 'السعر المقدر',
    advice: '📌 نصيحة',
    calendarAdvice: 'أضف هذه التوصية إلى تقويمك الزراعي',
    orderNow: '🛒 اطلب بانافيرت',
    productsTitle: 'منتجاتنا',
    productsDescription: 'اكتشف مجموعتنا من الأسمدة العضوية',
    total: 'المجموع',
  },
};
