const features = [
  {
    title: '当社の特徴の1つ目の文章が入ります',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    title: '当社の特徴の2つ目の文章が入ります',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    title: '当社の特徴の3つ目の文章が入ります',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
]

export function CompanyFeatures() {
  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">当社の特徴</h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
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

