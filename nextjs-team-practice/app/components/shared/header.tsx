'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
      if (isOpen) setIsOpen(false)
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="bg-[#f3f3f3] py-1">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-6 text-sm">
          <span className="flex items-center justify-center sm:justify-start gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="whitespace-nowrap">営業時間: 9:00-18:00（土日祝除く）</span>
          </span>
          <a href="tel:03-XXXX-XXXX" className="flex items-center justify-center sm:justify-start gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="whitespace-nowrap">03-XXXX-XXXX</span>
          </a>
        </div>
      </div>
      <div className="border-b bg-white relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 hover:text-black transition-colors"
          >
            MVP塗装
          </Link>
          
          {/* ハンバーガーメニューボタン */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* デスクトップメニュー */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              {[
                { href: '/', label: 'ホーム', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { href: '/services', label: 'サービス', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { href: '/works', label: '施工事例', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { href: '/company', label: '会社案内', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                { href: '/contact', label: 'お問い合わせ', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              ].map(({ href, label, icon }) => (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={`
                      flex items-center gap-1.5
                      py-2 px-1
                      transition-all
                      duration-300
                      hover:text-gray-900 hover:font-medium
                      ${pathname === href ? 'text-gray-900 font-medium' : 'text-gray-600'}
                      group
                    `}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                    {label}
                    <span
                      className={`
                        absolute
                        -bottom-[1px]
                        left-0
                        w-full
                        h-0.5
                        bg-gray-900
                        transform
                        origin-left
                        transition-all
                        duration-300
                        ${pathname === href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                        group-hover:scale-x-100 group-hover:opacity-100
                      `}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* オーバーレイ背景 - クリックで閉じられるように */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* モバイルメニュー */}
          <div
            className={`
              fixed top-0 right-0 w-[300px] h-screen
              bg-white shadow-xl
              transform transition-transform duration-300 ease-out
              lg:hidden
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            style={{ paddingTop: '89px' }}
          >
            <div className="border-t relative">
              {/* 閉じるボタンを上部に移動 */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-7 right-4 p-2 pb-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="メニューを閉じる"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="px-4 py-4">
                <ul className="flex flex-col gap-2">
                  {[
                    { href: '/', label: 'ホーム', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                    { href: '/services', label: 'サービス', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                    { href: '/works', label: '施工事例', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
                    { href: '/company', label: '会社案内', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                    { href: '/contact', label: 'お問い合わせ', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                  ].map(({ href, label, icon }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`
                          flex items-center gap-2 p-3 rounded-lg
                          transition-colors duration-200
                          hover:bg-gray-100
                          ${pathname === href ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600'}
                        `}
                        onClick={() => setIsOpen(false)}
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                        </svg>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

