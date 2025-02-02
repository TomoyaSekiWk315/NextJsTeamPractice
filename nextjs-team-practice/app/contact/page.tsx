import { ContactForm } from "./components/contact-form"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"
import { HeroSection } from "@/app/components/shared/hero-section"

export default function ContactPage() {
  return (
    <>
      <HeroSection 
        title="お問い合わせ" 
        description={`お見積り・ご相談は無料です。\nお気軽にお問い合わせください`}
      />
      <div className="bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: 'お問い合わせ', href: '/contact' }
            ]} 
          />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

