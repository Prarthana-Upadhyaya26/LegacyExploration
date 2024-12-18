import { CoinsProvider } from '@/components/CoinsContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MCQ Practice App',
  description: 'Practice MCQs on Indian Culture and Heritage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoinsProvider>
          {children}
        </CoinsProvider>
      </body>
    </html>
  )
}

