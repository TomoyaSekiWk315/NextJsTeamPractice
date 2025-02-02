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
      <section className="bg-[#22d6dd] text-center py-24">
        <div className="pt-8 md:pt-0">
          <TitleTag className="text-[64px] font-bold mb-4">{title}</TitleTag>
          <p className="text-[32px]">{description}</p>
        </div>
      </section>
    )
  } 