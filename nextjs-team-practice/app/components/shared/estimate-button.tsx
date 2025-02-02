import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function EstimateButton() {
  return (
    <Link href="/contact" className="block flex-shrink-0">
      <Button 
        className="min-h-[48px] px-6 sm:px-8 bg-[#005a64] text-white hover:bg-[#005a64]/90 active:scale-95 transition-all duration-300 text-sm sm:text-base md:text-lg rounded-full"
      >
        お見積りはこちら →
      </Button>
    </Link>
  )
} 