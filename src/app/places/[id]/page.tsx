'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const placesData: Record<string, {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  longDescription?: string;
  awards?: Array<{ title: string; description: string }>;
  facilities: Array<{ icon: string; title: string; description: string }>;
  images?: Array<{ src: string; alt: string }>;
}> = {
  '1': {
    title: "Lake Serenity Boutique Hotel",
    subtitle: "Best Boutique Hotel in Ratnapura",
    icon: "🏨",
    description: "Serenity is preserved in and around the Lake Serenity Hotel bestowing magnificent views for the guest to be indulged with the touch of tranquilization. The climax of the fascination of this hotel reaches the maximum with the still water puddle that covers the whole area. Eco-friendliness is exaggerated around here as the natural flow of birds&apos; serenity river marks the borders encompassing an area filled with greenery and moist.",
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
        description: "Jumping in to the swimming pool is a way of flushing away the stress with a splash of water. That&apos;s why Lake Serenity gives priority to the swimming pool so they could provide you the best feeling you&apos;ll get jiggling in pool."
      },
      {
        icon: "🚤",
        title: "Boat Rides",
        description: "How do you like to go on a boat on a serene lake surrounded by an enchanting backdrop? Well, if you&apos;d love to do that Lake Serenity is just the place for you. We promise our clients to arrange adventurous boat rides on the lake which makes the heart for the hotel."
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
    icon: "🛕",
    description: "Sabaragamuwa Maha Saman Devale is located in a prepossessing and beauteous land which is not farer than 2.5 km from Ratnapura-Panadura route, and its premises spread towards the river side of Kalu, one of the great rivers in Sri Lanka. Temples in the name of Sumana Saman deity (God Saman) was erected after Polonnaruwa reign.",
    longDescription: "The first temple was constructed on Adam&apos;s Peak, and, as &apos;Sathara Devale&apos;, four temples were assembled in four directions, namely Mahiyangana Saman Devale from east, Sabaragamuwa Maha Saman Devale from west, Bolthumbe Saman Devale from south and Daraniyagala Saman Devale from north. In Dambadeniya epoch, a minister of honorable erudite King Parakramabahu named &apos;Aryakamadewayo&apos; has come to Ratnapura for gems and has vowed Saman Devale to build a pagoda with three story mansion if he could treasure out gems.",
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
        icon: "�️",
        title: "Ancient Architecture",
        description: "The stone door-frame which was buried by Portuguese was found and set again to the main entrance. This is the only prehistoric antique that remains today from the ancient Saman Devale."
      },
      {
        icon: "�",
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
    subtitle: "Gateway to Sri Lanka&apos;s Gem Island Heritage",
    icon: "💎",
    description: "Nestled in the heart of Sri Lanka&apos;s gem-rich city of Ratnapura, the Gemological Museum Ratnapura is a captivating destination that offers a unique window into the world of precious stones. This hidden gem of a museum is a treasure trove of knowledge for gem enthusiasts, history buffs, and curious travelers alike.",
    longDescription: "The Gemological Museum Ratnapura, often referred to as the Ratnapura Gem Museum, is a testament to Sri Lanka&apos;s reputation as the &apos;Gem Island.&apos; It&apos;s conveniently located in the city center, making it easily accessible for those touring the region. As one of the world&apos;s most renowned sources of gemstones, Sri Lanka has a long and storied history in the gem trade.",
    awards: [
      {
        title: "A World of Gems",
        description: "The museum showcases a dazzling array of gemstones, including sapphires, rubies, emeralds, and many more. Visitors can explore exhibits that feature raw gem specimens, polished gems, and even rare stones from Sri Lanka&apos;s legendary gem deposits."
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
    title: "Bopath Ella Falls",
    subtitle: "Natural Wonder of Ratnapura",
    icon: "💦",
    description: "Spectacular 30-meter waterfall shaped like a sacred Bo tree leaf, fed by Kuru Ganga river. Ancient myths say it&apos;s haunted and hides treasure. A must-visit natural attraction near Kuruvita.",
    facilities: [
      {
        icon: "📸",
        title: "Photography Spot",
        description: "One of the most photogenic waterfalls in Sri Lanka, perfect for nature photography."
      },
      {
        icon: "🏊",
        title: "Natural Pool",
        description: "Swim in the natural pool at the base of the waterfall (exercise caution)."
      },
      {
        icon: "📖",
        title: "Ancient Legends",
        description: "Learn about the fascinating myths and legends surrounding this mystical waterfall."
      }
    ]
  },
  '5': {
    title: "Gem Mining Experience",
    subtitle: "Discover the City of Gems",
    icon: "💎",
    description: "Experience traditional gem mining firsthand at over 20,000 gem mines. Visit Dhanaja Gemmological Museum and National Gem Authority to see rare sapphires, rubies, and learn about the mining process.",
    facilities: [
      {
        icon: "⛏️",
        title: "Mine Tours",
        description: "Visit authentic gem mines and witness the traditional mining process that has been used for centuries."
      },
      {
        icon: "🏛️",
        title: "Gem Museums",
        description: "Explore the Dhanaja Gemmological Museum and see rare sapphires, rubies, and precious stones."
      },
      {
        icon: "🛍️",
        title: "Gem Markets",
        description: "Shop for authentic gems at local markets and trading centers at source prices."
      }
    ]
  }
};

export default function PlaceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const place = placesData[id];
  const [theme] = useState('light');

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Place not found</h1>
          <Link href="/places" className="btn">Back to Places</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
      <div className="ratnapura-website">
        {/* Navigation Bar */}
        <nav className="navbar scrolled">
          <div className="nav-container">
            <div className="logo">💎 <span>Ratnapura</span></div>
            <div className="controls">
              <Link href="/places" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
                ← Back to Places
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero place-detail-hero">
          <div className="hero-content">
            <div className="place-detail-icon">{place.icon}</div>
            <h1>{place.title}</h1>
            <p>{place.subtitle}</p>
          </div>
        </div>

        {/* Description Section */}
        <section className="section about">
          <h2 className="section-title">About {place.title}</h2>
          <div className="about-content">
            <p style={{ marginBottom: '1.5rem' }}>{place.description}</p>
            {place.longDescription && <p>{place.longDescription}</p>}
          </div>
        </section>

        {/* Image Gallery Section */}
        {place.images && place.images.length > 0 && (
          <section className="section">
            <h2 className="section-title">Gallery</h2>
            <div className="places-grid">
              {place.images.map((image, index: number) => (
                <div key={index} className="feature-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="gallery-image"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards Section (only for Lake Serenity) */}
        {place.awards && (
          <section className="section awards-section">
            <h2 className="section-title">Awards & Recognition</h2>
            <div className="awards-grid">
              {place.awards.map((award, index: number) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">🏆</div>
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
        <section className="section place-cta-section">
          <h2 className="section-title">Plan Your Visit</h2>
          <p>
            Ready to experience {place.title}? Contact us for bookings and more information.
          </p>
          <div className="place-cta-buttons">
            <Link href="/places" className="btn">
              Explore More Places
            </Link>
            <a className="btn" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)' }}>
              Contact Us 📞
            </a>
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
