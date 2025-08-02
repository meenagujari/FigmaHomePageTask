
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

interface FooterSectionProps {
  contentData: ContentData
}

export default function FooterSection({ contentData }: FooterSectionProps) {
  return (
    <footer id="footer" className="text-white" style={{ backgroundColor: '#003E17', width: '100%' }}>
      <div className="responsive-container w-full" style={{ 
        padding: 'clamp(3rem, 5vw, 6rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Side - Main Heading */}
          <div className="text-left">
            <h2 className="text-white font-semibold responsive-text-xl" style={{ 
              letterSpacing: '0.05em',
              lineHeight: '1.4',
              fontFamily: 'Poppins, sans-serif'
            }}>
              We'd love to help you<br />
              plan your peaceful<br />
              escape.
            </h2>
          </div>
          
          {/* Right Side - Contact Information */}
          <div className="text-left md:text-right mt-6 md:mt-0">
            <div className="space-y-2">
              <p className="text-white responsive-text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {contentData.footer.contact.phone}
              </p>
              <p className="text-white responsive-text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {contentData.footer.contact.email}
              </p>
              <p className="text-white responsive-text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {contentData.footer.contact.instagram}
              </p>
              <p className="text-white responsive-text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {contentData.footer.contact.location}
              </p>
              <p className="text-white responsive-text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {contentData.footer.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
