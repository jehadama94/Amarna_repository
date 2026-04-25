import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { PainPointsSection } from "@/components/sections/pain-points"
import { ServicesSection } from "@/components/sections/services"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ProcessSection } from "@/components/sections/process"
import { ConsultationFormSection } from "@/components/sections/consultation-form"
import { FAQSection } from "@/components/sections/faq"
import { FinalCTASection } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#consultation" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to consultation form
      </a>

      <Header />
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <PainPointsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <ConsultationFormSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      
      <Footer />
    </>
  )
}
