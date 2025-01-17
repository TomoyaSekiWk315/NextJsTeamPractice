import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-5 bg-white">
      <div className="w-full bg-[#F3F3F3] p-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              プロの塗装技術で、建物に新しい輝きを
            </h2>
            <p className="mb-2">まずはお気軽にご相談ください。</p>
            <p>お客様に最適な施工をご提案いたします。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#005a64] text-white rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">営業時間 月〜土 08:00〜19:00 / 日曜も対応可能</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
                <span className="text-2xl font-bold">00-0000-0000</span>
              </div>
            </div>
            
            <Button 
              className="bg-[#005a64] hover:bg-[#005a64]/90 text-white h-auto py-6"
            >
              <Mail className="h-6 w-6 mr-2" />
              メールで相談 →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

