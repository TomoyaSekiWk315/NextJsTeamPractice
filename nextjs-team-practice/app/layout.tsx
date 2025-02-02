import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/shared/header'
import { Footer } from './components/shared/footer'
import { ScrollToTopButton } from './components/shared/scroll-to-top-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MVP塗装',
  description: 'MVP塗装のコーポレートサイトです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}

