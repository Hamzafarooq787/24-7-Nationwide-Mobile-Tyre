import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import '../styles/globals.css'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HS 24/7 Mobile Tyres - Nationwide Emergency Service',
  description: 'Fast, reliable mobile tyre fitting and emergency roadside assistance across the UK. We come to you at home, work, or roadside.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS247%20siteicon%20%281%29-8ZzqgjCBklbGze43QzYYy9GQOg3lT4.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS247%20siteicon%20%281%29-8ZzqgjCBklbGze43QzYYy9GQOg3lT4.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS247%20siteicon%20%281%29-8ZzqgjCBklbGze43QzYYy9GQOg3lT4.png',
  },
  openGraph: {
    title: 'HS 24/7 Mobile Tyres - Nationwide Emergency Service',
    description: 'Fast Response · Emergency Callout · Professional Technicians. 24/7 mobile tyre services across the UK.',
    url: 'https://hs247tyres.co.uk',
    siteName: 'HS 24/7 Mobile Tyres',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS%20Open-Graph%20%281%29-KGv1GYXK7AyZejLecXz6Fras3VXVol.png',
        width: 1200,
        height: 630,
        alt: 'HS 24/7 Mobile Tyres - 24/7 Mobile Tyre Services Across the UK',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HS 24/7 Mobile Tyres - Nationwide Emergency Service',
    description: 'Fast Response · Emergency Callout · Professional Technicians. 24/7 mobile tyre services across the UK.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS%20Open-Graph%20%281%29-KGv1GYXK7AyZejLecXz6Fras3VXVol.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17805007309"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17805007309');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-[#f6f7f8] text-slate-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
