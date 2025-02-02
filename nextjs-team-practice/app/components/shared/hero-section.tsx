interface HeroSectionProps {
    title: string;
    description?: string;
    titleTag?: 'h1' | 'h2';
  }
  
  export function HeroSection({ 
    title, 
    description = "確かな技術と信頼で、建物の価値を守り続けます",
    titleTag: TitleTag = 'h1'
  }: HeroSectionProps) {
    return (
      <section className="bg-[#22d6dd] text-center py-24">
        <div className="container mx-auto px-4">
          <TitleTag className="text-3xl md:text-4xl lg:text-[64px] font-bold mb-4">{title}</TitleTag>
          <p className="text-lg md:text-xl lg:text-[32px]">{description}</p>
        </div>
      </section>
    )
  } 