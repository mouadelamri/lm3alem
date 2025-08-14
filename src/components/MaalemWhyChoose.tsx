import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Heart, Headphones } from 'lucide-react';

const MaalemWhyChoose: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      percentage: '100%',
      title: t('whyChoose.verified.title'),
      description: t('whyChoose.verified.description')
    },
    {
      icon: Clock,
      percentage: '< 30min',
      title: t('whyChoose.fast.title'),
      description: t('whyChoose.fast.description')
    },
    {
      icon: Heart,
      percentage: '95%',
      title: t('whyChoose.satisfaction.title'),
      description: t('whyChoose.satisfaction.description')
    },
    {
      icon: Headphones,
      percentage: '24/7',
      title: t('whyChoose.support.title'),
      description: t('whyChoose.support.description')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {feature.percentage}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl md:text-3xl text-gray-600 mb-8 italic leading-relaxed">
              "{t('testimonial.text')}"
            </div>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/60x60/F3F4F6/374151?text=SA" 
                alt={t('testimonial.author')}
                className="w-15 h-15 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">{t('testimonial.author')}</div>
                <div className="text-gray-600">{t('testimonial.role')}</div>
                <div className="text-sm text-blue-600">{t('testimonial.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaalemWhyChoose;
