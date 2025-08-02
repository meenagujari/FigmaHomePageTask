
'use client'

import { useState } from 'react'

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

interface FAQSectionProps {
  contentData: ContentData
}

export default function FAQSection({ contentData }: FAQSectionProps) {
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
