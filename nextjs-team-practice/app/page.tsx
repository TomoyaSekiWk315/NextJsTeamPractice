import { LatestWorks } from "./components/latest-works"
import { PaintingProcess } from "./components/painting-process"
import { CTASection } from "./components/cta-section"
import { Services } from "./components/services"
import { CompanyFeatures } from "./components/company-features"
import { HeroSection } from "./components/shared/hero-section"
import { HomeHero } from './components/home-hero'

export default function Home() {
  return (
    <>
      <HomeHero />

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

