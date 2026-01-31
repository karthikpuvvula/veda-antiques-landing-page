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
  title: 'Veda Antiques | The Soul of Tradition',
  description: 'Coming Soon. Hand-selected pieces representing the pinnacle of their era.',
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
