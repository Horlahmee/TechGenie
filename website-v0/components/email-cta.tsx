"use client"

import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

interface EmailCTAProps {
  location: string
  children: React.ReactNode
  size?: "default" | "lg"
  variant?: "primary" | "outline"
  className?: string
}

export function EmailCTA({
  location,
  children,
  size = "default",
  variant = "primary",
  className,
}: EmailCTAProps) {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=techgeniexyz@gmail.com&su=TechGenie%20project%20inquiry"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("cta_email_click", { location })}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80",
        size === "default" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-8 py-3.5 text-sm",
        className
      )}
    >
      {children}
    </a>
  )
}

