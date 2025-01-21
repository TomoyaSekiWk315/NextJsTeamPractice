import { Header } from "@/app/components/shared/header"
import { WorksHero } from "./components/works-hero"
import { WorksList } from "./components/works-list"
import { ContactCTA } from "../services/components/contact-cta"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <WorksHero />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: '施工事例', href: '/works' }
            ]} 
          />
          <div className="w-full bg-[#F3F3F3] rounded-[50px] p-16">
           <WorksList />
          </div>
        </div>
        <ContactCTA />
        <Footer />
      </main>
    </div>
  )
}

