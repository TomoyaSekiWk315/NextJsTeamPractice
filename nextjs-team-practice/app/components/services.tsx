import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Paintbrush, Home, Wrench } from 'lucide-react'

const services = [
  {
    title: '屋根塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    link: '/services/roof-painting',
    icon: Home,
    features: ['耐久性向上', '美観の維持', '資産価値の保護']
  },
  {
    title: '外壁塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    link: '/services/exterior-wall-painting',
    icon: Paintbrush,
    features: ['防水性能向上', '外観の美化', '熱効率の改善']
  },
  {
    title: '特殊塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    link: '/services/special-painting',
    icon: Wrench,
    features: ['特殊素材対応', 'カスタム施工', '高度な技術']
  },
]

export function Services() {
  return (
    <section className="py-8 md:py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[25px] md:rounded-[50px] p-4 md:p-8 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">サービス概要</h2>
          <p className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto">
            お客様の大切な建物を美しく、長持ちさせるための塗装サービスを提供いたします。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="group">
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative">
                        {/* サービスアイコンとタイトル部分 */}
                        <div className="bg-[#005a64] p-6 text-white">
                          <div className="flex items-center gap-4 mb-4">
                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{service.title}</h3>
                          </div>
                          <p className="text-sm md:text-base text-gray-100">{service.description}</p>
                        </div>

                        {/* 特徴リスト */}
                        <div className="p-4 md:p-6 bg-white">
                          <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm md:text-base">
                                <span className="w-1.5 h-1.5 bg-[#005a64] rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* ボタン部分 */}
                        <div className="p-4 md:p-6 bg-white border-t border-gray-100">
                          <Link href={service.link} className="block">
                            <Button 
                              variant="outline" 
                              className="w-full bg-transparent border-[#005a64] text-[#005a64] hover:bg-[#005a64] hover:text-white transition-all duration-300 text-sm md:text-base py-2.5 md:py-3 rounded-full group-hover:shadow-md"
                            >
                              詳細を見る
                              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

