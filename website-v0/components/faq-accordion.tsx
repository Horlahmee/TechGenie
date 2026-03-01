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
      "We publish clear ranges by offer type, then finalize scope-based pricing after discovery. Typical ranges: QuickStart Sprint ($1,500-$3,500), Core Agent Ops Build ($4,000-$9,000), Managed Agent Stack ($800-$3,000/month), Vertical Systems ($3,500-$12,000), Advisory ($500-$2,500), and AI Usage Education/Training ($300-$2,000).",
  },
  {
    id: "timeline",
    question: "What are typical timelines?",
    answer:
      "Most initial agent implementations are delivered in focused sprints, typically 2-6 weeks depending on workflow complexity, integrations, and safety requirements. We define milestone timelines before build starts.",
  },
  {
    id: "collaboration",
    question: "How do you collaborate with clients?",
    answer:
      "We run a structured delivery flow: discovery, scope lock, build sprints, testing, and deployment. You get milestone visibility, working demos, and written documentation at handoff.",
  },
  {
    id: "data-privacy",
    question: "How do you handle data and privacy?",
    answer:
      "Client data remains client-owned. We follow least-access principles, scoped credentials, and documented change controls. Sensitive actions stay behind explicit human approvals with operational logging for traceability.",
  },
  {
    id: "support",
    question: "What happens after delivery?",
    answer:
      "Every build includes documentation and handoff support. Teams can continue with managed optimization retainers for tuning, monitoring, and iterative workflow improvements.",
  },
  {
    id: "tech-stack",
    question: "What tools and integrations do you support?",
    answer:
      "Typical integrations include Email/Google Workspace, Telegram, WhatsApp pathways, Slack, Notion, Airtable, HubSpot/Pipedrive/Zoho, Google Calendar/Calendly, webhooks, and custom APIs. Deployment can run on cloud platforms like Vercel or client-owned infrastructure.",
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
              className="tg-card px-6 data-[state=open]:border-primary/40"
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
