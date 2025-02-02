import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const specialPaintingCards = [
  {
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    link: "/services/special-painting/1"
  },
  {
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    link: "/services/special-painting/2"
  },
  {
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    link: "/services/special-painting/3"
  }
]

export function SpecialPainting() {
  return (
    <section className="py-4 sm:py-6 md:py-8">
      <div className="w-full bg-[#F3F3F3] rounded-[15px] sm:rounded-[25px] md:rounded-[50px] p-4 sm:p-8 md:p-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8 md:mb-12">特殊塗装</h2>
        
        {/* メインカード */}
        <Card className="mb-4 sm:mb-6 md:mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* モバイルでは画像を上に配置 */}
            <div className="md:hidden bg-[#404040] aspect-[16/9] flex items-center justify-center text-white">
              画像1
            </div>
            <div className="p-4 sm:p-6 md:p-8 md:w-1/2 bg-[#FFFFFF]">
              <h3 className="text-lg sm:text-2xl md:text-[32px] font-bold mb-2 sm:mb-3 md:mb-4">
                タイトル：32px-Bold
              </h3>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
              </p>
              <Link href="/services/special-painting" passHref className="block">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto min-h-[44px] px-6 border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  詳細を見る→
                </Button>
              </Link>
            </div>
            {/* デスクトップでは画像を右に配置 */}
            <div className="hidden md:flex md:w-1/2 bg-[#404040] aspect-auto items-center justify-center text-white">
              画像1
            </div>
          </div>
        </Card>

        {/* サブカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {specialPaintingCards.map((card, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#404040] aspect-[16/9] flex items-center justify-center text-white">
                画像1
              </div>
              <div className="p-4 sm:p-6 bg-[#FFFFFF]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{card.title}</h3>
                <p className="text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">{card.description}</p>
                <Link href={card.link} passHref className="block">
                  <Button 
                    variant="outline" 
                    className="w-full min-h-[44px] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    詳細を見る→
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

