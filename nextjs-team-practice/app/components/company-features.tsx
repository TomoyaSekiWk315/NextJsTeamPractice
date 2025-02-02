const features = [
  {
    title: '当社の特徴の1つ目の文章が入ります',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    title: '当社の特徴の2つ目の文章が入ります',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    title: '当社の特徴の3つ目の文章が入ります',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
]

export function CompanyFeatures() {
  return (
    <section className="py-8 md:py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[25px] md:rounded-[50px] p-6 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">当社の特徴</h2>
        <div className="space-y-8 md:space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-[32px] font-bold mb-2 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base leading-relaxed">{feature.description}</p>
              </div>
              <div>
                <div className="bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white">
                  画像{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

