'use client'

import { MapPin } from 'lucide-react'

export function AddressSection() {
  return (
    <section
      id="address-section"
      className="bg-gradient-to-b from-secondary to-background py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            موقعنا
          </h2>
          <p className="text-muted-foreground text-lg">
            تجدنا في المكان التالي
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                دمنهور
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                اسفل الكوبري العلوي بجوار كوكتيل للعصير
              </p>
              <p className="text-base text-muted-foreground mt-4">
                يمكنك زيارتنا في هذا الموقع المتميز
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
