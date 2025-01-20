import { Header } from "@/app/components/shared/header"
import { ServiceHero } from "./components/service-hero"
import { ServiceSection } from "./components/service-section"
import { SpecialPainting } from "./components/special-painting"
import { CTASection } from "./components/cta-section"
import { Footer } from "@/app/components/shared/footer"
import { Breadcrumb } from "@/app/components/shared/breadcrumb"

export default function ServicesPage() {
  const wallPaintingCards = [
    {
      title: "タイトル：32px-Bold",
      description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      image: "/placeholder.svg",
      link: "/services/exterior-wall-painting"
    },
    {
      title: "タイトル：32px-Bold",
      description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      image: "/placeholder.svg",
      link: "/services/exterior-wall-painting"
    },
    {
      title: "タイトル：32px-Bold",
      description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      image: "/placeholder.svg",
      link: "/services/exterior-wall-painting"
    }
  ]

  const roofPaintingCards = [
    {
      title: "タイトル：32px-Bold",
      description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      image: "/placeholder.svg",
      link: "/services/roof-painting"
    },
    {
      title: "タイトル：32px-Bold",
      description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      image: "/placeholder.svg",
      link: "/services/roof-painting"
    },
    {
      title: "タイトル：32px-Bold",
      description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      image: "/placeholder.svg",
      link: "/services/roof-painting"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero />
      <main className="bg-[#ffffff]">
        <div className="container mx-auto px-4">          <Breadcrumb 
            items={[
              { label: 'ホーム', href: '/' },
              { label: 'サービス', href: '/services' }
            ]} 
          />
          <ServiceSection 
            title="外壁塗装"
            cards={wallPaintingCards}
            mainCard={{
              title: "タイトル：32px-Bold",
              description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
              image: "/placeholder.svg",
              link: "/services/exterior-wall-painting"
            }}
          />
          <ServiceSection 
            title="屋根塗装"
            cards={roofPaintingCards}
            mainCard={{
              title: "タイトル：32px-Bold",
              description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
              image: "/placeholder.svg",
              link: "/services/roof-painting"
            }}
          />
          <SpecialPainting />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

