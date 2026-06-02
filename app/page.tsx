'use client'

import { Navbar } from '@/components/navbar'
import { Carousel } from '@/components/carousel'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  const handleBookLesson = () => {
    // فتح نموذج جوجل في تاب جديد
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScYLubdSYkOxO90dnYT0mfVqHPS1p8apTDB163Dk0bKYo2vIA/viewform?usp=publish-editor',
      '_blank'
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Carousel */}
        <div className="mb-12">
          <Carousel />
        </div>

        {/* زرار الحجز */}
        <div className="flex justify-center">
          <button
            onClick={handleBookLesson}
            className="px-12 py-4 bg-[#d4a574] text-[#0f1f2e] rounded-lg font-bold text-lg hover:bg-[#e8b88f] transition-all shadow-lg hover:shadow-2xl active:scale-95 border-2 border-[#d4a574]"
          >
            ✨ احجز درسك الآن ✨
          </button>
        </div>
      </div>

      {/* Footer Section with Address and Contact */}
      <FooterSection />
    </main>
  )
}
