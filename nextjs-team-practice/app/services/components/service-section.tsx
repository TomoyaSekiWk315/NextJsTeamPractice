import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
}

interface ServiceSectionProps {
  title: string
  mainCard: ServiceCardProps
  cards: ServiceCardProps[]
}

export function ServiceSection({ title, mainCard, cards }: ServiceSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      
      {/* Main Card */}
      <Card className="mb-8 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2">
            <h3 className="text-[32px] font-bold mb-4">{mainCard.title}</h3>
            <p className="text-sm mb-6">{mainCard.description}</p>
            <Link href={mainCard.link} passHref>
              <Button variant="outline" className="border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300">
                詳細を見る→
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 bg-[#404040] aspect-video flex items-center justify-center text-white">
            画像1
          </div>
        </div>
      </Card>

      {/* Sub Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-[#404040] aspect-video flex items-center justify-center text-white">
              画像1
            </div>
            <div className="p-6">
              <h3 className="text-[32px] font-bold mb-4">{card.title}</h3>
              <p className="text-sm mb-4">{card.description}</p>
              <Link href={card.link} passHref>
                <Button variant="outline" className="w-full border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300">
                  詳細を見る→
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

