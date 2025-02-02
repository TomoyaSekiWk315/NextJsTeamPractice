'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  type: string
  content: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "○○様",
    type: "外壁塗装",
    content: "丁寧な説明と施工に大変満足しています。職人さんの対応も親切で、安心してお任せできました。",
    date: "2024年2月"
  },
  {
    id: 2,
    name: "△△様",
    type: "屋根塗装",
    content: "予算内で最適な提案をしていただき、古くなった屋根が見違えるように綺麗になりました。",
    date: "2024年1月"
  },
  {
    id: 3,
    name: "□□様",
    type: "外壁・屋根塗装",
    content: "工期も予定通りで、近所への配慮もしっかりしていただき、安心して工事を任せられました。",
    date: "2023年12月"
  }
]

export function CustomerVoice() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">
          お客様の声
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* スライダーナビゲーション */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="前の声を見る"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="次の声を見る"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* スライダーコンテンツ */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 sm:px-12"
                >
                  <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-bold text-lg sm:text-xl mb-1">{testimonial.name}</p>
                        <span className="inline-block bg-[#005a64] text-white px-2 py-1 rounded-full text-xs">
                          {testimonial.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">{testimonial.date}</p>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* スライダーインジケーター */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-[#005a64]' : 'bg-gray-300'
                }`}
                aria-label={`${index + 1}番目の声を表示`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

