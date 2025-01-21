import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 max-w-7xl mx-auto px-4">
      <div className="inline-flex items-center bg-[#f8f8f8] rounded-md py-2">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index === 0 ? (
              <Link href={item.href} className="px-4 text-gray-900 hover:text-gray-600 text-lg flex items-center gap-1">
                <Home className="w-5 h-5" />
                {item.label}
              </Link>
            ) : (
              <>
                <ChevronRight className="w-6 h-6 text-gray-900 font-bold mx-2" strokeWidth={2.5} />
                <span className="px-4 text-gray-700 text-lg">
                  {item.label}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

