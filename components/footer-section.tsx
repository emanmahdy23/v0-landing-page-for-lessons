'use client'

import { MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function FooterSection() {
  return (
    <>
      {/* قسم العنوان */}
      <section
        id="address-section"
        className="bg-[#0f1f2e] py-12 px-4 border-b border-[#2a3f52]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <MapPin className="w-8 h-8 text-[#d4a574]" />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#d4a574] mb-2">
                موقعنا
              </h3>
              <p className="text-[#a0b0c0] text-lg">
                دمنهور - اسفل الكوبري العلوي بجوار كوكتيل للعصير
              </p>
            </div>
            <MapPin className="w-8 h-8 text-[#d4a574]" />
          </div>
        </div>
      </section>

      {/* قسم التواصل معانا */}
      <section
        id="contact-section"
        className="bg-[#0f1f2e] py-16 px-4 relative"
      >
        <div className="max-w-6xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">تواصل </span>
            <span className="text-[#d4a574]">معانا</span>
          </h2>
          <p className="text-[#a0b0c0] text-lg max-w-2xl mx-auto">
            متواجدون على منصات التواصل الاجتماعي — تابعونا ودايماً هنرد عليكم
          </p>
        </div>

        {/* الأيقونات */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/201147819248?text=مرحبا"
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center"
            title="تواصل معنا عبر واتس اب"
          >
            <div className="p-5 bg-[#25D366] rounded-2xl group-hover:scale-110 transition-transform hover:shadow-2xl mb-3 inline-block">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <p className="text-[#25D366] font-semibold">واتساب</p>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/mohamed__eldesonsy?igsh=a2I2MWxpNXY3Z3cx"
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center"
            title="تابعنا على انستجرام"
          >
            <div className="p-5 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-2xl group-hover:scale-110 transition-transform hover:shadow-2xl mb-3 inline-block">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <p className="text-[#e6683c] font-semibold">انستجرام</p>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/mido.eldesonsy"
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center"
            title="تابعنا على فيسبوك"
          >
            <div className="p-5 bg-[#1877F2] rounded-2xl group-hover:scale-110 transition-transform hover:shadow-2xl mb-3 inline-block">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <p className="text-[#1877F2] font-semibold">فيسبوك</p>
          </Link>
        </div>

        {/* خط فاصل مع نقطة ذهبية */}
        <div className="flex items-center gap-4 px-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2a3f52]"></div>
          <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2a3f52]"></div>
        </div>
      </div>
    </section>
    </>
  )
}
