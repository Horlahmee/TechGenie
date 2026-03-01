import { HeartPulse, Truck, Building2 } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { EmailCTA } from "@/components/email-cta"

const AUDIENCES = [
  {
    icon: HeartPulse,
    title: "Healthcare Specialist Services",
    tagline: "Clinics, dental practices, and outpatient teams",
    bullets: [
      "Automate patient intake, triage, and follow-up workflows",
      "Improve scheduling, reminders, and no-show prevention",
      "Support claims and revenue-cycle task routing",
      "Reduce admin load while improving service consistency",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Delivery Operators",
    tagline: "Fleet, transport, and fulfillment teams",
    bullets: [
      "Automate dispatch support and exception handling",
      "Improve proof-of-delivery and claims processing flows",
      "Route escalations faster with cleaner accountability",
      "Track operational bottlenecks through KPI summaries",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate Agencies",
    tagline: "Sales, leasing, and property operations",
    bullets: [
      "Automate lead qualification and follow-up cadence",
      "Coordinate viewings and listing operations faster",
      "Improve leasing operations and tenant communication",
      "Reduce manual admin leakage across the deal cycle",
    ],
  },
]

export function AudienceSection() {
  return (
    <SectionWrapper id="audience" className="bg-card/50">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          Priority Verticals
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Built for Teams With Repetitive Operational Work
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          We currently focus on verticals where agent systems can quickly improve response speed,
          workflow consistency, and measurable operational outcomes.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {AUDIENCES.map((audience) => (
          <div
            key={audience.title}
            className="tg-card p-8"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <audience.icon className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>

            <h3 className="font-sans text-xl font-bold text-card-foreground">
              {audience.title}
            </h3>
            <p className="mt-1 font-body text-sm font-medium text-accent">
              {audience.tagline}
            </p>

            <ul className="mt-5 space-y-2.5">
              {audience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <EmailCTA
                location={`vertical-${audience.title.toLowerCase().replace(/\s+/g, "-")}`}
                size="default"
                variant="outline"
              >
                Discuss Use Case
              </EmailCTA>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
