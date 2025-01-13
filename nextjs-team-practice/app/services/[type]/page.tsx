import { Header } from "@/app/components/shared/header"
import { ServiceDetailHero } from "../components/service-detail-hero"
import { ServiceFeatures } from "../components/service-features"
import { ServiceFlow } from "../components/service-flow"
import { FAQSection } from "../components/faq-section"
import { ContactCTA } from "../components/contact-cta"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"
import { Button } from "@/components/ui/button"
import { Metadata } from 'next'

type Props = {
  params: Promise<{
    type: string
  }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `サービス - ${resolvedParams.type}`,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Props['params']
}) {
  const resolvedParams = await params;
  const serviceTitle = 
    resolvedParams.type === 'exterior-wall-painting' ? '外壁塗装' :
    resolvedParams.type === 'roof-painting' ? '屋根塗装' :
    resolvedParams.type === 'special-painting' ? '特殊塗装' :
    '塗装サービス';

  const serviceDescription = 
    resolvedParams.type === 'exterior-wall-painting' ? 'お客様のニーズに合わせた高品質な外壁塗装サービスを提供いたします。' :
    resolvedParams.type === 'roof-painting' ? 'お客様のニーズに合わせた高品質な屋根塗装サービスを提供いたします。' :
    resolvedParams.type === 'special-painting' ? 'お客様のニーズに合わせた高品質な特殊塗装サービスを提供いたします。' :
    'お客様のニーズに合わせた高品質な塗装サービスを提供いたします。';

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceDetailHero title={serviceTitle} />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: 'サービス', href: '/services' },
              { label: serviceTitle, href: `/services/${resolvedParams.type}` }
            ]} 
          />
          
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {serviceTitle}の詳細
            </h2>
            <p className="text-lg mb-8 text-center">
              {serviceDescription}
            </p>
            <ServiceFeatures />
          </section>

          <section className="py-16 bg-[#f3f3f3]">
            <h2 className="text-3xl font-bold text-center mb-12">
              {serviceTitle}の流れ
            </h2>
            <ServiceFlow />
            <div className="text-center mt-12">
              <Button className="bg-[#005a64] text-white px-16 py-6 rounded-full hover:bg-[#005a64]/90 text-xl">
                お見積りはこちら →
              </Button>
            </div>
          </section>
        </div>

        <FAQSection />
      </main>
      <ContactCTA />
      <Footer />
    </div>
  )
}

export async function generateStaticParams(): Promise<{ type: string }[]> {
  return [
    { type: 'exterior-wall-painting' },
    { type: 'roof-painting' },
    { type: 'special-painting' },
  ]
}

