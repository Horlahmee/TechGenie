"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper } from "@/components/section-wrapper"
import { trackEvent } from "@/lib/analytics"

const FAQS = [
  {
    id: "pricing",
    question: "How does pricing work?",
    answer:
      "We scope every engagement individually based on complexity, timeline, and deliverables. Most projects are quoted as fixed-price milestones after a discovery call. This gives you cost certainty and avoids open-ended billing. For ongoing work, we offer monthly retainers.",
  },
  {
    id: "timeline",
    question: "What are typical timelines?",
    answer:
      "Most projects are delivered in 1-3 weeks depending on scope. MVPs and bounty builds often ship in 5-10 days. Revenue automation systems typically take 2-3 weeks for a fully production-ready deployment. We always provide a clear timeline before starting.",
  },
  {
    id: "collaboration",
    question: "How do you collaborate with clients?",
    answer:
      "We use asynchronous communication (email or Slack) supplemented by weekly sync calls. You get a shared project brief, milestone tracking, and access to working demos throughout the build. We move fast but keep you in the loop at every step.",
  },
  {
    id: "data-privacy",
    question: "How do you handle data and privacy?",
    answer:
      "We take data security seriously. All client data is handled with strict access controls. We sign NDAs when requested, never share or reuse proprietary data, and build systems with security best practices including encryption, access management, and audit logging.",
  },
  {
    id: "support",
    question: "What happens after delivery?",
    answer:
      "Every project includes full documentation and a structured handoff session. We provide a 2-week support window post-delivery for bug fixes and clarifications. For ongoing needs, we offer maintenance retainers to keep your systems optimized and updated.",
  },
  {
    id: "tech-stack",
    question: "What technologies do you work with?",
    answer:
      "We work across the modern stack: Python, TypeScript/JavaScript, Next.js, Node.js, and major AI/ML frameworks. For data, we use PostgreSQL, Redis, and various APIs. We choose the right tools for each project rather than forcing a single stack.",
  },
]

export function FAQAccordion() {
  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          FAQ
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Common Questions
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          Straightforward answers to the things clients ask most.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger
                onClick={() =>
                  trackEvent("faq_expand", { question_id: faq.id })
                }
                className="font-sans text-base font-semibold text-card-foreground hover:no-underline py-5 [&[data-state=open]>svg]:text-primary"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
