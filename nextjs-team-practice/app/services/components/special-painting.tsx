import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { EstimateButton } from "@/app/components/shared/estimate-button"

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
  const mainCardLink = "/services/special-painting";

  return (
    <section className="py-4 sm:py-6 md:py-8">
      <div className="w-full bg-[#F3F3F3] rounded-[15px] sm:rounded-[25px] md:rounded-[50px] p-4 sm:p-8 md:p-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8 md:mb-12">特殊塗装</h2>
        
        {/* メインカード */}
        <Card className="mb-4 sm:mb-6 md:mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* モバイルでは画像を上に配置 */}
            <Link href={mainCardLink} className="block md:hidden relative">
              <div className="bg-[#404040] aspect-[16/9] flex items-center justify-center text-white">
                画像1
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 right-2 text-white text-xs font-bold px-3 py-1 bg-black/50 rounded-full">
                  詳細を見る
                </span>
              </div>
            </Link>
            <div className="p-4 sm:p-6 md:p-8 md:w-1/2 bg-[#FFFFFF]">
              <Link href={mainCardLink} className="block hover:text-[#005a64] transition-colors duration-300">
                <h3 className="text-lg sm:text-2xl md:text-[32px] font-bold mb-2 sm:mb-3 md:mb-4">
                  タイトル：32px-Bold
                </h3>
              </Link>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
              </p>
              <div className="mt-auto flex flex-wrap gap-4">
                <Link href={mainCardLink} className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    className="w-full min-h-[48px] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white active:scale-95 transition-all duration-300 text-sm md:text-base"
                  >
                    詳細を見る →
                  </Button>
                </Link>
                <EstimateButton />
              </div>
            </div>
            {/* デスクトップでは画像を右に配置 */}
            <Link href={mainCardLink} className="hidden md:block md:w-1/2 relative group">
              <div className="bg-[#404040] h-full flex items-center justify-center text-white">
                画像1
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  詳細を見る
                </span>
              </div>
            </Link>
          </div>
        </Card>

        {/* サブカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {specialPaintingCards.map((card, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 sm:hover:-translate-y-1">
              <Link href={card.link} className="block relative">
                <div className="bg-[#404040] aspect-[16/9] flex items-center justify-center text-white">
                  画像1
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    詳細を見る
                  </span>
                </div>
              </Link>
              <div className="p-4 sm:p-6 bg-[#FFFFFF] flex flex-col min-h-[200px]">
                <div>
                  <Link href={card.link} className="block hover:text-[#005a64] transition-colors duration-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{card.title}</h3>
                  </Link>
                  <p className="text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">{card.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-4">
                  <Link href={card.link} className="w-full sm:w-auto">
                    <Button 
                      variant="outline"
                      className="w-full min-h-[48px] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white active:scale-95 transition-all duration-300 text-sm md:text-base"
                    >
                      詳細を見る →
                    </Button>
                  </Link>
                  <EstimateButton />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

