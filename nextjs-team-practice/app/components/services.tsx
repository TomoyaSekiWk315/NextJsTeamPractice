import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const services = [
  {
    title: '屋根塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    link: '/services/roof-painting'
  },
  {
    title: '外壁塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    link: '/services/exterior-wall-painting'
  },
  {
    title: '特殊塗装',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    link: '/services/special-painting'
  },
]

export function Services() {
  return (
    <section className="py-16">
      <div className="w-full bg-[#F3F3F3] rounded-[50px] p-16">
        <h2 className="text-3xl font-bold text-center mb-12">サービス概要</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <CardContent className="p-6 bg-[#FFFFFF]">
                <h3 className="text-[32px] font-bold mb-4">{service.title}</h3>
                <p className="text-sm mb-4">{service.description}</p>
                <Link href={service.link} passHref>
                  <Button 
                    variant="outline" 
                    className="w-[45%] border-[#000000] shadow-md hover:bg-[#000000] hover:text-white transition-colors duration-300"
                  >
                    詳細を見る→
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

