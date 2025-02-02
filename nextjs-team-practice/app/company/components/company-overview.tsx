export function CompanyOverview() {
  const companyDetails = [
    { label: '社名', value: '株式会社塗装専門店' },
    { label: '設立', value: '1990年4月1日' },
    { label: '資本金', value: '1億円' },
    { label: '代表者', value: '代表取締役社長 山田太郎' },
    { label: '従業員数', value: '150名（2023年4月現在）' },
    { 
      label: '事業内容', 
      value: [
        '・外壁塗装',
        '・屋根塗装',
        '・特殊塗装'
      ]
    },
    { 
      label: '所在地', 
      value: [
        '〒XXX-XXXX',
        '東京都○○区○○X-X-X',
        'TEL: 03-XXXX-XXXX',
        'FAX: 03-XXXX-XXXX'
      ]
    },
  ]

  return (
    <section className="py-8 md:py-16">
      <div className="bg-white rounded-xl md:rounded-3xl p-6 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">会社概要</h2>
        <div className="max-w-3xl mx-auto">
          <dl className="divide-y divide-gray-200">
            {companyDetails.map((detail, index) => (
              <div key={index} className="py-4 grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-2 md:gap-4">
                <dt className="font-bold text-sm md:text-base">{detail.label}</dt>
                <dd className="text-sm md:text-base">
                  {Array.isArray(detail.value) ? (
                    <div className="space-y-1">
                      {detail.value.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

