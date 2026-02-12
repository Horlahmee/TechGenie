"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#proof" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a href="#" className="text-xl font-sans font-bold tracking-tight text-foreground">
          TechGenie
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:techgeniexyz@gmail.com"
          onClick={() => trackEvent("cta_email_click", { location: "navbar" })}
          className="hidden rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
        >
          Get in Touch
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-body text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="mailto:techgeniexyz@gmail.com"
                onClick={() => {
                  trackEvent("cta_email_click", { location: "navbar_mobile" })
                  setMobileOpen(false)
                }}
                className="block rounded-lg bg-primary px-5 py-2.5 text-center font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
