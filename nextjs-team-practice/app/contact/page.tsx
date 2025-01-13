import { Header } from "@/app/components/shared/header"
import { ContactHero } from "./components/contact-hero"
import { ContactForm } from "./components/contact-form"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <main className="bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: 'お問い合わせ', href: '/contact' }
            ]} 
          />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

