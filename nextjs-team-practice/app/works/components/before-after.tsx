'use client'

import React from 'react'

export function BeforeAfter() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">ビフォーアフター</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
          <div className="w-full sm:flex-1 bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
            Before
          </div>
          <div className="flex items-center justify-center rotate-90 sm:rotate-0">
            <span className="text-3xl sm:text-4xl font-bold text-[#000000]">&gt;</span>
          </div>
          <div className="w-full sm:flex-1 bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
            After
          </div>
        </div>
      </div>
    </section>
  )
}

