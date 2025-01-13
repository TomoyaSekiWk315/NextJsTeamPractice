import Link from 'next/link'
import { Home } from 'lucide-react'

export function Breadcrumb() {
  return (
    <nav className="py-4">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="flex items-center gap-1 text-sm">
            <Home className="w-4 h-4" />
            ホーム
          </Link>
        </li>
        <li className="text-sm">{'>'}</li>
        <li className="text-sm">サービス</li>
      </ol>
    </nav>
  )
}

