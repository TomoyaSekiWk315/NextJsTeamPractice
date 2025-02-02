import { ServiceFeatures } from "../components/service-features"
import { ServiceFlow } from "../components/service-flow"
import { FAQSection } from "../components/faq-section"
import { ContactCTA } from "../components/contact-cta"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"
import { Button } from "@/components/ui/button"
import { Metadata } from 'next'
import { HeroSection } from "@/app/components/shared/hero-section"
import { ScrollToTopButton } from "@/app/components/shared/scroll-to-top-button"

type Props = {
  params: Promise<{
    type: string
  }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceTitle = getServiceTitle(resolvedParams.type);
  
  return {
    title: `${serviceTitle} | MVP塗装`,
    description: `MVP塗装の${serviceTitle}サービスについての詳細ページです。特徴や施工の流れ、よくある質問などをご紹介しています。`,
  }
}

function getServiceTitle(type: string): string {
  return type === 'exterior-wall-painting' ? '外壁塗装' :
         type === 'roof-painting' ? '屋根塗装' :
         type === 'special-painting' ? '特殊塗装' :
         '塗装サービス';
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Props['params']
}) {
  const resolvedParams = await params;
  const serviceTitle = getServiceTitle(resolvedParams.type);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title={serviceTitle} 
        description="お客様のご要望に合わせた最適な塗装プランをご提案いたします"
      />
      <main className="relative">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: 'サービス', href: '/services' },
              { label: serviceTitle, href: `/services/${resolvedParams.type}` }
            ]} 
          />
          
          {/* 特徴セクション */}
          <section className="py-8 sm:py-12 md:py-16">
            <div className="w-full bg-[#F3F3F3] rounded-[15px] sm:rounded-[25px] md:rounded-[50px] p-4 sm:p-8 md:p-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
                {serviceTitle}の特徴
              </h2>
              <ServiceFeatures />
            </div>
          </section>

          {/* 施工の流れセクション */}
          <section className="py-8 sm:py-12 md:py-16 bg-[#f3f3f3] rounded-[15px] sm:rounded-[25px] md:rounded-[50px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
              {serviceTitle}の流れ
            </h2>
            <ServiceFlow />
            <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
              <Button 
                className="w-full sm:w-auto min-h-[48px] px-8 sm:px-12 bg-[#005a64] text-white hover:bg-[#005a64]/90 active:scale-95 transition-all duration-300 text-sm sm:text-base md:text-lg rounded-full"
              >
                お見積りはこちら →
              </Button>
            </div>
          </section>

          {/* FAQ セクション */}
          <FAQSection />
        </div>

        {/* CTA セクション */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <ContactCTA />
        </div>

        {/* スクロールトップボタン */}
        <ScrollToTopButton />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { type: 'exterior-wall-painting' },
    { type: 'roof-painting' },
    { type: 'special-painting' },
  ]
}

