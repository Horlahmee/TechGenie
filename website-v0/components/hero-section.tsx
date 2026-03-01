import { ArrowRight, Mail } from "lucide-react"
import { EmailCTA } from "@/components/email-cta"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(195 100% 50% / 0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative tg-grid-bg mx-auto max-w-[1200px] rounded-3xl border border-border/40 px-6 py-24 text-center md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/70 px-4 py-1.5 mb-8 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-body text-xs font-medium text-muted-foreground tracking-wide uppercase">
            Automated AI Agent Builder Agency
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-balance font-sans text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          We Build Automated <span className="text-primary">AI Agents</span>{" "}
          for <span className="text-primary">Revenue</span>,{" "}
          <span className="text-primary">Operations</span> &{" "}
          <span className="text-primary">Market</span> Execution
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
          TechGenie designs, ships, and manages production-grade AI agent
          systems for teams that need measurable outcomes in weeks, not
          quarters — autonomous where safe, human-approved where critical.
        </p>

        <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-accent">
          Automate the Grind, Scale the Outcome.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <EmailCTA location="hero" size="lg">
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            Email TechGenie
          </EmailCTA>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-body text-sm font-medium text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            See Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
