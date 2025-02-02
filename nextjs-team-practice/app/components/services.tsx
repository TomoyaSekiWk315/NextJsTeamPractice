import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Paintbrush, Home, Wrench } from 'lucide-react'

const services = [
  {
    title: '屋根塗装',
    description: '建物を雨や紫外線から守る屋根の塗装。耐久性の高い塗料と熟練の技術で、美しさと保護性を両立した施工を行います。定期的なメンテナンスで建物の寿命を延ばし、資産価値を守ります。',
    link: '/services/roof-painting',
    icon: Home,
    features: ['遮熱・断熱効果', '防水性能向上', '建物保護']
  },
  {
    title: '外壁塗装',
    description: '建物の印象を大きく左右する外壁。高品質な塗料と丁寧な下地処理で、美しさと耐久性を実現します。カラーシミュレーションで仕上がりをイメージしながら、最適な色選びをサポートいたします。',
    link: '/services/exterior-wall-painting',
    icon: Paintbrush,
    features: ['美観の向上', '建物の保護', '省エネ効果']
  },
  {
    title: '特殊塗装',
    description: '店舗や商業施設、特殊な素材など、様々なニーズに対応する特殊塗装。防カビ、防汚、断熱など、目的に応じた機能性塗料を使用し、建物の価値を高める施工を提供します。',
    link: '/services/special-painting',
    icon: Wrench,
    features: ['多彩な機能性', '特殊素材対応', 'デザイン性']
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

