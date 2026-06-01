'use client'

import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section
      id="contact-section"
      className="bg-gradient-to-b from-background via-secondary to-background py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            تواصل معانا
          </h2>
          <p className="text-muted-foreground text-lg">
            تابعنا على وسائل التواصل الاجتماعي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facebook */}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:translate-y-[-4px]">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#1877F2] rounded-full group-hover:scale-110 transition-transform">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                فيسبوك
              </h3>
              <p className="text-muted-foreground">
                تابعنا على فيسبوك لآخر الأخبار
              </p>
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:translate-y-[-4px]">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-full group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                انستجرام
              </h3>
              <p className="text-muted-foreground">
                شاهد محتوانا على انستجرام
              </p>
            </div>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/?text=مرحبا"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:translate-y-[-4px]">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#25D366] rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                واتس اب
              </h3>
              <p className="text-muted-foreground">
                تواصل معنا عبر واتس اب
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
