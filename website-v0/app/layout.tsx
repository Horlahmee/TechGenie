import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"

import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TechGenie | AI Systems for Revenue, Operations & Markets",
  description:
    "TechGenie builds AI-powered systems that automate revenue operations, accelerate crypto and market research, and deliver rapid MVPs. Get measurable outcomes, fast.",
  keywords: [
    "AI automation",
    "revenue operations",
    "crypto research",
    "MVP development",
    "AI systems",
  ],
  metadataBase: new URL("https://techgeniexyz.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechGenie | AI Systems for Revenue, Operations & Markets",
    description:
      "AI-powered systems that automate revenue operations, accelerate market research, and deliver rapid MVPs.",
    type: "website",
    locale: "en_US",
    siteName: "TechGenie",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGenie | AI Systems for Revenue, Operations & Markets",
    description:
      "AI-powered systems that automate revenue operations, accelerate market research, and deliver rapid MVPs.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0d12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  )
}

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechGenie",
    description:
      "AI-powered systems for revenue operations, market research, and rapid MVP delivery.",
    email: "techgeniexyz@gmail.com",
      url: "https://techgeniexyz.vercel.app",
    serviceType: [
      "AI Automation",
      "Revenue Operations",
      "Crypto Research Tooling",
      "MVP Development",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
