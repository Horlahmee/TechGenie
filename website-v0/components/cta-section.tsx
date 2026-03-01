import { Mail, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { EmailCTA } from "@/components/email-cta"

export function CTASection() {
  return (
    <SectionWrapper id="contact" className="bg-card/50">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
          <Mail className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>

        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Ready to Design Your AI Agent Stack?
        </h2>

        <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
          Share your workflow bottleneck and target outcome. We’ll return a practical
          implementation plan with clear scope and timeline.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <EmailCTA location="final-cta" size="lg" className="tg-btn-primary">
            <Mail className="mr-2 h-4 w-4" />
            Book AI Agent Discovery
          </EmailCTA>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-secondary/60 px-6 py-3 font-body text-sm font-medium text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80"
          >
            Review Service Options
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <p className="mt-6 font-body text-sm text-muted-foreground">
          techgeniexyz@gmail.com — No forms, no friction. Just reply by email to start.
        </p>
      </div>
    </SectionWrapper>
  )
}
