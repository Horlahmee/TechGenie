import { ShieldCheck, Lock, UserCheck, FileText } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const COMMITMENTS = [
  {
    icon: Lock,
    title: "Client Data Stays Client-Owned",
    text: "We operate on least-access principles and treat all non-public client information as confidential.",
  },
  {
    icon: ShieldCheck,
    title: "Secure-by-Default Delivery",
    text: "Scoped credentials, role-based access, change controls, and rollback paths are standard in implementation.",
  },
  {
    icon: UserCheck,
    title: "Human Approval for Sensitive Actions",
    text: "Publishing, spending, destructive changes, and high-risk actions require explicit human approval before execution.",
  },
  {
    icon: FileText,
    title: "Operational Logs and Auditability",
    text: "We keep traceable action logs for approvals, key decisions, and exceptions to support accountability.",
  },
]

export function TrustSafetySection() {
  return (
    <SectionWrapper id="trust-safety">
      <div className="text-center mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-wider text-primary mb-3">
          Trust, Safety & Data Handling
        </p>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Safe Autonomy, Built Into Delivery
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-muted-foreground leading-relaxed">
          TechGenie builds agent systems for real workflows. Safety, privacy, and approval control are part of the core architecture.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {COMMITMENTS.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <p className="font-sans text-lg font-semibold text-card-foreground">{item.title}</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
