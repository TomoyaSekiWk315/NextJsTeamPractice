export function CompanyHistory() {
  const history = [
    { date: '1990年4月', event: '株式会社塗装専門店設立' },
    { date: '1995年6月', event: '東京支社開設' },
    { date: '2000年9月', event: 'ISO9001認証取得' },
    { date: '2010年7月', event: '資本金を1億円に増資' },
    { date: '2015年4月', event: '創立25周年' },
  ]

  return (
    <section className="py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">沿革</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {history.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                <div className="font-bold">{item.date}</div>
                <div>{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

