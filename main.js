import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

// Переводы
const translations = {
  en: {
    title: 'Gulf of America (GOA)',
    subtitle: 'The Meme Coin on Solana Blockchain',
    view: 'View on Solana',
    wallet: 'Add to Wallet',
  },
  ru: {
    title: 'Gulf of America (GOA)',
    subtitle: 'Мем-койн на блокчейне Solana',
    view: 'Смотреть на Solana',
    wallet: 'Добавить в кошелёк',
  },
  zh: {
    title: 'Gulf of America (GOA)',
    subtitle: 'Solana 区块链上的表情币',
    view: '在 Solana 查看',
    wallet: '添加到钱包',
  },
  de: {
    title: 'Gulf of America (GOA)',
    subtitle: 'Der Meme-Coin auf der Solana-Blockchain',
    view: 'Auf Solana anzeigen',
    wallet: 'Zum Wallet hinzufügen',
  },
  es: {
    title: 'Gulf of America (GOA)',
    subtitle: 'La moneda meme en la cadena de bloques Solana',
    view: 'Ver en Solana',
    wallet: 'Agregar a la billetera',
  },
  it: {
    title: 'Gulf of America (GOA)',
    subtitle: 'Il meme coin su blockchain Solana',
    view: 'Vedi su Solana',
    wallet: 'Aggiungi al wallet',
  },
};

let currentLang = 'en';

function Hero({ lang }) {
  const t = translations[lang];

  return React.createElement(
    'section',
    {
      className: 'min-h-screen flex flex-col items-center justify-center p-6',
    },
    [
      React.createElement('img', {
        src: './assets/logo.png',
        alt: 'GOA Logo',
        className: 'w-40 h-40 mb-6',
        key: 'logo',
      }),
      React.createElement(
        'h1',
        { className: 'text-5xl font-bebas mb-2 text-white', key: 'title' },
        t.title
      ),
      React.createElement(
        'p',
        { className: 'text-white text-xl mb-6', key: 'subtitle' },
        t.subtitle
      ),
      React.createElement(
        'div',
        { className: 'flex gap-4', key: 'buttons' },
        [
          React.createElement(
            'a',
            {
              href: 'https://solscan.io/token/EGPA8sfeeKXstx1h3jVoheyMKbkcmtXKgGbPdetsXNK8',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'bg-burgundy text-white px-6 py-3 rounded hover:bg-[#921f36] transition',
              key: 'view',
            },
            t.view
          ),
          React.createElement(
            'button',
            {
              className: 'bg-white text-dark-blue px-6 py-3 rounded hover:bg-gray-200 transition',
              key: 'wallet',
            },
            t.wallet
          ),
        ]
      ),
    ]
  );
}

// Рендер
function renderApp() {
  ReactDOM.render(
    React.createElement(Hero, { lang: currentLang }),
    document.getElementById('root')
  );
}

// Переключение языка
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    renderApp();
  });
});

renderApp();
