import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-dark-blue p-6">
      <img src="./assets/logo.png" alt="GOA Logo" className="w-40 h-40 mb-6" />
      <h1 className="text-5xl font-bebas mb-2">Gulf of America (GOA)</h1>
      <p className="text-white text-xl mb-6">The Meme Coin on Solana Blockchain</p>
      <div className="flex gap-4">
        <a href="https://solscan.io/token/EGPA8sfeeKXstx1h3jVoheyMKbkcmtXKgGbPdetsXNK8" target="_blank" rel="noopener noreferrer" className="bg-burgundy px-6 py-3 rounded hover:bg-[#921f36] transition">View on Solana</a>
        <button className="bg-white text-dark-blue px-6 py-3 rounded hover:bg-gray-200 transition">Add to Wallet</button>
      </div>
    </section>
  );
}

ReactDOM.render(<Hero />, document.getElementById('root'));
