"use client"

import { useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "@/components/icons"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoTo,
}: SlideNavigationProps) {
  // Navegação por teclado
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        onNext()
      } else if (e.key === "ArrowLeft") {
        onPrev()
      }
    },
    [onNext, onPrev]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#001F3F]/70 to-transparent">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Botão Anterior */}
        <Button
          variant="ghost"
          size="lg"
          onClick={onPrev}
          className="text-[#F6F7ED] hover:bg-[#F6F7ED]/20"
        >
          <ChevronLeft size={24} />
          <span className="hidden sm:inline ml-2">Anterior</span>
        </Button>

        {/* Indicadores */}
        <div className="flex gap-2 flex-wrap justify-center">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[#DBE64C] scale-125"
                  : "bg-[#F6F7ED]/40 hover:bg-[#F6F7ED]/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Botão Próximo */}
        <Button
          variant="ghost"
          size="lg"
          onClick={onNext}
          className="text-[#F6F7ED] hover:bg-[#F6F7ED]/20"
        >
          <span className="hidden sm:inline mr-2">Próximo</span>
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Contador */}
      <div className="text-center mt-2">
        <span className="text-[#F6F7ED]/60 text-sm">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  )
}

export function KeyboardHint() {
  return (
    <div className="fixed top-4 right-4 text-white/40 text-sm hidden md:block">
      Use ← → ou scroll para navegar
    </div>
  )
}
