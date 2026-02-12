type EventName =
  | "cta_email_click"
  | "section_view"
  | "service_interest_click"
  | "faq_expand"
  | "scroll_depth_50"
  | "scroll_depth_75"
  | "scroll_depth_90"

type EventProps = Record<string, string | number | boolean>

/**
 * Vendor-agnostic analytics event tracker.
 * Replace the body of this function with your analytics provider
 * (e.g., Google Analytics, Mixpanel, PostHog, Segment).
 */
export function trackEvent(name: EventName, props?: EventProps): void {
  if (typeof window === "undefined") return

  // Debug logging in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${name}`, props)
  }

  // Wire to your analytics provider here:
  // window.gtag?.("event", name, props)
  // posthog?.capture(name, props)
  // mixpanel?.track(name, props)
}
