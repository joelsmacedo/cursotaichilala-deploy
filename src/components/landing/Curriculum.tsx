import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Play, Gift } from "lucide-react";

const modules = [
  {
    id: "mod-1",
    title: "Módulo 1: Fundamentos",
    lessons: [
      "Introdução ao Tai Chi Chuan e a escola Wu San Dji Tao",
      "Bases da Filosofia Oriental",
      "Princípios da Medicina Oriental",
      "A história dos mosteiros e a tradição marcial"
    ]
  },
  {
    id: "mod-2",
    title: "Módulo 2: O Kati Wu San Dji Tao (Partes 1-8)",
    lessons: [
      "Parte 1: Postura inicial e abertura",
      "Parte 2: Movimentos do Céu",
      "Parte 3: Movimentos da Terra",
      "Parte 4: Transições e fluidez",
      "Parte 5: Equilíbrio e enraizamento",
      "Parte 6: Movimentos circulares",
      "Parte 7: Integração corpo-mente",
      "Parte 8: Práticas respiratórias"
    ]
  },
  {
    id: "mod-3",
    title: "Módulo 3: O Kati Wu San Dji Tao (Partes 9-16)",
    lessons: [
      "Parte 9: Movimentos avançados",
      "Parte 10: Fluxo de energia",
      "Parte 11: Técnicas de defesa suave",
      "Parte 12: Coordenação e graça",
      "Parte 13: Movimentos de fechamento",
      "Parte 14: Meditação em movimento",
      "Parte 15: Prática completa",
      "Parte 16: Refinamento e maestria"
    ]
  },
  {
    id: "mod-4",
    title: "Módulo 4: Sabedoria do Tao Te Ching",
    lessons: [
      "Estudo do Poema 3 - O não-agir",
      "Estudo do Poema 6 - O espírito do vale",
      "Estudo do Poema 12 - Os sentidos",
      "Estudo do Poema 15 - Os antigos mestres",
      "Estudo do Poema 18 - O grande Tao",
      "Estudo do Poema 46 - Contentamento",
      "Estudo do Poema 59 - Moderação"
    ]
  },
  {
    id: "mod-5",
    title: "Módulo 5: Aprofundamento e Especialização",
    lessons: [
      "A musicalidade na prática do Tai Chi",
      "Organização de aula para instrutores",
      "Como montar seu próprio espaço de ensino"
    ]
  },
  {
    id: "bonus",
    title: "Bônus Exclusivo",
    lessons: [
      "Aula especial de Do In (automassagem)",
      "Guia completo de Ervas Medicinais Chinesas",
      "Apostila de Tchi Kung (trabalho com energia)"
    ],
    isBonus: true
  }
];

const Curriculum = () => {
  return (
    <section id="conteudo" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Conteúdo Programático
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
            21 aulas completas + bônus exclusivos
          </h2>
          <p className="text-lg text-muted-foreground">
            Um programa estruturado para levá-lo do iniciante à capacidade de instruir seus próprios alunos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
            <div className="text-3xl font-serif font-bold text-primary mb-1">35h</div>
            <p className="text-sm text-muted-foreground">Carga horária</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
            <div className="text-3xl font-serif font-bold text-primary mb-1">21+</div>
            <p className="text-sm text-muted-foreground">Aulas em vídeo</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
            <div className="text-3xl font-serif font-bold text-primary mb-1">3</div>
            <p className="text-sm text-muted-foreground">Apostilas</p>
          </div>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {modules.map((module) => (
            <AccordionItem
              key={module.id}
              value={module.id}
              className={`border rounded-2xl px-6 overflow-hidden transition-all ${
                module.isBonus 
                  ? "border-primary/30 bg-primary/5" 
                  : "border-border/50 bg-background"
              }`}
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  {module.isBonus ? (
                    <Gift className="w-5 h-5 text-primary" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-primary" />
                  )}
                  <span className="font-semibold text-left">{module.title}</span>
                  {module.isBonus && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      GRÁTIS
                    </span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <ul className="space-y-3 pl-8">
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <Play className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Curriculum;
