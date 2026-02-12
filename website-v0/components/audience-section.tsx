import { Building2, TrendingUp, Users } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { EmailCTA } from "@/components/email-cta"

const AUDIENCES = [
  {
    icon: Building2,
    title: "SMB Operators",
    tagline: "Efficiency and predictable growth",
    bullets: [
      "Automate repetitive revenue and ops workflows",
      "Unify data across CRM, analytics, and communication tools",
      "Get clear dashboards without hiring a data team",
      "Scale operations without scaling headcount",
    ],
  },
  {
    icon: TrendingUp,
    title: "Crypto Builders & Traders",
    tagline: "Better research, faster execution",
    bullets: [
      "Build custom monitoring for on-chain and market data",
      "Automate research synthesis from multiple sources",
      "Ship trading tools and dashboards quickly",
      "Stay ahead of market signals with real-time alerts",
    ],
  },
  {
    icon: Users,
    title: "Founders & Hackathon Teams",
    tagline: "Rapid MVP delivery and technical leverage",
    bullets: [
      "Turn your idea into a working product in days",
      "Ship polished bounty submissions with clean code",
      "Get architectural guidance and implementation in one package",
      "Launch with confidence using production-ready systems",
    ],
  },
]

export function AudienceSection() {
  return (
    <SectionWrapper id="audience" className="bg-card/50">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          Who We Serve
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Built for Builders Who Ship
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          Whether you run a business, trade markets, or build products, our
          systems are designed for people who value speed, precision, and results.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {AUDIENCES.map((audience) => (
          <div
            key={audience.title}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <audience.icon className="h-6 w-6 text-primary" />
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
                location={`audience-${audience.title.toLowerCase().replace(/\s+/g, "-")}`}
                size="default"
                variant="outline"
              >
                Start a Conversation
              </EmailCTA>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
