"use client"

import { motion, Transition } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { SlideContent, TransitionType } from "@/data/slides-content"

// Ícones SVG inline
const Icons = {
  globe: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  wind: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  ),
  zap: (
    <svg className="w-8 h-8 text-spring" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth="2" />
    </svg>
  ),
  leaf: (
    <svg className="w-8 h-8 text-mantis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path strokeWidth="2" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  target: (
    <svg className="w-8 h-8 text-mantis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" strokeWidth="2" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" strokeWidth="2" />
      <path strokeWidth="2" d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  book: (
    <svg className="w-8 h-8 text-spring" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path strokeWidth="2" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 17V9M13 17V5M8 17v-3" />
    </svg>
  ),
  bolt: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
  ,
  sun: (
    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <path strokeWidth="2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  moon: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  battery: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="7" width="18" height="10" rx="2" ry="2" strokeWidth="2" />
      <line x1="22" y1="11" x2="22" y2="13" strokeWidth="2" />
      <rect x="6" y="10" width="6" height="4" strokeWidth="2" />
    </svg>
  ),
  bar: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line strokeWidth="2" strokeLinecap="round" x1="12" y1="20" x2="12" y2="10" />
      <line strokeWidth="2" strokeLinecap="round" x1="18" y1="20" x2="18" y2="4" />
      <line strokeWidth="2" strokeLinecap="round" x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  pin: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" strokeWidth="2" />
    </svg>
  ),
  plug: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M7 7V3" />
      <path strokeWidth="2" d="M17 7V3" />
      <path strokeWidth="2" d="M12 11v6" />
      <rect x="7" y="11" width="10" height="6" rx="2" ry="2" strokeWidth="2" />
    </svg>
  )
}

// Configurações de transição
type TransitionConfig = {
  initial: { opacity: number; scale?: number; rotate?: number; x?: string | number; y?: string | number; filter?: string; rotateY?: number; rotateX?: number; borderRadius?: string }
  animate: { opacity: number; scale?: number; rotate?: number; x?: string | number; y?: string | number; filter?: string; rotateY?: number; rotateX?: number; borderRadius?: string }
  exit: { opacity: number; scale?: number; rotate?: number; x?: string | number; y?: string | number; filter?: string; rotateY?: number; rotateX?: number; borderRadius?: string }
  transition: Transition
}

const transitionConfigs: Record<TransitionType, TransitionConfig> = {
  "zoom-rotate": {
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: 10 },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "slide-blur": {
    initial: { opacity: 0, x: "30%", filter: "blur(10px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: "-30%", filter: "blur(10px)" },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "flip-3d": {
    initial: { opacity: 0, rotateY: 45, scale: 0.9 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
    exit: { opacity: 0, rotateY: -45, scale: 0.9 },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "curtain": {
    initial: { opacity: 0, y: "30%", scale: 1.02 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: "-30%", scale: 0.98 },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "explosion": {
    initial: { opacity: 0, scale: 1.2, filter: "blur(15px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.8, filter: "blur(15px)" },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "diagonal": {
    initial: { opacity: 0, x: "20%", y: "20%", rotate: 5 },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
    exit: { opacity: 0, x: "-20%", y: "-20%", rotate: -5 },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "portal": {
    initial: { opacity: 0, scale: 0.8, borderRadius: "20%" },
    animate: { opacity: 1, scale: 1, borderRadius: "0%" },
    exit: { opacity: 0, scale: 0.8, borderRadius: "20%" },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "flip-x": {
    initial: { opacity: 0, rotateX: 30, y: -50 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
    exit: { opacity: 0, rotateX: -30, y: 50 },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "morph": {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.1, y: -30 },
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  "spiral": {
    initial: { opacity: 0, scale: 0.9, rotate: 30 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.9, rotate: -30 },
    transition: { duration: 0.8, ease: "easeInOut" }
  }
}

// Variantes para animação dos elementos internos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" as const }
  }
}

// Componente principal que renderiza o slide baseado no tipo
export function AutoSlide({ slide }: { slide: SlideContent }) {
  const config = transitionConfigs[slide.transition]

  return (
    <motion.div
      initial={config.initial}
      animate={config.animate}
      exit={config.exit}
      transition={config.transition}
      className="min-h-screen flex flex-col items-center justify-center text-white p-8"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="max-w-5xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {slide.type === "cover" && <CoverLayout slide={slide} />}
        {slide.type === "two-columns" && <TwoColumnsLayout slide={slide} />}
        {slide.type === "three-cards" && <ThreeCardsLayout slide={slide} />}
        {slide.type === "grid-cards" && <GridCardsLayout slide={slide} />}
        {slide.type === "list-with-highlight" && <ListWithHighlightLayout slide={slide} />}
        {slide.type === "team" && <TeamLayout slide={slide} />}
        {slide.type === "conclusion" && <ConclusionLayout slide={slide} />}
        {slide.type === "image-text" && <ImageTextLayout slide={slide} />}
      </motion.div>
    </motion.div>
  )
}

// Layout: Capa
function CoverLayout({ slide }: { slide: SlideContent }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
      {/* Lado esquerdo - Texto */}
      <div className="text-center lg:text-left flex-1 max-w-xl">
        {slide.badge && (
          <motion.div variants={itemVariants}>
            <Badge className={`mb-6 ${slide.badge.colors} text-lg px-4 py-2`}>
              {slide.badge.text}
            </Badge>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-8xl md:text-9xl font-bold text-spring">{slide.icon}</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 pb-2 bg-linear-to-r from-spring to-mantis bg-clip-text text-transparent leading-tight"
        >
          {slide.title}
        </motion.h1>

        {slide.subtitle && (
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 mb-8">
            {slide.subtitle}
          </motion.p>
        )}

        {slide.footer && (
          <motion.div variants={itemVariants} className="flex flex-col gap-2 mt-8">
            {slide.footer.lines.map((line, i) => (
              <p key={i} className="text-white/70 text-sm">{line}</p>
            ))}
            {slide.footer.highlight && (
              <p className="text-spring text-sm font-semibold mt-2">{slide.footer.highlight}</p>
            )}
          </motion.div>
        )}
      </div>

      {/* Lado direito - Imagem ODS 7 */}
      <motion.div 
        variants={itemVariants}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <div className="relative">
          {/* Card com a imagem oficial da ODS 7 */}
          <div className="w-72 h-72 md:w-96 md:h-96 bg-[#FCC30B] rounded-3xl shadow-2xl shadow-[#FCC30B]/30 flex items-center justify-center overflow-hidden">
            {/* Ícone do Sol/Energia - Design oficial ODS 7 */}
            <svg viewBox="0 0 120 120" className="w-52 h-52 md:w-72 md:h-72">
              {/* Raios do sol - linhas diagonais e retas */}
              <g stroke="white" strokeWidth="5" strokeLinecap="round">
                {/* Raio superior */}
                <line x1="60" y1="8" x2="60" y2="24" />
                {/* Raio inferior */}
                <line x1="60" y1="96" x2="60" y2="112" />
                {/* Raio esquerdo */}
                <line x1="8" y1="60" x2="24" y2="60" />
                {/* Raio direito */}
                <line x1="96" y1="60" x2="112" y2="60" />
                {/* Raio diagonal superior esquerdo */}
                <line x1="23" y1="23" x2="34" y2="34" />
                {/* Raio diagonal superior direito */}
                <line x1="97" y1="23" x2="86" y2="34" />
                {/* Raio diagonal inferior esquerdo */}
                <line x1="23" y1="97" x2="34" y2="86" />
                {/* Raio diagonal inferior direito */}
                <line x1="97" y1="97" x2="86" y2="86" />
              </g>
              
              {/* Círculo central do sol */}
              <circle cx="60" cy="60" r="28" fill="none" stroke="white" strokeWidth="5" />
              
              {/* Símbolo de Power/Energia dentro do círculo */}
              {/* Arco do botão power (parte circular aberta em cima) */}
              <path 
                d="M 48 52 A 15 15 0 1 0 72 52" 
                fill="none" 
                stroke="white" 
                strokeWidth="5" 
                strokeLinecap="round"
              />
              {/* Linha vertical do botão power */}
              <line x1="60" y1="45" x2="60" y2="60" stroke="white" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          {/* Número 7 no canto */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-[#FCC30B]">7</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Layout: Duas colunas
function TwoColumnsLayout({ slide }: { slide: SlideContent }) {
  return (
    <>
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
        {slide.icon && (
          <div className="p-4 bg-nuit/50 rounded-2xl">
            {Icons[slide.icon as keyof typeof Icons]}
          </div>
        )}
        <div>
          {slide.badge && (
            <Badge className={`mb-2 ${slide.badge.colors}`}>{slide.badge.text}</Badge>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {slide.cards?.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="bg-black/40 border-mantis/30 text-white backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className={`text-2xl ${card.titleColor}`}>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-white">
                {card.description.split('\n').map((line, j) => (
                  <p key={j} className={j > 0 ? "mt-2" : ""}>{line}</p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {slide.listItems && (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {slide.listItems.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-black/50 border-mantis/40 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-mantis">{item.icon ? Icons[item.icon as keyof typeof Icons] : item.emoji} {item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  {item.description.split(' • ').map((part, j) => (
                    <span key={j}>{j > 0 && " • "}{part}</span>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {slide.highlight && (
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-black/50 rounded-2xl border border-spring/40">
          <p className="text-xl text-center text-white">
            {slide.highlight?.icon ? Icons[slide.highlight.icon as keyof typeof Icons] : slide.highlight?.emoji} {slide.highlight.text.split(slide.highlight.emphasis || "").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <strong className="text-spring">{slide.highlight!.emphasis}</strong>}
              </span>
            ))}
          </p>
        </motion.div>
      )}
    </>
  )
}

// Layout: Três cards
function ThreeCardsLayout({ slide }: { slide: SlideContent }) {
  return (
    <>
      <motion.div variants={itemVariants} className="text-center mb-10">
        {slide.badge && (
          <Badge className={`mb-4 ${slide.badge.colors} text-lg px-4 py-2`}>{slide.badge.text}</Badge>
        )}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
        {slide.subtitle && <p className="text-xl text-white/90">{slide.subtitle}</p>}
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {slide.cards?.map((card, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-black/50 border-mantis/40 text-white backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                {card.icon ? (
                  <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full w-fit">
                    {Icons[card.icon as keyof typeof Icons]}
                  </div>
                ) : card.emoji ? (
                  <div className="text-4xl mb-2">{card.emoji}</div>
                ) : null}
                <CardTitle className={`text-xl ${card.titleColor}`}>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-white">{card.description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {slide.highlight && (
        <motion.div variants={itemVariants}>
          <Card className="mt-6 bg-black/60 border-spring/40 text-white">
            <CardContent className="py-6 text-center text-lg">
              {slide.highlight?.icon ? Icons[slide.highlight.icon as keyof typeof Icons] : slide.highlight?.emoji && <span className="mr-2">{slide.highlight.emoji}</span>}
              {slide.highlight.emphasis ? (
                <>
                  {slide.highlight.text.split(slide.highlight.emphasis).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <strong className="text-spring">{slide.highlight!.emphasis}</strong>}
                    </span>
                  ))}
                </>
              ) : (
                <span className="text-spring font-semibold">{slide.highlight.text}</span>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </>
  )
}

// Layout: Grid de cards
function GridCardsLayout({ slide }: { slide: SlideContent }) {
  return (
    <>
      <motion.div variants={itemVariants} className="text-center mb-10">
        {slide.badge && (
          <Badge className={`mb-4 ${slide.badge.colors} text-lg px-4 py-2`}>{slide.badge.text}</Badge>
        )}
        <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {slide.cards?.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="bg-black/50 border-mantis/30 text-white backdrop-blur-sm h-full">
              <CardHeader>
                {card.badge && (
                  <Badge className={`w-fit ${card.badge.color}`}>{card.badge.text}</Badge>
                )}
                {card.icon ? <div className="mb-2">{Icons[card.icon as keyof typeof Icons]}</div> : card.emoji && <div className="text-3xl mb-2">{card.emoji}</div>}
                <CardTitle className={`text-lg ${card.titleColor}`}>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white">{card.description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {slide.highlight && (
        <motion.div variants={itemVariants}>
          <Card className="mt-4 bg-black/60 border-mantis/40 text-white">
            <CardHeader>
              {slide.highlight.emphasis && (
                <Badge className="w-fit bg-greenbook text-white">{slide.highlight.emphasis}</Badge>
              )}
            </CardHeader>
            <CardContent className="text-white">{slide.highlight.text}</CardContent>
          </Card>
        </motion.div>
      )}
    </>
  )
}

// Layout: Lista com destaque
function ListWithHighlightLayout({ slide }: { slide: SlideContent }) {
  return (
    <>
      <motion.div variants={itemVariants} className="text-center mb-10">
        {slide.badge && (
          <Badge className={`mb-4 ${slide.badge.colors} text-lg px-4 py-2`}>{slide.badge.text}</Badge>
        )}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
        {slide.subtitle && <p className="text-xl text-white/90">{slide.subtitle}</p>}
      </motion.div>

      <div className="space-y-4 mb-8">
        {slide.cards?.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="bg-black/50 border-mantis/30 text-white backdrop-blur-sm">
              <CardContent className="py-6">
                <div className="flex items-center gap-4">
                  {card.badge && (
                    <Badge className={`${card.badge.color} shrink-0`}>{card.badge.text}</Badge>
                  )}
                  <p className="text-white">
                    <strong className="text-spring">{card.title}</strong> {card.description}
                  </p>
                </div>
                {card.progress && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-mantis">{card.progress.label}</span>
                      <span className="text-mantis">~{card.progress.value}%</span>
                    </div>
                    <Progress value={card.progress.value} className="h-3" />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {slide.listItems && (
        <div className="grid md:grid-cols-3 gap-4">
          {slide.listItems.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="text-center p-4 bg-black/40 rounded-xl border border-mantis/20"
            >
              <div className="mb-2">{item.icon ? Icons[item.icon as keyof typeof Icons] : item.emoji}</div>
              <p className="text-spring font-semibold">{item.title}</p>
              <p className="text-sm text-white/90">{item.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}

// Layout: Equipe
function TeamLayout({ slide }: { slide: SlideContent }) {
  const colors = [
    { text: "text-spring", bg: "bg-spring/20", border: "border-spring/40" },
    { text: "text-mantis", bg: "bg-nuit/20", border: "border-nuit/40" },
    { text: "text-mantis", bg: "bg-greenbook/20", border: "border-greenbook/40" },
    { text: "text-spring", bg: "bg-mantis/20", border: "border-mantis/40" },
    { text: "text-spring", bg: "bg-nuit/20", border: "border-nuit/40" },
  ]

  return (
    <>
      <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-10">
        {slide.icon && (
          <div className="p-4 bg-mantis/30 rounded-2xl">
            {Icons[slide.icon as keyof typeof Icons]}
          </div>
        )}
        <div className="text-center">
          {slide.badge && (
            <Badge className={`mb-2 ${slide.badge.colors}`}>{slide.badge.text}</Badge>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white">{slide.title}</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {slide.teamMembers?.map((member, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={i === (slide.teamMembers?.length || 0) - 1 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <Card className={`bg-black/50 ${colors[i % colors.length].border} text-white backdrop-blur-sm h-full`}>
              <CardHeader className="text-center">
                {member.image ? (
                  <div className="w-20 h-20 mx-auto mb-2 relative overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-black/50 ring-mantis/50">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 mx-auto ${colors[i % colors.length].bg} rounded-full flex items-center justify-center text-2xl mb-2`}>
                    {member.icon ? Icons[member.icon as keyof typeof Icons] : member.emoji}
                  </div>
                )}
                <CardTitle className={`text-lg ${colors[i % colors.length].text}`}>{member.name}</CardTitle>
                <p className="text-white/90">{member.role}</p>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      {slide.footer && (
        <motion.div variants={itemVariants} className="text-center p-6 bg-black/40 rounded-2xl border border-mantis/30">
          <p className="text-xl text-white">
            <strong className="text-spring">Disciplina:</strong> {slide.footer.lines[0]}
          </p>
          {slide.footer.highlight && (
            <p className="text-lg text-mantis mt-2">{slide.footer.highlight}</p>
          )}
        </motion.div>
      )}
    </>
  )
}

// Layout: Conclusão
function ConclusionLayout({ slide }: { slide: SlideContent }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div variants={itemVariants} className="mb-8 flex justify-center">
        <div className="p-6 bg-spring/20 rounded-full">
          {Icons.book}
        </div>
      </motion.div>

      {slide.badge && (
        <motion.div variants={itemVariants}>
          <Badge className={`mb-6 ${slide.badge.colors} text-lg px-4 py-2`}>{slide.badge.text}</Badge>
        </motion.div>
      )}

      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Um Futuro Mais <span className="text-spring">Sustentável</span>
      </motion.h2>

      <div className="space-y-6 mb-10">
        {slide.content?.map((block, i) => (
          <motion.p key={i} variants={itemVariants} className="text-xl text-white leading-relaxed">
            {block.text}
          </motion.p>
        ))}

        {slide.highlight && (
          <motion.div variants={itemVariants} className="p-6 bg-black/60 rounded-2xl border border-spring/40">
            <p className="text-2xl font-semibold text-spring">
              {slide.highlight?.icon ? Icons[slide.highlight.icon as keyof typeof Icons] : slide.highlight?.emoji} {slide.highlight.text}
            </p>
          </motion.div>
        )}
      </div>

      {slide.listItems && (
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          {slide.listItems.map((item, i) => (
              <Badge 
              key={i} 
              variant="outline" 
              className="text-lg px-4 py-2 border-mantis text-mantis"
            >
              {item.icon ? Icons[item.icon as keyof typeof Icons] : item.emoji} {item.title}
            </Badge>
          ))}
        </motion.div>
      )}

      {slide.footer && (
        <motion.div variants={itemVariants} className="mt-12 text-mantis">
          {slide.footer.lines.map((line, i) => (
            <p key={i} className={i === 0 ? "text-lg" : "text-sm mt-2"}>{line}</p>
          ))}
        </motion.div>
      )}
    </div>
  )
}

// Layout: Imagem com Texto
function ImageTextLayout({ slide }: { slide: SlideContent }) {
  return (
    <>
      <motion.div variants={itemVariants} className="text-center mb-6">
        {slide.badge && (
          <Badge className={`mb-4 ${slide.badge.colors} text-lg px-4 py-2`}>{slide.badge.text}</Badge>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white">{slide.title}</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Lado esquerdo - Imagem */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          {slide.image && (
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <Image 
                src={slide.image} 
                alt={slide.title}
                width={500}
                height={350}
                className="max-w-full h-auto rounded-lg object-contain"
              />
            </div>
          )}
          {slide.imageCaption && (
            <p className="text-white/60 text-sm mt-3 text-center">{slide.imageCaption}</p>
          )}
        </motion.div>

        {/* Lado direito - Cards de informação */}
        <div className="space-y-3">
          {slide.cards?.map((card, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-black/50 border-mantis/30 text-white backdrop-blur-sm">
                <CardContent className="py-4 flex items-center gap-4">
                  {card.icon ? Icons[card.icon as keyof typeof Icons] : card.emoji && <span className="text-2xl">{card.emoji}</span>}
                  <div>
                    <p className={`font-bold ${card.titleColor || "text-white"}`}>{card.title}</p>
                    <p className="text-white/80 text-sm">{card.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {slide.highlight && (
        <motion.div variants={itemVariants} className="mt-6 p-4 bg-black/50 rounded-2xl border border-spring/40">
            <p className="text-lg text-center text-white">
            {slide.highlight?.icon ? Icons[slide.highlight.icon as keyof typeof Icons] : slide.highlight?.emoji && <span className="mr-2">{slide.highlight.emoji}</span>}
            {slide.highlight.emphasis ? (
              <>
                {slide.highlight.text.split(slide.highlight.emphasis).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong className="text-spring">{slide.highlight!.emphasis}</strong>}
                  </span>
                ))}
              </>
            ) : (
              <span>{slide.highlight.text}</span>
            )}
          </p>
        </motion.div>
      )}
    </>
  )
}

export { transitionConfigs }
