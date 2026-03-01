import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ValueCards } from "@/components/value-cards"
import { ServicesGrid } from "@/components/services-grid"
import { ProofSection } from "@/components/proof-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { AudienceSection } from "@/components/audience-section"
import { FAQAccordion } from "@/components/faq-accordion"
import { TrustSafetySection } from "@/components/trust-safety-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker"

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ValueCards />
        <ServicesGrid />
        <ProofSection />
        <ProcessTimeline />
        <AudienceSection />
        <TrustSafetySection />
        <FAQAccordion />
        <CTASection />
      </main>
      <SiteFooter />
      <ScrollDepthTracker />
    </>
  )
}
