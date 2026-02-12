import { Search, PenTool, Code2, RefreshCw } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    description:
      "We start with a focused discovery session to understand your current workflows, pain points, and target outcomes. No fluff, just the right questions.",
    detail: "Typically 1-2 calls. You get a written scope document within 48 hours.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We map the system architecture, define data flows, and spec the deliverables. You review and approve before any code is written.",
    detail: "Clear milestones, agreed timelines, and a shared project brief.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description:
      "We build in focused sprints with weekly check-ins. You see working progress, not status updates. Every milestone is demo-ready.",
    detail: "Version-controlled code. Documented decisions. No surprises.",
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Iterate",
    description:
      "After deployment, we run a feedback cycle to refine and optimize. The system is handed off with full documentation and support runway.",
    detail: "Clean handoff with onboarding. Optional maintenance retainer.",
  },
]

export function ProcessTimeline() {
  return (
    <SectionWrapper id="process">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          How We Work
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          A Clear Process, Every Time
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          No ambiguity. No scope creep. Just a structured, transparent process
          from first call to final handoff.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <div key={step.step} className="relative flex flex-col">
            {/* Connector line (hidden on last item and mobile) */}
            {index < STEPS.length - 1 && (
              <div
                className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4"
                aria-hidden="true"
              />
            )}

            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Step {step.step}
              </span>
            </div>

            <h3 className="font-sans text-xl font-bold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground flex-1">
              {step.description}
            </p>
            <p className="mt-3 font-body text-xs font-medium text-accent">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
