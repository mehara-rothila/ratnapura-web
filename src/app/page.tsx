'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_features: "Features",
    nav_places: "Places",
    hero_title: "Ratnapura",
    hero_subtitle: "The Hidden Gem of Sri Lanka",
    hero_button: "Explore Places",
    about_title: "Welcome to Ratnapura",
    about_content: "Ratnapura, meaning \"City of Gems\" in Sinhala, is a vibrant city in the Sabaragamuwa Province of Sri Lanka. Renowned worldwide for its precious gemstones, this historic city sits at the foothills of the famous Adam's Peak and is blessed with natural beauty, rich culture, and centuries-old mining traditions. The city serves as a gateway to some of Sri Lanka's most spectacular natural attractions and holds a treasure trove of colorful gemstones beneath its soil.",
    features_title: "Why Visit Ratnapura?",
    feature1_title: "Gem Capital",
    feature1_desc: "Explore centuries-old gem mines and witness the fascinating process of gem mining. Ratnapura produces some of the world's finest sapphires, rubies, and other precious stones.",
    feature2_title: "Natural Beauty",
    feature2_desc: "Surrounded by lush rainforests, waterfalls, and mountains including the sacred Adam's Peak. Perfect for nature lovers and adventure seekers.",
    feature3_title: "Rich Biodiversity",
    feature3_desc: "Home to Sinharaja Forest Reserve, a UNESCO World Heritage Site teeming with endemic flora and fauna found nowhere else on Earth.",
    footer_about: "About Ratnapura",
    footer_about_desc: "Discover the Gem City of Sri Lanka - where nature, culture, and precious stones converge in perfect harmony.",
    footer_quick_links: "Quick Links",
    footer_explore: "Explore",
    footer_contact: "Contact Us",
    footer_address: "Ratnapura, Sabaragamuwa Province, Sri Lanka",
    footer_phone: "+94 45 222 2345",
    footer_email: "info@ratnapuratourism.lk",
    footer_bottom: "© 2025 Ratnapura Tourism | Experience the Magic of Sri Lanka's Gem City",
    theme_toggle: "🌙 Dark",
    theme_toggle_light: "☀️ Light",
    language_btn: "🌐 EN"
  },
  si: {
    nav_home: "මුල් පිටුව",
    nav_about: "අපි ගැන",
    nav_features: "විශේෂ",
    nav_places: "ස්ථාන",
    hero_title: "රත්නපුර",
    hero_subtitle: "ශ්‍රී ලංකාවේ සඟවුනු මැණික",
    hero_button: "ස්ථාන ගවේෂණය කරන්න",
    about_title: "රත්නපුරට ආයුබෝවන්",
    about_content: "සිංහලෙන් \"මැණික් නගරය\" අදහස් කරන රත්නපුර ශ්‍රී ලංකාවේ සබරගමුව පළාතේ ජීවන්ත නගරයක්. වැඩි මැණික් ගල් සඳහා ලොව පුරා ප්‍රසිද්ධ මෙම ඓතිහාසික නගරය ප්‍රසිද්ධ ශ්‍රී පාදස්ථානයේ පාමුල අසල පිහිටා ඇති අතර ස්වභාවික සුන්දරත්වය, පොහොසත් සංස්කෘතිය සහ සියවස් ගණනාවක පරණ කැණීම් සම්ප්‍රදායෙන් ආවූරණ ලැබ ඇත.",
    features_title: "ඇයි රත්නපුරට පැමිණිය යුත්තේ?",
    feature1_title: "මැණික් අගනුවර",
    feature1_desc: "සියවස් ගණනක පරණ මැණික් කැණීම් ගවේෂණය කර මැණික් කැණීමේ ආකර්ෂණීය ක්‍රියාවලිය නරඹන්න.",
    feature2_title: "ස්වභාවික සුන්දරත්වය",
    feature2_desc: "ශ්‍රී පාදස්ථානය ඇතුළු සාක්‍ර වන වැස්ස, දිය ඌල් සහ කඳුකරවලින් වට වී ඇත.",
    feature3_title: "පොහොසත් ජීව විවිධත්වය",
    feature3_desc: "යුනෙස්කෝ ලෝක උරුමය වන සිංහරාජ වන රක්ෂිතයේ නිවස.",
    footer_about: "රත්නපුර ගැන",
    footer_about_desc: "ශ්‍රී ලංකාවේ මැණික් නගරය - ස්වභාවය, සංස්කෘතිය සහ වටිනා ගල් පරිපූර්ණ සමගියෙන් එකතු වන තැන.",
    footer_quick_links: "ඉක්මන් සබැඳි",
    footer_explore: "ගවේෂණය",
    footer_contact: "අප අමතන්න",
    footer_address: "රත්නපුර, සබරගමුව පළාත, ශ්‍රී ලංකාව",
    footer_phone: "+94 45 222 2345",
    footer_email: "info@ratnapuratourism.lk",
    footer_bottom: "© 2025 රත්නපුර සංචාරක | ශ්‍රී ලංකාවේ මැණික් නගරයේ මායා අත්විඳින්න",
    theme_toggle: "🌙 අඳුරු",
    theme_toggle_light: "☀️ ආලෝකය",
    language_btn: "🌐 සිං"
  },
  ta: {
    nav_home: "முகப்பு",
    nav_about: "எங்களைப் பற்றி",
    nav_features: "அம்சங்கள்",
    nav_places: "இடங்கள்",
    hero_title: "இரத்தினபுர",
    hero_subtitle: "இலங்கையின் மறைக்கப்பட்ட இரத்தினம்",
    hero_button: "இடங்களை ஆராயுங்கள்",
    about_title: "இரத்தினபுருக்கு வரவேற்கிறோம்",
    about_content: "சிங்களத்தில் \"இரத்தின நகரம்\" என்று பொருள்படும் இரத்தினபுர, இலங்கையின் சபரகமுவ மாகாணத்தில் உள்ள ஒரு துடிப்பான நகரமாகும்.",
    features_title: "ஏன் இரத்தினபுருக்கு வர வேண்டும்?",
    feature1_title: "இரத்தின தலைநகரம்",
    feature1_desc: "நூற்றாண்டுகள் பழமையான இரத்தின சுரங்கங்களை ஆராய்ந்து இரத்தின சுரங்கத்தின் கவர்ச்சிகரமான செயல்முறையை கவனியுங்கள்.",
    feature2_title: "இயற்கை அழகு",
    feature2_desc: "புனித ஆதம் சிகரம் உட்பட பசுமையான மழைக்காடுகள், நீர்வீழ்ச்சிகள் மற்றும் மலைகளால் சூழப்பட்டுள்ளது.",
    feature3_title: "பணக்கார பல்லுயிர்",
    feature3_desc: "யுனெஸ்கோ உலக பாரம்பரிய தளமான சிங்கராஜ வன காப்பகத்தின் தாயகம்.",
    footer_about: "இரத்தினபுர பற்றி",
    footer_about_desc: "இலங்கையின் இரத்தின நகரைக் கண்டறியுங்கள் - இயற்கை, கலாச்சாரம் மற்றும் விலைமதிப்பற்ற கற்கள் சரியான இணக்கத்தில் ஒன்றிணைகின்றன.",
    footer_quick_links: "விரைவு இணைப்புகள்",
    footer_explore: "ஆராய்க",
    footer_contact: "எங்களை தொடர்பு கொள்ளுங்கள்",
    footer_address: "இரத்தினபுர, சபரகமுவ மாகாணம், இலங்கை",
    footer_phone: "+94 45 222 2345",
    footer_email: "info@ratnapuratourism.lk",
    footer_bottom: "© 2025 இரத்தினபுர சுற்றுலா | இலங்கையின் இரத்தின நகரின் மாயத்தை அனுபவியுங்கள்",
    theme_toggle: "🌙 இருள்",
    theme_toggle_light: "☀️ ஒளி",
    language_btn: "🌐 தமி"
  }
};

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key: string) => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations['en']] || key;
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
      <div className="ratnapura-website">
        {/* Navigation Bar */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <Link href="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              💎 <span>{t('hero_title')}</span>
            </Link>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a onClick={() => scrollToSection('home')}>{t('nav_home')}</a></li>
              <li><a onClick={() => scrollToSection('about')}>{t('nav_about')}</a></li>
              <li><a onClick={() => scrollToSection('features')}>{t('nav_features')}</a></li>
              <li><Link href="/places">{t('nav_places')}</Link></li>
            </ul>
            <div className="controls">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span>{theme === 'dark' ? t('theme_toggle_light') : t('theme_toggle')}</span>
              </button>
              <div className="language-selector">
                <button 
                  className="language-btn" 
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  aria-label="Select language"
                  aria-expanded={isLanguageDropdownOpen}
                >
                  <span>{t('language_btn')}</span>
                  <span>▼</span>
                </button>
                <div className={`language-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}>
                  <button className="language-option" onClick={() => changeLanguage('en')}>🇺🇸 English</button>
                  <button className="language-option" onClick={() => changeLanguage('si')}>🇱🇰 සිංහල</button>
                  <button className="language-option" onClick={() => changeLanguage('ta')}>🇱🇰 தமிழ்</button>
                </div>
              </div>
            </div>
            <div 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              role="button"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero" id="home">
          <div className="hero-content">
            <h1>{t('hero_title')}</h1>
            <p>{t('hero_subtitle')}</p>
            <Link href="/places" className="btn">{t('hero_button')}</Link>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="section about">
          <h2 className="section-title">{t('about_title')}</h2>
          <div className="about-content">
            <p>{t('about_content')}</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section features-section">
          <h2 className="section-title">{t('features_title')}</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>{t('feature1_title')}</h3>
              <p>{t('feature1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏔️</div>
              <h3>{t('feature2_title')}</h3>
              <p>{t('feature2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>{t('feature3_title')}</h3>
              <p>{t('feature3_desc')}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">💎 Ratnapura</div>
              <p className="footer-description">{t('footer_about_desc')}</p>
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
              <h3>{t('footer_quick_links')}</h3>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{t('nav_home')}</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('nav_about')}</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>{t('nav_features')}</a>
              <Link href="/places">{t('nav_places')}</Link>
            </div>
            <div className="footer-section">
              <h3>{t('footer_explore')}</h3>
              <Link href="/places">Tourist Attractions</Link>
              <Link href="/places/1">Hotels & Stays</Link>
              <Link href="/places/3">Gem Museums</Link>
              <Link href="/places/2">Cultural Sites</Link>
            </div>
            <div className="footer-section">
              <h3>{t('footer_contact')}</h3>
              <div className="footer-contact-item">
                <span className="icon">📍</span>
                <p>{t('footer_address')}</p>
              </div>
              <div className="footer-contact-item">
                <span className="icon">📞</span>
                <p>{t('footer_phone')}</p>
              </div>
              <div className="footer-contact-item">
                <span className="icon">✉️</span>
                <p>{t('footer_email')}</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer_bottom')}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}