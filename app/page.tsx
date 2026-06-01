'use client'

import { Navbar } from '@/components/navbar'
import { Carousel } from '@/components/carousel'

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
            احجز درسك الآن
          </button>
        </div>

        {/* معلومات إضافية */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              دروس احترافية
            </h3>
            <p className="text-muted-foreground">
              معلمين ذوي خبرة عالية لتقديم أفضل تجربة تعليمية
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              وقت مناسب
            </h3>
            <p className="text-muted-foreground">
              احجز الدرس في الوقت الذي يناسبك بسهولة
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              تواصل سهل
            </h3>
            <p className="text-muted-foreground">
              نحن هنا للإجابة على جميع استفساراتك
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
