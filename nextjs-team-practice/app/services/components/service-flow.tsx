const steps = [
  { 
    id: 1, 
    title: "STEP1", 
    description: "無料見積もり・現地調査",
    detail: "お客様のご要望をヒアリングし、建物の状態を詳しく調査します。その場で概算のお見積りをご提示いたします。"
  },
  { 
    id: 2, 
    title: "STEP2", 
    description: "お見積り提出・ご契約",
    detail: "詳細なお見積りを作成し、工事内容や使用する塗料についてご説明いたします。ご納得いただけましたらご契約となります。"
  },
  { 
    id: 3, 
    title: "STEP3", 
    description: "施工開始・完了",
    detail: "熟練の職人が丁寧に施工を行います。工程ごとに品質チェックを実施し、完了後は細部まで点検いたします。"
  }
]

export function ServiceFlow() {
  return (
    <div className="px-4">
      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="relative pb-12 sm:pb-16 md:pb-20 last:pb-0"
          >
            {/* ステップカード */}
            <div className="relative z-10 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col sm:flex-row items-stretch">
                {/* 左側：ステップ番号 */}
                <div className="bg-[#005a64] text-white p-4 sm:p-6 md:p-8 sm:w-[200px] md:w-[240px] flex flex-col justify-center items-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                    {step.title}
                  </span>
                  <span className="text-sm sm:text-base text-center">
                    {step.description}
                  </span>
                </div>

                {/* 右側：詳細説明 */}
                <div className="p-4 sm:p-6 md:p-8 flex-1 bg-white">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* 接続線（最後のステップ以外に表示） */}
            {index < steps.length - 1 && (
              <div className="absolute left-0 right-0 bottom-0 h-12 sm:h-16 md:h-20 flex items-center justify-center">
                {/* モバイル用の下向き矢印 */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-4 h-4 border-r-2 border-b-2 border-[#005a64] transform rotate-45" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

