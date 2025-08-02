'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Mail, Phone, MapPin, Send, Facebook, Instagram, Car, Train, Plane, Plus, Minus } from 'lucide-react'

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
      "Experience the serenity of nature where deer from a nearby forest come to graze in the evenings. A Special Place Popular Cricket Escape The Crowd Of Everyday Life And Experience The Fragrance That Remains In The Lap Of Nature.",
      "Whether you're A Solo Traveller Looking For Quiet, A Couple Seeking A Rustic Escape, Or A Group Looking For Rural Activities — Ekaant Welcomes You With Open Arms And A Generous Portion.",
      "For Organic Farming. As An Organic You'll Find Like Local Music, Air, Surroundings, Sky Gazing Mountains, Scenery, Rivers, Streams — Free Amenities, Stunning Rural Hospitality — Ekaant Welcomes You With Open Arms And A Generous Portion Of Rural Experience."
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Ekaant Logo" 
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-green-700 transition-colors font-medium text-sm uppercase tracking-wider">
              HOME
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-600 hover:text-green-700 transition-colors font-medium text-sm uppercase tracking-wider">
              AMENITIES
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-green-700 transition-colors font-medium text-sm uppercase tracking-wider">
              PHOTO GALLERY
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-700 transition-colors font-medium text-sm uppercase tracking-wider">
              CONTACT US
            </button>
          </div>

          <button className="lg:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-green-700 transition-colors font-medium">HOME</button>
              <button onClick={() => scrollToSection('amenities')} className="text-left text-gray-700 hover:text-green-700 transition-colors font-medium">AMENITIES</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-green-700 transition-colors font-medium">PHOTO GALLERY</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-green-700 transition-colors font-medium">CONTACT US</button>
            </div>
          </div>
        )}
      </nav>
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
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/treehouse.jpg')`
      }} />
      
      <div className="relative z-10 text-left text-white px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mt-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-wide">
            {contentData.hero.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 font-light leading-relaxed opacity-95">
            {contentData.hero.subtitle}
          </p>
          <button onClick={scrollToAbout} className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-8 leading-tight">
              {contentData.about.title}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              {contentData.about.description.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {contentData.about.buttonText}
            </button>
          </div>
          
          <div className="relative lg:mt-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="/nature-retreat.jpg"
                alt="Ekaant forest retreat setting" 
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
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
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
            {contentData.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {contentData.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentData.services.items.map((service, index) => (
            <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div className="w-full h-52 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-green-700 text-4xl">🌿</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            {contentData.services.buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

// Location Section Component
function LocationSection() {
  const getIcon = (method: string) => {
    switch (method) {
      case 'road': return <Car className="text-white text-lg" />
      case 'train': return <Train className="text-white text-lg" />
      case 'air': return <Plane className="text-white text-lg" />
      default: return <MapPin className="text-white text-lg" />
    }
  }

  const getIconBg = (index: number) => {
    const colors = ['bg-green-700', 'bg-green-600', 'bg-yellow-500']
    return colors[index % colors.length]
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-12 leading-tight">
              {contentData.location.title}
            </h2>
            
            <div className="space-y-10">
              {contentData.location.methods.map((method, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-14 h-14 ${getIconBg(index)} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {getIcon(method.type)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <div className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-lg leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:mt-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden shadow-xl">
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="text-white text-3xl" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{contentData.location.coordinates.title}</h4>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{contentData.location.coordinates.address}</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">{contentData.location.gps.title}</p>
              <p className="text-gray-900 font-mono text-lg">{contentData.location.gps.coordinates}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number>(-1)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
            {contentData.faq.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {contentData.faq.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {contentData.faq.items.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl mb-6 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <button 
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="text-green-700 w-6 h-6 transform transition-transform duration-200" />
                    ) : (
                      <Plus className="text-green-700 w-6 h-6 transform transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6 text-gray-700 text-lg leading-relaxed border-t border-gray-100 pt-4">
                  <p>{item.answer}</p>
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
    <footer id="contact" className="bg-green-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 leading-tight">{contentData.footer.contact.title}</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-yellow-400 mt-1.5 w-5 h-5" />
                <div>
                  <p className="font-semibold text-lg mb-1">{contentData.footer.contact.email.label}</p>
                  <a href={`mailto:${contentData.footer.contact.email.address}`} className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg">
                    {contentData.footer.contact.email.address}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-yellow-400 mt-1.5 w-5 h-5" />
                <div>
                  <p className="font-semibold text-lg mb-1">{contentData.footer.contact.phone.label}</p>
                  <a href={`tel:${contentData.footer.contact.phone.number}`} className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg">
                    {contentData.footer.contact.phone.number}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-yellow-400 mt-1.5 w-5 h-5" />
                <div>
                  <p className="font-semibold text-lg mb-1">{contentData.footer.contact.address.label}</p>
                  <p className="text-gray-300 text-lg whitespace-pre-line">{contentData.footer.contact.address.details}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{contentData.footer.quickLinks.title}</h4>
            <ul className="space-y-3">
              {contentData.footer.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(item.link)} className="text-gray-300 hover:text-yellow-400 transition-colors text-lg">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{contentData.footer.activities.title}</h4>
            <ul className="space-y-3">
              {contentData.footer.activities.items.map((activity, index) => (
                <li key={index} className="text-gray-300 text-lg">{activity}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4">{contentData.footer.social.title}</h5>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg">
                  <Facebook className="text-white" size={18} />
                </a>
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg">
                  <Instagram className="text-white" size={18} />
                </a>
              </div>
              <div>
                <p className="text-gray-300 mb-3 font-medium">{contentData.footer.newsletter.title}</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button onClick={handleSubscribe} className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-6 py-3 rounded-r-lg font-semibold transition-colors shadow-lg">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg mb-6 md:mb-0">
              {contentData.footer.copyright}
            </p>
            <div className="flex space-x-8 text-lg">
              {contentData.footer.legal.map((item, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen">
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