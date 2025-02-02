interface WorkOverviewProps {
  data: {
    title: string
    overview: string
    features: string
  }
}

export function WorkOverview({ data }: WorkOverviewProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white order-1">
            画像1
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">概要説明</h3>
              <p className="text-sm sm:text-base leading-relaxed">{data.overview}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">特徴</h3>
              <p className="text-sm sm:text-base leading-relaxed">{data.features}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

