'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_features: "Features",
    hero_title: "Ratnapura", hero_subtitle: "The Hidden Gem of Sri Lanka", hero_button: "Explore Now",
    about_title: "Welcome to Ratnapura",
    about_content: "Ratnapura, meaning \"City of Gems\" in Sinhala, is a vibrant city in the Sabaragamuwa Province of Sri Lanka. Renowned worldwide for its precious gemstones, this historic city sits at the foothills of the famous Adam's Peak and is blessed with natural beauty, rich culture, and centuries-old mining traditions. The city serves as a gateway to some of Sri Lanka's most spectacular natural attractions and holds a treasure trove of colorful gemstones beneath its soil.",
    features_title: "Why Visit Ratnapura?",
    feature1_title: "Gem Capital", feature1_desc: "Explore centuries-old gem mines and witness the fascinating process of gem mining. Ratnapura produces some of the world's finest sapphires, rubies, and other precious stones.",
    feature2_title: "Natural Beauty", feature2_desc: "Surrounded by lush rainforests, waterfalls, and mountains including the sacred Adam's Peak. Perfect for nature lovers and adventure seekers.",
    feature3_title: "Rich Biodiversity", feature3_desc: "Home to Sinharaja Forest Reserve, a UNESCO World Heritage Site teeming with endemic flora and fauna found nowhere else on Earth.",
    footer_text: "💎 © 2025 Ratnapura Tourism | Experience the Magic of Sri Lanka's Gem City ✨",
    theme_toggle: "🌙 Dark", theme_toggle_light: "☀️ Light", language_btn: "🌐 EN"
  },
  si: {
    nav_home: "මුල් පිටුව", nav_about: "අපි ගැන", nav_features: "විශේෂත",
    hero_title: "රත්නපුර", hero_subtitle: "ශ්‍රී ලංකාවේ සැඟවුණු මැණික", hero_button: "දැන් ගවේෂණය කරන්න",
    about_title: "රත්නපුරට ආයුබෝවන්",
    about_content: "සිංහලෙන් \"මැණික් නගරය\" අදහස් කරන රත්නපුර ශ්‍රී ලංකාවේ සබරගමුව පළාතේ ජීවන්ත නගරයක්. වටිනා මැණික් ගල් සඳහා ලොව පුරා ප්‍රසිද්ධ මෙම ඓතිහාසික නගරය ප්‍රසිද්ධ ශ්‍රී පාදස්ථානයේ පාමුල අසල පිහිටා ඇති අතර ස්වභාවික සුන්දරත්වය, පොහොසත් සංස්කෘතිය සහ සියවස් ගණනාවක් පැරණි කැණීම් සම්ප්‍රදායෙන් ආශීර්වාද ලැබී ඇත.",
    features_title: "ඇයි රත්නපුරට පැමිණිය යුත්තේ?",
    feature1_title: "මැණික් අගනුවර", feature1_desc: "සියවස් ගණනක පැරණි මැණික් කැණීම් ගවේෂණය කර මැණික් කැණීමේ ආකර්ෂණීය ක්‍රියාවලිය නරඹන්න.",
    feature2_title: "ස්වභාවික සුන්දරත්වය", feature2_desc: "ශ්‍රී පාදස්ථානය ඇතුළු සාක්‍රික වන වාසස්, දිය ඉල් සහ කඳුකරවලින් වට වී ඇත.",
    feature3_title: "පොහොසත් ජීව විවිධත්වය", feature3_desc: "යුනෙස්කෝ ලොක ඉරුමය වන සිංහරාජ වන රක්ෂිතයේ නිවස.",
    footer_text: "💎 © 2025 රත්නපුර සංචාරක | ශ්‍රී ලංකාවේ මැණික් නගරයේ මායා අත්විඳින්න ✨",
    theme_toggle: "🌙 අඳුරු", theme_toggle_light: "☀️ ආලෝකය", language_btn: "🌐 සිං"
  },
  ta: {
    nav_home: "முகப்பு", nav_about: "எங்களைப் பற்றி", nav_features: "அம்சங்கள்",
    hero_title: "இரத்தினபுர", hero_subtitle: "இலங்கையின் மறைக்கப்பட்ட இரத்தினம்", hero_button: "இப்போது ஆராயுங்கள்",
    about_title: "இரத்தினபுருக்கு வரவேற்கிறோம்",
    about_content: "சிங்களத்தில் \"இரத்தின நகரம்\" என்று பொருள்படும் இரத்தினபுர, இலங்கையின் சபரகமுவ மாகாணத்தில் உள்ள ஒரு துடிப்பான நகரமாகும்.",
    features_title: "ஏன் இரத்தினபுருக்கு வர வேண்டும்?",
    feature1_title: "இரத்தின தலைநகரம்", feature1_desc: "நூற்றாண்டுகள் பழமையான இரத்தின சுரங்கங்களை ஆராய்ந்து இரத்தின சுரங்கத்தின் கவர்ச்சிகரமான செயல்முறையை கவனியுங்கள்.",
    feature2_title: "இயற்கை அழகு", feature2_desc: "புனித ஆதம் சிகரம் உட்பட பசுமையான மழைக்காடுகள், நீர்வீழ்ச்சிகள் மற்றும் மலைகளால் சூழப்பட்டுள்ளது.",
    feature3_title: "பணக்கார பல்லுயிர்", feature3_desc: "யுனெஸ்கோ உலக பாரம்பரிய தளமான சிங்கராஜ வன காப்பகத்தின் தாயகம்.",
    footer_text: "💎 © 2025 இரத்தினபுர சுற்றுலா | இலங்கையின் இரத்தின நகரின் மாயத்தை அனுபவியுங்கள் ✨",
    theme_toggle: "🌙 இருள்", theme_toggle_light: "☀️ ஒளி", language_btn: "🌐 தமி"
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
            <div className="logo">💎 <span>{t('hero_title')}</span></div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a onClick={() => scrollToSection('home')}>{t('nav_home')}</a></li>
              <li><a onClick={() => scrollToSection('about')}>{t('nav_about')}</a></li>
              <li><a onClick={() => scrollToSection('features')}>{t('nav_features')}</a></li>
            </ul>
            <div className="controls">
              <button className="theme-toggle" onClick={toggleTheme}>
                <span>{theme === 'dark' ? t('theme_toggle_light') : t('theme_toggle')}</span>
              </button>
              <div className="language-selector">
                <button className="language-btn" onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
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
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
          <p>{t('footer_text')}</p>
        </footer>
      </div>
    </div>
  );
}
