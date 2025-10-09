'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const places = [
  {
    id: 1,
    title: "Lake Serenity Boutique Hotel",
    description: "Lake Serenity Boutique Hotel, situated by a serene lake, offers sustainable stays, unique experiences, and affordable prices, combining eco-friendly practices with personalized comfort for every guest.",
    image: "/lake-serenity-boutique.jpg"
  },
  {
    id: 2,
    title: "Sabaragamuwa Maha Saman Dewalaya",
    description: "Saman Dewalaya, a sacred Buddhist temple dedicated to God Saman, is renowned for its vibrant annual Perahera, attracting devotees and visitors with rich cultural and spiritual traditions.",
    image: "/Maha-Saman-Devalaya-1.jpg"
  },
  {
    id: 7,
    title: "The Ratnapura Gem Market",
    description: "The Ratnapura Gem Market is a bustling hub where gem traders gather to buy, sell, examine, and explore precious stones, experiencing the heart of Sri Lanka's gem industry.",
    image: "/IMG_7350.JPG"
  },
  {
    id: 3,
    title: "Gemological Museum Ratnapura",
    description: "The Gem Museum in Ratnapura displays a dazzling collection of gems and jewelry, offering detailed insights into their types, origins, and the art of gem craftsmanship.",
    image: "/Ratnapura-The-glittering-city-of-gems.jpg"
  },
  {
    id: 10,
    title: "Church Road",
    description: "Church Road is a vibrant street where visitors can stroll, enjoy local street food, meet friendly sellers, experience warm hospitality, and shop at reasonable prices.",
    image: "/church-road.jpg"
  },
  {
    id: 4,
    title: "St. Peter's and Paul's Church",
    description: "St. Peter's Church is a historic Christian church in Ratnapura, known for its serene ambiance, colonial architecture, and as a place of worship and community gatherings.",
    image: "/church road.jpg"
  },
  {
    id: 6,
    title: "The National Museum at Ehelepola Walawwa",
    description: "The National Museum at Ehelepola Walawwa, alongside its botanical garden, showcases Ratnapura's rich history, from its gem-mining legacy and colonial influences to its cultural and religious heritage.",
    image: "/WhatsApp Image 2025-10-09 at 12.09.19_9601a46a.jpg"
  },
  {
    id: 8,
    title: "Sri Kathirvelayutha Swami Kovil",
    description: "Sri Kathirvelayutha Swami Kovil is a sacred Hindu temple where both Hindus and Buddhists visit to receive blessings, offering fruits, flowers, and prayers in devotion.",
    image: "/IMG_6572[1].JPG"
  },
  {
    id: 9,
    title: "Kajugaswaththa Temple",
    description: "Kajugaswaththa Temple, perched atop the city, offers panoramic views of urban landscapes and lush greenery, immersing visitors in serene Buddhist ambiance and spiritual tranquility.",
    image: "/IMG_6571.JPG"
  },
  {
    id: 5,
    title: "Kaluganga Viewpoint and Eco Trails",
    description: "Kalu Ganga Viewpoint at Muwagama Bridge offers a scenic spot to admire the beauty of the Kalu Ganga river flowing through Ratnapura's lush landscape.",
    image: "/kalu ganga.jpg"
  }
];

export default function PlacesPage() {
  const [theme, setTheme] = useState('light');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % places.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % places.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + places.length) % places.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
      <style jsx>{`
        .slideshow-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          margin-top: 70px;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          pointer-events: none;
        }

        .slide.active {
          opacity: 1;
          pointer-events: all;
        }

        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-content {
          text-align: center;
          color: white;
          max-width: 900px;
          padding: 2rem clamp(1.5rem, 5vw, 5%);
          z-index: 10;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .slide-description {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
          opacity: 0.95;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .slide-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .slide-btn {
          display: inline-block;
          padding: clamp(14px, 2vw, 18px) clamp(35px, 5vw, 45px);
          background: linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 700;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px rgba(6, 182, 212, 0.4);
          letter-spacing: 0.02em;
          border: none;
          cursor: pointer;
        }

        .slide-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 50px rgba(6, 182, 212, 0.6);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-size: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-button:active {
          transform: translateY(-50%) scale(1);
        }

        .nav-button.prev {
          left: 30px;
        }

        .nav-button.next {
          right: 30px;
        }

        .dots-container {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 100;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .dot.active {
          background: white;
          width: 40px;
          border-radius: 10px;
        }

        .play-pause {
          position: absolute;
          bottom: 100px;
          right: 40px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .play-pause:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .slideshow-container {
            margin-top: 70px;
          }

          .slide-title {
            font-size: clamp(2rem, 5vw, 2.5rem);
          }

          .slide-description {
            font-size: clamp(1rem, 2vw, 1.2rem);
          }

          .nav-button {
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
          }

          .nav-button.prev {
            left: 15px;
          }

          .nav-button.next {
            right: 15px;
          }

          .dots-container {
            bottom: 80px;
          }

          .play-pause {
            bottom: 80px;
            right: 15px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="ratnapura-website">
        {/* Navigation Bar */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <Link href="/" className="logo">
              💎 <span>Ratnapura</span>
            </Link>
            <div className="controls">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</span>
              </button>
              <Link href="/" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </nav>

        {/* Slideshow Container */}
        <div className="slideshow-container">
          {places.map((place, index) => (
            <div
              key={place.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="slide-image"
                priority={index === 0}
                quality={90}
              />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1 className="slide-title">{place.title}</h1>
                  <p className="slide-description">{place.description}</p>
                  <div className="slide-buttons">
                    <Link href={`/places/${place.id}`} className="slide-btn">
                      Explore Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button className="nav-button prev" onClick={prevSlide} aria-label="Previous slide">
            ‹
          </button>
          <button className="nav-button next" onClick={nextSlide} aria-label="Next slide">
            ›
          </button>

          {/* Dots Indicator */}
          <div className="dots-container">
            {places.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button 
            className="play-pause" 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? '⏸' : '▶'}
          </button>
        </div>

        {/* Footer */}
        <footer style={{ position: 'relative', zIndex: 10 }}>
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">💎 Ratnapura</div>
              <p className="footer-description">Discover the Gem City of Sri Lanka - where nature, culture, and precious stones converge in perfect harmony.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Follow us on Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Follow us on Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Follow us on Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="Subscribe on YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#features">Features</Link>
              <Link href="/places">Places</Link>
            </div>
            <div className="footer-section">
              <h3>Explore</h3>
              <Link href="/places">Tourist Attractions</Link>
              <Link href="/places/1">Hotels & Stays</Link>
              <Link href="/places/3">Gem Museums</Link>
              <Link href="/places/2">Cultural Sites</Link>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="footer-contact-item">
                <span className="icon">📍</span>
                <p>Ratnapura, Sabaragamuwa Province, Sri Lanka</p>
              </div>
              <div className="footer-contact-item">
                <span className="icon">📞</span>
                <p>+94 45 222 2345</p>
              </div>
              <div className="footer-contact-item">
                <span className="icon">✉️</span>
                <p>info@ratnapuratourism.lk</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>💎 © 2025 Ratnapura Tourism | Experience the Magic of Sri Lanka&apos;s Gem City ✨</p>
          </div>
        </footer>
      </div>
    </div>
  );
}