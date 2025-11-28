// Dados dos membros da equipe
export const teamMembers = [
  {
    name: "Davi dos Santos Passos",
    role: "Desenvolvedor do Site e Pesquisa",
    icon: "users",
    gradient: "from-[#DBE64C]/20 to-[#74C365]/20",
    border: "border-[#DBE64C]/40",
    textColor: "text-[#DBE64C]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#DBE64C]/20",
  },
  {
    name: "José Pedro Barros dos Santos",
    role: "Banner e Pesquisa",
    icon: "users",
    gradient: "from-[#1E488F]/30 to-[#001F3F]/30",
    border: "border-[#1E488F]/40",
    textColor: "text-[#74C365]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#1E488F]/20",
  },
  {
    name: "Luiz Guilherme Marinho Da Cunha",
    role: "Maquete",
    icon: "users",
    gradient: "from-[#00804C]/20 to-[#74C365]/20",
    border: "border-[#00804C]/40",
    textColor: "text-[#74C365]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#00804C]/20",
  },
  {
    name: "Igor Daniel Meneses Fonseca",
    role: "Banner e Maquete",
    icon: "users",
    gradient: "from-[#74C365]/20 to-[#DBE64C]/20",
    border: "border-[#74C365]/40",
    textColor: "text-[#DBE64C]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#74C365]/20",
  },
  {
    name: "Senildo Edson da Silva Junior",
    role: "Maquete",
    icon: "users",
    gradient: "from-[#1E488F]/20 to-[#00804C]/20",
    border: "border-[#1E488F]/40",
    textColor: "text-[#DBE64C]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#1E488F]/20",
  },
  {
    name: "Luis Eduardo",
    role: "Apresentação e Pesquisa",
    icon: "users",
    gradient: "from-[#74C365]/20 to-[#DBE64C]/20",
    border: "border-[#74C365]/40",
    textColor: "text-[#DBE64C]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#74C365]/20",
  },
  {
    name: "Novo Participante",
    role: "Participante",
    icon: "users",
    gradient: "from-[#1E488F]/20 to-[#00804C]/20",
    border: "border-[#1E488F]/40",
    textColor: "text-[#DBE64C]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#1E488F]/20",
  },
  {
    name: "Ellen",
    role: "Participante",
    icon: "users",
    gradient: "from-[#FFB86B]/20 to-[#FF7A7A]/20",
    border: "border-[#FFB86B]/40",
    textColor: "text-[#FF7A7A]",
    descColor: "text-[#F6F7ED]/80",
    bgColor: "bg-[#FFB86B]/20",
  },
] as const

// Metas da ODS 7
export const odsGoals = [
  {
    id: "7.1",
    title: "Acesso Universal à Energia",
    description: "Assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia.",
    badgeColor: "bg-[#DBE64C] text-[#001F3F]",
    titleColor: "text-[#DBE64C]",
  },
  {
    id: "7.2",
    title: "Energias Renováveis",
    description: "Aumentar substancialmente a participação de energias renováveis na matriz energética global.",
    badgeColor: "bg-[#74C365] text-[#001F3F]",
    titleColor: "text-[#74C365]",
  },
  {
    id: "7.3",
    title: "Eficiência Energética",
    description: "Dobrar a taxa global de melhoria da eficiência energética.",
    badgeColor: "bg-[#00804C] text-[#F6F7ED]",
    titleColor: "text-[#74C365]",
  },
  {
    id: "7.a",
    title: "Cooperação Internacional",
    description: "Facilitar o acesso a pesquisa e tecnologias de energia limpa, promovendo investimentos em infraestrutura.",
    badgeColor: "bg-[#1E488F] text-[#F6F7ED]",
    titleColor: "text-[#DBE64C]",
  },
] as const

// Pilares da ODS 7
export const odsPillars = [
  {
    title: "Acesso Universal",
    description: "Assegurar que todos tenham acesso a fontes de energia estáveis, seguras e acessíveis, especialmente em regiões vulneráveis.",
    icon: "zap" as const,
    gradient: "from-[#DBE64C]/20 to-[#74C365]/20",
    border: "border-[#DBE64C]/40",
    bgIcon: "bg-[#DBE64C]/20",
    titleColor: "text-[#DBE64C]",
  },
  {
    title: "Energia Renovável",
    description: "Ampliar fontes como solar, eólica, hídrica e biomassa na matriz energética global.",
    icon: "leaf" as const,
    gradient: "from-[#74C365]/20 to-[#00804C]/20",
    border: "border-[#74C365]/40",
    bgIcon: "bg-[#74C365]/20",
    titleColor: "text-[#74C365]",
  },
  {
    title: "Eficiência Energética",
    description: "Reduzir o consumo de energia sem comprometer o desempenho, diminuindo custos e impactos ambientais.",
    icon: "target" as const,
    gradient: "from-[#00804C]/20 to-[#1E488F]/20",
    border: "border-[#00804C]/40",
    bgIcon: "bg-[#00804C]/20",
    titleColor: "text-[#74C365]",
  },
] as const

// Componentes do aerogerador
export const aerogeneratorParts = [
  {
    icon: "wind",
    title: "Rotor",
    description: "Composto pelas pás que captam a energia do vento e transferem para o eixo.",
  },
  {
    icon: "zap",
    title: "Nacele",
    description: "Abriga o gerador, multiplicador de velocidade e sistemas de controle.",
  },
  {
    icon: "users",
    title: "Torre",
    description: "Estrutura que eleva o rotor para captar ventos mais fortes e constantes.",
  },
] as const

// Vantagens da energia eólica
export const windAdvantages = [
  "Fonte inesgotável e renovável",
  "Não emite gases poluentes",
  "Baixo custo de operação",
  "Pode coexistir com atividades agrícolas",
] as const

// Como funciona a energia eólica
export const windSteps = [
  "O vento gira as pás do aerogerador",
  "O movimento aciona um gerador elétrico",
  "A energia é transmitida para a rede elétrica",
] as const

// Importância da ODS 7
export const importanceItems = [
  {
    icon: "zap",
    title: "Desenvolvimento",
    description: "A energia está ligada ao desenvolvimento econômico, saúde, educação e qualidade de vida.",
  },
  {
    icon: "target",
    title: "Clima",
    description: "A expansão de energia renovável contribui para reduzir emissões de gases de efeito estufa e combater as mudanças climáticas.",
  },
  {
    icon: "globe",
    title: "Inclusão Social",
    description: "A falta de acesso à energia ainda afeta milhões de pessoas no mundo, limitando seu desenvolvimento social e econômico.",
  },
  {
    icon: "book",
    title: "Futuro",
    description: "Incentiva a transição global para energias limpas, garantindo que ninguém fique sem acesso aos benefícios que a energia moderna proporciona.",
  },
] as const

// Metas Brasil
export const brazilGoals = [
  {
    id: "7.2 Brasil",
    description: "Manter elevada a participação de energias renováveis na matriz energética nacional.",
    badgeColor: "bg-[#74C365] text-[#001F3F]",
    hasProgress: true,
    progressValue: 83,
  },
  {
    id: "7.3 Brasil",
    description: "Aumentar a taxa de melhoria da eficiência energética da economia brasileira.",
    badgeColor: "bg-[#00804C] text-[#F6F7ED]",
    hasProgress: false,
  },
  {
    id: "7.b Brasil",
    description: "Expandir a infraestrutura e aprimorar a tecnologia para serviços de energia sustentáveis.",
    badgeColor: "bg-[#1E488F] text-[#F6F7ED]",
    hasProgress: false,
  },
] as const

// Fontes de energia no Brasil
export const brazilEnergySources = [
  { icon: "leaf", title: "Hidrelétrica", subtitle: "Principal fonte renovável" },
  { icon: "wind", title: "Eólica", subtitle: "Crescimento acelerado" },
  { icon: "zap", title: "Solar", subtitle: "Grande potencial" },
] as const

// Tipos de energia renovável
export const renewableTypes = [
  { icon: "zap", name: "Solar", borderColor: "border-[#DBE64C]", textColor: "text-[#DBE64C]" },
  { icon: "wind", name: "Eólica", borderColor: "border-[#74C365]", textColor: "text-[#74C365]" },
  { icon: "leaf", name: "Hidrelétrica", borderColor: "border-[#74C365]", textColor: "text-[#74C365]" },
  { icon: "leaf", name: "Biomassa", borderColor: "border-[#DBE64C]", textColor: "text-[#DBE64C]" },
] as const
