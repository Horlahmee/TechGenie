import { Zap, Target, TrendingUp, Shield } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const VALUES = [
  {
    icon: Zap,
    title: "Speed to Value",
    description:
      "From scoping to delivery in days, not months. Our systems are built for rapid deployment with measurable impact from week one.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every system is purpose-built for your specific workflow. No generic solutions, no unnecessary complexity, just the right fit.",
  },
  {
    icon: TrendingUp,
    title: "Automation ROI",
    description:
      "Reduce manual ops overhead by replacing repetitive tasks with intelligent automation that scales with your business.",
  },
  {
    icon: Shield,
    title: "Execution Reliability",
    description:
      "Production-grade systems with proper error handling, monitoring, and documentation. Built to run, not just demo.",
  },
]

export function ValueCards() {
  return (
    <SectionWrapper id="value">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          Why TechGenie
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Engineered for Outcomes, Not Outputs
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          We measure success by the business results our systems produce, not by lines of code or hours billed.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((item) => (
          <div
            key={item.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/30 hover:bg-card/80"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-sans text-lg font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
