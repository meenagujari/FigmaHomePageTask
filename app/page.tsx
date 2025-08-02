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
      <Footer contentData={contentData} />
    </div>
  )
}

// Header Component
function Header({ contentData }: { contentData: ContentData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="responsive-container w-full flex items-center justify-between" style={{ padding: 'var(--spacing-md)' }}>
        <div className="flex items-center" style={{ gap: 'var(--spacing-sm)' }}>
          <div className="text-2xl font-bold text-gray-900" style={{ fontSize: 'var(--font-size-2xl)' }}>
            {contentData.site.name}
          </div>
          <div className="text-sm text-green-600 font-medium hidden md:block" style={{ fontSize: 'var(--font-size-sm)' }}>
            {contentData.site.tagline}
          </div>
        </div>
        
        <nav className="hidden md:flex items-center" style={{ gap: 'var(--spacing-lg)' }}>
          <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
          <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Activities</a>
          <a href="#location" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Location</a>
          <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors font-medium">FAQ</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
        </nav>
        
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" style={{ padding: 'var(--spacing-md)' }}>
          <nav className="flex flex-col" style={{ gap: 'var(--spacing-md)' }}>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">About</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">Activities</a>
            <a href="#location" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">Location</a>
            <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section Component
function HeroSection({ contentData }: { contentData: ContentData }) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 'var(--hero-height)' }}>
      <Image 
        src={contentData.hero.backgroundImage}
        alt="Ekaant Agro Tourism Retreat"
        fill
        priority
        className="object-cover object-center w-full h-full"
        sizes="100vw"
        style={{ 
          objectPosition: 'center center',
          filter: 'brightness(0.7)'
        }}
      />
      
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
    <section id="about" className="bg-white" style={{ padding: 'var(--spacing-4xl) 0' }}>
      <div className="responsive-container w-full" style={{ padding: '0 var(--spacing-lg)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 'var(--spacing-4xl)' }}>
          <div className="space-y-6">
            <h2 className="font-bold text-gray-900" style={{ 
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              {contentData.about.title}
            </h2>
            
            {contentData.about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed" style={{ fontSize: 'var(--font-size-lg)' }}>
                {paragraph}
              </p>
            ))}
            
            <button 
              className="rounded-full text-white font-medium transition-all duration-300 hover:scale-105 transform" 
              style={{ 
                backgroundColor: '#003E17',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                fontSize: 'var(--font-size-md)'
              }}
            >
              {contentData.about.buttonText}
            </button>
          </div>
          
          <div className="relative">
            <Image 
              src={contentData.about.image}
              alt="Nature retreat experience"
              width={600}
              height={450}
              className="rounded-lg object-cover w-full h-auto shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection({ contentData }: { contentData: ContentData }) {
  return (
    <section id="services" className="bg-gray-50" style={{ padding: 'var(--spacing-4xl) 0' }}>
      <div className="responsive-container w-full" style={{ padding: '0 var(--spacing-lg)' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-4xl)' }}>
          <h2 className="font-bold text-gray-900" style={{ 
            fontSize: 'var(--font-size-3xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            {contentData.services.title}
          </h2>
          {contentData.services.subtitle && (
            <p className="text-gray-600" style={{ fontSize: 'var(--font-size-lg)' }}>
              {contentData.services.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-4xl)' }}>
          {contentData.services.featuredActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-4">{activity.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: 'var(--font-size-xl)' }}>
                {activity.title}
              </h3>
              <p className="text-gray-600" style={{ fontSize: 'var(--font-size-md)' }}>
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-4xl)' }}>
          {contentData.services.additionalActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-4">{activity.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: 'var(--font-size-xl)' }}>
                {activity.title}
              </h3>
              <p className="text-gray-600" style={{ fontSize: 'var(--font-size-md)' }}>
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Image 
            src={contentData.services.images.servicesGroup}
            alt="Services at Ekaant"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          />
          <button 
            className="rounded-full text-white font-medium transition-all duration-300 hover:scale-105 transform" 
            style={{ 
              backgroundColor: '#003E17',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              fontSize: 'var(--font-size-md)'
            }}
          >
            {contentData.services.buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

// Location Section Component  
function LocationSection({ contentData }: { contentData: ContentData }) {
  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'road': return <Car className="w-6 h-6" />
      case 'train': return <Train className="w-6 h-6" />
      case 'air': return <Plane className="w-6 h-6" />
      default: return <MapPin className="w-6 h-6" />
    }
  }

  return (
    <section id="location" className="bg-white" style={{ padding: 'var(--spacing-4xl) 0' }}>
      <div className="responsive-container w-full" style={{ padding: '0 var(--spacing-lg)' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-4xl)' }}>
          <h2 className="font-bold text-black" style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            {contentData.location.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-4xl)' }}>
          {contentData.location.methods.map((method, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-green-600 mr-3">
                  {getTransportIcon(method.type)}
                </div>
                <h3 className="font-semibold text-gray-900" style={{ fontSize: 'var(--font-size-xl)' }}>
                  {method.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {method.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-600" style={{ fontSize: 'var(--font-size-md)' }}>
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: 'var(--font-size-xl)' }}>
            {contentData.location.coordinates.title}
          </h3>
          <p className="text-gray-600 mb-4" style={{ fontSize: 'var(--font-size-md)' }}>
            {contentData.location.coordinates.address}
          </p>
          <p className="text-gray-600" style={{ fontSize: 'var(--font-size-md)' }}>
            <strong>{contentData.location.gps.title}</strong> {contentData.location.gps.coordinates}
          </p>
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
function FAQSection({ contentData }: { contentData: ContentData }) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" className="bg-gray-50" style={{ padding: 'var(--spacing-4xl) 0' }}>
      <div className="responsive-container w-full" style={{ padding: '0 var(--spacing-lg)' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-4xl)' }}>
          <h2 className="font-bold text-gray-900" style={{ 
            fontSize: 'var(--font-size-3xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            {contentData.faq.title}
          </h2>
          <p className="text-gray-600" style={{ fontSize: 'var(--font-size-lg)' }}>
            {contentData.faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {contentData.faq.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden border border-green-600" style={{ borderColor: '#003E17' }}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-gray-900" style={{ fontSize: 'var(--font-size-lg)' }}>
                  {item.question}
                </span>
                <div className="text-green-600">
                  {openItems.has(index) ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'var(--font-size-md)' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer({ contentData }: { contentData: ContentData }) {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: '#003E17', padding: 'var(--spacing-4xl) 0 var(--spacing-lg) 0' }}>
      <div className="responsive-container w-full" style={{ padding: '0 var(--spacing-lg)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-4xl)' }}>
          
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-xl)' }}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-green-300" />
                <div>
                  <p className="font-medium" style={{ fontSize: 'var(--font-size-sm)' }}>
                    {contentData.footer.contact.phone.label}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-md)' }}>
                    {contentData.footer.contact.phone.number}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-green-300" />
                <div>
                  <p className="font-medium" style={{ fontSize: 'var(--font-size-sm)' }}>
                    {contentData.footer.contact.email.label}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-md)' }}>
                    {contentData.footer.contact.email.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-green-300" />
                <div>
                  <p className="font-medium" style={{ fontSize: 'var(--font-size-sm)' }}>
                    {contentData.footer.contact.address.label}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-md)' }}>
                    {contentData.footer.contact.address.details}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-xl)' }}>
              {contentData.footer.navigation.title}
            </h3>
            <ul className="space-y-2">
              {contentData.footer.navigation.items.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.link}`} 
                    className="hover:text-green-300 transition-colors"
                    style={{ fontSize: 'var(--font-size-md)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-xl)' }}>
              {contentData.footer.activities.title}
            </h3>
            <ul className="space-y-2">
              {contentData.footer.activities.items.map((activity, index) => (
                <li key={index} style={{ fontSize: 'var(--font-size-md)' }}>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-green-700 pt-6" style={{ gap: 'var(--spacing-lg)' }}>
          <div className="flex items-center" style={{ gap: 'var(--spacing-md)' }}>
            <span style={{ fontSize: 'var(--font-size-md)' }}>{contentData.footer.social.title}:</span>
            <div className="flex" style={{ gap: 'var(--spacing-sm)' }}>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex" style={{ gap: 'var(--spacing-sm)' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email for updates"
              className="px-4 py-2 rounded-lg bg-white/10 border border-green-700 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              style={{ fontSize: 'var(--font-size-md)' }}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-green-700">
          <p className="text-green-300" style={{ fontSize: 'var(--font-size-sm)' }}>
            {contentData.footer.copyright}
          </p>
          <div className="flex justify-center mt-2" style={{ gap: 'var(--spacing-md)' }}>
            {contentData.footer.legal.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-green-300 hover:text-white transition-colors"
                style={{ fontSize: 'var(--font-size-xs)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}