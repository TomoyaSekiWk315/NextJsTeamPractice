'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // スクロール位置を監視
  useEffect(() => {
    const toggleVisibility = () => {
      // 200px以上スクロールしたらボタンを表示
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-[#005a64] text-white p-3 rounded-full shadow-lg hover:bg-[#005a64]/90 active:scale-95 transition-all duration-300"
      aria-label="ページトップへ戻る"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
} 