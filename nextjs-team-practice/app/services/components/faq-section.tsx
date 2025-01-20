import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-16 bg-[#F3F3F3] my-16 rounded-[50px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="max-w-3xl bg-[#f3f3f3] rounded-2xl p-8">
          <div>
            <h3 className="text-xl font-bold text-left mb-10">○○について</h3>
            <p>
              ○○についてはテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

