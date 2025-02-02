import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="w-full bg-[#F3F3F3] p-4 md:p-16">
        <div className="container mx-auto px-2 md:px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold mb-4 leading-tight">
              プロの塗装技術で、
              <br />
              建物に新しい輝きを
            </h2>
            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-bold mb-2">まずはお気軽にご相談ください。</p>
            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-bold">お客様に最適な施工をご提案いたします。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-[#005a64] text-white rounded-lg p-3 md:p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4 justify-center">
                <Clock className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                <span className="text-[10px] md:text-[12px] lg:text-[16px] font-bold whitespace-nowrap">
                  営業時間 月〜土 08:00〜19:00 日曜も対応可能
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-4 justify-center">
                <Phone className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                <span className="text-[20px] md:text-[24px] lg:text-[48px] font-bold leading-none">00-0000-0000</span>
              </div>
            </div>
            
            <Button 
              className="bg-[#005a64] hover:bg-[#005a64]/90 text-white h-full p-3 md:p-6 lg:p-8 flex items-center justify-center gap-2 md:gap-4 rounded-lg [&_svg]:w-4 md:[&_svg]:w-8 lg:[&_svg]:w-12 [&_svg]:h-4 md:[&_svg]:h-8 lg:[&_svg]:h-12"
            >
              <Mail className="flex-shrink-0" />
              <span className="text-[20px] md:text-[32px] lg:text-[48px] font-bold leading-none whitespace-nowrap">
                メールで相談
              </span>
              <span className="text-[20px] md:text-[32px] lg:text-[48px] leading-none">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 