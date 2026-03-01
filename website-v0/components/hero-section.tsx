import { ArrowRight, Mail, ShieldCheck, Gauge, Workflow } from "lucide-react"
import { EmailCTA } from "@/components/email-cta"

const HERO_CHIPS = [
  { icon: ShieldCheck, text: "Human approval gates" },
  { icon: Workflow, text: "Workflow-first architecture" },
  { icon: Gauge, text: "Measured business outcomes" },
]

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="tg-shell tg-glow tg-grid-bg p-8 md:p-12 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-secondary/50 px-4 py-1.5 mb-6 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-body text-xs font-medium text-muted-foreground tracking-wide uppercase">
                  Automated AI Agent Builder Agency
                </span>
              </div>

              <h1 className="max-w-3xl text-balance font-sans text-4xl font-bold leading-[1.04] tracking-tight md:text-[62px] lg:text-7xl">
                Build an <span className="tg-gradient-text">AI Agent Workforce</span> That Actually Runs Operations
              </h1>

              <p className="mt-6 max-w-2xl text-pretty font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                We design, ship, and manage production-grade agent systems for healthcare,
                logistics, and real estate teams — with clear accountability and human approval for sensitive actions.
              </p>

              <p className="mt-4 font-body text-sm text-accent">
                Automate the Grind, Scale the Outcome.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <EmailCTA location="hero" size="lg" className="tg-btn-primary">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Book AI Agent Discovery
                </EmailCTA>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-secondary/60 px-6 py-3 font-body text-sm font-medium text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  See How It Works
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-3 font-body text-xs text-muted-foreground">
                Typical first reply within 24 hours with scoped next steps.
              </p>
            </div>

            <div className="space-y-4">
              <div className="tg-card p-5">
                <p className="font-sans text-sm font-semibold text-foreground">Agent Ops Control Panel</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-background/40 p-3">
                    <p className="text-xs text-muted-foreground">Workflow Status</p>
                    <p className="mt-1 text-sm font-semibold text-primary">Active + Monitored</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-background/40 p-3">
                    <p className="text-xs text-muted-foreground">Approval Queue</p>
                    <p className="mt-1 text-sm font-semibold text-accent">Human-in-the-loop</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-background/40 p-3">
                    <p className="text-xs text-muted-foreground">Exception Routing</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">Escalation Ready</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-background/40 p-3">
                    <p className="text-xs text-muted-foreground">Audit Logs</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">Traceable Actions</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {HERO_CHIPS.map((chip) => (
                  <div key={chip.text} className="tg-card flex items-center gap-3 p-3">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                      <chip.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <p className="font-body text-sm text-card-foreground">{chip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
