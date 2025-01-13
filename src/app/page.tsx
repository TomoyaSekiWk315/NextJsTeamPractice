import { Header } from "@/src/app/components/shared/header"
import { Hero } from "@/src/app/components/home/hero"
import { Features } from "@/src/app/components/home/features"
import { Services } from "@/src/app/components/home/services"
import { Works } from "@/src/app/components/home/works"
import { News } from "@/src/app/components/home/news"
import { ContactCTA } from "@/src/app/components/home/contact-cta"
import { Footer } from "@/src/app/components/shared/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Works />
        <News />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
} 