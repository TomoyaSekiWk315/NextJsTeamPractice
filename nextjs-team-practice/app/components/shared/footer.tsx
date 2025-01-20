import Link from "next/link"
import { Button } from "@/components/ui/button"

const footerLinks = {
  ホーム: [
    { title: "サービス概要", href: "#" },
    { title: "よくある質問", href: "#" }
  ],
  サービス: [
    { title: "サービス一覧", href: "/services" },
    { title: "料金プラン", href: "#" }
  ],
  施工事例: [
    { title: "施工事例一覧", href: "/works" },
    { title: "料金プラン", href: "#" }
  ],
  会社案内: [
    { title: "会社概要", href: "/company" },
    { title: "事業内容", href: "#" },
    { title: "アクセス情報", href: "#" }
  ],
  お問い合わせ: []
}

export function Footer() {
  return (
    <footer className="bg-[#F3F3F3] py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">MVP塗装</h2>
            <p className="text-sm text-gray-600">
              確かな技術と丁寧な工事な姿勢で、
              <br />
              あなたの大切な空間を新たな姿にします
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold mb-4">{category}</h3>
                {links.length > 0 && (
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {category === 'お問い合わせ' && (
                  <Link href="/contact">
                    <Button className="bg-[#005a64] text-white hover:bg-[#005a64]/90">
                      お問い合わせ →
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 MVP塗装
        </div>
      </div>
    </footer>
  )
}

