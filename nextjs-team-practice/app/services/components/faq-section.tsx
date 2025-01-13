import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="max-w-3xl mx-auto bg-[#f3f3f3] rounded-2xl p-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-bold">
                ○○について
              </AccordionTrigger>
              <AccordionContent>
                ○○についてはテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキス
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

