import { Header } from "@/app/components/shared/header"
import { WorkDetailHero } from "../components/work-detail-hero"
import { WorkOverview } from "../components/work-overview"
import { BeforeAfter } from "../components/before-after"
import { CustomerVoice } from "../components/customer-voice"
import { ContactCTA } from "@/app/services/components/contact-cta"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"

interface WorkDetailPageProps {
  params: {
    id: string
  }
}

function getWorkData(id: string) {
  // This is mock data - replace with actual data fetching
  return {
    title: "○○家様○○塗装",
    overview: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    features: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    customerVoice: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const workData = getWorkData(params.id)
  return (
    <div className="min-h-screen">
      <Header />
      <WorkDetailHero />
      <main className="bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: '施工事例', href: '/works' },
              { label: workData.title, href: `/works/${params.id}` }
            ]} 
          />
          <WorkOverview data={workData} />
          <BeforeAfter />
          <CustomerVoice testimonial={workData.customerVoice} />
        </div>
        <ContactCTA />
        <Footer />
      </main>
    </div>
  )
}

