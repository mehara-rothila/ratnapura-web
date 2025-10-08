'use client';

import { useState } from 'react';
import Link from 'next/link';

const places = [
  {
    id: 1,
    title: "Lake Serenity Boutique Hotel",
    description: "Best Boutique Hotel in Ratnapura - Award-winning luxury hotel surrounded by serene lake, paddy fields, tea plantations, and mountain ranges. Awarded Top Boutique Hotel 2013 and TripAdvisor Certificate of Excellence.",
    icon: "�"
  },
  {
    id: 2,
    title: "Sabaragamuwa Maha Saman Devale",
    description: "Historic Buddhist temple located 2.5 km from Ratnapura-Panadura route, spreading towards Kalu River. Built in 1226 A.D. by Minister Aryakamadewa, this sacred temple holds centuries of Sri Lankan religious and cultural heritage.",
    icon: "🛕"
  },
  {
    id: 3,
    title: "Gemological Museum Ratnapura",
    description: "A captivating destination offering a unique window into the world of precious stones. Explore dazzling gemstones including sapphires, rubies, and emeralds. Experience hands-on gem cutting and shop for certified stones.",
    icon: "💎"
  },
  {
    id: 4,
    title: "Bopath Ella Falls",
    description: "Spectacular 30-meter waterfall shaped like a sacred Bo tree leaf, fed by Kuru Ganga river. Ancient myths say it&apos;s haunted and hides treasure.",
    icon: "💦"
  },
  {
    id: 5,
    title: "Gem Mining Experience",
    description: "Experience traditional gem mining firsthand at authentic gem mines. Witness the fascinating process of finding sapphires, rubies, and other precious stones.",
    icon: "💎"
  }
];

export default function PlacesPage() {
  const [theme] = useState('light');

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
      <div className="ratnapura-website">
        {/* Navigation Bar */}
        <nav className="navbar scrolled">
          <div className="nav-container">
            <div className="logo">💎 <span>Ratnapura</span></div>
            <div className="controls">
              <Link href="/" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero" style={{ minHeight: '40vh' }}>
          <div className="hero-content">
            <h1>Places to Visit</h1>
            <p>Discover Ratnapura's Hidden Gems</p>
          </div>
        </div>

        {/* Places Section */}
        <section className="section">
          <h2 className="section-title">Must-Visit Destinations</h2>
          <div className="places-grid">
            {places.map((place) => (
              <Link href={`/places/${place.id}`} key={place.id} className="place-card-link">
                <div className="feature-card place-card">
                  <div className="feature-icon">{place.icon}</div>
                  <h3>{place.title}</h3>
                  <p>{place.description}</p>
                  <div className="place-more-link">
                    Click to explore more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>💎 © 2025 Ratnapura Tourism | Experience the Magic of Sri Lanka's Gem City ✨</p>
        </footer>
      </div>
    </div>
  );
}
