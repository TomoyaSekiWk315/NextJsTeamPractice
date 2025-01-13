import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          プロの塗装技術で、建物に新しい輝きを
        </h2>
        <p className="mb-8">
          まずはお気軽にご相談ください。
          <br />
          お客様に最適な施工をご提案いたします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Button
            variant="default"
            className="bg-[#005a64] hover:bg-[#005a64]/90 text-white p-8 h-auto flex-col gap-2"
          >
            <Phone className="h-6 w-6" />
            <div className="text-xs">営業時間 月〜土 08:00〜19:00 / 日曜も対応可能</div>
            <div className="text-2xl font-bold">00-0000-0000</div>
          </Button>
          <Button
            variant="default"
            className="bg-[#005a64] hover:bg-[#005a64]/90 text-white p-8 h-auto"
          >
            <Mail className="h-6 w-6 mr-2" />
            メールで相談 →
          </Button>
        </div>
      </div>
    </section>
  )
}

