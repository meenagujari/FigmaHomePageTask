
'use client'

interface ContentData {
  site: {
    name: string
    tagline: string
  }
  hero: {
    title: string
    subtitle: string
    backgroundImage: string
  }
  about: {
    title: string
    description: string[]
    buttonText: string
    image: string
  }
  services: {
    title: string
    subtitle: string
    buttonText: string
    featuredActivities: Array<{
      title: string
      description: string
      backgroundPosition: string
      icon: string
    }>
    additionalActivities: Array<{
      title: string
      description: string
      backgroundPosition: string
      icon: string
    }>
    images: {
      activitiesGroup: string
      servicesGroup: string
    }
  }
  location: {
    title: string
    methods: Array<{
      type: string
      title: string
      details: string[]
    }>
    coordinates: {
      title: string
      address: string
    }
    gps: {
      title: string
      coordinates: string
    }
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  footer: {
    heading: string
    contact: {
      phone: string
      email: string
      instagram: string
      location: string
      address: string
    }
    navigation: {
      title: string
      items: Array<{ label: string; link: string }>
    }
    activities: {
      title: string
      items: string[]
    }
    social: { title: string }
    newsletter: { title: string }
    copyright: string
    legal: string[]
  }
}

interface ServicesSectionProps {
  contentData: ContentData
}

export default function ServicesSection({ contentData }: ServicesSectionProps) {
  return (
    <section id="amenities" className="bg-gray-50" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
      <div className="responsive-container" style={{ padding: 'var(--spacing-lg)' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <div className="inline-block" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2 
              className="font-semibold text-gray-900 px-8 py-4 rounded-full border"
              style={{ 
                fontSize: 'var(--font-size-3xl)',
                borderColor: '#003E17',
                backgroundColor: 'transparent'
              }}
            >
              {contentData.services.title}
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed responsive-text-xl" style={{ maxWidth: 'calc(60% + 10vw)', margin: '0 auto' }}>
            {contentData.services.subtitle}
          </p>
        </div>

        {/* Featured Activities with Background Images */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          {contentData.services.featuredActivities.map((activity, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105" style={{ height: 'var(--card-height)', marginBottom: 'var(--spacing-md)', borderRadius: 'var(--border-radius-xl)' }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${contentData.services.images.activitiesGroup}')`,
                    backgroundPosition: activity.backgroundPosition
                  }}
                />
                <div className="absolute inset-0 border-4 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: 'var(--border-radius-xl)' }} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 responsive-text-lg">
                  {activity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Activities with Background Images */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          {contentData.services.additionalActivities.map((activity, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105" style={{ height: 'var(--card-height)', marginBottom: 'var(--spacing-md)', borderRadius: 'var(--border-radius-xl)' }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${contentData.services.images.servicesGroup}')`,
                    backgroundPosition: activity.backgroundPosition
                  }}
                />
                <div className="absolute inset-0 border-4 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: 'var(--border-radius-xl)' }} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 responsive-text-lg">
                  {activity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl responsive-text-lg"
            style={{ 
              backgroundColor: '#003E17',
              padding: 'var(--button-padding-y) var(--button-padding-x)',
              borderRadius: 'var(--border-radius-full)',
              letterSpacing: '0.025em'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#002a10'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#003E17'}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}
