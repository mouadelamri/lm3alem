import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    
    // Mise à jour de la direction du document pour l'arabe
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'fr');
    }
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {i18n.language === 'ar' ? 'العربية' : 'Français'}
        </span>
      </button>
      
      <div className="absolute top-full mt-1 left-0 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => changeLanguage('fr')}
          className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-t-lg ${
            i18n.language === 'fr' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
          }`}
        >
          {t('language.french')}
        </button>
        <button
          onClick={() => changeLanguage('ar')}
          className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-b-lg ${
            i18n.language === 'ar' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
          }`}
        >
          {t('language.arabic')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
