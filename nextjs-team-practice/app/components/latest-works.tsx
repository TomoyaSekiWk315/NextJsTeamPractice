import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const works = [
  {
    id: 1,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    href: "/works/1"
  },
  {
    id: 2,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    href: "/works/2"
  },
  {
    id: 3,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg",
    href: "/works/3"
  }
]

export function LatestWorks() {
  return (
    <section className="py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[50px] p-16">
        <h2 className="text-3xl font-bold text-center mb-12">最新の施工例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link href={work.href} key={work.id}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative bg-[#404040]">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      画像1
                    </div>
                  </div>
                  <div className="p-6 bg-[#FFFFFF]">
                    <h3 className="text-[32px] font-bold mb-4">{work.title}</h3>
                    <p className="text-sm mb-4">{work.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-[45%] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300"
                    >
                      詳細を見る→
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

