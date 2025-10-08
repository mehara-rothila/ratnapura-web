'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const places = [
  {
    id: 1,
    title: "Lake Serenity Boutique Hotel",
    description: "Best Boutique Hotel in Ratnapura - Award-winning luxury hotel surrounded by serene lake, paddy fields, tea plantations, and mountain ranges. Awarded Top Boutique Hotel 2013 and TripAdvisor Certificate of Excellence.",
    icon: "🏨",
    image: "/lake-serenity-boutique.jpg"
  },
  {
    id: 2,
    title: "Sabaragamuwa Maha Saman Devale",
    description: "Historic Buddhist temple located 2.5 km from Ratnapura-Panadura route, spreading towards Kalu River. Built in 1226 A.D. by Minister Aryakamadewa, this sacred temple holds centuries of Sri Lankan religious and cultural heritage.",
    icon: "🛕",
    image: "/Maha-Saman-Devalaya-1.jpg"
  },
  {
    id: 3,
    title: "Gemological Museum Ratnapura",
    description: "A captivating destination offering a unique window into the world of precious stones. Explore dazzling gemstones including sapphires, rubies, and emeralds. Experience hands-on gem cutting and shop for certified stones.",
    icon: "💎",
    image: "/Ratnapura-The-glittering-city-of-gems.jpg"
  },
  {
    id: 4,
    title: "St. Peter's and Paul's Church",
    description: "A spectacular example of colonial architecture blending seamlessly with local culture. Built during the British era, this church features traditional stained glass windows, intricate woodwork, and serves as a spiritual hub for the local Christian community.",
    icon: "⛪",
    image: "/church road.jpg"
  },
  {
    id: 5,
    title: "Kaluganga Viewpoint and Eco Trails",
    description: "Scenic river views from Muwagama Bridge and Saman Dewalaya. Enjoy roadside tea with local food while watching the calming Kalu Ganga flow. Nature walks available along the riverbanks.",
    icon: "🌊",
    image: "/kalu ganga.jpg"
  }
];

export default function PlacesPage() {
  const [theme] = useState('light');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % places.length);
    }, 5000); // Change slide every 5 seconds

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

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
      <style jsx>{`
        .slideshow-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          margin-top: 70px;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
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
          padding: 0 5%;
          z-index: 10;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
        }

        .slide-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .slide-description {
          font-size: 1.3rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
          opacity: 0.95;
        }

        .slide-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .slide-btn {
          display: inline-block;
          padding: 18px 45px;
          background: linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%);
          color: white;
          text-decoration: none;
          border-radius: 60px;
          font-size: 1.2rem;
          font-weight: 700;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px rgba(6, 182, 212, 0.4);
          letter-spacing: 0.02em;
          border: 2px solid transparent;
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
          background: rgba(255, 255, 255, 0.2);
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
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-button.prev {
          left: 30px;
        }

        .nav-button.next {
          right: 30px;
        }

        .dots-container {
          position: absolute;
          bottom: 80px;
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
          bottom: 80px;
          right: 40px;
          background: rgba(255, 255, 255, 0.2);
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
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .slideshow-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
          backdrop-filter: blur(10px);
          color: white;
          text-align: center;
          padding: 20px 5%;
          font-size: 0.95rem;
          font-weight: 500;
          z-index: 50;
        }

        @media (max-width: 768px) {
          .slideshow-container {
            margin-top: 70px;
          }

          .slide-title {
            font-size: 2rem;
          }

          .slide-description {
            font-size: 1rem;
          }

          .slide-icon {
            font-size: 3.5rem;
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
            bottom: 65px;
          }

          .play-pause {
            bottom: 65px;
            right: 15px;
            width: 40px;
            height: 40px;
          }

          .slideshow-footer {
            font-size: 0.8rem;
            padding: 15px 5%;
          }
        }
      `}</style>

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
                  <div className="slide-icon">{place.icon}</div>
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

          {/* Footer Overlay */}
          <div className="slideshow-footer">
            <p>💎 © 2025 Ratnapura Tourism | Experience the Magic of Sri Lanka&apos;s Gem City ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
}