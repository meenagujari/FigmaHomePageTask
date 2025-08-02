'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Mail, Phone, MapPin, Send, Facebook, Instagram, Car, Train, Plane, Plus, Minus } from 'lucide-react'

// Content data interface
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
    contact: {
      phone: { label: string; number: string }
      email: { label: string; address: string }
      address: { label: string; details: string }
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

// Main Homepage Component
export default function HomePage() {
  const [contentData, setContentData] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content')
        if (!response.ok) {
          throw new Error('Failed to fetch content')
        }
        const data = await response.json()
        setContentData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Ekaant content...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Content Load Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!contentData) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      <Header contentData={contentData} />
      <HeroSection contentData={contentData} />
      <AboutSection contentData={contentData} />
      <ServicesSection contentData={contentData} />
      <LocationSection contentData={contentData} />
      <FAQSection contentData={contentData} />
      <FooterSection contentData={contentData} />
    </div>
  )
}

// Header Component
function Header({ contentData }: { contentData: ContentData }) {
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
          <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-sm">
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
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-green-600 font-medium transition-colors responsive-text-xs">
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

// Hero Section Component
function HeroSection({ contentData }: { contentData: ContentData }) {
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

// About Section Component
function AboutSection({ contentData }: { contentData: ContentData }) {
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
          
          <div className="relative" style={{ marginTop: 'var(--spacing-lg)' }}>
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

// Services Section Component
function ServicesSection({ contentData }: { contentData: ContentData }) {
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

// Location Section Component
function LocationSection({ contentData }: { contentData: ContentData }) {
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

// FAQ Section Component
function FAQSection({ contentData }: { contentData: ContentData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (clickedIndex: number) => {
    setActiveIndex(activeIndex === clickedIndex ? null : clickedIndex)
  }

  return (
    <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: '#f9fafb' }}>
      <div className="responsive-container" style={{ paddingLeft: 'var(--spacing-lg)', paddingRight: 'var(--spacing-lg)' }}>
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 
              className="font-semibold text-gray-900 px-8 py-4 rounded-full border"
              style={{ 
                fontSize: 'var(--font-size-3xl)',
                borderColor: '#003E17',
                backgroundColor: 'transparent'
              }}
            >
              {contentData.faq.title}
            </h2>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-lg)' }}>
            {contentData.faq.items.map((item, i) => {
              const isOpen = activeIndex === i
              return (
                <div key={`faq-${i}`} className="bg-white rounded-3xl border overflow-hidden h-fit" style={{ borderColor: '#003E17' }}>
                  <button 
                    onClick={() => handleClick(i)}
                    className="w-full p-6 text-left flex items-center justify-between"
                    type="button"
                  >
                    <h3 className="responsive-text-lg font-medium text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <svg className="w-5 h-5" style={{ color: '#003E17' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" style={{ color: '#003E17' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="responsive-text-base text-gray-600" style={{ lineHeight: '1.6', paddingTop: '1rem' }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component - Exact Figma Design
function FooterSection({ contentData }: { contentData: ContentData }) {
  return (
    <footer className="text-white" style={{ backgroundColor: '#003E17', width: '100%' }}>
      <div className="responsive-container w-full" style={{ 
        padding: 'clamp(3rem, 5vw, 6rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        
        {/* Main Heading */}
        <h2 className="text-white font-bold responsive-text-2xl" style={{ 
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          letterSpacing: '0.05em'
        }}>
          We'd love to help you plan your peaceful escape.
        </h2>
        
        {/* Contact Information */}
        <div className="space-y-4">
          <div>
            <p className="text-white responsive-text-lg font-medium">
              EMAIL: {contentData.footer.contact.email.address}
            </p>
          </div>
          
          <div>
            <p className="text-white responsive-text-lg font-medium">
              PHONE: {contentData.footer.contact.phone.number}
            </p>  
          </div>
          
          <div>
            <p className="text-white responsive-text-lg font-medium" style={{ lineHeight: '1.6' }}>
              EKAANT AGRO TOURISM RETREAT<br />
              NEAR BOR TIGER RESERVE<br />
              WARDHA, MAHARASHTRA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}