import { Header } from "@/app/components/shared/header"
import { CompanyHero } from "./components/company-hero"
import { CompanyPhilosophy } from "./components/company-philosophy"
import { CompanyOverview } from "./components/company-overview"
import { CompanyHistory } from "./components/company-history"
import { ContactCTA } from "../services/components/contact-cta"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <div className="bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: '会社案内', href: '/company' }
            ]} 
          />
          <CompanyPhilosophy />
          <CompanyOverview />
          <CompanyHistory />
        </div>
        <ContactCTA />
      </div>
    </>
  )
}

