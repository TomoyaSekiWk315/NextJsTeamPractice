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
    <section className="py-4 sm:py-6 md:py-8">
      <div className="w-full bg-[#F3F3F3] rounded-[15px] sm:rounded-[25px] md:rounded-[50px] p-4 sm:p-8 md:p-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8 md:mb-12">{title}</h2>
        
        {/* Main Card */}
        <Card className="mb-4 sm:mb-6 md:mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row">
            {/* モバイルでは画像を上に配置 */}
            <Link href={mainCard.link} className="block sm:hidden relative">
              <div className="bg-[#404040] aspect-[16/9] flex items-center justify-center text-white">
                画像1
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 right-2 text-white text-xs font-bold px-3 py-1 bg-black/50 rounded-full">
                  詳細を見る
                </span>
              </div>
            </Link>
            <div className="relative p-4 sm:p-6 md:p-8 sm:w-1/2 bg-[#FFFFFF] flex flex-col">
              <div>
                <h3 className="text-lg sm:text-2xl md:text-[32px] font-bold mb-2 sm:mb-3 md:mb-4">{mainCard.title}</h3>
                <p className="text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 leading-relaxed sm:line-clamp-4 md:line-clamp-none">
                  {mainCard.description}
                </p>
              </div>
              <div className="mt-auto">
                <Link href={mainCard.link} passHref className="block">
                  <Button 
                    variant="outline" 
                    className="w-full min-h-[48px] px-6 border-[#000000] shadow-md hover:bg-[#000000] hover:text-white active:scale-95 transition-all duration-300 text-sm md:text-base"
                  >
                    詳細を見る→
                  </Button>
                </Link>
              </div>
            </div>
            {/* タブレット以上では画像を右に配置 */}
            <div className="hidden sm:flex sm:w-1/2 bg-[#404040] aspect-[4/3] md:aspect-auto items-center justify-center text-white">
              画像1
            </div>
          </div>
        </Card>

        {/* Sub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-lg active:scale-[0.98] transition-all duration-300 sm:hover:-translate-y-1"
            >
              <div className="relative">
                <Link href={card.link} className="block">
                  <div className="bg-[#404040] aspect-[16/9] flex items-center justify-center text-white group-hover:opacity-80 transition-opacity duration-300">
                    画像1
                    {/* モバイル用のオーバーレイ */}
                    <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="absolute bottom-2 right-2 text-white text-xs font-bold px-3 py-1 bg-black/50 rounded-full">
                        詳細を見る
                      </span>
                    </div>
                    {/* タブレット以上でのオーバーレイ */}
                    <div className="absolute inset-0 hidden sm:flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        詳細を見る
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative p-4 sm:p-6 bg-[#FFFFFF] flex flex-col min-h-[200px]">
                <div>
                  <Link href={card.link} className="block group-hover:text-[#005a64] transition-colors duration-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href={card.link} passHref className="block">
                    <Button 
                      variant="outline" 
                      className="w-full min-h-[48px] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white active:scale-95 transition-all duration-300 text-sm md:text-base"
                    >
                      詳細を見る→
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

