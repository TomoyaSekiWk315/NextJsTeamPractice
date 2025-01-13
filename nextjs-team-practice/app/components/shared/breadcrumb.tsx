import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            {index === items.length - 1 ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

