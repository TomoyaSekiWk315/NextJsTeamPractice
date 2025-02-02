'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // Handle success (e.g., show success message, reset form)
  }

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
            <Label htmlFor="name" className="bg-[#005a64] text-white p-2 md:p-4 text-center md:text-left">
              お名前
            </Label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-[#d9d9d9] p-2 md:p-4 w-full text-sm md:text-base"
              placeholder="お名前を入力してください"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
            <Label htmlFor="phone" className="bg-[#005a64] text-white p-2 md:p-4 text-center md:text-left">
              電話番号
            </Label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-[#d9d9d9] p-2 md:p-4 w-full text-sm md:text-base"
              placeholder="電話番号を入力してください"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
            <Label htmlFor="address" className="bg-[#005a64] text-white p-2 md:p-4 text-center md:text-left">
              ご住所
            </Label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="bg-[#d9d9d9] p-2 md:p-4 w-full text-sm md:text-base"
              placeholder="ご住所を入力してください"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
            <Label htmlFor="email" className="bg-[#005a64] text-white p-2 md:p-4 text-center md:text-left">
              メールアドレス
            </Label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#d9d9d9] p-2 md:p-4 w-full text-sm md:text-base"
              placeholder="メールアドレスを入力してください"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
            <Label htmlFor="message" className="bg-[#005a64] text-white p-2 md:p-4 text-center md:text-left">
              お問い合わせ内容
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-[#d9d9d9] p-2 md:p-4 w-full min-h-[120px] md:min-h-[150px] text-sm md:text-base"
              placeholder="お問い合わせ内容を入力してください"
            />
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-4 border-2 border-[#005a64] p-3 md:p-4 rounded-lg max-w-md mx-auto">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#005a64]"
            />
            <Label htmlFor="privacy" className="text-sm md:text-base font-medium">
              プライバシーポリシーに同意します
            </Label>
          </div>

          <div className="flex justify-center pt-4 md:pt-8">
            <Button
              type="submit"
              disabled={!privacyAccepted || isSubmitting}
              className="bg-[#005a64] text-white px-8 md:px-16 py-4 md:py-6 rounded-full hover:bg-[#005a64]/90 text-base md:text-xl w-full max-w-md"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

