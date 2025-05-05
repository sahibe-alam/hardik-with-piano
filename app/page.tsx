import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import InstrumentsSection from "@/components/instruments-section"
import WelcomeSection from "@/components/welcome-section"
import TestimonialsSection from "@/components/testimonials-section"
import YouTubeSection from "@/components/youtube-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import FaqSection from "@/components/faq-section"
import CtaBanner from "@/components/cta-banner"
import Footer from "@/components/footer"
import CertificationSection from "@/components/CertificationSection"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <InstrumentsSection />
        <WelcomeSection />
        <TestimonialsSection />
        <YouTubeSection />
        <WhyChooseUsSection />
        <CertificationSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
