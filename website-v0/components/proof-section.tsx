import { Clock, Layers, GitBranch, CheckCircle2 } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const STATS = [
  {
    value: "1-2 Weeks",
    label: "Typical Delivery Cycle",
    description: "From scoping to functional deployment",
  },
  {
    value: "60-80%",
    label: "Ops Overhead Reduction",
    description: "Across automated workflow implementations",
  },
  {
    value: "3x Faster",
    label: "Research Throughput",
    description: "With AI-curated market analysis pipelines",
  },
  {
    value: "Production",
    label: "Grade Quality",
    description: "Every delivery is deploy-ready, not prototype-only",
  },
]

const TRUST_SIGNALS = [
  {
    icon: Clock,
    text: "Compressed delivery timelines without cutting corners on quality",
  },
  {
    icon: Layers,
    text: "Full-stack technical breadth across AI, data, and product engineering",
  },
  {
    icon: GitBranch,
    text: "Documented, version-controlled codebases with clean handoff",
  },
  {
    icon: CheckCircle2,
    text: "Structured process with weekly syncs and milestone-based deliverables",
  },
]

export function ProofSection() {
  return (
    <SectionWrapper id="proof" className="bg-card/50">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          Results
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Measurable Outcomes, Delivered
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          We focus on outcomes you can measure. Here are the performance
          benchmarks our systems are engineered to deliver.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <p className="font-sans text-3xl font-bold text-primary">
              {stat.value}
            </p>
            <p className="mt-1 font-sans text-sm font-semibold text-card-foreground">
              {stat.label}
            </p>
            <p className="mt-1 font-body text-xs text-muted-foreground">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Trust signals */}
      <div className="grid gap-4 sm:grid-cols-2">
        {TRUST_SIGNALS.map((signal) => (
          <div
            key={signal.text}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
          >
            <div className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
              <signal.icon className="h-4 w-4 text-accent" aria-hidden="true" />
            </div>
            <p className="font-body text-sm leading-relaxed text-card-foreground">
              {signal.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center font-body text-xs text-muted-foreground">
        Performance metrics are illustrative benchmarks based on typical
        engagement outcomes. Actual results vary by project scope and context.
      </p>
    </SectionWrapper>
  )
}
