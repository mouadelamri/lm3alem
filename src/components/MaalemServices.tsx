import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench, Zap, Hammer, Paintbrush, Sparkles, Tool, ArrowRight, ArrowLeft } from 'lucide-react';

const MaalemServices: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: Wrench,
      count: 120,
      title: t('services.plumbing.title'),
      description: t('services.plumbing.description'),
      link: t('services.plumbing.link')
    },
    {
      icon: Zap,
      count: 95,
      title: t('services.electricity.title'),
      description: t('services.electricity.description'),
      link: t('services.electricity.link')
    },
    {
      icon: Hammer,
      count: 78,
      title: t('services.carpentry.title'),
      description: t('services.carpentry.description'),
      link: t('services.carpentry.link')
    },
    {
      icon: Paintbrush,
      count: 65,
      title: t('services.painting.title'),
      description: t('services.painting.description'),
      link: t('services.painting.link')
    },
    {
      icon: Sparkles,
      count: 85,
      title: t('services.cleaning.title'),
      description: t('services.cleaning.description'),
      link: t('services.cleaning.link')
    },
    {
      icon: Tool,
      count: 102,
      title: t('services.repair.title'),
      description: t('services.repair.description'),
      link: t('services.repair.link')
    }
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.count}</div>
                      <div className="text-sm text-gray-500">{t('services.maalems')}</div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <span>{service.link}</span>
                  <ArrowIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <span>{t('services.viewAll')}</span>
            <ArrowIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaalemServices;
