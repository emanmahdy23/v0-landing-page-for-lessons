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
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* الجزء الأيمن - الرئيسية */}
        <button
          onClick={scrollToTop}
          className="text-base font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
        >
          الرئيسية
        </button>

        {/* الجزء الأيسر - روابط التنقل */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('address-section')}
            className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            العنوان
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            تواصل معانا
          </button>
        </div>
      </div>
    </nav>
  )
}
