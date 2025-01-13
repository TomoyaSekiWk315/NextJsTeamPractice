interface CustomerVoiceProps {
  testimonial: string
}

export function CustomerVoice({ testimonial }: CustomerVoiceProps) {
  return (
    <section className="py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8">お客様の声</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-sm leading-relaxed">
            {testimonial}
          </blockquote>
        </div>
      </div>
    </section>
  )
}

