
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

interface HeroSectionProps {
  contentData: ContentData
}

export default function HeroSection({ contentData }: HeroSectionProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative flex items-center justify-start overflow-hidden" style={{ height: 'clamp(80vh, 90vh, 120vh)', paddingTop: 'calc(var(--spacing-3xl) + var(--spacing-md))' }}>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${contentData.hero.backgroundImage}')`
      }} />
      
      <div className="relative z-10 text-center text-white responsive-container w-full flex items-end justify-center h-full" style={{ padding: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-4xl)' }}>
        <div style={{ maxWidth: 'calc(90% + 5vw)' }}>
          <h1 className="font-bold tracking-wide" style={{ 
            fontSize: 'var(--font-size-4xl)', 
            marginBottom: 'var(--spacing-lg)',
            lineHeight: 'clamp(1.3, 1.3 + 0.1vw, 1.5)'
          }}>
            Welcome to Ekaant—Agro Tourism Retreat<br />
            Near Bor Tiger Reserve, Maharashtra
          </h1>
          <p className="font-light leading-relaxed opacity-95" style={{ fontSize: 'var(--font-size-xl)' }}>
            {contentData.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
