interface WorkOverviewProps {
  data: {
    title: string
    overview: string
    features: string
  }
}

export function WorkOverview({ data }: WorkOverviewProps) {
  return (
    <section className="py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white">
            画像1
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">概要説明</h3>
              <p className="text-sm leading-relaxed">{data.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">特徴</h3>
              <p className="text-sm leading-relaxed">{data.features}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

