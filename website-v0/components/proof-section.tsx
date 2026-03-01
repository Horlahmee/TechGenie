import { Clock, Layers, GitBranch, CheckCircle2 } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const PRINCIPLES = [
  {
    icon: Clock,
    title: "Fast Time-to-Value",
    description:
      "Most projects start delivering visible process improvements within the first implementation sprint.",
  },
  {
    icon: Layers,
    title: "Workflow-First Engineering",
    description:
      "We map real operational bottlenecks first, then build agent systems around measurable business outcomes.",
  },
  {
    icon: GitBranch,
    title: "Documented Delivery",
    description:
      "Every build includes version-controlled implementation, handoff notes, and operating guidance.",
  },
  {
    icon: CheckCircle2,
    title: "Reliability by Design",
    description:
      "Approval gates, logs, and failure-path testing are built into delivery, not added as an afterthought.",
  },
]

const PROOF_PLACEHOLDERS = [
  "Case Study 01 (TBD): Healthcare intake + scheduling automation -> baseline vs after KPI impact",
  "Case Study 02 (TBD): Logistics exception-routing agent -> baseline vs after KPI impact",
  "Case Study 03 (TBD): Real estate lead qualification + follow-up -> baseline vs after KPI impact",
]

export function ProofSection() {
  return (
    <SectionWrapper id="proof" className="bg-card/50">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          Proof & Method
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Measurable Outcomes, Verified Through Delivery
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          We build around measurable KPIs and publish audited proof as client permissions allow.
          Until then, we share our delivery principles and baseline-vs-after methodology.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mb-16">
        {PRINCIPLES.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <p className="font-sans text-lg font-semibold text-card-foreground">
              {item.title}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="font-sans text-lg font-semibold text-card-foreground mb-3">
          Public Case Studies (Current Status)
        </p>
        <ul className="space-y-2">
          {PROOF_PLACEHOLDERS.map((item) => (
            <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
