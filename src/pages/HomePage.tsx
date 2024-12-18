import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import ShowcaseSection from '../components/ShowcaseSection'
import TestimonialsSection from '../components/TestimonialsSection'
import HowItWorksSection from '../components/HowitWorksSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-200 text-stone-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

