import Link from 'next/link'

export function Header() {
  return (
    <header>
      <div className="bg-[#f3f3f3] py-1">
        <div className="container mx-auto px-4 flex justify-end gap-4 text-sm">
          <span>⏰ 営業時間: 9:00-18:00（土日祝除く）</span>
          <a href="tel:03-XXXX-XXXX" className="hover:underline">📞 03-XXXX-XXXX</a>
        </div>
      </div>
      <div className="border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            MVP塗装
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-gray-600 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-600 transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-gray-600 transition-colors">
                  施工事例
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-gray-600 transition-colors">
                  会社案内
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

