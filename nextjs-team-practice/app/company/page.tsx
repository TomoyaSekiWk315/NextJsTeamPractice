import { CompanyPhilosophy } from "./components/company-philosophy"
import { CompanyOverview } from "./components/company-overview"
import { CompanyHistory } from "./components/company-history"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"
import { HeroSection } from "@/app/components/shared/hero-section"
import { CTASection } from "@/app/components/shared/cta-section"

export default function CompanyPage() {
  return (
    <>
      <HeroSection title="会社案内" />
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
        <CTASection />
      </div>
    </>
  )
}

