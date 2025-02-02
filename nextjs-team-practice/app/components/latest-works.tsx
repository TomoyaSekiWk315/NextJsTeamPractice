import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const works = [
  {
    id: 1,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    href: "/works/1",
    date: "2024.02.01",
    location: "東京都渋谷区",
    tags: ["外壁塗装", "屋根塗装"]
  },
  {
    id: 2,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    href: "/works/2",
    date: "2024.01.15",
    location: "東京都新宿区",
    tags: ["特殊塗装", "外壁塗装"]
  },
  {
    id: 3,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    href: "/works/3",
    date: "2024.01.05",
    location: "東京都目黒区",
    tags: ["屋根塗装"]
  }
]

export function LatestWorks() {
  return (
    <section className="py-8 md:py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[25px] md:rounded-[50px] p-4 md:p-8 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">最新の施工例</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              当社が手がけた最新の施工事例をご紹介します。お客様の大切な建物に新しい価値を提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {works.map((work) => (
              <Link href={work.href} key={work.id} className="group">
                <Card className="h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    {/* 画像エリア */}
                    <div className="relative">
                      <div className="aspect-[4/3] relative bg-[#404040] overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          画像1
                        </div>
                      </div>
                      {/* タグ */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-[#005a64] text-white text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* コンテンツエリア */}
                    <div className="p-4 md:p-6">
                      {/* メタ情報 */}
                      <div className="flex items-center gap-4 mb-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{work.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{work.location}</span>
                        </div>
                      </div>

                      {/* タイトルと説明 */}
                      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#005a64] transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {work.description}
                      </p>

                      {/* ボタン */}
                      <div className="mt-auto">
                        <Button 
                          variant="outline" 
                          className="w-full bg-transparent border-[#005a64] text-[#005a64] hover:bg-[#005a64] hover:text-white transition-all duration-300 group-hover:shadow-md rounded-full"
                        >
                          詳細を見る
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* もっと見るボタン */}
          <div className="text-center mt-8 md:mt-12">
            <Link href="/works" className="inline-block">
              <Button 
                variant="outline"
                className="bg-[#005a64] text-white hover:bg-[#005a64]/90 transition-all duration-300 px-8 py-3 text-base rounded-full"
              >
                施工事例をもっと見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

