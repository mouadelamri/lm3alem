import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.service1.title'),
      description: t('services.service1.description')
    },
    {
      icon: Palette,
      title: t('services.service2.title'),
      description: t('services.service2.description')
    },
    {
      icon: Lightbulb,
      title: t('services.service3.title'),
      description: t('services.service3.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
