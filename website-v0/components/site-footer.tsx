"use client"

import { trackEvent } from "@/lib/analytics"

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#proof" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-sans text-lg font-bold text-foreground">
              TechGenie
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              AI systems for revenue, operations, and markets — engineered for clear, measurable outcomes.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Email CTA */}
          <div>
            <a
              href="mailto:techgeniexyz@gmail.com"
              onClick={() =>
                trackEvent("cta_email_click", { location: "footer" })
              }
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Email TechGenie
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-body text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} TechGenie. All rights reserved.`}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with precision. Delivered with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
