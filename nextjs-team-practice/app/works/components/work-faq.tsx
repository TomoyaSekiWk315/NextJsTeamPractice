'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "工期はどのくらいかかりますか？",
    answer: "一般的な外壁塗装の場合、天候にもよりますが約1週間〜10日程度です。規模や工事内容によって変動する場合があります。"
  },
  {
    question: "費用の目安を教えてください",
    answer: "建物の大きさや状態、使用する塗料によって変動しますが、一般的な戸建ての場合、○○万円〜○○万円程度です。詳しくは無料見積もりをご利用ください。"
  },
  {
    question: "使用している塗料について教えてください",
    answer: "耐久性と環境への配慮を重視し、○○社の○○塗料を使用しています。この塗料は耐候性が高く、10年以上の耐久性があります。"
  }
]

export function WorkFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">
          よくある質問
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="p-4 text-sm sm:text-base text-gray-600 border-t">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 