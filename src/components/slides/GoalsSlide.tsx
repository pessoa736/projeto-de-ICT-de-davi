import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"
import { odsGoals } from "@/data/slides-data"

export function GoalsSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#000a1a] via-[#001030] to-[#000a1a]">
      <SlideContainer>
        <SlideHeader
          badge="Metas até 2030"
          badgeClass="bg-[#74C365] text-[#001F3F]"
          title="Metas da ODS 7"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {odsGoals.map((goal) => (
            <Card
              key={goal.id}
              className="bg-black/50 border-[#74C365]/30 text-white backdrop-blur-sm"
            >
              <CardHeader>
                <Badge className={`w-fit ${goal.badgeColor}`}>Meta {goal.id}</Badge>
                <CardTitle className={`text-lg ${goal.titleColor}`}>
                  {goal.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">{goal.description}</CardContent>
            </Card>
          ))}
        </div>

        {/* Meta 7.b destacada */}
        <Card className="mt-4 bg-black/60 border-[#74C365]/40 text-white">
          <CardHeader>
            <Badge className="w-fit bg-[#00804C] text-white">Meta 7.b</Badge>
            <CardTitle className="text-lg text-[#74C365]">
              Infraestrutura e Tecnologia
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            Expandir a infraestrutura e modernizar a tecnologia para o fornecimento de
            serviços de energia modernos e sustentáveis para todos nos países em
            desenvolvimento.
          </CardContent>
        </Card>
      </SlideContainer>
    </SlideLayout>
  )
}
