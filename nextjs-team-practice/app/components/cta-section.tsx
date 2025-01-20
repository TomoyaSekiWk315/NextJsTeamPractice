import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock } from 'lucide-react'

// コメント
export function CTASection() {
  return (
    <section className="py-16">
      <div className="w-full bg-[#F3F3F3] p-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[64px] font-bold mb-4">
              プロの塗装技術で、建物に新しい輝きを
            </h2>
            <p className="text-[18px] font-bold mb-2">まずはお気軽にご相談ください。</p>
            <p className="text-[18px] font-bold">お客様に最適な施工をご提案いたします。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#005a64] text-white rounded-lg p-8 flex flex-col justify-center ">
              <div className="flex items-center gap-4 mb-4 whitespace-nowrap justify-center">
                <Clock className="h-6 w-6 flex-shrink-0" />
                <span className="text-[16px] font-bold">営業時間 月〜土 08:00〜19:00 / 日曜も対応可能</span>
              </div>
              <div className="flex items-center gap-4 whitespace-nowrap justify-center">
                <Phone className="h-6 w-6 flex-shrink-0" />
                <span className="text-[48px] font-bold leading-none">00-0000-0000</span>
              </div>
            </div>
            
            <Button 
              className="bg-[#005a64] hover:bg-[#005a64]/90 text-white h-full p-8 flex items-center justify-center gap-4 rounded-lg [&_svg]:w-12 [&_svg]:h-12"
            >
              <Mail className="flex-shrink-0" />
              <span className="text-[48px] font-bold leading-none">メールで相談</span>
              <span className="text-[48px] leading-none">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

