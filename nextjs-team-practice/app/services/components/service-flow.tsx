const steps = [
  { id: 1, title: "STEP1", description: "無料見積もり\n現地調査" },
  { id: 2, title: "STEP2", description: "無料見積もり\n現地調査" },
  { id: 3, title: "STEP3", description: "無料見積もり\n現地調査" }
]

export function ServiceFlow() {
  return (
    <div className="px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12 md:mb-16">
        {steps.map((step, index) => (
          <div key={step.id} className="w-full max-w-[280px] sm:max-w-[320px] relative">
            <div className="step-container group">
              <div className="bg-white p-4 sm:p-6 md:p-8 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-[#000000] text-2xl sm:text-[28px] md:text-[32px] font-bold mb-4 sm:mb-6 text-center">
                  {step.title}
                </h3>
                <p className="text-[#000000] text-sm sm:text-base md:text-lg font-bold text-center whitespace-pre-line leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            {/* 矢印（最後のステップ以外に表示） */}
            {index < steps.length - 1 && (
              <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 transform -translate-y-1/2 hidden sm:block">
                <svg 
                  className="w-8 h-8 text-[#005a64]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

