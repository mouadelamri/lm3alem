import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, MapPin, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const MaalemFeatured: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const featuredMaalems = [
    {
      id: 'mohammed',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/4F46E5/FFFFFF?text=M',
      rating: 4.8,
      reviews: 127,
      experience: 8,
      price: '80 DH/h',
      status: 'available'
    },
    {
      id: 'youssef',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/059669/FFFFFF?text=Y',
      rating: 4.9,
      reviews: 89,
      experience: 12,
      price: '90 DH/h',
      status: 'available'
    },
    {
      id: 'abdellah',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/DC2626/FFFFFF?text=A',
      rating: 4.7,
      reviews: 156,
      experience: 15,
      price: '70 DH/h',
      status: 'busy'
    }
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredMaalems.map((maalem) => (
            <div key={maalem.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={maalem.avatar}
                    alt={t(`featured.profiles.${maalem.id}.name`)}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t(`featured.profiles.${maalem.id}.name`)}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {t(`featured.profiles.${maalem.id}.specialty`)}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  maalem.status === 'available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {t(`featured.${maalem.status}`)}
                </span>
              </div>

              {/* Rating and Stats */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-900">{maalem.rating}</span>
                  <span>({maalem.reviews} {t('featured.reviews')})</span>
                </div>
                <div>{maalem.experience} {t('featured.experience')}</div>
              </div>

              {/* Location and Response Time */}
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{t(`featured.profiles.${maalem.id}.location`)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{t('featured.respondsIn')} {t(`featured.profiles.${maalem.id}.responseTime`)}</span>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">{t('featured.services')}</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• {t(`featured.profiles.${maalem.id}.service1`)}</div>
                  <div>• {t(`featured.profiles.${maalem.id}.service2`)}</div>
                  <div className="text-blue-600">{t(`featured.profiles.${maalem.id}.otherServices`)}</div>
                </div>
              </div>

              {/* Price and Contact */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">{t('featured.from')}</p>
                  <p className="font-bold text-gray-900">{maalem.price}</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {t('featured.contact')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            <span>{t('featured.viewAll')}</span>
            <ArrowIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaalemFeatured;
