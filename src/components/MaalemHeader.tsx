import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const MaalemHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              {t('header.brand')}
            </h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.nav.home')}
            </a>
            <a href="#search" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.nav.search')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.nav.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              {t('header.nav.login')}
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t('header.nav.signup')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                {t('header.nav.home')}
              </a>
              <a href="#search" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                {t('header.nav.search')}
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                {t('header.nav.contact')}
              </a>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <button className="text-left px-3 py-2 text-blue-600 hover:text-blue-700">
                  {t('header.nav.login')}
                </button>
                <button className="mx-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {t('header.nav.signup')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MaalemHeader;
