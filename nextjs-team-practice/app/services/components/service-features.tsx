'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const features = [
  {
    title: "特徴1",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  },
  {
    title: "特徴2",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  },
  {
    title: "特徴3",
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
]

const AUTO_SLIDE_INTERVAL = 5000; // 5秒ごとに切り替え

export function ServiceFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  // 自動スライド
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <div className="space-y-8 sm:space-y-12 mb-[20px]">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">当社のサービスは、</h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>

      {/* スライダー */}
      <div className="relative max-w-[1000px] mx-auto">
        <div 
          className="relative bg-[#22d6dd] rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* スライドコンテナ */}
          <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center">
            {/* スライドトランジション */}
            <div 
              className="w-full px-6 sm:px-12 py-8 sm:py-12"
              style={{
                opacity: 1,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                  {features[currentIndex].title}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                  {features[currentIndex].description}
                </p>
              </div>
            </div>

            {/* 前へ・次へボタン */}
            <button
              onClick={() => {
                prevSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              aria-label="前へ"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              aria-label="次へ"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
          </div>

          {/* インジケーター */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`スライド${index + 1}へ`}
              />
            ))}
          </div>

          {/* プログレスバー */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div 
              className={`h-full bg-white/50 transition-all duration-[5000ms] ease-linear ${
                isPaused ? 'w-0' : 'w-full'
              }`}
              style={{ 
                transitionProperty: 'width',
                width: isPaused ? '0%' : '100%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

