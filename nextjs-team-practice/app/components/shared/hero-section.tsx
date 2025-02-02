interface HeroSectionProps {
    title: string;
    description?: string;
    titleTag?: 'h1' | 'h2';
  }
  
  export function HeroSection({ 
    title, 
    description = "概要説明文：32px",
    titleTag: TitleTag = 'h1'
  }: HeroSectionProps) {
    return (
      <section className="bg-[#22d6dd] text-center py-12 md:py-24">
        <div className="pt-4 md:pt-8 lg:pt-0 px-4">
          <TitleTag className="text-3xl md:text-5xl lg:text-[64px] font-bold mb-2 md:mb-4 leading-tight">
            {title}
          </TitleTag>
          <p className="text-lg md:text-2xl lg:text-[32px]">{description}</p>
        </div>
      </section>
    )
  } 