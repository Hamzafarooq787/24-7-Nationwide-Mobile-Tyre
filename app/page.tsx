import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Coverage from '@/components/Coverage'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Header />
      {/* abe */}
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Coverage />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
