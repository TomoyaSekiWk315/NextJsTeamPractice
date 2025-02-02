interface HeroSectionProps {
    title: string;
    description?: string;
    titleTag?: 'h1' | 'h2';
    className?: string;
  }
  
  export function HeroSection({ 
    title, 
    description,
    titleTag: TitleTag = 'h1',
    className = ''
  }: HeroSectionProps) {
    return (
      <section className={`bg-[#22d6dd] text-center py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
        <div className="container mx-auto px-4 max-w-[1000px]">
          <TitleTag className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold tracking-wider leading-tight">
            {title}
          </TitleTag>
          {description && (
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 mx-auto leading-relaxed tracking-wide whitespace-pre-line">
              {description}
            </p>
          )}
        </div>
      </section>
    )
  } 