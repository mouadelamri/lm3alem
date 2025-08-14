import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

const MaalemHero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center mt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
              {t('hero.searchButton')}
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">{t('hero.suggestions')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              {t('hero.suggestion1')}
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              {t('hero.suggestion2')}
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              {t('hero.suggestion3')}
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              {t('hero.suggestion4')}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 text-sm md:text-base">{t('stats.verified')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">50k+</div>
            <div className="text-gray-600 text-sm md:text-base">{t('stats.interventions')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">4.8★</div>
            <div className="text-gray-600 text-sm md:text-base">{t('stats.rating')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600 text-sm md:text-base">{t('stats.support')}</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 font-medium">{t('stats.availability')}</p>
        </div>
      </div>
    </section>
  );
};

export default MaalemHero;
