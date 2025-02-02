import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  ホーム: {
    href: "/",
    links: [
      { title: "サービス概要", href: "#services" },
      { title: "当社の特徴", href: "#features" },
      { title: "施工の流れ", href: "#process" }
    ]
  },
  サービス: {
    href: "/services",
    links: [
      { title: "外壁塗装", href: "/services/exterior-wall-painting" },
      { title: "屋根塗装", href: "/services/roof-painting" },
      { title: "特殊塗装", href: "/services/special-painting" }
    ]
  },
  施工事例: {
    href: "/works",
    links: [
      { title: "施工事例一覧", href: "/works" }
    ]
  },
  会社案内: {
    href: "/company",
    links: [
      { title: "企業理念", href: "/company#philosophy" },
      { title: "会社概要", href: "/company#overview" },
      { title: "沿革", href: "/company#history" }
    ]
  },
  お問い合わせ: {
    href: "/contact",
    links: []
  }
}

export function Footer() {
  return (
    <footer className="bg-[#F3F3F3]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-6 lg:gap-12">
          {/* 左カラム：会社情報 */}
          <div className="md:col-span-2 space-y-4 md:space-y-6 text-center md:text-left">
            <Link href="/" className="inline-block group">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#005a64] transition-colors">
                MVP塗装
              </h2>
            </Link>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              確かな技術と丁寧な工事な姿勢で、
              <br className="hidden md:block" />
              あなたの大切な空間を新たな姿にします
            </p>
          </div>

          {/* 右カラム：ナビゲーション */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {Object.entries(footerLinks).map(([category, { href, links }]) => (
              <div key={category} className="space-y-2 sm:space-y-3">
                <Link 
                  href={href}
                  className="inline-block text-sm sm:text-base font-bold text-gray-900 hover:text-[#005a64] transition-colors"
                >
                  {category}
                </Link>
                {links.length > 0 && (
                  <ul className="space-y-1.5 sm:space-y-2">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link 
                          href={link.href} 
                          className="text-[11px] sm:text-xs text-gray-600 hover:text-[#005a64] transition-colors block"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {category === 'お問い合わせ' && (
                  <div className="pt-1">
                    <Link href="/contact" className="block">
                      <Button 
                        className="w-full min-h-[24px] px-1 text-[8px] sm:text-[9px] bg-[#005a64] text-white hover:bg-[#005a64]/90 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-0.5"
                      >
                        お見積り
                        <ArrowRight className="h-2 w-2 flex-shrink-0" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 md:mt-16 pt-4 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 text-center md:text-left">
              © 2024 MVP塗装 All Rights Reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-[10px] sm:text-xs md:text-sm text-gray-600 hover:text-[#005a64] transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link 
                href="/terms" 
                className="text-[10px] sm:text-xs md:text-sm text-gray-600 hover:text-[#005a64] transition-colors"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

