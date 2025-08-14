import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Configuration initiale de la direction et langue du document
    const updateDocumentDirection = () => {
      if (i18n.language === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'fr');
      }
    };

    updateDocumentDirection();
    
    // Écouter les changements de langue
    i18n.on('languageChanged', updateDocumentDirection);

    return () => {
      i18n.off('languageChanged', updateDocumentDirection);
    };
  }, [i18n]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
