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
  isVideo?: boolean;
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
    title: "Sabaragamuwa Maha Saman Dewalaya",
    subtitle: "Sacred Buddhist Shrine - Guardian Deity of Sabaragamuwa",
    heroImage: "/Maha-Saman-Devalaya-1.jpg",
    description: "Saman Dewalaya, located in Ratnapura, is one of the most revered Buddhist shrines in Sri Lanka, dedicated to God Saman, the guardian deity of the Sabaragamuwa region. This sacred temple draws devotees and tourists alike, offering a serene spiritual experience intertwined with the rich cultural heritage of the region.",
    longDescription: "The Dewalaya is historically significant, with roots dating back centuries, and is closely linked to local legends and folklore. Devotees believe that Lord Saman blesses them with protection, prosperity, and guidance. The temple architecture reflects traditional Sri Lankan styles, with beautifully crafted wooden pillars, intricate carvings, and colorful paintings depicting scenes from Buddhist stories and the life of Lord Saman. The main shrine houses a magnificent statue of the deity, often adorned with offerings of flowers, fruits, and oil lamps by devotees seeking blessings.",
    awards: [
      {
        title: "Historical Significance",
        description: "Historically significant with roots dating back centuries, closely linked to local legends and folklore. Devotees believe Lord Saman blesses them with protection, prosperity, and guidance."
      },
      {
        title: "Cultural Heritage",
        description: "The temple architecture reflects traditional Sri Lankan styles, with beautifully crafted wooden pillars, intricate carvings, and colorful paintings depicting scenes from Buddhist stories and the life of Lord Saman."
      },
      {
        title: "Symbol of Faith",
        description: "Stands as a symbol of faith, heritage, and tranquility, representing the deep spiritual roots and cultural richness of Ratnapura from religious, cultural, and touristic perspectives."
      }
    ],
    facilities: [
      {
        icon: "🛕",
        title: "Traditional Architecture",
        description: "Temple architecture reflects traditional Sri Lankan styles with beautifully crafted wooden pillars, intricate carvings, and colorful paintings depicting Buddhist stories and the life of Lord Saman."
      },
      {
        icon: "🙏",
        title: "Main Shrine",
        description: "The main shrine houses a magnificent statue of the deity, often adorned with offerings of flowers, fruits, and oil lamps by devotees seeking blessings for protection and prosperity."
      },
      {
        icon: "🎊",
        title: "Annual Perahera Festival",
        description: "Particularly vibrant during the annual Perahera festival, which attracts thousands of pilgrims with traditional drumming, cultural performances, and grand processions featuring decorated elephants."
      },
      {
        icon: "🐘",
        title: "Grand Procession",
        description: "The temple comes alive with a magnificent procession featuring elephants decorated with ornate garments, traditional drumming, and cultural performances that exude devotion and community spirit."
      },
      {
        icon: "🧘",
        title: "Peaceful Retreat",
        description: "The temple's surroundings offer a peaceful retreat from the hustle of daily life, providing a calm and tranquil environment perfect for meditation and reflection."
      },
      {
        icon: "📿",
        title: "Spiritual Blessings",
        description: "Devotees seek blessings from God Saman, the guardian deity of Sabaragamuwa, for protection, prosperity, and guidance in their lives, maintaining centuries-old spiritual traditions."
      }
    ]
  },
  '3': {
    title: "Gemological Museum Ratnapura",
    subtitle: "Premier Educational Hub for Sri Lanka's Gem Heritage",
    heroImage: "/Ratnapura-The-glittering-city-of-gems.jpg",
    description: "The Gemological Museum in Ratnapura is a premier destination for anyone interested in the rich gem heritage of Sri Lanka. The museum offers visitors a unique opportunity to explore gemstones, jewelry, and the art of gemology. It serves both as an educational hub and a tourist attraction, showcasing the beauty and cultural significance of Sri Lanka's precious stones.",
    longDescription: "The museum provides a display of all types of gems along with detailed information about their properties, origin, and significance. Visitors can also learn about the mining process, traditional gem-cutting techniques, and modern methods used in the jewelry industry. The exhibits are curated to provide both scientific knowledge and aesthetic appreciation, making the experience engaging for students, gem enthusiasts, and casual tourists alike. The museum also highlights jewelry crafted from Sri Lankan gems, demonstrating the skill and artistry of local craftsmen.",
    awards: [
      {
        title: "Educational Excellence",
        description: "Serves as both an educational hub and tourist attraction, offering visitors a unique opportunity to explore gemstones, jewelry, and the art of gemology while learning about Sri Lanka's rich gem heritage."
      },
      {
        title: "Comprehensive Exhibits",
        description: "Provides displays of all types of gems with detailed information about their properties, origin, and significance, curated to offer both scientific knowledge and aesthetic appreciation for all visitors."
      },
      {
        title: "Cultural & Artistic Showcase",
        description: "Highlights jewelry crafted from Sri Lankan gems, demonstrating the skill and artistry of local craftsmen while showcasing the historical, economic, and cultural importance of gem mining in Ratnapura."
      }
    ],
    facilities: [
      {
        icon: "💎",
        title: "Complete Gem Collection",
        description: "Display of all types of gems with detailed information about their properties, origin, and significance, offering a comprehensive view of Sri Lanka's precious stone varieties and their unique characteristics."
      },
      {
        icon: "⛏️",
        title: "Mining Process Education",
        description: "Learn about the traditional and modern gem mining processes, from extraction to refinement, understanding the journey of precious stones from earth to exhibition with informative panels and displays."
      },
      {
        icon: "✂️",
        title: "Gem-Cutting Techniques",
        description: "Explore traditional gem-cutting techniques and modern methods used in the jewelry industry, witnessing the transformation of raw stones into polished gems through expert craftsmanship and precision."
      },
      {
        icon: "🎓",
        title: "Scientific Knowledge",
        description: "Exhibits curated to provide both scientific knowledge and aesthetic appreciation, making the experience engaging for students, gem enthusiasts, and casual tourists seeking to understand gemology."
      },
      {
        icon: "💍",
        title: "Local Craftsmanship",
        description: "Museum highlights jewelry crafted from Sri Lankan gems, demonstrating the exceptional skill and artistry of local craftsmen who transform precious stones into beautiful wearable art."
      },
      {
        icon: "📖",
        title: "Interactive Displays",
        description: "Informative panels and interactive displays help visitors understand the historical, economic, and cultural importance of gem mining in Ratnapura and across Sri Lanka through engaging presentations."
      },
      {
        icon: "🌍",
        title: "Cultural Perspective",
        description: "Whether approached from a cultural, educational, or touristic perspective, the museum offers an enriching experience allowing visitors to appreciate Sri Lanka's gem legacy and the tradition behind each stone."
      },
      {
        icon: "🔬",
        title: "Science & Art of Gemology",
        description: "Learn about the science, art, and tradition behind each precious stone, combining geological understanding with cultural appreciation in a comprehensive educational experience for all ages."
      }
    ]
  },
  '4': {
    title: "St. Peter's and Paul's Church",
    subtitle: "Prominent Roman Catholic Church & Spiritual Center",
    heroImage: "/church road.jpg",
    description: "St. Peter's and Paul's Church, located in the heart of Ratnapura, is one of the most prominent Roman Catholic churches in the region. Serving as a spiritual center for the local Catholic community, the church is known for its peaceful ambiance, striking architecture, and deep-rooted religious significance. Its towering structure, adorned with elegant spires and a beautifully maintained façade, stands as a landmark in the city.",
    longDescription: "The church interior is equally impressive, featuring high ceilings, stained glass windows depicting biblical scenes, and intricately designed altars that inspire devotion and reverence among visitors. The serene atmosphere inside provides a place for quiet prayer, reflection, and community gatherings. Regular services, prayers, and religious events attract both locals and tourists, offering them a glimpse into the rich traditions of Roman Catholic worship in Sri Lanka. St. Peter's and Paul's Church also plays a significant role in the cultural and social life of Ratnapura. During major religious festivals such as Christmas and Easter, the church becomes a hub of activity, with beautifully decorated interiors, processions, and celebrations that bring the community together in faith and joy.",
    awards: [
      {
        title: "Prominent Landmark",
        description: "One of the most prominent Roman Catholic churches in the region, with its towering structure adorned with elegant spires and beautifully maintained façade standing as a landmark in Ratnapura."
      },
      {
        title: "Cultural & Social Hub",
        description: "Plays a significant role in the cultural and social life of Ratnapura, becoming a hub of activity during major religious festivals with beautifully decorated interiors, processions, and celebrations."
      },
      {
        title: "Symbol of Faith & Heritage",
        description: "Remains a symbol of faith, community, and heritage in Ratnapura, offering a tranquil retreat and meaningful experience for all who enter, reflecting hospitality and devotion."
      }
    ],
    facilities: [
      {
        icon: "⛪",
        title: "Striking Architecture",
        description: "Towering structure adorned with elegant spires and beautifully maintained façade, featuring high ceilings, stained glass windows depicting biblical scenes, and intricately designed altars."
      },
      {
        icon: "🙏",
        title: "Sacred Interior",
        description: "Equally impressive interior with high ceilings, stained glass windows, and intricately designed altars that inspire devotion and reverence, providing a serene atmosphere for worship."
      },
      {
        icon: "🎄",
        title: "Religious Festivals",
        description: "During major festivals like Christmas and Easter, the church becomes a hub of activity with beautifully decorated interiors, processions, and celebrations bringing the community together."
      },
      {
        icon: "📿",
        title: "Regular Services",
        description: "Regular services, prayers, and religious events attract both locals and tourists, offering a glimpse into the rich traditions of Roman Catholic worship in Sri Lanka."
      },
      {
        icon: "🧘",
        title: "Quiet Prayer & Reflection",
        description: "The serene atmosphere provides a perfect place for quiet prayer, reflection, and community gatherings, creating a space for spiritual enrichment and contemplation."
      },
      {
        icon: "🤝",
        title: "Welcoming Environment",
        description: "The church's welcoming environment reflects the spirit of hospitality and devotion, making it not only a place of worship but also a space for cultural and spiritual enrichment."
      }
    ]
  },
  '5': {
    title: "Kaluganga Viewpoint and Eco Trails",
    subtitle: "Scenic River Views & Urban Nature Escape",
    heroImage: "/kalu ganga.jpg",
    description: "The Kalu Ganga Viewpoint at Muwagama Bridge offers a scenic escape right within Ratnapura's urban landscape. From this spot, visitors can admire the river as it flows gracefully through the city, with reflections of sunlight dancing on the water and the surrounding greenery providing a refreshing contrast to the urban surroundings.",
    longDescription: "The bridge serves as an ideal vantage point for photography, casual walks, or simply pausing to enjoy the serene view. From here, one can observe both the natural beauty of the Kalu Ganga and the daily life of the city along its banks, where locals go about their routines, fish, or relax by the river. Despite being in the heart of the city, the viewpoint offers a moment of tranquility. The rhythmic flow of the river and the gentle breeze create a peaceful atmosphere, making it a perfect spot for reflection or a quiet break from the urban bustle.",
    awards: [
      {
        title: "Urban Nature Escape",
        description: "Offers a scenic escape right within Ratnapura's urban landscape, combining the charm of nature with the vibrancy of city life in a unique and accessible location."
      },
      {
        title: "Unique City Perspective",
        description: "Allows visitors to experience Ratnapura from a unique perspective, observing both the natural beauty of Kalu Ganga and the daily life of the city along its banks."
      }
    ],
    facilities: [
      {
        icon: "🌉",
        title: "Muwagama Bridge Viewpoint",
        description: "Serves as an ideal vantage point for photography, casual walks, or simply pausing to enjoy the serene view of the river flowing gracefully through the city."
      },
      {
        icon: "💧",
        title: "River Reflections",
        description: "Admire reflections of sunlight dancing on the water, with surrounding greenery providing a refreshing contrast to the urban surroundings, creating picturesque moments."
      },
      {
        icon: "🎣",
        title: "Local Life Observation",
        description: "Observe the daily life of the city along the river banks, where locals go about their routines, fish, or relax by the river, offering cultural insights."
      },
      {
        icon: "📸",
        title: "Photography Paradise",
        description: "An ideal location for capturing scenic views where nature meets urban life, perfect for photography enthusiasts seeking unique compositions of river and cityscape."
      },
      {
        icon: "🚶",
        title: "Casual Strolls",
        description: "Perfect for leisurely walks along the bridge or riverside areas, allowing visitors to enjoy both the natural beauty and vibrant city atmosphere at their own pace."
      }
    ]
  },
  '6': {
    title: "The National Museum at Ehelepola Walawwa",
    subtitle: "Historic Cultural Institution - Established 13 May 1988",
    heroImage: "/WhatsApp Image 2025-10-09 at 12.09.19_9601a46a.jpg",
    description: "The National Museum of Ratnapura, established on 13 May 1988, is a prominent cultural institution located in the historic Ehelepola Walawwa, the former residence of Ehelepola Nilame, the first Adigar (chief minister) of the Kingdom of Kandy under King Sri Vikrama Rajasinha. The museum showcases the rich heritage, culture, and history of the Sabaragamuwa Province, providing visitors with an immersive glimpse into the region's past.",
    longDescription: "The museum's collections encompass prehistoric artifacts, traditional tools, jewelry, weapons, and objects of daily life, alongside exhibits on natural history, geology, anthropology, and zoology. A notable feature is the palaeobiodiversity park, which includes life-sized models of extinct and endangered species that once inhabited the area, giving visitors a sense of the region's ecological and environmental history. In addition to the exhibits, the museum grounds include well-maintained green spaces and garden areas, providing a relaxing environment for visitors to spend time. These gardens offer shaded walkways, flowering plants, and open lawns where families, students, and tourists can pause, reflect, or enjoy quiet moments in nature, creating a harmonious balance between learning and leisure.",
    awards: [
      {
        title: "Historic Significance",
        description: "Located in the historic Ehelepola Walawwa, the former residence of Ehelepola Nilame, the first Adigar (chief minister) of the Kingdom of Kandy under King Sri Vikrama Rajasinha, preserving centuries of Sri Lankan history."
      },
      {
        title: "Cultural Heritage Center",
        description: "Showcases the rich heritage, culture, and history of the Sabaragamuwa Province, offering visitors an immersive glimpse into the region's past through diverse collections and exhibits."
      },
      {
        title: "Educational Excellence",
        description: "Attracts history enthusiasts, researchers, and casual visitors alike, combining cultural heritage, natural history, and serene green spaces to offer a unique experience that engages the mind, spirit, and senses."
      }
    ],
    facilities: [
      {
        icon: "🏛️",
        title: "Prehistoric Artifacts",
        description: "Collections encompassing prehistoric artifacts, traditional tools, jewelry, weapons, and objects of daily life that showcase the region's ancient civilization and cultural evolution."
      },
      {
        icon: "🔬",
        title: "Natural History Exhibits",
        description: "Comprehensive exhibits on natural history, geology, anthropology, and zoology, providing insights into the region's scientific and environmental heritage."
      },
      {
        icon: "🦕",
        title: "Palaeobiodiversity Park",
        description: "Features life-sized models of extinct and endangered species that once inhabited the area, giving visitors a sense of the region's ecological and environmental history."
      },
      {
        icon: "🌿",
        title: "Garden & Green Spaces",
        description: "Well-maintained gardens offer shaded walkways, flowering plants, and open lawns where families, students, and tourists can pause, reflect, or enjoy quiet moments in nature."
      },
      {
        icon: "🎓",
        title: "Educational Programs",
        description: "The museum serves as an important educational resource for students, researchers, and history enthusiasts seeking to learn about Sabaragamuwa Province's rich cultural tapestry."
      },
      {
        icon: "🕐",
        title: "Daily Visitation",
        description: "Open daily from 9:00 AM to 5:00 PM, making it accessible for locals and tourists to explore the museum's extensive collections and beautiful grounds at their convenience."
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
  },
  '8': {
    title: "Sri Kathirvelayutha Swami Kovil",
    subtitle: "Sacred Hindu & Buddhist Place of Worship - Kataragama Devalaya",
    heroImage: "/IMG_6572[1].JPG",
    description: "Katharagama Dewalaya, also known as the Sri Kathirvelayutha Swami Kovil, is a sacred Hindu and Buddhist place of worship located in Thiriwanaketiya, Ratnapura, along the Colombo–Batticaloa highway. Dedicated to Kataragama Deviyo, or Lord Skanda / Murugan, this temple stands as a powerful symbol of faith, unity, and spiritual devotion among the people of Ratnapura.",
    longDescription: "Although smaller in scale than the main Kataragama shrine in the South, the Thiriwanaketiya Dewalaya carries immense spiritual significance. It serves as a peaceful and accessible sanctuary for local devotees who seek the blessings of the deity for protection, prosperity, and success. The temple's architecture reflects the simple yet sacred style of traditional devalayas, with a main sanctum devoted to Lord Kataragama and smaller shrines dedicated to accompanying deities. The surroundings are often filled with the aroma of incense, flickering oil lamps, and the soft ringing of temple bells, creating a serene and devotional atmosphere.",
    awards: [
      {
        title: "Symbol of Unity",
        description: "A powerful symbol of faith, unity, and spiritual devotion among the people of Ratnapura, bringing together Hindu and Buddhist communities in shared religious observance and celebration."
      },
      {
        title: "Spiritual Sanctuary",
        description: "Serves as a peaceful and accessible sanctuary for local devotees seeking blessings for protection, prosperity, and success, maintaining the sacred traditions of worship to Kataragama Deviyo (Lord Skanda / Murugan)."
      },
      {
        title: "Living Tradition",
        description: "Throughout the year, festivals and rituals bring together people from different faiths, emphasizing harmony and shared belief, making it a cherished spiritual landmark embodying hope, healing, and timeless devotion."
      }
    ],
    facilities: [
      {
        icon: "🛕",
        title: "Traditional Architecture",
        description: "The temple's architecture reflects the simple yet sacred style of traditional devalayas, with a main sanctum devoted to Lord Kataragama and smaller shrines dedicated to accompanying deities."
      },
      {
        icon: "🕉️",
        title: "Devotional Atmosphere",
        description: "The surroundings are filled with the aroma of incense, flickering oil lamps, and the soft ringing of temple bells, creating a serene and devotional atmosphere for worship and meditation."
      },
      {
        icon: "🍎",
        title: "Fruit & Flower Offerings",
        description: "One of the most meaningful traditions is offering fruits and flowers as acts of faith and vows to the deity, seeking blessings for recovery from illness, success in examinations, career improvement, or happy marriage."
      },
      {
        icon: "🙏",
        title: "Vow Fulfillment",
        description: "Many devotees return to the temple to fulfill their promises once their wishes are granted, as a gesture of gratitude and continued faith in the deity's blessings and divine intervention."
      },
      {
        icon: "🎊",
        title: "Annual Festivals",
        description: "Throughout the year, festivals and rituals bring together people from different faiths - Hindus and Buddhists alike - emphasizing religious harmony and shared spiritual beliefs in the community."
      },
      {
        icon: "📍",
        title: "Accessible Location",
        description: "Conveniently located in Thiriwanaketiya, Ratnapura, along the Colombo–Batticaloa highway, making it easily accessible for both local devotees and visitors traveling through the region."
      }
    ]
  },
  '9': {
    title: "Kajugaswaththa Temple",
    subtitle: "Hilltop Hindu Temple with Panoramic City Views",
    heroImage: "/IMG_6571.JPG",
    description: "Kajugaswaththa Temple is a serene Hindu temple perched atop a hill in Ratnapura, offering breathtaking panoramic views of the city below and the surrounding lush greenery. The elevated location makes it a peaceful sanctuary where devotees and visitors can enjoy both spiritual reflection and the natural beauty of the area.",
    longDescription: "The temple is known for its calm and meditative atmosphere, attracting locals and travelers seeking blessings, quiet time, or a connection with nature. The hilltop setting allows visitors to witness stunning sunrises and sunsets, making it a popular spot for photography as well as spiritual devotion. Devotees come to the temple to offer prayers, flowers, and fruits, seeking blessings for health, success, and wellbeing. Its location amid greenery also provides shaded walking paths and open spaces where visitors can relax, reflect, or spend time with family.",
    awards: [
      {
        title: "Scenic Hilltop Location",
        description: "Perched atop a hill in Ratnapura, offering breathtaking panoramic views of the city below and the surrounding lush greenery, creating a perfect blend of spiritual sanctuary and natural observation point."
      },
      {
        title: "Spiritual & Natural Harmony",
        description: "Stands as a harmonious blend of spiritual significance and natural beauty, offering a unique experience that nourishes both faith and the senses through serene atmosphere and stunning vistas."
      },
      {
        title: "Peaceful Sanctuary",
        description: "Known for its calm and meditative atmosphere, attracting locals and travelers seeking blessings, quiet reflection, or a deeper connection with nature in a tranquil hilltop setting."
      }
    ],
    facilities: [
      {
        icon: "⛰️",
        title: "Panoramic Views",
        description: "The elevated hilltop location offers breathtaking panoramic views of Ratnapura city and the surrounding lush greenery, providing visitors with a stunning visual experience alongside spiritual devotion."
      },
      {
        icon: "🌅",
        title: "Sunrise & Sunset Viewing",
        description: "The hilltop setting allows visitors to witness stunning sunrises and sunsets, making it a popular spot for photography, meditation, and experiencing nature's beauty in a spiritual context."
      },
      {
        icon: "🙏",
        title: "Prayer & Offerings",
        description: "Devotees come to offer prayers, flowers, and fruits, seeking blessings for health, success, and wellbeing in a calm and meditative atmosphere that fosters deep spiritual connection."
      },
      {
        icon: "🌳",
        title: "Green Walking Paths",
        description: "The location amid greenery provides shaded walking paths and open spaces where visitors can relax, reflect, or spend quality time with family while enjoying the natural surroundings."
      },
      {
        icon: "🧘",
        title: "Meditative Atmosphere",
        description: "The temple's calm and serene environment creates an ideal setting for meditation, quiet reflection, and spiritual contemplation, attracting those seeking peace and inner tranquility."
      },
      {
        icon: "📸",
        title: "Photography & Nature",
        description: "The combination of spiritual architecture, panoramic city views, and natural greenery makes it a popular destination for photography enthusiasts and nature lovers seeking picturesque moments."
      }
    ]
  },
  '10': {
    title: "Church Road",
    subtitle: "Vibrant Local Market Street & Cultural Hub",
    heroImage: "/Untitled video - Made with Clipchamp.mp4",
    isVideo: true,
    description: "Nestled in the heart of Ratnapura, Church Road is a lively yet compact street that perfectly captures the essence of local life. Though not vast in size, it offers visitors a unique glimpse into the everyday rhythm of the city, bustling with energy, colors, and sounds.",
    longDescription: "The street is lined with countless small shops and stalls, each brimming with local goods. Visitors can find an array of items—from traditional clothing and handmade crafts to everyday essentials—often sold at very affordable prices. Church Road is especially known for its rich variety of local foods, where aromatic spices, freshly cooked snacks, and sweet treats tempt passersby to experience the flavors of Ratnapura. Walking through Church Road is more than just shopping; it is an immersive cultural experience. The lively chatter of vendors, the colorful displays of merchandise, and the warm interactions with sellers create a vibrant and inviting atmosphere.",
    awards: [
      {
        title: "Cultural Microcosm",
        description: "More than just a market, Church Road is a microcosm of Ratnapura's vibrant local life—a place to explore, taste, shop, and connect, offering an experience that is both lively and intimate."
      },
      {
        title: "Authentic Local Experience",
        description: "Offers an authentic window into the traditions, tastes, and daily life of the local community, reflecting the resourcefulness and spirit of the people who make it their workplace and social hub."
      },
      {
        title: "Cultural Heartbeat",
        description: "Embodies the city's cultural heartbeat through the harmony between commerce and local culture, where every corner tells a story of community, tradition, and everyday life."
      }
    ],
    facilities: [
      {
        icon: "🛍️",
        title: "Local Shops & Stalls",
        description: "Countless small shops and stalls brimming with local goods—traditional clothing, handmade crafts, and everyday essentials—all sold at very affordable prices for visitors and locals alike."
      },
      {
        icon: "🍜",
        title: "Local Food Variety",
        description: "Rich variety of local foods featuring aromatic spices, freshly cooked snacks, and sweet treats that tempt passersby to experience the authentic flavors of Ratnapura's culinary heritage."
      },
      {
        icon: "🤝",
        title: "Friendly Vendors",
        description: "Local vendors known for their friendly hospitality, readily offering advice, sharing stories, and helping customers select the perfect item—this personal touch makes every visit memorable."
      },
      {
        icon: "🎨",
        title: "Vibrant Atmosphere",
        description: "Lively chatter of vendors, colorful displays of merchandise, and warm interactions create a vibrant and inviting atmosphere that captures the energy and spirit of local life."
      },
      {
        icon: "👗",
        title: "Traditional Crafts",
        description: "Find traditional clothing, handmade crafts, and local artisan products that showcase the region's cultural heritage and craftsmanship at accessible prices."
      },
      {
        icon: "🚶",
        title: "Cultural Strolling",
        description: "Leisurely stroll through the street, observing the harmony between commerce and local culture, or pause to savor a snack while watching the vibrant world go by."
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCaption, setCurrentCaption] = useState('');
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audio1, setAudio1] = useState<HTMLAudioElement | null>(null);
  const [audio2] = useState(typeof window !== 'undefined' ? (() => {
    const audio = new Audio('/ssstik.io_1759995889296.mp3');
    audio.volume = 0.03; // Set to 3% volume
    return audio;
  })() : null);

  // Initialize audio1 based on the place ID
  useEffect(() => {
    if (typeof window !== 'undefined' && (id === '1' || id === '2' || id === '3' || id === '4' || id === '5' || id === '6' || id === '8' || id === '9' || id === '10')) {
      let audioFile = '/lake.mp3'; // default
      if (id === '2') audioFile = '/saman dewalaya.mp3';
      if (id === '3') audioFile = '/gem museum.mp3';
      if (id === '4') audioFile = '/pauls church.mp3';
      if (id === '5') audioFile = '/kalu ganga.mp3';
      if (id === '6') audioFile = '/walawwa.mp3';
      if (id === '8') audioFile = '/kovil.mp3';
      if (id === '9') audioFile = '/temple.mp3';
      if (id === '10') audioFile = '/chruch road.mp3';
      
      const newAudio = new Audio(audioFile);
      setAudio1(newAudio);
      
      return () => {
        newAudio.pause();
        newAudio.currentTime = 0;
      };
    }
  }, [id]);

  // Helper function to format time in MM:SS
  const formatTime = (timeInSeconds: number): string => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const captions = id === '10' ? [
    { time: 1, text: "A short walk takes you to Church Road, a lively street full of colour, culture and smiles. It's a paradise for local shopping lovers." },
    { time: 15, text: "Pause for lunch at an authentic local restaurant where you will taste traditional Sri Lankan rice and curry rich in flavour, warmth and tradition. This is Ratnapura's everyday life. Simple, vibrant and full of heart." }
  ] : id === '8' ? [
    { time: 1, text: "Step into the sacred Shri Kadirvel Yudha Swamikavel, a place where faith and tradition come alive. Worshippers arrive with offerings of fruits and flowers, seeking blessings for success, health and happiness." },
    { time: 22, text: "The soft aroma of incense and the rhythm of the drums fill the air creating an atmosphere of deep reverence. Here, devotion is personal. Every prayer whispered carries a story of hope and gratitude." }
  ] : id === '9' ? [
    { time: 1, text: "Journey next to the Kajugaswatha temple, a sacred site for Buddhists in Ratnapura. From its hilltop you can witness a wave of the lush greenery below." },
    { time: 17, text: "The temple's calm surroundings and towering Buddha statue remind visitors of inner peace and reflection. As the bells echo through the quiet air, a sense of serenity embraces you. Ratnapura's spirit, peaceful and pure." }
  ] : id === '6' ? [
    { time: 1, text: "Step inside the Ratnapura National Museum, located in the Ehelepola Walawwa. Here, ancient artifacts, royal heritage and gem history come together to tell Ratnapura's timeless story. Stroll through the adjoining botanical garden filled with native flora, a peaceful space where culture meets nature's calm." }
  ] : id === '5' ? [
    { time: 1, text: "Now you are at the Kaluganga viewpoint. Watch the river flow through the hills, a soothing rhythm that connects every part of Ratnapura. This is the perfect moment to pause, breathe and take in the untouched beauty that defines the region." }
  ] : id === '4' ? [
    { time: 0, text: "Just nearby stands St. Peter's Church, a symbol of faith and multicultural harmony. Its quiet beauty and historic charm remind us of Ratnapura's diversity where temples, corvilles, mosques and churches coexist in peace." }
  ] : id === '3' ? [
    { time: 1, text: "Welcome to the Ratnapura gem market and museum, the beating heart of this city, where traders gather, examining sapphires, rubies and moonstones, treasures shaped by the earth and polished by human hands." },
    { time: 23, text: "The Gem Museum tells the deeper story from mining to crafting, showcasing Ratnapura's identity as Sri Lanka's city of gems. Each gem here carries a spark of the city's soul." }
  ] : id === '2' ? [
    { time: 1, text: "Step into the sacred grounds of Saman Dewalaya, a temple deeply honoured and cherished by devotees across Sri Lanka. This historic shrine is devoted to God Saman, the guardian of Sabaragamuwa province." },
    { time: 21, text: "Each year, the Maha Saman Dewalaya Perahera transforms the city into a spectacle of faith. Streets glow with lamps, the sound of drums echoing through the night and graceful dances carrying centuries of tradition." },
    { time: 42, text: "Here, spirituality is not just observed. It is felt, celebrated and lived in every heartbeat." }
  ] : [
    { time: 1, text: "Your journey begins at the lake's serenity resort and spa nestled beside a tranquil lake. Here every experience is connected to nature cycling through the greenery" },
    { time: 16, text: "Picking fruits from the garden and collecting fresh farm eggs each morning. The resort proudly represents eco-luxury combining comfort with sustainability. Breathe in the freshness of the air. Listen to the rhythm of nature and feel Ratnapura's calm embrace." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCaption = () => {
      if (audio1 && isPlaying) {
        const currentTime = audio1.currentTime;
        setAudioProgress(currentTime);
        let activeCaption = '';
        
        for (let i = captions.length - 1; i >= 0; i--) {
          if (currentTime >= captions[i].time) {
            activeCaption = captions[i].text;
            break;
          }
        }
        
        setCurrentCaption(activeCaption);
      }
    };

    let interval: NodeJS.Timeout;
    if (isPlaying && audio1) {
      interval = setInterval(updateCaption, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, audio1, captions]);

  useEffect(() => {
    // Add event listeners for when audio ends
    const handleAudioEnd = () => {
      if (audio1) {
        audio1.pause();
        audio1.currentTime = 0;
      }
      if (audio2) {
        audio2.pause();
        audio2.currentTime = 0;
      }
      setIsPlaying(false);
      setCurrentCaption('');
      setAudioProgress(0);
    };

    const handleLoadedMetadata = () => {
      if (audio1) {
        setAudioDuration(audio1.duration);
      }
    };

    if (audio1) {
      audio1.addEventListener('ended', handleAudioEnd);
      audio1.addEventListener('loadedmetadata', handleLoadedMetadata);
    }
    if (audio2) {
      audio2.addEventListener('ended', handleAudioEnd);
    }

    // Cleanup audio on unmount
    return () => {
      if (audio1) {
        audio1.removeEventListener('ended', handleAudioEnd);
        audio1.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio1.pause();
        audio1.currentTime = 0;
      }
      if (audio2) {
        audio2.removeEventListener('ended', handleAudioEnd);
        audio2.pause();
        audio2.currentTime = 0;
      }
    };
  }, [audio1, audio2]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audio1?.pause();
      audio2?.pause();
      setIsPlaying(false);
      setCurrentCaption('');
    } else {
      if (audio1 && audio2) {
        audio1.currentTime = 0;
        audio2.currentTime = 0;
        // Ensure volume is set correctly (mobile browsers sometimes reset this)
        audio2.volume = 0.03;
        setAudioProgress(0);
      }
      // Play with error handling for mobile browsers
      audio1?.play().catch(err => console.log('Audio play error:', err));
      audio2?.play().catch(err => console.log('Audio play error:', err));
      setIsPlaying(true);
    }
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

        {/* Hero Section - UPDATED TO USE IMAGE OR VIDEO */}
        <div className="hero place-detail-hero" style={{ position: 'relative', minHeight: '60vh' }}>
          {place.isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 1
              }}
            >
              <source src={place.heroImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={place.heroImage}
              alt={place.title}
              fill
              priority
              quality={90}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          )}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}>
            <div className="hero-content">
              <h1>{place.title}</h1>
              <p>{place.subtitle}</p>
            </div>
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

        {/* Audio Player Section - Only for Lake Serenity */}
        {id === '1' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Discover the beauty and serenity of Lake Serenity through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Saman Dewalaya */}
        {id === '2' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Experience the sacred spirituality of Sabaragamuwa Maha Saman Dewalaya
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Gemological Museum */}
        {id === '3' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Explore the treasures of Ratnapura&apos;s Gem Museum through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for St. Peter's and Paul's Church */}
        {id === '4' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Experience the spiritual harmony of St. Peter&apos;s and Paul&apos;s Church
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Kaluganga Viewpoint */}
        {id === '5' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Experience the serene flow of Kaluganga through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Church Road */}
        {id === '10' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Discover the vibrant local life of Church Road through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Sri Kathirvelayutha Swami Kovil */}
        {id === '8' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Experience the sacred atmosphere of Sri Kathirvelayutha Swami Kovil through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Kajugaswatha Temple */}
        {id === '9' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Experience the peaceful atmosphere of Kajugaswatha Temple through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

        {/* Audio Player Section - Only for Walawwa Museum */}
        {id === '6' && (
          <section className="section" style={{ background: 'var(--bg-gradient-2)', paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                🎧 Listen to Our Story
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
              }}>
                Discover the rich heritage of Ehelepola Walawwa through our audio guide
              </p>
              
              <div style={{
                background: 'var(--card-bg)',
                padding: 'clamp(35px, 5vw, 50px)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-colored)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                <button
                  onClick={toggleAudio}
                  style={{
                    width: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(100px, 20vw, 120px)',
                    borderRadius: '50%',
                    border: 'none',
                    background: isPlaying 
                      ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 20px 50px rgba(6, 182, 212, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)';
                  }}
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <span style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>⏸</span>
                  ) : (
                    <span style={{ paddingLeft: 'clamp(6px, 1.5vw, 8px)' }}>▶</span>
                  )}
                  
                  {isPlaying && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '3px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  )}
                </button>
                
                <p style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--accent-primary)',
                  fontWeight: '600'
                }}>
                  {isPlaying ? '🎵 Now Playing...' : 'Click to Play'}
                </p>

                {/* Progress Bar */}
                {audioDuration > 0 && (
                  <div style={{ marginTop: '2rem', width: '100%', padding: '0 clamp(0px, 2vw, 10px)' }}>
                    {/* Time Display */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: 'clamp(6px, 1.5vw, 8px)',
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      position: 'relative'
                    }}>
                      {/* Progress Bar Fill */}
                      <div style={{
                        width: `${(audioProgress / audioDuration) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-tertiary) 0%, var(--accent-secondary) 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.1s linear',
                        boxShadow: isPlaying ? '0 0 15px rgba(6, 182, 212, 0.6)' : 'none'
                      }} />
                    </div>
                  </div>
                )}

                {/* Captions Display */}
                {currentCaption && (
                  <div style={{
                    marginTop: '2rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: '2px solid var(--border-accent)',
                    minHeight: 'clamp(80px, 15vw, 100px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      &ldquo;{currentCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.5;
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </section>
        )}

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
            <div className="places-grid">
              {place.awards.length === 2 ? (
                <div style={{ 
                  gridColumn: '1 / -1', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                  flexWrap: 'wrap'
                }}>
                  {place.awards.map((award, index: number) => (
                    <div key={index} className="feature-card" style={{ flex: '0 0 auto', minWidth: 'min(100%, 300px)', maxWidth: '450px' }}>
                      <div className="feature-icon">{id === '1' ? '🏆' : '📜'}</div>
                      <h3>{award.title}</h3>
                      <p>{award.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                place.awards.map((award, index: number) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{id === '1' ? '🏆' : '📜'}</div>
                    <h3>{award.title}</h3>
                    <p>{award.description}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {/* Facilities Section */}
        <section className="section">
          <h2 className="section-title">Facilities & Features</h2>
          <div className="places-grid">
            {place.facilities.length === 5 ? (
              <>
                {/* First 3 cards in normal grid */}
                {place.facilities.slice(0, 3).map((facility, index: number) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{facility.icon}</div>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>
                ))}
                {/* Last 2 cards centered */}
                <div style={{ 
                  gridColumn: '1 / -1', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                  flexWrap: 'wrap'
                }}>
                  {place.facilities.slice(3).map((facility, index: number) => (
                    <div key={index + 3} className="feature-card" style={{ flex: '0 0 auto', minWidth: 'min(100%, 300px)', maxWidth: '400px' }}>
                      <div className="feature-icon">{facility.icon}</div>
                      <h3>{facility.title}</h3>
                      <p>{facility.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : place.facilities.length === 4 ? (
              <>
                {/* First 3 cards in normal grid */}
                {place.facilities.slice(0, 3).map((facility, index: number) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{facility.icon}</div>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>
                ))}
                {/* Last card centered */}
                <div style={{ 
                  gridColumn: '1 / -1', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                  flexWrap: 'wrap'
                }}>
                  {place.facilities.slice(3).map((facility, index: number) => (
                    <div key={index + 3} className="feature-card" style={{ flex: '0 0 auto', minWidth: 'min(100%, 300px)', maxWidth: '400px' }}>
                      <div className="feature-icon">{facility.icon}</div>
                      <h3>{facility.title}</h3>
                      <p>{facility.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : place.facilities.length === 8 ? (
              <>
                {/* First 6 cards in normal grid */}
                {place.facilities.slice(0, 6).map((facility, index: number) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{facility.icon}</div>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>
                ))}
                {/* Last 2 cards centered */}
                <div style={{ 
                  gridColumn: '1 / -1', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                  flexWrap: 'wrap'
                }}>
                  {place.facilities.slice(6).map((facility, index: number) => (
                    <div key={index + 6} className="feature-card" style={{ flex: '0 0 auto', minWidth: 'min(100%, 300px)', maxWidth: '400px' }}>
                      <div className="feature-icon">{facility.icon}</div>
                      <h3>{facility.title}</h3>
                      <p>{facility.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              place.facilities.map((facility, index: number) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{facility.icon}</div>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              ))
            )}
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