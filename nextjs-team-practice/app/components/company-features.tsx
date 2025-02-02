import { Check, Award, Clock, Users } from 'lucide-react'

const features = [
  {
    title: '確かな技術力と品質へのこだわり',
    description: '創業以来30年以上の実績と経験を持つ当社では、熟練の職人による丁寧な施工と、最新の技術や材料を組み合わせることで、高品質な塗装工事を実現しています。お客様の大切な建物を長く美しく保つため、細部まで徹底的にこだわります。',
    icon: Award,
    points: ['職人歴20年以上のベテラン在籍', '10年間の長期保証付き', 'JIS規格適合の高品質塗料使用']
  },
  {
    title: 'スピーディーで丁寧な対応',
    description: 'お問い合わせから施工完了まで、迅速かつ丁寧な対応を心がけています。お客様のご要望やご不安な点に真摯に耳を傾け、最適な提案と明確な説明を提供。施工中も進捗状況を細かく報告し、安心して任せていただける環境づくりに努めています。',
    icon: Clock,
    points: ['24時間以内の見積り対応', '施工前の詳細な現場調査', '工程ごとの丁寧な説明']
  },
  {
    title: '安心の実績とアフターフォロー',
    description: '東京都を中心に、年間200件以上の施工実績があります。施工後のアフターフォローも万全で、定期的な点検や補修にも迅速に対応。お客様との長期的な信頼関係を大切にし、建物の維持管理をトータルでサポートいたします。',
    icon: Users,
    points: ['年間施工実績200件以上', '施工後の定期点検サービス', '24時間365日緊急対応']
  },
]

export function CompanyFeatures() {
  return (
    <section className="py-8 md:py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[25px] md:rounded-[50px] p-4 md:p-8 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">当社の特徴</h2>
          <p className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto">
            創業以来、多くのお客様にご満足いただいている当社の強みをご紹介します。
          </p>

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-2xl md:rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
                    ${index % 2 === 0 ? 'lg:ml-0 lg:mr-auto' : 'lg:ml-auto lg:mr-0'}`}
                  style={{ maxWidth: '1000px' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* 画像エリア（実際の画像に置き換えてください） */}
                    <div className={`aspect-video lg:aspect-auto relative bg-[#404040] ${
                      index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        画像{index + 1}
                      </div>
                    </div>

                    {/* テキストエリア */}
                    <div className={`p-6 md:p-8 lg:p-12 ${
                      index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#005a64] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{feature.title}</h3>
                      </div>

                      <p className="text-sm md:text-base text-gray-600 mb-6">
                        {feature.description}
                      </p>

                      <ul className="space-y-3">
                        {feature.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center gap-3 text-sm md:text-base">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#005a64]/10 text-[#005a64] flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

