import { WorksList } from "./components/works-list"
import { ContactCTA } from "../services/components/contact-cta"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"
import { HeroSection } from "@/app/components/shared/hero-section"

export default function WorksPage() {
  return (
    <>
      <HeroSection title="施工事例" />
      <div className="bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: '施工事例', href: '/works' }
            ]} 
          />
          <WorksList />
          <ContactCTA />
        </div>
      </div>
    </>
  )
}

