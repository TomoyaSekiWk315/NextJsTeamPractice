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
    <section className="py-16">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
            <Label htmlFor="name" className="bg-[#005a64] text-white p-4">
              お名前
            </Label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-[#d9d9d9] p-4 w-full"
              placeholder="お名前を入力してください"
            />
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
            <Label htmlFor="phone" className="bg-[#005a64] text-white p-4">
              電話番号
            </Label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-[#d9d9d9] p-4 w-full"
              placeholder="電話番号を入力してください"
            />
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
            <Label htmlFor="address" className="bg-[#005a64] text-white p-4">
              ご住所
            </Label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="bg-[#d9d9d9] p-4 w-full"
              placeholder="ご住所を入力してください"
            />
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
            <Label htmlFor="email" className="bg-[#005a64] text-white p-4">
              メールアドレス
            </Label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#d9d9d9] p-4 w-full"
              placeholder="メールアドレスを入力してください"
            />
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
            <Label htmlFor="message" className="bg-[#005a64] text-white p-4">
              お問い合わせ内容
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-[#d9d9d9] p-4 w-full min-h-[150px]"
              placeholder="お問い合わせ内容を入力してください"
            />
          </div>

          <div className="flex items-center justify-center gap-4 border-2 border-[#005a64] p-4 rounded-lg max-w-md mx-auto">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              className="w-5 h-5 border-2 border-[#005a64]"
            />
            <Label htmlFor="privacy" className="text-base font-medium">
              プライバシーポリシーに同意します
            </Label>
          </div>

          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              disabled={!privacyAccepted || isSubmitting}
              className="bg-[#005a64] text-white px-16 py-6 rounded-full hover:bg-[#005a64]/90 text-xl w-full max-w-md"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

