"use client"

import { BarChart3, Building2, GraduationCap, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { trackEvent } from "@/lib/analytics"

const SERVICES = [
  {
    icon: BarChart3,
    title: "Revenue & Ops Agent Systems",
    problem:
      "Manual workflows, fragmented tools, and bottlenecks that slow growth and burn team bandwidth.",
    approach:
      "We build role-based AI agent systems that connect your data sources, automate repeatable workflows, and surface actionable insights.",
    outcomes: [
      "Reduce manual ops overhead with measurable workflow improvements",
      "Unify fragmented data across platforms",
      "Automate lead scoring, follow-up sequencing, and reporting",
      "Free your team to focus on high-leverage work",
    ],
    id: "revenue-ops",
  },
  {
    icon: Building2,
    title: "Vertical Agent Systems",
    problem:
      "High-repetition operational work in healthcare, logistics, and real estate creates avoidable delays and service inconsistency.",
    approach:
      "We design niche-specific agent workflows for intake, scheduling, follow-up, exception handling, and KPI reporting.",
    outcomes: [
      "Faster response and coordination cycles",
      "Lower operational leakage across core workflows",
      "Improved process consistency across teams",
      "Clearer execution visibility through KPI summaries",
    ],
    id: "vertical-systems",
  },
  {
    icon: GraduationCap,
    title: "AI Usage Education & Agent Adoption Training",
    problem:
      "Teams adopt AI tools without clear standards, causing inconsistent output quality and workflow misuse.",
    approach:
      "We train teams and individuals on practical prompting, safe AI use, and day-to-day operation of agent systems.",
    outcomes: [
      "Faster AI adoption with practical operating habits",
      "Higher output quality and decision consistency",
      "Reduced misuse and operational confusion",
      "Internal capability to run and improve agent workflows",
    ],
    id: "ai-training",
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          What We Build
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Three Pillars of AI Agent Delivery
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          Each engagement is scoped to a specific workflow problem and delivered as a
          production-ready system with clear documentation and governance controls.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group tg-card flex flex-col p-8 transition-colors duration-200 hover:border-primary/40"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>

            <h3 className="font-sans text-xl font-bold text-card-foreground">
              {service.title}
            </h3>

            <div className="mt-4 space-y-4 flex-1">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  The Problem
                </p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {service.problem}
                </p>
              </div>

              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Our Approach
                </p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {service.approach}
                </p>
              </div>

              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Expected Outcomes
                </p>
                <ul className="space-y-1.5">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 font-body text-sm text-card-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=techgeniexyz@gmail.com&su=TechGenie%20project%20inquiry"
              onClick={() =>
                trackEvent("service_interest_click", { service: service.id })
              }
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Design My Agent Stack
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
