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
  title: "TechGenie | Automated AI Agent Builder Agency",
  description:
    "TechGenie builds automated AI agent systems for revenue, operations, and market execution with measurable outcomes and human-safe controls.",
  keywords: [
    "AI agent systems",
    "business workflow automation",
    "healthcare automation",
    "logistics automation",
    "real estate automation",
    "AI usage training",
  ],
  metadataBase: new URL("https://techgeniexyz.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechGenie | Automated AI Agent Builder Agency",
    description:
      "Automated AI agent systems for revenue, operations, and market execution.",
    type: "website",
    locale: "en_US",
    siteName: "TechGenie",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGenie | Automated AI Agent Builder Agency",
    description:
      "Automated AI agent systems for revenue, operations, and market execution.",
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
      "Automated AI agent systems for revenue, operations, and market execution.",
    email: "techgeniexyz@gmail.com",
      url: "https://techgeniexyz.vercel.app",
    serviceType: [
      "AI Agent Systems",
      "Revenue and Operations Automation",
      "Healthcare Workflow Automation",
      "Logistics Workflow Automation",
      "Real Estate Workflow Automation",
      "AI Usage Education and Training",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
