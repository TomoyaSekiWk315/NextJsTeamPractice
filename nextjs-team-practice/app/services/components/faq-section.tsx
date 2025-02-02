import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "よくある質問1",
    answer: "回答テキストが入ります。回答テキストが入ります。回答テキストが入ります。"
  },
  {
    question: "よくある質問2",
    answer: "回答テキストが入ります。回答テキストが入ります。回答テキストが入ります。"
  },
  {
    question: "よくある質問3",
    answer: "回答テキストが入ります。回答テキストが入ります。回答テキストが入ります。"
  }
]

export function FAQSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F3F3F3] my-8 sm:my-12 md:my-16 rounded-[15px] sm:rounded-[25px] md:rounded-[50px]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">よくある質問</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg overflow-hidden border-none shadow-sm"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors duration-300 text-left">
                  <span className="text-sm sm:text-base font-bold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

