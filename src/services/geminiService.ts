const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

export async function analyzeSoilWithGemini(imageBase64: string, language: 'fr' | 'ar') {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: getPrompt(language) },
              {
                inline_data: {
                  mime_type: 'image/jpeg',
                  data: imageBase64.split(',')[1],
                },
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

  return parseResponse(text, language);
}

function getPrompt(language: 'fr' | 'ar'): string {
  if (language === 'fr') {
    return `Tu es un expert agronome BANAFERT. Analyse cette photo de sol et retourne UNIQUEMENT un JSON avec ces champs:
    {
      "soilType": "argileux/sableux/limoneux/calcaire",
      "humidity": nombre,
      "fertility": "riche/moyenne/pauvre",
      "waterAmount": nombre,
      "waterDelay": nombre,
      "banafertDose": nombre,
      "bagsCount": nombre,
      "priceEstimate": nombre,
      "advice": "conseil en français"
    }`;
  }
  return `أنت خبير زراعي في BANAFERT. حلل هذه الصورة للتربة وأرجع JSON فقط مع هذه الحقول:
    {
      "soilType": "طيني/رملي/طمي/كلسي",
      "humidity": رقم,
      "fertility": "غنية/متوسطة/فقيرة",
      "waterAmount": رقم,
      "waterDelay": رقم,
      "banafertDose": رقم,
      "bagsCount": رقم,
      "priceEstimate": رقم,
      "advice": "نصيحة بالعربية"
    }`;
}

function parseResponse(text: string, language: 'fr' | 'ar') {
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.error('JSON parse error', e);
  }
  // Fallback
  return {
    soilType: language === 'fr' ? 'Non déterminé' : 'غير محدد',
    humidity: 30,
    fertility: language === 'fr' ? 'moyenne' : 'متوسطة',
    waterAmount: 25,
    waterDelay: 48,
    banafertDose: 250,
    bagsCount: 10,
    priceEstimate: 1500,
    advice: language === 'fr' ? 'Contactez BANAFERT pour un diagnostic précis' : 'اتصل بـ BANAFERT للحصول على تشخيص دقيق',
  };
}
