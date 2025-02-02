import './globals.css'
import { Header } from '@/app/components/shared/header'
import { Footer } from '@/app/components/shared/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[89px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

