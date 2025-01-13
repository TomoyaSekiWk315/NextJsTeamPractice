import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: '屋根塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    title: '外壁塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    title: '特殊塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
]

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">サービス概要</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-[#f3f3f3] shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm mb-4">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300"
                >
                  詳細を見る→
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

