
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

interface HeaderProps {
  contentData: ContentData
}

export default function Header({ contentData }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white w-full fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ paddingTop: '0.125rem', paddingBottom: '0.125rem' }}>
      <div className="responsive-container flex items-center justify-between" style={{ paddingLeft: 'var(--spacing-sm)', paddingRight: 'var(--spacing-sm)' }}>
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Ekaant Logo" 
            width={160}
            height={48}
            style={{ 
              height: 'clamp(3rem, 3rem + 2vw, 5rem)', 
              width: 'auto',
              paddingTop: '0.5rem'
            }}
          />
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center" style={{ gap: 'clamp(1rem, 1rem + 1vw, 2rem)' }}>
          <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-sm">
            HOME
          </button>
          <button onClick={() => scrollToSection('amenities')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-sm">
            AMENITIES
          </button>
          <button onClick={() => scrollToSection('gallery')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-sm">
            PHOTO GALLERY
          </button>
          <button onClick={() => scrollToSection('footer')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-sm">
            CONTACT US
          </button>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden">
          <div className="flex flex-wrap justify-end" style={{ gap: 'clamp(0.5rem, 0.5rem + 0.5vw, 1rem)' }}>
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-xs">
              HOME
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-xs">
              AMENITIES
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-xs">
              GALLERY
            </button>
            <button onClick={() => scrollToSection('footer')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-xs">
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
