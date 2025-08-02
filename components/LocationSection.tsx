
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

interface LocationSectionProps {
  contentData: ContentData
}

export default function LocationSection({ contentData }: LocationSectionProps) {
  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: '#D0D9D9',
        paddingTop: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-3xl)'
      }}
    >
      <div className="responsive-container" style={{ padding: 'var(--spacing-lg)' }}>
        {/* Title */}
        <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 
            className="font-bold text-black responsive-text-3xl"
            style={{ 
              letterSpacing: '0.05em',
              lineHeight: '1.2'
            }}
          >
            {contentData.location.title.replace(' ', '\n')}
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: 'var(--spacing-2xl)' }}>
          {/* Left Side - Transportation Methods */}
          <div className="space-y-4">
            {contentData.location.methods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md" style={{ padding: 'var(--spacing-md)' }}>
                <div className="flex items-start" style={{ gap: 'var(--spacing-sm)' }}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      {method.type === 'road' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                        </svg>
                      )}
                      {method.type === 'train' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                          <path d="M5 15h14l-2-6H7l-2 6z" />
                          <path d="M3 15h18" />
                          <circle cx="6" cy="18" r="2" />
                          <circle cx="18" cy="18" r="2" />
                        </svg>
                      )}
                      {method.type === 'air' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 2-3.5 3.5L11 16l-8.2 1.8c-.5.1-.8.6-.8 1.1s.5 1 1.1.8L11 16l8.2-1.8z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 responsive-text-base" style={{ marginBottom: 'var(--spacing-xs)' }}>{method.title}</h3>
                    <ul className="text-gray-700 responsive-text-xs space-y-1">
                      {method.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Map/Visual */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100" style={{ minHeight: '400px' }}>
            {/* Map Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ padding: 'var(--spacing-lg)' }}>
              {/* Location Info Box */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl text-center" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <h3 className="font-bold text-gray-900 responsive-text-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  {contentData.location.coordinates.title}
                </h3>
                <p className="text-gray-700 responsive-text-sm">
                  {contentData.location.coordinates.address}
                </p>
              </div>

              {/* Animated Location Pin */}
              <div className="relative">
                <svg width="65" height="80" viewBox="0 0 80 100" className="animate-bounce">
                  <path 
                    d="M40 10 C25 10 15 20 15 35 C15 50 40 85 40 85 C40 85 65 50 65 35 C65 20 55 10 40 10 Z"
                    fill="#22c55e"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className="drop-shadow-2xl"
                  />
                  <circle cx="40" cy="35" r="10" fill="#ffffff" />
                  <path d="M40 28 L40 42 M33 35 L47 35" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* GPS Coordinates */}
              <div className="bg-green-600/90 text-white text-center rounded-lg mt-4" style={{ padding: 'var(--spacing-sm)' }}>
                <div className="font-bold responsive-text-sm">{contentData.location.gps.title}</div>
                <div className="text-xs opacity-90">{contentData.location.gps.coordinates}</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-green-400 opacity-60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-4 left-4 text-green-400 opacity-40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
