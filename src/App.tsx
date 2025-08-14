import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import MaalemHeader from './components/MaalemHeader';
import MaalemHero from './components/MaalemHero';
import MaalemServices from './components/MaalemServices';
import MaalemHowItWorks from './components/MaalemHowItWorks';
import MaalemFeatured from './components/MaalemFeatured';
import MaalemWhyChoose from './components/MaalemWhyChoose';
import MaalemFooter from './components/MaalemFooter';

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
      <MaalemHeader />
      <MaalemHero />
      <MaalemServices />
      <MaalemHowItWorks />
      <MaalemFeatured />
      <MaalemWhyChoose />
      <MaalemFooter />
    </div>
  );
}

export default App;
