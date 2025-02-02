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
    <nav aria-label="Breadcrumb" className="py-2 sm:py-4 max-w-7xl mx-auto px-4">
      <div className="inline-flex items-center bg-[#f8f8f8] rounded-md py-1 sm:py-2">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index === 0 ? (
              <Link href={item.href} className="px-2 sm:px-4 text-gray-900 hover:text-gray-600 text-sm sm:text-lg flex items-center gap-1">
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                {item.label}
              </Link>
            ) : (
              <>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 font-bold mx-1 sm:mx-2" strokeWidth={2.5} />
                <span className="px-2 sm:px-4 text-gray-700 text-sm sm:text-lg">
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

