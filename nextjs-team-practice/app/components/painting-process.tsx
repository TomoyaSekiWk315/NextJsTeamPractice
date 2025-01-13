import { Button } from "@/components/ui/button"

const steps = [
  { id: 1, title: "STEP1", description: "無料見積もり\n現地調査" },
  { id: 2, title: "STEP2", description: "無料見積もり\n現地調査" },
  { id: 3, title: "STEP3", description: "無料見積もり\n現地調査" }
]

export function PaintingProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">塗装の流れ</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16">
          {steps.map((step) => (
            <div key={step.id} className="w-full md:w-[320px]">
              <div className="step-container">
                <div className="bg-[#ffffff] p-8">
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
        <div className="text-center">
          <Button className="bg-[#005a64] text-[#ffffff] px-16 py-6 rounded-full hover:bg-[#005a64]/90 text-xl font-bold">
            お見積りはこちら →
          </Button>
        </div>
      </div>
    </section>
  )
}

