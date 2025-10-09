'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const placesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  awards?: Array<{ title: string; description: string }>;
  facilities: Array<{ icon: string; title: string; description: string }>;
  images?: Array<{ src: string; alt: string }>;
  heroImage: string;
}> = {
  '1': {
    title: "Lake Serenity Boutique Hotel",
    subtitle: "Best Boutique Hotel in Ratnapura",
    heroImage: "/lake-serenity-boutique.jpg",
    description: "Serenity is preserved in and around the Lake Serenity Hotel bestowing magnificent views for the guest to be indulged with the touch of tranquilization. The climax of the fascination of this hotel reaches the maximum with the still water puddle that covers the whole area. Eco-friendliness is exaggerated around here as the natural flow of birds' serenity river marks the borders encompassing an area filled with greenery and moist.",
    longDescription: "The grace of this boutique hotel is magnified with the encircling paddy cultivations, tea plantations, rubber cultivations and the overlooking mountain range crowned with the milky clouds. As the luxuriousness is penetrated in to this hotel it gains the proud to be presented as one of the Best Boutique Hotels, Sri Lanka.",
    awards: [
      {
        title: "Best Boutique Hotel Awards 2013",
        description: "No.1 boutique hotel awards - 2013. Lake Serenity was awarded as the Top Boutique Hotel 2013, sustainability category."
      },
      {
        title: "Certificate of Excellence",
        description: "TripAdvisor Certificate of Excellence - 2015"
      }
    ],
    facilities: [
      {
        icon: "🏊",
        title: "Outdoor Pool",
        description: "Jumping in to the swimming pool is a way of flushing away the stress with a splash of water. That's why Lake Serenity gives priority to the swimming pool so they could provide you the best feeling you'll get jiggling in pool."
      },
      {
        icon: "🚤",
        title: "Boat Rides",
        description: "How do you like to go on a boat on a serene lake surrounded by an enchanting backdrop? Well, if you'd love to do that Lake Serenity is just the place for you. We promise our clients to arrange adventurous boat rides on the lake which makes the heart for the hotel."
      },
      {
        icon: "🎮",
        title: "Recreational Facilities",
        description: "A recreational facility which apparently is essential for a human mind is allotted in Lake Serenity hotel which is a package of enjoyment, amusement, or pleasure."
      },
      {
        icon: "💆",
        title: "Spa",
        description: "Are you looking for a place to completely rejuvenate yourself? You have come to the right place. Lake Serenity Resort offers you the best Spa Facilities that will help you overcome the negative energies inside you."
      }
    ]
  },
  '2': {
    title: "Sabaragamuwa Maha Saman Devale",
    subtitle: "Historic Buddhist Temple - Built 1226 A.D.",
    heroImage: "/Maha-Saman-Devalaya-1.jpg",
    description: "Sabaragamuwa Maha Saman Devale is located in a prepossessing and beauteous land which is not farer than 2.5 km from Ratnapura-Panadura route, and its premises spread towards the river side of Kalu, one of the great rivers in Sri Lanka. Temples in the name of Sumana Saman deity (God Saman) was erected after Polonnaruwa reign.",
    longDescription: "The first temple was constructed on Adam's Peak, and, as 'Sathara Devale', four temples were assembled in four directions, namely Mahiyangana Saman Devale from east, Sabaragamuwa Maha Saman Devale from west, Bolthumbe Saman Devale from south and Daraniyagala Saman Devale from north. In Dambadeniya epoch, a minister of honorable erudite King Parakramabahu named 'Aryakamadewayo' has come to Ratnapura for gems and has vowed Saman Devale to build a pagoda with three story mansion if he could treasure out gems.",
    awards: [
      {
        title: "Historical Significance",
        description: "Built in year 1226 A.D. by Minister Aryakamadewa, on order of ever-erudite King Parakramabahu. This temple was built in a charming and divine land that was filled with earth about 9 m high in the middle of a plane ground spread to the river side of Kalu River."
      },
      {
        title: "Cultural Heritage",
        description: "One of the great historical works is taking in procession the sacred tooth-relic that was calmed in Kotte to Degalgamu Vihara and holding the annual Saman Devale procession. King Parakramabahu VI reconstructed this temple in 1415 A.D. spending 26000 silver."
      }
    ],
    facilities: [
      {
        icon: "🏛️",
        title: "Ancient Architecture",
        description: "The stone door-frame which was buried by Portuguese was found and set again to the main entrance. This is the only prehistoric antique that remains today from the ancient Saman Devale."
      },
      {
        icon: "📜",
        title: "Historical Inscriptions",
        description: "Few pieces of stone-inscription that has been erected by King Parakumba VI have been fixed in the wall of Samanthi stage, providing evidence of the temple's rich history."
      },
      {
        icon: "🎭",
        title: "Annual Processions",
        description: "Traditional rituals and annual Saman Devale procession are held, continuing centuries-old customs that survived Portuguese invasions and foreign rule."
      },
      {
        icon: "⚔️",
        title: "War Memorial Stone",
        description: "A stone slab with an image of a European soldier and defeated Sinhala soldier, inscribed in Portuguese - best evidence proving this place was a battlefield during foreign invasions."
      }
    ]
  },
  '3': {
    title: "Gemological Museum Ratnapura",
    subtitle: "Gateway to Sri Lanka's Gem Island Heritage",
    heroImage: "/Ratnapura-The-glittering-city-of-gems.jpg",
    description: "Nestled in the heart of Sri Lanka's gem-rich city of Ratnapura, the Gemological Museum Ratnapura is a captivating destination that offers a unique window into the world of precious stones. This hidden gem of a museum is a treasure trove of knowledge for gem enthusiasts, history buffs, and curious travelers alike.",
    longDescription: "The Gemological Museum Ratnapura, often referred to as the Ratnapura Gem Museum, is a testament to Sri Lanka's reputation as the 'Gem Island.' It's conveniently located in the city center, making it easily accessible for those touring the region. As one of the world's most renowned sources of gemstones, Sri Lanka has a long and storied history in the gem trade.",
    awards: [
      {
        title: "A World of Gems",
        description: "The museum showcases a dazzling array of gemstones, including sapphires, rubies, emeralds, and many more. Visitors can explore exhibits that feature raw gem specimens, polished gems, and even rare stones from Sri Lanka's legendary gem deposits."
      },
      {
        title: "Cultural Insights",
        description: "The museum goes beyond the mere display of gemstones. It delves into the cultural, historical, and geological aspects of the gem trade in Sri Lanka. Learn about the gem mining process, the significance of gemstones in local culture, and the legends and stories associated with these precious stones."
      },
      {
        title: "Educational Opportunities",
        description: "The museum serves as an educational resource for gemologists, geologists, and those looking to understand the science behind gemstones. It offers a wealth of information about gemstone properties, characteristics, and grading."
      }
    ],
    facilities: [
      {
        icon: "🎓",
        title: "Guided Tours",
        description: "To get the most out of your visit, consider taking a guided tour. Knowledgeable guides will provide insights into the exhibits, share stories about famous gem finds, and answer your questions about gemology."
      },
      {
        icon: "✋",
        title: "Hands-On Experience",
        description: "The museum offers visitors a chance to get up close and personal with gemstones. You can view the gem-cutting process and even try your hand at gem cutting under expert supervision."
      },
      {
        icon: "🛍️",
        title: "Shop for Gems",
        description: "The museum features a shop where you can purchase certified gemstones, jewelry, and souvenirs. Be sure to buy from reputable sources and request a certificate of authenticity."
      },
      {
        icon: "📚",
        title: "Educational Resources",
        description: "Explore the glittering world of precious stones and uncover the secrets that make Sri Lanka a gemstone paradise. From geological origins to cultural significance, this museum offers a comprehensive learning experience."
      }
    ],
    images: [
      {
        src: "/IMG_7350.JPG",
        alt: "Gemological Museum Ratnapura - Gem Collection Display"
      },
      {
        src: "/IMG_7349.WEBP",
        alt: "Gemological Museum Ratnapura - Interior Exhibits"
      }
    ]
  },
  '4': {
    title: "St. Peter's and Paul's Church",
    subtitle: "Historic Colonial Architecture & Spiritual Heritage",
    heroImage: "/church road.jpg",
    description: "Peter's and Paul's Church in Ratnapura is a spectacular example of colonial architecture blending seamlessly with local culture. Built during the British era, this church has become a spiritual hub for the local Christian community, attracting visitors with its serene environment and historic charm.",
    longDescription: "The church's structure features traditional stained glass windows, intricate woodwork, and a tall steeple that's visible from quite some distance around Ratnapura. Located conveniently in the heart of Ratnapura, this church is easily accessible for both locals and tourists. Its design reflects a mix of European aesthetic with local craftsmanship, showcasing the region's colonial history and artisanal skills.",
    awards: [
      {
        title: "Colonial Heritage",
        description: "A spectacular example of colonial architecture that showcases the region's colonial history and the blend of European aesthetics with local craftsmanship and artisanal skills."
      },
      {
        title: "Community Significance",
        description: "Not only notable for its architecture but also for its vital role in community life, serving as a focal point during religious festivities and feast days with processions and community celebrations."
      }
    ],
    facilities: [
      {
        icon: "🏛️",
        title: "Colonial Architecture",
        description: "Features traditional stained glass windows, intricate woodwork, and a tall steeple visible from a distance, representing a perfect blend of European and local architectural styles."
      },
      {
        icon: "🎵",
        title: "Sacred Sanctuary",
        description: "The interior features beautifully decorated altars and an inviting sanctuary often filled with the gentle sounds of hymns and prayers, creating a peaceful atmosphere for worship."
      },
      {
        icon: "🎉",
        title: "Community Events",
        description: "Regular Sunday services and special religious festivities draw crowds from all walks of life, with the church transforming into a focal point of celebration during feast days."
      },
      {
        icon: "🌿",
        title: "Peaceful Surroundings",
        description: "The church's surroundings feature lush greenery and quiet corners ideal for contemplation or casual strolls, adding to its charm and spiritual atmosphere."
      }
    ]
  },
  '5': {
    title: "Kaluganga Viewpoint and Eco Trails",
    subtitle: "Scenic River Views & Nature Exploration",
    heroImage: "/kalu ganga.jpg",
    description: "There are many places where tourists can take a view of Kaluganga. Muwagama Bridge, located in Ratnapura, facilitates as one of the viewpoints of Kalu Ganga, while people can also take a view of the river from Saman Devalaya. Further, on the way from Ratnapura to Embilipitiya or Badulla areas, most of the roadside tea shops are located above the river where people can have a nice experience of having a tea with local food while enjoying the scenic view and calming sound of the river.",
    longDescription: "Nature can also offer visitors a unique experience through eco trails that are offered along the riverbanks to explore the areas alongside the natural beauty. These trails provide an excellent opportunity for nature enthusiasts to discover the rich biodiversity and stunning landscapes that surround the Kaluganga river system.",
    awards: [
      {
        title: "Scenic River Views",
        description: "Multiple viewpoints including Muwagama Bridge offer spectacular views of the Kalu Ganga river, providing perfect spots for photography and nature appreciation."
      },
      {
        title: "Cultural Experience",
        description: "Roadside tea shops above the river offer authentic local food and tea while visitors enjoy the scenic views and calming sounds of the flowing river."
      }
    ],
    facilities: [
      {
        icon: "🌉",
        title: "Muwagama Bridge Viewpoint",
        description: "A prime location in Ratnapura that serves as one of the main viewpoints of Kalu Ganga, offering panoramic views of the river and surrounding landscape."
      },
      {
        icon: "🥾",
        title: "Eco Trails",
        description: "Nature trails along the riverbanks that allow visitors to explore the area's natural beauty and discover the rich biodiversity of the region."
      },
      {
        icon: "🍵",
        title: "Riverside Tea Shops",
        description: "Traditional roadside tea shops located above the river where visitors can enjoy local food and tea while taking in the scenic views and peaceful atmosphere."
      },
      {
        icon: "📸",
        title: "Photography Spots",
        description: "Multiple scenic locations perfect for capturing the natural beauty of the Kaluganga river, especially from elevated viewpoints and along the eco trails."
      }
    ]
  },
  '7': {
    title: "The Ratnapura Gem Market",
    subtitle: "The Vibrant Heart of Sri Lanka's Gem Trade",
    heroImage: "/IMG_7350.JPG",
    description: "The Ratnapura Gem Market is the vibrant heart of Sri Lanka's world-famous gem trade, where centuries of tradition and craftsmanship come alive each day. Situated in the bustling center of Ratnapura — meaning \"City of Gems\" — this open-air market is a captivating experience for anyone who steps into its colorful atmosphere.",
    longDescription: "From early morning, the streets fill with gem traders, miners, and buyers who gather to exchange one of nature's most precious treasures. Under umbrellas or shaded stalls, traders sit with small gem boxes, velvet cloths, and magnifying glasses, carefully displaying their collections of sparkling sapphires, rubies, cat's eyes, garnets, and moonstones. The air hums with soft conversations, negotiations, and the subtle shimmer of stones catching the sunlight. Unlike modern gem showrooms, the Ratnapura Gem Market remains deeply traditional — a place where deals are made through trust, expertise, and keen observation.",
    awards: [
      {
        title: "Living Heritage",
        description: "Every transaction here carries a sense of pride and heritage. The gems are often freshly unearthed from nearby mines, cleaned, and brought directly to the market, maintaining a genuine link between nature and trade. The locals believe that each stone holds not only beauty but also the energy of the land it was found in."
      },
      {
        title: "Cultural Experience",
        description: "For visitors, walking through the Gem Market is like stepping into a living kaleidoscope — where color, culture, and craftsmanship merge. It is more than a marketplace; it is an experience that embodies Ratnapura's identity and the enduring spirit of Sri Lanka's gem industry."
      }
    ],
    facilities: [
      {
        icon: "💎",
        title: "Authentic Gem Trading",
        description: "Witness traditional gem trading practices where deals are made through trust, expertise, and keen observation. Buyers from across Sri Lanka and around the world visit to experience authentic gem trading that has connected generations of families in Ratnapura."
      },
      {
        icon: "🔍",
        title: "Expert Gem Examination",
        description: "Under umbrellas or shaded stalls, traders sit with small gem boxes, velvet cloths, and magnifying glasses, carefully displaying their collections of sparkling sapphires, rubies, cat's eyes, garnets, and moonstones."
      },
      {
        icon: "⛏️",
        title: "Fresh from the Mines",
        description: "The gems are often freshly unearthed from nearby mines, cleaned, and brought directly to the market, maintaining a genuine link between nature and trade. Experience stones that still carry the energy of the land they were found in."
      },
      {
        icon: "🌅",
        title: "Early Morning Trading",
        description: "From early morning, the streets fill with gem traders, miners, and buyers who gather to exchange nature's most precious treasures. The air hums with soft conversations, negotiations, and the subtle shimmer of stones catching the sunlight."
      },
      {
        icon: "🤝",
        title: "Traditional Commerce",
        description: "Unlike modern gem showrooms, the Ratnapura Gem Market remains deeply traditional, where centuries of practice and craftsmanship come alive. A place where deals honor generations of trust and expertise passed down through families."
      },
      {
        icon: "🌈",
        title: "Living Kaleidoscope",
        description: "Walk through a vibrant atmosphere where color, culture, and craftsmanship merge into one unforgettable experience. More than a marketplace, it's a journey into Ratnapura's soul and the enduring spirit of Sri Lanka's gem industry."
      }
    ]
  }
};

export default function PlaceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const place = placesData[id];
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-theme={theme}>
        <div className="text-center" style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>Place not found</h1>
          <Link href="/places" className="btn">Back to Places</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
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
              <Link href="/places" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
                ← Back to Places
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div 
          className="hero place-detail-hero" 
          style={{
            backgroundImage: `url(${place.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="hero-content">
            <h1>{place.title}</h1>
            <p>{place.subtitle}</p>
          </div>
        </div>

        {/* Description Section */}
        <section className="section about">
          <h2 className="section-title">About {place.title}</h2>
          <div className="about-content">
            <p style={{ marginBottom: place.longDescription ? '1.5rem' : '0' }}>{place.description}</p>
            {place.longDescription && <p>{place.longDescription}</p>}
          </div>
        </section>

        {/* Image Gallery Section */}
        {place.images && place.images.length > 0 && (
          <section className="section features-section">
            <h2 className="section-title">Gallery</h2>
            <div className="places-grid" style={{ maxWidth: '1000px' }}>
              {place.images.map((image, index: number) => (
                <div key={index} className="feature-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="gallery-image"
                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards Section */}
        {place.awards && (
          <section className="section awards-section">
            <h2 className="section-title">
              {id === '1' ? 'Awards & Recognition' : 'Historical & Cultural Significance'}
            </h2>
            <div className="awards-grid">
              {place.awards.map((award, index: number) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{id === '1' ? '🏆' : '📜'}</div>
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Facilities Section */}
        <section className="section">
          <h2 className="section-title">Facilities & Features</h2>
          <div className="places-grid">
            {place.facilities.map((facility, index: number) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="section place-cta-section" style={{ background: 'var(--bg-gradient-1)' }}>
          <h2 className="section-title">Plan Your Visit</h2>
          <p>
            Ready to experience {place.title}? Explore more amazing places in Ratnapura or get in touch with us for more information.
          </p>
          <div className="place-cta-buttons">
            <Link href="/places" className="btn">
              ← Explore More Places
            </Link>
            <Link href="/" className="btn" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}>
              🏠 Back to Home
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer>
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