import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.mission_text')
    },
    {
      icon: Eye,
      title: t('about.vision'),
      description: t('about.vision_text')
    },
    {
      icon: Heart,
      title: t('about.values'),
      description: t('about.values_text')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
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
      </div>
    </section>
  );
};

export default About;
