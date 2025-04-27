import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GBD-1 BUILTECH CARPENTRY - Quality Woodwork & Custom Furniture",
  description:
    "Expert carpentry services in Nigeria. Custom furniture, installations, and repairs. Quality craftsmanship with modern designs.",
  keywords: "carpentry, custom furniture, woodwork, Nigeria, cabinet installation, furniture repair, custom woodwork",
  openGraph: {
    title: "GBD-1 BUILTECH CARPENTRY - Quality Woodwork & Custom Furniture",
    description:
      "Expert carpentry services in Nigeria. Custom furniture, installations, and repairs. Quality craftsmanship with modern designs.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20logo%20for%20GBD-1%20BUILTECH%20CARPENTRY.jpg-i71f2wQ8TPPCUpa5diPn74sBMCrGAz.jpeg",
        width: 1200,
        height: 630,
        alt: "GBD-1 BUILTECH CARPENTRY Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBD-1 BUILTECH CARPENTRY - Quality Woodwork & Custom Furniture",
    description:
      "Expert carpentry services in Nigeria. Custom furniture, installations, and repairs. Quality craftsmanship with modern designs.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20logo%20for%20GBD-1%20BUILTECH%20CARPENTRY.jpg-i71f2wQ8TPPCUpa5diPn74sBMCrGAz.jpeg",
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

