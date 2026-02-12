"use client"

import { BarChart3, LineChart, Rocket, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { trackEvent } from "@/lib/analytics"

const SERVICES = [
  {
    icon: BarChart3,
    title: "Revenue & Ops Automation",
    problem:
      "Manual workflows, fragmented tools, and bottlenecks that slow growth and burn team bandwidth.",
    approach:
      "We build custom AI pipelines that connect your data sources, automate repeatable processes, and surface actionable insights.",
    outcomes: [
      "Reduce manual ops overhead by 60-80%",
      "Unify fragmented data across platforms",
      "Automate lead scoring, outreach sequencing, and reporting",
      "Free your team to focus on high-leverage work",
    ],
    id: "revenue-ops",
  },
  {
    icon: LineChart,
    title: "Crypto & Market Research Tooling",
    problem:
      "Information overload, slow research cycles, and missed signals in fast-moving crypto and financial markets.",
    approach:
      "We build research infrastructure that aggregates, filters, and analyzes market data in real-time, so you act on signal, not noise.",
    outcomes: [
      "Improve research throughput with AI-curated feeds",
      "Monitor on-chain and off-chain data automatically",
      "Generate structured market briefs on demand",
      "Accelerate decision-making with custom dashboards",
    ],
    id: "crypto-research",
  },
  {
    icon: Rocket,
    title: "Rapid MVP & Bounty Builds",
    problem:
      "Slow development cycles, unclear scoping, and difficulty turning ideas into working products quickly.",
    approach:
      "We scope, design, and ship functional MVPs in compressed timelines, built for iteration and real user feedback.",
    outcomes: [
      "Go from idea to working prototype in 1-2 weeks",
      "Ship with clean architecture ready for scale",
      "Get a deployable product, not just a mockup",
      "Win bounties with polished, functional submissions",
    ],
    id: "mvp-builds",
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
          Three Pillars of AI-Powered Delivery
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          Each engagement is scoped to a specific problem and delivered as a
          production-ready system with clear documentation.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-colors duration-200 hover:border-primary/30"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <service.icon className="h-6 w-6 text-primary" />
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
              href="mailto:techgeniexyz@gmail.com"
              onClick={() =>
                trackEvent("service_interest_click", { service: service.id })
              }
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Discuss This Service
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
