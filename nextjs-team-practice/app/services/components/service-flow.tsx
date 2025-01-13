import { Button } from "@/components/ui/button"

const steps = [
  { id: 1, title: "STEP1", description: "無料見積もり\n現地調査" },
  { id: 2, title: "STEP2", description: "無料見積もり\n現地調査" },
  { id: 3, title: "STEP3", description: "無料見積もり\n現地調査" }
]

export function ServiceFlow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16">
      {steps.map((step) => (
        <div key={step.id} className="w-full md:w-[320px]">
          <div className="step-container">
            <div className="bg-white p-8">
              <h3 className="text-[#000000] text-[32px] font-bold mb-6 text-center">
                {step.title}
              </h3>
              <p className="text-[#000000] text-lg font-bold text-center whitespace-pre-line leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

