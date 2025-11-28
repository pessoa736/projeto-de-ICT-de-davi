import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "@/components/icons"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"

export function OdsSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#000a1a] via-[#001030] to-[#000a1a]">
      <SlideContainer>
        <SlideHeader
          badge="Organização das Nações Unidas"
          badgeClass="bg-[#1E488F] text-white"
          title="O que são as ODS?"
          icon={
            <div className="p-4 bg-[#1E488F]/50 rounded-2xl">
              <Globe />
            </div>
          }
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-black/40 border-[#74C365]/30 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#DBE64C]">Agenda 2030</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-white">
              As <strong className="text-[#DBE64C]">ODS</strong> (Objetivos de Desenvolvimento Sustentável) fazem
              parte da <strong className="text-[#DBE64C]">Agenda 2030 da ONU</strong>, um plano global criado para
              promover o desenvolvimento sustentável em áreas sociais, ambientais e
              econômicas.
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-[#74C365]/30 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#DBE64C]">17 Objetivos</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-white">
              Ao todo, existem <strong className="text-[#DBE64C]">17 ODS</strong>, cada uma com metas específicas
              que orientam governos, organizações e cidadãos a enfrentar desafios como
              pobreza, desigualdade, degradação ambiental e energia limpa.
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-black/50 rounded-2xl border border-[#DBE64C]/40">
          <p className="text-xl text-center text-white">
            💡 As ODS buscam garantir{" "}
            <strong className="text-[#DBE64C]">condições dignas de vida para todas as pessoas</strong>, sem
            comprometer os recursos das futuras gerações.
          </p>
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
