"use client"

import { useEffect, useRef } from "react"
import { trackEvent } from "@/lib/analytics"

export function ScrollDepthTracker() {
  const firedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const pct = Math.round((window.scrollY / scrollHeight) * 100)

      const thresholds = [50, 75, 90] as const
      for (const t of thresholds) {
        if (pct >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t)
          trackEvent(`scroll_depth_${t}` as "scroll_depth_50" | "scroll_depth_75" | "scroll_depth_90")
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
