import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Painting Service',
  description: '高品質な塗装サービスを提供いたします',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
} 