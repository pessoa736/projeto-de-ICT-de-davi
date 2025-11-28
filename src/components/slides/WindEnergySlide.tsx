import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind } from "@/components/icons"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"
import { windAdvantages, windSteps } from "@/data/slides-data"

export function WindEnergySlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#000a1a] via-[#001020] to-[#001a0d]">
      <SlideContainer>
        <SlideHeader
          badge="Energia Renovável"
          badgeClass="bg-[#74C365] text-[#001F3F]"
          title="Energia Eólica"
          icon={
            <div className="p-4 bg-[#74C365]/30 rounded-2xl animate-pulse">
              <Wind />
            </div>
          }
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-black/50 border-[#74C365]/30 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#74C365]">O que é?</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                A energia eólica é obtida pela conversão da energia cinética do vento
                em energia elétrica por meio de <strong className="text-[#DBE64C]">aerogeradores</strong> (turbinas
                eólicas).
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#74C365]/30 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#74C365]">Como funciona?</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ol className="list-decimal list-inside space-y-2">
                  {windSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/50 border-[#74C365]/40 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#74C365]">✅ Vantagens</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  {windAdvantages.map((advantage, index) => (
                    <li key={index}>• {advantage}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#DBE64C]/40 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#DBE64C]">🌍 Brasil</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                O Brasil possui grande potencial eólico, especialmente na região{" "}
                <strong className="text-[#DBE64C]">Nordeste</strong>, onde os ventos são constantes e intensos ao
                longo do ano.
              </CardContent>
            </Card>
          </div>
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
