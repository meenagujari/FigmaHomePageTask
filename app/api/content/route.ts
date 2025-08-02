import { NextResponse } from 'next/server'

// Dynamic content data structure
const contentData = {
  "site": {
    "name": "EKAANT",
    "tagline": "NESTLED IN NATURE"
  },
  "hero": {
    "title": "Welcome to Ekaant—Agro Tourism Retreat Near Bor Tiger Reserve, Maharashtra",
    "subtitle": "Experience authentic rural life amidst pristine nature and wildlife",
    "backgroundImage": "/treehouse-landscape.jpg"
  },
  "about": {
    "title": "Ekaant (एकांत)",
    "description": [
      "Ekaant meaning solitude in Sanskrit — was born from a simple yet powerful vision: to create a space where people could escape the chaos of everyday life and experience true peace in the lap of nature.",
      "Our retreat is designed around the principles of sustainable living, mindful travel, and authentic rural experiences. At Ekaant, you'll find no loud music, no distractions — only nature's rhythm, traditional hospitality, and the gentle hum of wildlife.",
      "Whether you're a solo traveller looking for quiet, a couple seeking a soulful escape, or a family wanting to introduce your children to the joys of rural India — Ekaant welcomes you with open arms and a calm heart."
    ],
    "buttonText": "Explore More",
    "image": "/nature-retreat.jpg"
  },
  "services": {
    "title": "WHAT WE OFFER",
    "subtitle": "",
    "buttonText": "Explore More",
    "featuredActivities": [
      {
        "title": "Rural Farm Experience",
        "description": "Experience authentic rural life and connect with nature",
        "backgroundPosition": "left center",
        "icon": "🚜"
      },
      {
        "title": "Nature Activities", 
        "description": "Explore organic farming, connect with local wildlife and sustainable practices",
        "backgroundPosition": "center center",
        "icon": "🌱"
      },
      {
        "title": "Wildlife Photography",
        "description": "Capture forest wildlife and birds near Bor Tiger Reserve with expert guidance",
        "backgroundPosition": "right center", 
        "icon": "📸"
      }
    ],
    "additionalActivities": [
      {
        "title": "Stargazing Nights",
        "description": "Experience the magic of clear rural skies away from city lights",
        "backgroundPosition": "left center",
        "icon": "⭐"
      },
      {
        "title": "Bonfire Evenings",
        "description": "Gather around the fire for stories and traditional music", 
        "backgroundPosition": "center center",
        "icon": "🔥"
      },
      {
        "title": "Digital Detox & Wellness",
        "description": "Reconnect with yourself through yoga and meditation",
        "backgroundPosition": "right center",
        "icon": "🧘"
      }
    ],
    "images": {
      "activitiesGroup": "/activities-group.png",
      "servicesGroup": "/group2-services.png"
    }
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
        "question": "Is The Ekaant Child-Friendly?",
        "answer": "Yes, Ekaant is completely child-friendly with safe outdoor spaces, nature activities, and family accommodations designed for all ages."
      },
      {
        "question": "Is There Mobile Network Or Internet?",
        "answer": "We offer limited WiFi in common areas for essential needs, encouraging a digital detox experience. Mobile network coverage varies by provider."
      },
      {
        "question": "Can We Spot Tigers Or Wildlife Here?",
        "answer": "While we're near Bor Tiger Reserve, wildlife sightings depend on nature's schedule. We offer guided nature walks and photography sessions to maximize your chances of spotting local fauna."
      },
      {
        "question": "Is Food Included In The Stay?",
        "answer": "Yes, we provide authentic homestyle meals prepared with organic ingredients from our farm. Traditional Maharashtrian cuisine is served with vegetarian and non-vegetarian options available."
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
    "heading": "We'd love to help you plan your peaceful escape.",
    "contact": {
      "phone": "Call/WhatsApp: +91 9988776655",
      "email": "Email: EKANT@NEAVE.TECH",
      "instagram": "Instagram: EKANT",
      "location": "Location: Near Bor Tiger Reserve, Wardha, Maharashtra"
    },
    "navigation": {
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

export async function GET() {
  try {
    return NextResponse.json(contentData)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch content data' },
      { status: 500 }
    )
  }
}