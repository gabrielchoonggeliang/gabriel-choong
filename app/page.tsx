import React from 'react';
import './globals.css';

const support = "Help me continue producing high-quality content every week. With your support, I can take it to the next level!";

export default function HomePage() {
  return (
    <div>
      {/* Your existing content */}
      
      <section className="buy-me-coffee">
        <h2>Buy Me a Coffee</h2>
        <p>{support}</p>
        <a href="https://bmc.link/gabrielchoong" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
      </section>
    </div>
  );
}
