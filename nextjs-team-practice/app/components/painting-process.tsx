import { Button } from "@/components/ui/button"
import { EstimateButton } from "@/app/components/shared/estimate-button"

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

export function PaintingProcess() {
  return (
    <section className="py-8 md:py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[25px] md:rounded-[50px] p-4 md:p-8 lg:p-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12">塗装の流れ</h2>
        <div className="px-2 md:px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative pb-8 sm:pb-12 md:pb-16 last:pb-0"
              >
                <div className="relative z-10 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-stretch">
                    <div className="bg-[#005a64] text-white p-3 sm:p-4 md:p-6 lg:p-8 sm:w-[160px] md:w-[200px] lg:w-[240px] flex flex-col justify-center items-center">
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1">
                        {step.title}
                      </span>
                      <span className="text-xs sm:text-sm text-center">
                        {step.description}
                      </span>
                    </div>

                    <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex-1 bg-white">
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-0 right-0 bottom-0 h-8 sm:h-12 md:h-16 flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                      <div className="w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-[#005a64] transform rotate-45" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4">
          <EstimateButton />
        </div>
      </div>
    </section>
  )
}

