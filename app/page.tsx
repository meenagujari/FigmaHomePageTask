'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import LocationSection from '../components/LocationSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/FooterSection'

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

