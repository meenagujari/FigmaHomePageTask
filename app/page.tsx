'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Mail, Phone, MapPin, Send, Facebook, Instagram, Car, Train, Plane, Plus, Minus, ChevronUp, ChevronDown } from 'lucide-react'

// Content data (same as before)
const contentData = {
  "site": {
    "name": "EKAANT",
    "tagline": "NESTLED IN NATURE"
  },
  "hero": {
    "title": "WELCOME TO EKAANT—AGRO TOURISM RETREAT NEAR BOR TIGER RESERVE, MAHARASHTRA",
    "subtitle": "Experience authentic rural life amidst pristine nature and wildlife",
    "buttonText": "Discover More"
  },
  "about": {
    "title": "Ekaant (एकांत)",
    "description": [
      "Ekaant meaning solitude in Sanskrit — was born from a simple yet powerful vision: to create a space where people could escape the chaos of everyday life and experience true peace in the lap of nature.",
      "Our retreat is designed around the principles of sustainable living, mindful travel, and authentic rural experiences. At Ekaant, you'll find no loud music, no distractions — only nature's rhythm, traditional hospitality, and the gentle hum of wildlife.",
      "Whether you're a solo traveller looking for quiet, a couple seeking a soulful escape, or a family wanting to introduce your children to the joys of rural India — Ekaant welcomes you with open arms and a calm heart."
    ],
    "buttonText": "Book Now"
  },
  "services": {
    "title": "WHAT WE OFFER",
    "subtitle": "Immerse yourself in authentic rural experiences and nature activities",
    "buttonText": "Book Your Stay",
    "items": [
      {
        "title": "Bullock Cart Ride",
        "description": "Traditional farming experience with authentic rural transportation"
      },
      {
        "title": "Organic Farming Activities",
        "description": "Learn sustainable farming practices and connect with nature"
      },
      {
        "title": "Forest & Bird Photography",
        "description": "Capture the beauty of wildlife near Bor Tiger Reserve"
      },
      {
        "title": "Stargazing Nights",
        "description": "Experience the magic of clear rural skies away from city lights"
      },
      {
        "title": "Bonfire Evenings",
        "description": "Gather around the fire for stories and traditional music"
      },
      {
        "title": "Digital Detox & Wellness",
        "description": "Reconnect with yourself through yoga and meditation"
      }
    ]
  },
  "location": {
    "title": "HOW TO REACH EKAANT",
    "methods": [
      {
        "type": "road",
        "title": "By Road",
        "details": [
          "80 KM From Nagpur",
          "Via Wardha",
          "Well Connected Via NH-7 And Local State Roads",
          "Ample Parking Available At The Property"
        ]
      },
      {
        "type": "train",
        "title": "By Train",
        "details": [
          "Nearest Railway Junction: Sevagram (20 Km), Wardha (25 Km)",
          "Taxi And Local Autos Available From Stations"
        ]
      },
      {
        "type": "air",
        "title": "By Air",
        "details": [
          "Nearest Airport: Nagpur, For Betul/Seoni Ambassador",
          "International Airport (approx. 80 Km)",
          "Car Rentals For Private Tours Available"
        ]
      }
    ],
    "coordinates": {
      "title": "Ekaant Location",
      "address": "Near Bor Tiger Reserve\nMaharashtra, India"
    },
    "gps": {
      "title": "GPS Coordinates:",
      "coordinates": "21.0000° N, 78.0000° E"
    }
  },
  "faq": {
    "title": "FREQUENTLY ASKED QUESTIONS (FAQS)",
    "subtitle": "Find answers to common questions about your stay at Ekaant",
    "items": [
      {
        "question": "Is The Resort Child Friendly?",
        "answer": "Yes, Ekaant is completely child-friendly with safe outdoor spaces, nature activities, and family accommodations designed for all ages."
      },
      {
        "question": "Is There Mobile Networks Or Internet?",
        "answer": "We offer limited WiFi in common areas for essential needs, encouraging a digital detox experience. Mobile network coverage varies by provider."
      },
      {
        "question": "Can We Bring Pets Or Animals Here?",
        "answer": "Pets are welcome with prior notification. We request keeping them leashed in common areas and ensuring they don't disturb the natural wildlife habitat."
      },
      {
        "question": "Do You Allow Pets?",
        "answer": "Yes, we allow well-behaved pets. Please inform us during booking and ensure your pet is comfortable in a rural environment with local wildlife."
      },
      {
        "question": "What Is The Best Time To Visit?",
        "answer": "October to March offers the most pleasant weather. Monsoon season (June-September) provides lush greenery, while April-May offers unique summer wildlife experiences."
      }
    ]
  },
  "footer": {
    "contact": {
      "title": "WE'D LOVE TO HELP YOU PLAN YOUR PEACEFUL ESCAPE",
      "email": {
        "label": "EMAIL US FOR ANY INFORMATION",
        "address": "info@ekaant.com"
      },
      "phone": {
        "label": "CONTACT US FOR BOOKINGS",
        "number": "+91 98765 43210"
      },
      "address": {
        "label": "VISIT US AT",
        "details": "NEAR BOR TIGER RESERVE\nWARDHA, MAHARASHTRA"
      }
    },
    "quickLinks": {
      "title": "Quick Links",
      "items": [
        { "label": "Home", "link": "home" },
        { "label": "Amenities", "link": "amenities" },
        { "label": "Photo Gallery", "link": "gallery" },
        { "label": "Contact Us", "link": "contact" }
      ]
    },
    "activities": {
      "title": "Activities",
      "items": [
        "Organic Farming",
        "Wildlife Photography",
        "Stargazing",
        "Bonfire Evenings",
        "Digital Detox"
      ]
    },
    "social": {
      "title": "Stay Connected"
    },
    "newsletter": {
      "title": "Subscribe for updates"
    },
    "copyright": "© 2024 Ekaant Agro Tourism Retreat. All rights reserved.",
    "legal": [
      "Privacy Policy",
      "Terms of Service",
      "Cancellation Policy"
    ]
  }
}

// Header Component
function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white w-full fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ paddingTop: 'var(--spacing-sm)', paddingBottom: 'var(--spacing-sm)' }}>
      <div className="responsive-container flex items-center justify-between" style={{ paddingLeft: 'var(--spacing-sm)', paddingRight: 'var(--spacing-sm)' }}>
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Ekaant Logo" 
            width={120}
            height={36}
            style={{ height: 'calc(2.5rem + 1vw)', width: 'auto' }}
          />
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center" style={{ gap: 'calc(1.2rem + 0.8vw)' }}>
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
          <div className="flex flex-wrap justify-end" style={{ gap: 'calc(0.6rem + 0.4vw)' }}>
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
function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative flex items-center justify-start overflow-hidden" style={{ minHeight: '100vh', maxHeight: '1750px', height: 'calc(100vh + 20vw)', paddingTop: 'calc(var(--spacing-3xl) + var(--spacing-md))' }}>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/landscape.jpg')`
      }} />
      
      <div className="relative z-10 text-left text-white responsive-container w-full" style={{ padding: 'var(--spacing-lg)' }}>
        <div style={{ maxWidth: 'calc(60% + 10vw)', marginTop: 'var(--spacing-xl)' }}>
          <h1 className="font-bold leading-tight tracking-wide responsive-text-6xl" style={{ marginBottom: 'var(--spacing-lg)' }}>
            {contentData.hero.title}
          </h1>
          <p className="font-light leading-relaxed opacity-95 responsive-text-xl" style={{ marginBottom: 'var(--spacing-xl)' }}>
            {contentData.hero.subtitle}
          </p>
          <button 
            onClick={scrollToAbout} 
            className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl responsive-text-lg"
            style={{ 
              padding: 'var(--spacing-sm) var(--spacing-lg)'
            }}
          >
            {contentData.hero.buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

// About Section Component
function AboutSection() {
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
              className="bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg responsive-text-base"
              style={{ padding: 'var(--spacing-sm) var(--spacing-lg)' }}
            >
              {contentData.about.buttonText}
            </button>
          </div>
          
          <div className="relative" style={{ marginTop: 'var(--spacing-lg)' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="/nature-retreat.jpg"
                alt="Ekaant forest retreat setting" 
                width={800}
                height={500}
                className="w-full object-cover"
                style={{ height: 'calc(300px + 10vw)' }}
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
function ServicesSection() {
  // Define specific activities with corresponding background positions from the group image
  const featuredActivities = [
    {
      title: "Rural Farm Experience",
      description: "Traditional farming with authentic bullock cart rides and organic farming activities",
      backgroundPosition: "left center", // Left image - farm scene
      icon: "🚜"
    },
    {
      title: "Nature Activities",
      description: "Explore organic farming, connect with local wildlife and sustainable practices",
      backgroundPosition: "center center", // Middle image - people in nature
      icon: "🌱"
    },
    {
      title: "Wildlife Photography",
      description: "Capture forest wildlife and birds near Bor Tiger Reserve with expert guidance",
      backgroundPosition: "right center", // Right image - photography scene
      icon: "📸"
    }
  ]

  const additionalActivities = [
    {
      title: "Stargazing Nights",
      description: "Experience the magic of clear rural skies away from city lights",
      icon: "⭐"
    },
    {
      title: "Bonfire Evenings", 
      description: "Gather around the fire for stories and traditional music",
      icon: "🔥"
    },
    {
      title: "Digital Detox & Wellness",
      description: "Reconnect with yourself through yoga and meditation",
      icon: "🧘"
    }
  ]

  return (
    <section id="amenities" className="bg-gray-50" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
      <div className="responsive-container" style={{ padding: 'var(--spacing-lg)' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 className="font-bold text-green-700 responsive-text-5xl" style={{ marginBottom: 'var(--spacing-md)' }}>
            {contentData.services.title}
          </h2>
          <p className="text-gray-600 leading-relaxed responsive-text-xl" style={{ maxWidth: 'calc(60% + 10vw)', margin: '0 auto' }}>
            {contentData.services.subtitle}
          </p>
        </div>

        {/* Featured Activities with Background Images */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          {featuredActivities.map((activity, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105" style={{ height: '400px' }}>
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('/activities-group.png')`,
                  backgroundPosition: activity.backgroundPosition
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end" style={{ padding: 'var(--spacing-lg)' }}>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="font-bold text-white responsive-text-xl leading-tight" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  {activity.title}
                </h3>
                <p className="text-gray-200 leading-relaxed responsive-text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          {additionalActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
              <div style={{ padding: 'var(--spacing-lg)' }}>
                <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 responsive-text-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed responsive-text-base">
                    {activity.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl responsive-text-lg"
            style={{ padding: 'var(--spacing-md) var(--spacing-xl)' }}
          >
            {contentData.services.buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

// Location Section Component
function LocationSection() {
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
            className="font-bold text-green-600 responsive-text-4xl"
            style={{ 
              letterSpacing: '0.05em',
              lineHeight: '1.2'
            }}
          >
            HOW TO REACH<br />EKAANT
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: 'var(--spacing-2xl)' }}>
          {/* Left Side - Transportation Methods */}
          <div className="space-y-8">
            {/* By Road */}
            <div className="bg-white rounded-lg shadow-md" style={{ padding: 'var(--spacing-lg)' }}>
              <div className="flex items-start" style={{ gap: 'var(--spacing-md)' }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 responsive-text-lg" style={{ marginBottom: 'var(--spacing-xs)' }}>By Road</h3>
                  <ul className="text-gray-700 responsive-text-sm space-y-1">
                    <li>• 90 KM From Nagpur</li>
                    <li>• 45 KM From Wardha</li>
                    <li>• Well Connected Via NH-361 And Local Village Roads</li>
                    <li>• Ample Parking Available At The Property</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* By Train */}
            <div className="bg-white rounded-lg shadow-md" style={{ padding: 'var(--spacing-lg)' }}>
              <div className="flex items-start" style={{ gap: 'var(--spacing-md)' }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                      <path d="M5 15h14l-2-6H7l-2 6z" />
                      <path d="M3 15h18" />
                      <circle cx="6" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 responsive-text-lg" style={{ marginBottom: 'var(--spacing-xs)' }}>By Train</h3>
                  <ul className="text-gray-700 responsive-text-sm space-y-1">
                    <li>• Nearest Railway Junction: Sevni (30 Km); Wardha (45 Km)</li>
                    <li>• Nagpur Junction (90 Km)</li>
                    <li>• Taxi And Local Autos Available From Stations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* By Air */}
            <div className="bg-white rounded-lg shadow-md" style={{ padding: 'var(--spacing-lg)' }}>
              <div className="flex items-start" style={{ gap: 'var(--spacing-md)' }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 2-3.5 3.5L11 16l-8.2 1.8c-.5.1-.8.6-.8 1.1s.5 1 1.1.8L11 16l8.2-1.8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 responsive-text-lg" style={{ marginBottom: 'var(--spacing-xs)' }}>By Air</h3>
                  <ul className="text-gray-700 responsive-text-sm space-y-1">
                    <li>• Nearest Airport: Nagpur Dr. Babasaheb Ambedkar International Airport (Approx. 90 Km)</li>
                    <li>• Cab Services To Ekaant From Nagpur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map/Visual */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ minHeight: '500px' }}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/treehouse.jpg')`,
                filter: 'blur(1px)'
              }}
            />
            
            {/* Map Overlay */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full" style={{ padding: 'var(--spacing-lg)' }}>
              {/* Location Info Box */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl text-center" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                <h3 className="font-bold text-gray-900 responsive-text-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  EKAANT LOCATION
                </h3>
                <p className="text-gray-700 responsive-text-sm" style={{ marginBottom: 'var(--spacing-xs)' }}>
                  Near Bor Tiger Reserve
                </p>
                <p className="text-green-600 font-semibold responsive-text-sm">
                  Maharashtra, India
                </p>
              </div>

              {/* Animated Location Pin */}
              <div className="relative">
                <svg width="80" height="100" viewBox="0 0 80 100" className="animate-bounce">
                  <path 
                    d="M40 10 C25 10 15 20 15 35 C15 50 40 85 40 85 C40 85 65 50 65 35 C65 20 55 10 40 10 Z"
                    fill="#22c55e"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className="drop-shadow-2xl"
                  />
                  <circle cx="40" cy="35" r="12" fill="#ffffff" />
                  <path d="M40 28 L40 42 M33 35 L47 35" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                </svg>
                
                {/* Pulsing rings around pin */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 border-4 border-green-400 rounded-full animate-ping opacity-30"></div>
                  <div className="absolute top-2 left-2 w-12 h-12 border-4 border-green-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* Distance Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
                <div className="bg-green-600/90 text-white text-center rounded-lg" style={{ padding: 'var(--spacing-sm)' }}>
                  <div className="font-bold responsive-text-sm">90 KM</div>
                  <div className="text-xs opacity-90">From Nagpur</div>
                </div>
                <div className="bg-green-600/90 text-white text-center rounded-lg" style={{ padding: 'var(--spacing-sm)' }}>
                  <div className="font-bold responsive-text-sm">45 KM</div>
                  <div className="text-xs opacity-90">From Wardha</div>
                </div>
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
function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const questions = [
    "Q. Is The Ekaant Child-Friendly?",
    "Q. Is There Mobile Network Or Internet?", 
    "Q. Can We Spot Tigers Or Wildlife Here?",
    "Q. Is Food Included In The Stay?",
    "Q. Do You Allow Pets?",
    "Q. What Is The Best Time To Visit?"
  ]

  const answers = [
    "Yes, Ekaant is completely child-friendly. We provide safe accommodations and nature-based activities suitable for children of all ages.",
    "Limited mobile network is available. We provide WiFi in common areas to help you stay connected while enjoying your digital detox.",
    "Being near Bor Tiger Reserve, wildlife spotting opportunities are excellent. We organize guided safari tours for the best wildlife experience.",
    "Yes, all meals are included featuring fresh, organic local cuisine prepared with ingredients from our own farm and local sources.",
    "We welcome well-behaved pets with prior arrangement. Please inform us during booking to ensure proper accommodation.",
    "October to March offers the best weather. This period provides comfortable temperatures perfect for outdoor activities and wildlife spotting."
  ]

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
              FREQUENTLY ASKED QUESTIONS (FAQS)
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-lg)', maxWidth: '1200px', margin: '0 auto' }}>
          {questions.map((question, i) => {
            const isOpen = activeIndex === i
            return (
              <div key={i} className="bg-white rounded-3xl border overflow-hidden" style={{ borderColor: '#003E17' }}>
                <button 
                  onClick={() => handleClick(i)}
                  className="w-full p-6 text-left flex items-center justify-between"
                  type="button"
                >
                  <h3 className="responsive-text-lg font-medium text-gray-800">
                    {question}
                  </h3>
                  <div className="ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" style={{ color: '#003E17' }} />
                    ) : (
                      <ChevronDown className="w-5 h-5" style={{ color: '#003E17' }} />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="responsive-text-base text-gray-600" style={{ lineHeight: '1.6', paddingTop: '1rem' }}>
                      {answers[i]}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  const [email, setEmail] = useState('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubscribe = () => {
    if (email) {
      setEmail('')
    }
  }

  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: '#003E17', padding: 'var(--spacing-lg) 0' }}>
      <div className="responsive-container" style={{ paddingLeft: 'var(--spacing-lg)', paddingRight: 'var(--spacing-lg)' }}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ marginBottom: 'var(--spacing-lg)', gap: 'var(--spacing-xl)' }}>
          {/* Left side - Welcome message */}
          <div className="text-left">
            <p className="responsive-text-base" style={{ color: '#FFFFFF', lineHeight: '1.6' }}>
              WE'D LOVE TO HELP YOU<br />
              PLAN YOUR PEACEFUL<br />
              ESCAPE.
            </p>
          </div>
          
          {/* Right side - Contact information */}
          <div className="text-left lg:text-right">
            <p className="responsive-text-base" style={{ color: '#FFFFFF', lineHeight: '1.8' }}>
              Call/WhatsApp: +91 9988776655<br />
              Email: EKANT@NEAVE.TECH<br />
              Instagram: EKANT<br />
              Location: Near Bor Tiger Reserve,<br />
              Wardha, Maharashtra
            </p>
          </div>
        </div>


      </div>
    </footer>
  )
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
      <FAQSection />
      <Footer />
    </div>
  )
}