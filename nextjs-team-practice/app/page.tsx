import { LatestWorks } from "./components/latest-works"
import { PaintingProcess } from "./components/painting-process"
import { CTASection } from "./components/cta-section"
import { Footer } from "@/app/components/shared/footer"
import { Header } from "./components/shared/header"
import { Services } from "./components/services"
import { CompanyFeatures } from "./components/company-features"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#22d6dd] text-center py-24">
        <h2 className="text-[64px] font-bold mb-4">キャッチコピー：64px</h2>
        <p className="text-[32px]">概要説明文：32px</p>
      </section>

      <div className="bg-[#ffffff]">
        <div className="container mx-auto px-4">
          {/* Services */}
          <section className="section-spacing">
            <Services />
          </section>

          {/* Company Features */}
          <section className="section-spacing">
            <CompanyFeatures />
          </section>

          {/* Latest Works */}
          <section className="section-spacing">
            <LatestWorks />
          </section>

          {/* Painting Process */}
          <section className="section-spacing">
            <PaintingProcess />
          </section>
        </div>

        {/* CTA Section */}
        <section className="section-spacing">
          <CTASection />
        </section>
      </div>
    </>
  )
}

