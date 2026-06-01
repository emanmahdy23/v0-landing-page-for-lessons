'use client'

import { MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function FooterSection() {
  return (
    <section
      id="address-section"
      className="bg-gradient-to-b from-secondary to-background py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* العنوان */}
          <div
            id="address-section-content"
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  موقعنا
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  دمنهور - اسفل الكوبري العلوي بجوار كوكتيل للعصير
                </p>
              </div>
            </div>
          </div>

          {/* التواصل معانا */}
          <div
            id="contact-section"
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              تواصل معانا
            </h3>
            <div className="flex items-center justify-center gap-6">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/mido.eldesonsy"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title="تابعنا على فيسبوك"
              >
                <div className="p-4 bg-[#1877F2] rounded-full group-hover:scale-125 transition-transform hover:shadow-lg">
                  <Facebook className="w-7 h-7 text-white" />
                </div>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/mohamed__eldesonsy?igsh=a2I2MWxpNXY3Z3cx"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title="تابعنا على انستجرام"
              >
                <div className="p-4 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-full group-hover:scale-125 transition-transform hover:shadow-lg">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/201147819248?text=مرحبا"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title="تواصل معنا عبر واتس اب"
              >
                <div className="p-4 bg-[#25D366] rounded-full group-hover:scale-125 transition-transform hover:shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
