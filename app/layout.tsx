import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Cinzel_Decorative } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
})

const cinzel = Cinzel_Decorative({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vedaantiques.com'),
  title: 'Veda Antiques | The Soul of Tradition',
  description: 'Discover the soul of tradition with Veda Antiques. Explore our curated collection of exquisite antique jewelry, from temple designs to oxidized silver and daily wear.',
  openGraph: {
    title: 'Veda Antiques | The Soul of Tradition',
    description: 'Discover the soul of tradition with Veda Antiques. Explore our curated collection of exquisite antique jewelry, from temple designs to oxidized silver and daily wear.',
    type: 'website',
    locale: 'en_US',
    url: 'https://vedaantiques.com',
    siteName: 'Veda Antiques',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veda Antiques | The Soul of Tradition',
    description: 'Discover the soul of tradition with Veda Antiques. Explore our curated collection of exquisite antique jewelry, from temple designs to oxidized silver and daily wear.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} ${cinzel.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
