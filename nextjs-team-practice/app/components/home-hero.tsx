    'use client'

    import { useState, useEffect } from 'react'
    import { EstimateButton } from './shared/estimate-button'

    const slides = [
    {
        image: '/images/hero1.jpg',
        title: '建物の価値を守り、\n美しさを創造する',
        description: '確かな技術と信頼で、\nお客様の大切な資産を守ります'
    },
    {
        image: '/images/hero2.jpg',
        title: '30年以上の実績で\n安心の施工品質',
        description: '熟練の職人による\n丁寧な施工をお約束します'
    },
    {
        image: '/images/hero3.jpg',
        title: '建物を守る、街を彩る',
        description: '美しい街づくりに貢献します'
    }
    ]

    export function HomeHero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {/* スライド画像 */}
        {slides.map((slide, index) => (
            <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            </div>
        ))}

        {/* コンテンツ */}
        <div className="relative h-full">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <div className="text-white max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight whitespace-pre-line mb-4 sm:mb-6">
                {slides[currentSlide].title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide leading-relaxed whitespace-pre-line mb-8 sm:mb-10">
                {slides[currentSlide].description}
                </p>
                <EstimateButton className="text-lg sm:text-xl py-4 px-8 sm:px-12" />
            </div>
            </div>
        </div>

        {/* スライドインジケーター */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
            {slides.map((_, index) => (
            <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                onClick={() => setCurrentSlide(index)}
            />
            ))}
        </div>
        </section>
    )
    } 