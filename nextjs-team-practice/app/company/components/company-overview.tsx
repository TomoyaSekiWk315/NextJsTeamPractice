export function CompanyOverview() {
  const companyDetails = [
    { label: '社名', value: '株式会社MVP塗装' },
    { label: '設立', value: '1990年4月1日' },
    { label: '資本金', value: '5,000万円' },
    { label: '代表者', value: '代表取締役社長 佐藤 誠' },
    { label: '従業員数', value: '45名（2024年1月現在）' },
    { 
      label: '事業内容', 
      value: [
        '・建築物の外壁・屋根塗装工事',
        '・防水工事',
        '・リフォーム工事',
        '・建築物の調査・診断',
        '・塗装関連商品の販売'
      ]
    },
    { 
      label: '所在地', 
      value: [
        '〒160-0022',
        '東京都新宿区新宿3丁目1-1 MVPビル4階',
        'TEL: 03-1234-5678',
        'FAX: 03-1234-5679'
      ]
    },
  ]

  return (
    <section className="py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">会社概要</h2>
        <div className="max-w-3xl mx-auto">
          <dl className="divide-y divide-gray-200">
            {companyDetails.map((detail, index) => (
              <div key={index} className="py-4 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                <dt className="font-bold">{detail.label}</dt>
                <dd>
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

