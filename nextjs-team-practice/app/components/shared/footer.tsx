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
      {/* メインフッター */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* 左カラム：会社情報 */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#005a64] transition-colors">
                MVP塗装
              </h2>
            </Link>
            <p className="text-base text-gray-600 leading-relaxed">
              確かな技術と丁寧な工事な姿勢で、
              <br />
              あなたの大切な空間を新たな姿にします
            </p>
          </div>

          {/* 右カラム：ナビゲーション */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-2  md:gap-4">
            {Object.entries(footerLinks).map(([category, { href, links }]) => (
              <div key={category} className="space-y-4">
                <Link 
                  href={href}
                  className="inline-block text-lg font-bold text-gray-900 hover:text-[#005a64] transition-colors"
                >
                  {category}
                </Link>
                {links.length > 0 && (
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link 
                          href={link.href} 
                          className="text-gray-600 hover:text-[#005a64] transition-colors block text-sm"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {category === 'お問い合わせ' && (
                  <div className="pt-0">
                    <Link href="/contact">
                      <Button className="bg-[#005a64] text-white hover:bg-[#005a64]/90 shadow-md hover:shadow-lg transition-all duration-300 w-full h-8 px-2">
                        <span className="text-[10px]">見積もりを依頼</span>
                        <ArrowRight className="h-2.5 w-2.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 MVP塗装 All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-[#005a64] transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#005a64] transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

