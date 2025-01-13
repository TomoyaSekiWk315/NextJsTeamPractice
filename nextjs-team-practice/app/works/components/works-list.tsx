import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const works = [
  {
    id: 1,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    category: "外壁塗装",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    category: "屋根塗装",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    category: "特殊塗装",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    category: "外壁塗装",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    category: "屋根塗装",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "タイトル：32px-Bold",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    category: "特殊塗装",
    image: "/placeholder.svg"
  }
]

export function WorksList() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <Card key={work.id} className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-video relative bg-[#404040]">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  画像1
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-[#005a64] text-white px-3 py-1 rounded-full text-sm">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-[32px] font-bold mb-4">{work.title}</h3>
                <p className="text-sm mb-4">{work.description}</p>
                <Link href={`/works/${work.id}`} className="block">
                  <Button 
                    variant="outline" 
                    className="w-full border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300"
                  >
                    詳細を見る→
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

