'use client'

import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* العنوان */}
        <div className="flex-1">
          <p className="text-sm text-foreground font-medium">
            📍 دمنهور - اسفل الكوبري العلوي بجوار كوكتيل للعصير
          </p>
        </div>

        {/* أيقونات التواصل */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-medium">تواصل معانا</span>
          <div className="flex gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
              title="تابعنا على فيسبوك"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
              title="تابعنا على انستجرام"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://wa.me/?text=مرحبا"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
              title="تواصل معنا عبر واتس اب"
            >
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
