# 🌱 BANAFERT - Application de diagnostic agricole

Application mobile/web pour l'analyse de sol et la recommandation de fertilisation BANAFERT.

## 🚀 Fonctionnalités

- 📸 Scan de sol par photo
- 🎤 Commande vocale (arabe/français)
- 🤖 Recommandation IA (Gemini)
- 🛒 E-commerce intégré
- 📅 Réservation de formations
- 🌍 Multilingue (Français/Arabe)

## 🛠️ Technologies

- React 19 + TypeScript
- Vite
- TailwindCSS
- Firebase (Auth, Firestore, Storage)
- Google Gemini API
- Google Speech-to-Text

## 📦 Installation

```bash
npm install
cp .env.local.example .env.local
# Ajoutez votre clé API Gemini dans .env.local
npm run dev
Déploiement
bash
npm run build
# Le dossier dist/ est prêt à être déployé sur GitHub Pages
📞 Contact
Email: mohamedsfisi2@gmail.com

Tél: +212 610953429

### 📄 `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./*"]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
