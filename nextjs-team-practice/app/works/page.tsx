import { WorksHero } from "./components/works-hero"
import { WorksList } from "./components/works-list"
import { ContactCTA } from "../services/components/contact-cta"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"

export default function WorksPage() {
  return (
    <>
      <WorksHero />
      <div className="bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: '施工事例', href: '/works' }
            ]} 
          />
          <WorksList />
        </div>
        <ContactCTA />
      </div>
    </>
  )
}

