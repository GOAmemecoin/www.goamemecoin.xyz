import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const languages = {
  en: "English",
  ru: "Русский",
  zh: "中文",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
  fr: "Français",
};

const translations = {
  en: {
    heroTitle: "Gulf of America Meme Coin",
    heroSubtitle: "Solana-powered Meme Coin for the New World!",
    launchButton: "Launch Token",
    whitepaper: "Whitepaper",
    about: "About Project",
    tokenomics: "Tokenomics",
    team: "Team",
    faq: "FAQ",
    buy: "Buy GOA",
    roadmap: "Roadmap",
  },
  ru: {
    heroTitle: "Мем-коин Gulf of America",
    heroSubtitle: "Мем-коин на Solana для нового мира!",
    launchButton: "Запустить токен",
    whitepaper: "Вайтпейпер",
    about: "О проекте",
    tokenomics: "Токеномика",
    team: "Команда",
    faq: "Вопросы и ответы",
    buy: "Купить GOA",
    roadmap: "Дорожная карта",
  },
  zh: {
    heroTitle: "美洲湾表情包币",
    heroSubtitle: "Solana驱动的新世界 Meme Coin！",
    launchButton: "启动代币",
    whitepaper: "白皮书",
    about: "关于项目",
    tokenomics: "代币经济",
    team: "团队",
    faq: "常见问题",
    buy: "购买 GOA",
    roadmap: "路线图",
  },
  es: {
    heroTitle: "Moneda Meme Gulf of America",
    heroSubtitle: "¡Moneda meme impulsada por Solana para el nuevo mundo!",
    launchButton: "Lanzar Token",
    whitepaper: "Documento Técnico",
    about: "Sobre el Proyecto",
    tokenomics: "Tokenómica",
    team: "Equipo",
    faq: "Preguntas Frecuentes",
    buy: "Comprar GOA",
    roadmap: "Hoja de Ruta",
  },
  it: {
    heroTitle: "Gulf of America Meme Coin",
    heroSubtitle: "Meme Coin su Solana per un nuovo mondo!",
    launchButton: "Lancia Token",
    whitepaper: "Whitepaper",
    about: "Informazioni sul progetto",
    tokenomics: "Tokenomics",
    team: "Team",
    faq: "FAQ",
    buy: "Acquista GOA",
    roadmap: "Roadmap",
  },
  de: {
    heroTitle: "Gulf of America Meme Coin",
    heroSubtitle: "Solana-basierte Meme Coin für die neue Welt!",
    launchButton: "Token starten",
    whitepaper: "Whitepaper",
    about: "Über das Projekt",
    tokenomics: "Tokenomik",
    team: "Team",
    faq: "FAQ",
    buy: "GOA kaufen",
    roadmap: "Fahrplan",
  },
  fr: {
    heroTitle: "Pièce Meme Gulf of America",
    heroSubtitle: "Meme Coin propulsée par Solana pour un nouveau monde !",
    launchButton: "Lancer le Token",
    whitepaper: "Livre blanc",
    about: "À propos du projet",
    tokenomics: "Tokenomique",
    team: "Équipe",
    faq: "FAQ",
    buy: "Acheter GOA",
    roadmap: "Feuille de route",
  },
};

function detectLanguage() {
  const lang = navigator.language.split("-")[0];
  return Object.keys(languages).includes(lang) ? lang : "en";
}

export default function Home() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const detected = detectLanguage();
    setLang(detected);
  }, []);

  const t = translations[lang];

  return (
    <div className="bg-[#0a3161] text-white min-h-screen">
      <header className="flex justify-between items-center p-4 border-b border-white">
        <h1 className="text-2xl font-bold">GOA</h1>
        <div className="relative">
          <button className="flex items-center gap-2" onClick={() => setLang(prev => prev === "en" ? "ru" : "en")}>
            <Globe />
            <span>{languages[lang]}</span>
          </button>
        </div>
      </header>

      <nav className="flex justify-center gap-4 py-4 bg-[#b31942] text-white text-sm font-semibold">
        <a href="#about">{t.about}</a>
        <a href="#tokenomics">{t.tokenomics}</a>
        <a href="#team">{t.team}</a>
        <a href="#faq">{t.faq}</a>
        <a href="#buy">{t.buy}</a>
        <a href="#roadmap">{t.roadmap}</a>
      </nav>

      <main className="flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-4xl font-bold mb-4">{t.heroTitle}</h2>
        <p className="text-xl mb-6">{t.heroSubtitle}</p>
        <div className="flex gap-4">
          <a href="#launch" className="bg-[#b31942] px-6 py-3 rounded-full hover:opacity-80">
            {t.launchButton}
          </a>
          <a href="#whitepaper" className="border px-6 py-3 rounded-full hover:opacity-80">
            {t.whitepaper}
          </a>
        </div>
      </main>

      <footer className="text-center p-6 bg-white text-[#0a3161]">
        <p>© 2025 GOA Meme Coin</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://x.com/GOA_memecoin" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/goa_memecoin" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/goa_memecoin" target="_blank">Facebook</a>
          <a href="https://www.youtube.com/@GOA_memecoin" target="_blank">YouTube</a>
          <a href="https://t.me/GOA_memecoin" target="_blank">Telegram</a>
          <a href="mailto:info@goamemecoin.xyz">Email</a>
        </div>
      </footer>
    </div>
  );
}
