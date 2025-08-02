
'use client'

import Image from 'next/image'

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

interface AboutSectionProps {
  contentData: ContentData
}

export default function AboutSection({ contentData }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
      <div className="responsive-container" style={{ padding: 'var(--spacing-lg)' }}>
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: 'var(--spacing-2xl)' }}>
          <div>
            <h2 className="font-semibold leading-tight responsive-text-5xl" style={{ marginBottom: 'var(--spacing-lg)', color: '#131212' }}>
              {contentData.about.title}
            </h2>
            <div className="text-gray-700 leading-relaxed responsive-text-lg" style={{ marginBottom: 'var(--spacing-xl)' }}>
              {contentData.about.description.map((paragraph, index) => (
                <p key={index} className="text-justify" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
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
          
          <div id="gallery" className="relative" style={{ marginTop: 'var(--spacing-lg)' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src={contentData.about.image}
                alt="Ekaant forest retreat setting" 
                width={800}
                height={500}
                className="w-full object-cover"
                style={{ height: 'calc(20rem + 15vw)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
