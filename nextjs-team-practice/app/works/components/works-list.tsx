'use client'

import { useState } from 'react'
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Array.from(new Set(works.map(work => work.category)))

  const filteredWorks = selectedCategory 
    ? works.filter(work => work.category === selectedCategory)
    : works

  return (
    <section className="py-8 md:py-12 lg:py-16">
      {/* カテゴリーフィルター */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full text-xs sm:text-sm"
          >
            すべて
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full text-xs sm:text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* 施工事例リスト */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredWorks.map((work) => (
          <Card key={work.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="aspect-video relative bg-[#404040]">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  画像1
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block bg-[#005a64] text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-2 sm:mb-3 lg:mb-4 line-clamp-2">{work.title}</h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{work.description}</p>
                <Link href={`/works/${work.id}`} className="block">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-[45%] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300 text-xs sm:text-sm"
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

