"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ==========================================
// Perguntas de Quiz por Slide
// ==========================================
interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

// Mapeamento de perguntas por índice do slide
export const slideQuizzes: Record<number, QuizQuestion> = {
  // Slide 2 - O que são ODS
  1: {
    question: "Quantos Objetivos de Desenvolvimento Sustentável existem?",
    options: ["10 objetivos", "15 objetivos", "17 objetivos", "20 objetivos"],
    correct: 2,
    explanation: "A ONU criou 17 ODS para guiar o desenvolvimento sustentável até 2030!"
  },
  // Slide 3 - ODS 7 Pilares
  2: {
    question: "Quais são os três pilares da ODS 7?",
    options: [
      "Água, Ar e Terra",
      "Acesso Universal, Energia Renovável e Eficiência",
      "Solar, Eólica e Hídrica",
      "Produção, Distribuição e Consumo"
    ],
    correct: 1,
    explanation: "Os três pilares são: Acesso Universal, Energia Renovável e Eficiência Energética!"
  },
  // Slide 4 - Metas da ODS 7
  3: {
    question: "A Meta 7.3 visa dobrar a taxa de quê até 2030?",
    options: ["Produção de energia", "Eficiência energética", "Consumo renovável", "Exportação de energia"],
    correct: 1,
    explanation: "A Meta 7.3 busca dobrar a taxa global de melhoria da eficiência energética!"
  },
  // Slide 5 - Energia Eólica
  4: {
    question: "Qual região do Brasil tem maior potencial eólico?",
    options: ["Sudeste", "Sul", "Nordeste", "Norte"],
    correct: 2,
    explanation: "O Nordeste possui ventos constantes e intensos, ideal para energia eólica!"
  },
  // Slide 6 - Aerogeradores
  5: {
    question: "Qual parte do aerogerador capta a energia do vento?",
    options: ["Torre", "Nacele", "Rotor (pás)", "Gerador"],
    correct: 2,
    explanation: "O rotor, composto pelas pás, capta a energia cinética do vento!"
  },
  // Slide 7 - Importância
  6: {
    question: "Por que a energia é importante para o desenvolvimento?",
    options: [
      "Apenas para indústrias",
      "Ligada ao desenvolvimento econômico, saúde e educação",
      "Só para transporte",
      "Apenas para tecnologia"
    ],
    correct: 1,
    explanation: "A energia está ligada ao desenvolvimento econômico, saúde, educação e qualidade de vida!"
  },
  // Slide 8 - Engenharias
  7: {
    question: "Qual engenharia projeta usinas solares e eólicas?",
    options: ["Eng. Civil", "Eng. Mecânica", "Eng. Elétrica", "Eng. Ambiental"],
    correct: 2,
    explanation: "A Engenharia Elétrica projeta usinas e moderniza redes de transmissão!"
  },
  // Slide 9 - Matriz Energética Mundial
  8: {
    question: "Qual é a principal fonte de energia do mundo?",
    options: ["Carvão Mineral", "Petróleo e derivados", "Gás Natural", "Hidráulica"],
    correct: 1,
    explanation: "Petróleo e derivados representam 30,2% da matriz energética mundial!"
  },
  // Slide 10 - Matriz Energética Brasil
  9: {
    question: "Qual porcentagem da matriz energética brasileira é renovável?",
    options: ["14%", "34%", "47%", "86%"],
    correct: 2,
    explanation: "O Brasil tem 47,4% de renováveis, muito acima da média mundial de 14%!"
  },
  // Slide 11 - Comparação Energética
  10: {
    question: "Quantas vezes o Brasil é mais renovável que o mundo na matriz energética?",
    options: ["2x", "3x", "4x", "5x"],
    correct: 1,
    explanation: "Brasil tem 47% vs 14% do mundo - aproximadamente 3x mais renovável!"
  },
  // Slide 12 - Matriz Elétrica Mundial
  11: {
    question: "Qual é a maior fonte de eletricidade no mundo?",
    options: ["Gás Natural", "Hidráulica", "Carvão Mineral", "Nuclear"],
    correct: 2,
    explanation: "Carvão Mineral representa 35,8% da matriz elétrica mundial!"
  },
  // Slide 13 - Matriz Elétrica Brasil
  12: {
    question: "Qual porcentagem da matriz elétrica brasileira é renovável?",
    options: ["47%", "55%", "72%", "86%"],
    correct: 3,
    explanation: "A matriz elétrica brasileira é 86,1% renovável - líder mundial!"
  },
  // Slide 14 - Comparação Elétrica
  13: {
    question: "Qual é a principal fonte de eletricidade do Brasil?",
    options: ["Solar", "Eólica", "Hidráulica", "Biomassa"],
    correct: 2,
    explanation: "Hidráulica representa 55,3% da eletricidade brasileira!"
  },
  // Slide 15 - Ações ONU
  14: {
    question: "Quantas iniciativas da ONU estão em implementação no Brasil para ODS 7?",
    options: ["3 ações", "6 ações", "10 ações", "15 ações"],
    correct: 1,
    explanation: "Atualmente 6 ações da ONU estão sendo implementadas no Brasil!"
  },
  // Slide 16 - Brasil
  15: {
    question: "Qual meta brasileira é 'manter elevada' a participação de renováveis?",
    options: ["Meta 7.1", "Meta 7.2", "Meta 7.3", "Meta 7.b"],
    correct: 1,
    explanation: "A Meta 7.2 Brasil busca manter elevada a participação de energias renováveis!"
  }
}

// ==========================================
// COMPONENTE: Quiz Rápido Contextual
// ==========================================
export function QuizPopup({ 
  isOpen, 
  onClose, 
  onCorrect,
  slideIndex
}: { 
  isOpen: boolean
  onClose: () => void
  onCorrect: () => void
  slideIndex: number
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  
  // Pegar pergunta do slide atual ou anterior que tenha quiz
  const findQuestion = (): QuizQuestion | null => {
    // Verificar slide atual
    if (slideQuizzes[slideIndex]) return slideQuizzes[slideIndex]
    // Verificar slide anterior
    if (slideQuizzes[slideIndex - 1]) return slideQuizzes[slideIndex - 1]
    // Fallback para uma pergunta genérica
    return {
      question: "Qual é o objetivo da ODS 7?",
      options: ["Água limpa", "Energia limpa", "Ar limpo", "Terra limpa"],
      correct: 1,
      explanation: "A ODS 7 trata de Energia Acessível e Limpa!"
    }
  }
  
  const question = findQuestion()

  const handleSelect = (index: number) => {
    if (showResult || !question) return
    setSelected(index)
    setShowResult(true)
    
    if (index === question.correct) {
      onCorrect()
    }
  }

  const handleClose = () => {
    setSelected(null)
    setShowResult(false)
    onClose()
  }

  if (!question) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-linear-to-br from-midnight to-nuit rounded-3xl p-6 max-w-lg w-full border border-spring/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🧠</span>
              <h3 className="text-2xl font-bold text-white">Quiz do Slide!</h3>
            </div>

            <p className="text-xl text-white mb-6">{question.question}</p>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                  onClick={() => handleSelect(index)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    showResult
                      ? index === question.correct
                        ? "bg-green-500/30 border-2 border-green-500 text-white"
                        : index === selected
                        ? "bg-red-500/30 border-2 border-red-500 text-white"
                        : "bg-white/10 text-white/50"
                      : "bg-white/10 hover:bg-white/20 text-white border-2 border-transparent"
                  }`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                  {showResult && index === question.correct && (
                    <span className="ml-2">✓</span>
                  )}
                </motion.button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <div className={`p-4 rounded-xl ${
                  selected === question.correct 
                    ? "bg-green-500/20 border border-green-500/50" 
                    : "bg-red-500/20 border border-red-500/50"
                }`}>
                  <p className="text-white">
                    {selected === question.correct ? "🎉 Correto! " : "❌ Ops! "}
                    {question.explanation}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 w-full bg-spring text-midnight font-bold py-3 rounded-xl hover:bg-spring/90 transition-colors"
                >
                  Continuar
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ==========================================
// COMPONENTE: Botão de Quiz Flutuante
// ==========================================
export function QuizButton({ onClick, hasQuiz }: { onClick: () => void; hasQuiz: boolean }) {
  if (!hasQuiz) return null
  
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-24 right-6 z-40 bg-linear-to-r from-spring to-mantis text-midnight font-bold px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <span className="text-xl">🧠</span>
      <span>Testar conhecimento</span>
    </motion.button>
  )
}
