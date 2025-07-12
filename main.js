import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

console.log('✅ JS загружен, React стартует');

const Hero = () =>
  React.createElement(
    'section',
    {
      className: 'min-h-screen flex flex-col items-center justify-center bg-dark-blue p-6',
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
        {
          className: 'text-5xl font-bebas mb-2 text-white',
          key: 'title',
        },
        'Gulf of America (GOA)'
      ),
      React.createElement(
        'p',
        {
          className: 'text-white text-xl mb-6',
          key: 'subtitle',
        },
        'The Meme Coin on Solana Blockchain'
      ),
      React.createElement(
        'div',
        {
          className: 'flex gap-4',
          key: 'buttons',
        },
        [
          React.createElement(
            'a',
            {
              href: 'https://solscan.io/token/EGPA8sfeeKXstx1h3jVoheyMKbkcmtXKgGbPdetsXNK8',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'bg-burgundy text-white px-6 py-3 rounded hover:bg-[#921f36] transition',
              key: 'solana',
            },
            'View on Solana'
          ),
          React.createElement(
            'button',
            {
              className: 'bg-white text-dark-blue px-6 py-3 rounded hover:bg-gray-200 transition',
              key: 'wallet',
            },
            'Add to Wallet'
          ),
        ]
      ),
    ]
  );

ReactDOM.render(React.createElement(Hero), document.getElementById('root'));
