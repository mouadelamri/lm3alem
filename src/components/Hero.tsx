import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
            <span>{t('hero.cta')}</span>
            {isRTL ? (
              <ArrowLeft className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
          
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
            {t('hero.contact_us')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
