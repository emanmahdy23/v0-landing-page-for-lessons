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
            className="px-12 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            احجز الآن
          </button>
        </div>
      </div>

      {/* Footer Section with Address and Contact */}
      <FooterSection />
    </main>
  )
}
