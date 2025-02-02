import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="w-full bg-[#F3F3F3] p-4 md:p-16">
        <div className="container mx-auto px-2 md:px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[28px] md:text-[48px] lg:text-[64px] font-bold mb-4 leading-tight">
              プロの塗装技術で
              <br className="sm:hidden" />
              建物に
              <br className="hidden sm:block md:hidden" />
              新しい輝きを
            </h2>
            <div className="space-y-1 md:space-y-2">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold">
                まずはお気軽にご相談ください。
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold">
                お客様に最適な施工をご提案いたします。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-[#005a64] text-white rounded-lg p-4 md:p-6 lg:p-8 flex flex-col justify-center min-h-[120px] md:min-h-[140px]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 justify-center">
                <Clock className="h-4 w-4 md:h-5 lg:h-6 flex-shrink-0" />
                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-bold leading-relaxed">
                  営業時間 月〜土 8:00〜19:00
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline">&nbsp;/&nbsp;</span>
                  日曜も対応可能
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center">
                <Phone className="h-4 w-4 md:h-5 lg:h-6 flex-shrink-0" />
                <span className="text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-none tracking-wider">
                  00-0000-0000
                </span>
              </div>
            </div>
            
            <Button 
              className="bg-[#005a64] hover:bg-[#005a64]/90 text-white h-full min-h-[120px] md:min-h-[140px] p-4 md:p-6 lg:p-8 flex items-center justify-center gap-3 md:gap-4 rounded-lg transition-colors duration-300"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <span className="text-[22px] md:text-[28px] lg:text-[36px] font-bold leading-none">
                  メールで相談
                </span>
                <span className="text-[22px] md:text-[28px] lg:text-[36px] leading-none ml-1">
                  →
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 