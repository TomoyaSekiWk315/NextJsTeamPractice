import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const works = [
  {
    id: 1,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: "/placeholder.svg"
  }
]

export function LatestWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">最新の施工例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <Card key={work.id} className="shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video relative bg-[#404040]">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    画像1
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[32px] font-bold mb-4">{work.title}</h3>
                  <p className="text-sm mb-4">{work.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300"
                  >
                    詳細を見る→
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

