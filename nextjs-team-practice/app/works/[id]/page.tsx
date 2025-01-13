import { Header } from "@/app/components/shared/header"
import { WorkDetailHero } from "../components/work-detail-hero"
import { WorkOverview } from "../components/work-overview"
import { BeforeAfter } from "../components/before-after"
import { CustomerVoice } from "../components/customer-voice"
import { ContactCTA } from "@/app/services/components/contact-cta"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"
import { Metadata } from 'next'

// Next.jsの型定義をインポート
import { ResolvingMetadata } from 'next'

// SearchParamsの型を定義
type SearchParams = { [key: string]: string | string[] | undefined }

// Paramsの型を定義
type Params = {
  id: string
}

// Propsの型を修正
type Props = {
  params: Params
  searchParams: SearchParams
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `施工事例 - ${params.id}`,
  }
}

function getWorkData(id: string) {
  return {
    title: `○○家様${id}塗装`,
    overview: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    features: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    customerVoice: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
}

// ページコンポーネントをasyncに戻す
export default async function WorkDetailPage({ 
  params 
}: Props) {
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

