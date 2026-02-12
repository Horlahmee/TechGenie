"use client"

import { useEffect, useRef } from "react"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  trackSection?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  trackSection = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!trackSection) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("section_view", { section: id })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [id, trackSection])

  return (
    <section
      ref={ref}
      id={id}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  )
}
