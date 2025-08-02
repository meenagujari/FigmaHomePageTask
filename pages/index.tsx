import Head from 'next/head'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import LocationSection from '@/components/LocationSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ekaant - Agro Tourism Retreat | Near Bor Tiger Reserve, Maharashtra</title>
        <meta name="description" content="Experience authentic rural life at Ekaant agro tourism retreat near Bor Tiger Reserve, Maharashtra. Enjoy organic farming, wildlife photography, and digital detox in pristine nature." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ekaant - Agro Tourism Retreat" />
        <meta property="og:description" content="Experience authentic rural life amidst pristine nature and wildlife near Bor Tiger Reserve, Maharashtra." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LocationSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  )
}