import { Badge } from "@/components/ui/badge"
import { SlideLayout, SlideContainer } from "./SlideLayout"

export function CoverSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#001020] via-[#001F3F] to-[#00301a]">
      <SlideContainer maxWidth="4xl" centered>
        <div className="animate-fade-in">
          {/* Logo ODS 7 */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-[#DBE64C] rounded-full flex items-center justify-center shadow-2xl shadow-[#DBE64C]/30">
              <span className="text-6xl font-bold text-[#001F3F]">7</span>
            </div>
          </div>

          <Badge className="mb-6 bg-[#DBE64C] text-[#001F3F] text-lg px-4 py-2">
            ODS 7 • Agenda 2030
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#DBE64C] to-[#74C365] bg-clip-text text-transparent">
            Energia Acessível e Limpa
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Garantir acesso a energia barata, confiável, sustentável e renovável para todos
          </p>

          {/* Informações da UFRN */}
          <div className="flex flex-col items-center gap-4 mt-12">
            <p className="text-white/80 text-sm">
              Disciplina: ICT – Introdução à Ciência e Tecnologia
            </p>
            <p className="text-white/80 text-sm">
              Universidade Federal do Rio Grande do Norte (UFRN)
            </p>
            <p className="text-[#DBE64C] text-sm font-semibold">
              Curso de Ciência e Tecnologia (ECT)
            </p>
          </div>
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
