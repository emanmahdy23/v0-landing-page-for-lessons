'use client'

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0f1f2e] shadow-lg border-b border-[#2a3f52]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between relative">
        {/* خط ذهبي فاصل */}
        {/* <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#d4a574] to-transparent transform -translate-y-1/2"></div> */}

        {/* الجزء الأيمن - اسم المعلم */}
        {/* <button
          onClick={scrollToTop}
          className="relative z-10 px-4 py-2 text-2xl font-bold text-[#ffffff] hover:text-[#d4a574] transition-colors cursor-pointer"
        >
          ✨ محمد الدسونسي ✨
        </button> */}

        {/* الجزء الأيسر - أزرار التنقل */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('address-section')}
            className="relative z-10 px-6 py-2 text-[#d4a574] font-semibold hover:text-[#ffffff] transition-colors cursor-pointer text-sm"
          >
            العنوان
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="relative z-10 px-6 py-2 border-2 border-[#d4a574] rounded-full text-[#d4a574] font-semibold hover:bg-[#d4a574] hover:text-[#0f1f2e] transition-all cursor-pointer text-sm"
          >
            تواصل معانا
          </button>
        </div>
      </div>
    </nav>
  )
}
