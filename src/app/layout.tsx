import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageLoader } from '@/components/ui/PageLoader'
import { BackToTop } from '@/components/ui/BackToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://afot.in'),
  title: {
    default: 'AFOT - Digital Innovation & Technology Solutions',
    template: '%s | AFOT',
  },
  description:
    'AFOT (All For One Tech) delivers cutting-edge web development, mobile apps, AI integration, cloud solutions, UI/UX design, and cybersecurity services in Chennai, India. Transform your business with technology.',
  keywords: [
    'AFOT',
    'All For One Tech',
    'web development Chennai',
    'mobile app development India',
    'software development company India',
    'AI integration services',
    'cloud solutions India',
    'cybersecurity services Chennai',
    'UI UX design agency',
    'digital transformation partner',
    'custom software development',
    'React Next.js developer India',
    'tech startup India',
    'affordable web development',
    'freelance software agency Chennai',
  ],
  authors: [{ name: 'AFOT', url: 'https://afot.in' }],
  creator: 'AFOT',
  publisher: 'AFOT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://afot.in',
    siteName: 'AFOT - All For One Tech',
    title: 'AFOT - Digital Innovation & Technology Solutions',
    description:
      'Web development, mobile apps, AI, cloud & cybersecurity services from Chennai, India. AFOT — your digital transformation partner.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AFOT - Digital Innovation & Technology Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFOT - Digital Innovation & Technology Solutions',
    description: 'Web dev, mobile apps, AI, cloud & cybersecurity. Chennai-based tech agency.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://afot.in',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://afot.in/#organization',
  name: 'AFOT',
  alternateName: 'AFOT Technologies',
  url: 'https://afot.in',
  logo: {
    '@type': 'ImageObject',
    url: 'https://afot.in/logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://afot.in/og-image.svg',
  description:
    'AFOT delivers cutting-edge digital solutions, web development, mobile apps, and technology consulting to transform your business.',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'allforonetech.in@gmail.com',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'Worldwide',
  },
  sameAs: [
    'https://github.com/ALL-FOR-ONE-TECH',
    'https://linkedin.com/company/all-for-one-tech',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom web applications and websites using modern technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Development',
          description: 'Native and cross-platform mobile applications',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Solutions',
          description: 'Cloud infrastructure, deployment, and management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Integration',
          description: 'Artificial intelligence and machine learning solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'User interface and experience design services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cybersecurity',
          description: 'Security audits, penetration testing, and compliance',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Security Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Performance Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className="bg-dark text-white antialiased font-sans">
        <PageLoader />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
