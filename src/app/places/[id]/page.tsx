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
    title: "St. Peter's and Paul's Church",
    subtitle: "Historic Colonial Architecture & Spiritual Heritage",
    icon: "⛪",
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
    icon: "🌊",
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
  '6': {
    title: "Church Road and St Peter's Church",
    subtitle: "Cultural Shopping Street & Multi-National Heritage",
    icon: "🛣️",
    description: "Church Road is basically like a duplication of Pettah Street where people can buy local products and services at a reasonable price. If the infrastructure can be developed for the nighttime as well, it can be promoted as a recreational street, as in Thailand, for shopping, food and entertainment purposes.",
    longDescription: "St Peter's Church is also situated on this road, showcasing the multi-nationalities in Ratnapura. This vibrant street combines commercial activity with religious heritage, making it a unique destination that reflects the diverse cultural fabric of the city.",
    awards: [
      {
        title: "Local Commerce Hub",
        description: "Functions as a local version of Pettah Street, offering affordable local products and services to both residents and visitors at reasonable prices."
      },
      {
        title: "Multi-Cultural Heritage",
        description: "Home to St Peter's Church, the road showcases the multi-national character of Ratnapura and represents the city's diverse religious and cultural communities."
      }
    ],
    facilities: [
      {
        icon: "🛒",
        title: "Local Shopping",
        description: "A variety of local products and services available at reasonable prices, similar to the famous Pettah Street experience but in a more intimate setting."
      },
      {
        icon: "⛪",
        title: "St Peter's Church",
        description: "A significant religious landmark situated on the road that represents the multi-national and multi-religious character of Ratnapura."
      },
      {
        icon: "🌙",
        title: "Recreation Potential",
        description: "With proper infrastructure development for nighttime activities, the road has the potential to become a recreational street for shopping, food, and entertainment."
      },
      {
        icon: "🏪",
        title: "Local Services",
        description: "Various local services and businesses that cater to the daily needs of both locals and tourists, contributing to the vibrant street life."
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
            <a className="btn" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)', border: '2px solid transparent' }}>
              📞 Contact Us
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>💎 © 2025 Ratnapura Tourism | Experience the Magic of Sri Lanka&apos;s Gem City ✨</p>
        </footer>
      </div>
    </div>
  );
}
