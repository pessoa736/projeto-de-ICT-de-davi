import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Leaf, Target } from "@/components/icons"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"
import { odsPillars } from "@/data/slides-data"

const iconMap = {
  zap: Zap,
  leaf: Leaf,
  target: Target,
}

export function Ods7Slide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#001a0d] via-[#002a15] to-[#000a1a]">
      <SlideContainer>
        <SlideHeader
          badge="ODS 7"
          badgeClass="bg-[#DBE64C] text-[#001F3F]"
          title="Energia Acessível e Limpa"
          subtitle="Os três pilares fundamentais"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {odsPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <Card
                key={pillar.title}
                className={`bg-black/50 ${pillar.border} text-white backdrop-blur-sm hover:scale-105 transition-transform`}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 ${pillar.bgIcon} rounded-full w-fit`}>
                    <Icon />
                  </div>
                  <CardTitle className={`text-xl ${pillar.titleColor}`}>
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white">
                  {pillar.description}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
