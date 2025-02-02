export function CompanyHistory() {
  const history = [
    { date: '1990年4月', event: '株式会社塗装専門店設立' },
    { date: '1995年6月', event: '東京支社開設' },
    { date: '2000年9月', event: 'ISO9001認証取得' },
    { date: '2010年7月', event: '資本金を1億円に増資' },
    { date: '2015年4月', event: '創立25周年' },
  ]

  return (
    <section className="py-8 md:py-16">
      <div className="bg-white rounded-xl md:rounded-3xl p-6 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">沿革</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {history.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-2 md:gap-4">
                <div className="font-bold text-sm md:text-base">{item.date}</div>
                <div className="text-sm md:text-base">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

