'use client'

import React from 'react'

export function BeforeAfter() {
  return (
    <section className="py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8">ビフォーアフター</h2>
        <div className="flex items-center justify-center gap-8 w-full max-w-6xl mx-auto">
          <div className="flex-1 bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            画像1
          </div>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-[#000000]">&gt;</span>
          </div>
          <div className="flex-1 bg-[#404040] aspect-video rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            画像2
          </div>
        </div>
      </div>
    </section>
  )
}

