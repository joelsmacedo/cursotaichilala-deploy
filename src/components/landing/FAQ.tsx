import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Award, ShieldCheck, Smartphone, GraduationCap, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "35h de Conteúdo",
    description: "Aproximadamente 35 horas de conteúdo original mais tempo de prática recomendado."
  },
  {
    icon: Award,
    title: "Certificado Virtual",
    description: "Certificado enviado por e-mail após conclusão do curso e aprovação na avaliação."
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 7 Dias",
    description: "Satisfação garantida ou seu dinheiro de volta, sem perguntas, sem burocracia."
  },
  {
    icon: Smartphone,
    title: "Acesso Multiplataforma",
    description: "Estude no computador, tablet ou celular, quando e onde quiser."
  },
  {
    icon: GraduationCap,
    title: "Capacitação para Instrutor",
    description: "Ao concluir, você estará apto a dar aulas e montar seu próprio espaço."
  },
  {
    icon: RefreshCw,
    title: "Acesso Vitalício",
    description: "Acesse o conteúdo quantas vezes quiser, para sempre, incluindo atualizações."
  }
];

const faqs = [
  {
    question: "Como funciona a avaliação?",
    answer: "Após completar o curso, você enviará um vídeo demonstrando sua prática do Kati completo via WhatsApp ou E-mail. Nossos instrutores analisarão seu desempenho e fornecerão feedback personalizado antes da emissão do certificado."
  },
  {
    question: "Posso dar aulas após o curso?",
    answer: "Sim! O curso foi desenvolvido para capacitar você a instruir turmas iniciantes e montar seu próprio espaço de ensino. Você receberá material específico sobre organização de aulas e metodologia de ensino."
  },
  {
    question: "Preciso de experiência prévia?",
    answer: "Não é necessária nenhuma experiência prévia. O curso foi estruturado para levar você do absoluto zero até a maestria, respeitando seu ritmo de aprendizado."
  },
  {
    question: "Qual a idade mínima ou máxima?",
    answer: "O Tai Chi Chuan não tem contraindicações e pode ser praticado por pessoas de todas as idades. Os movimentos são suaves e adaptáveis às suas condições físicas."
  },
  {
    question: "Quanto tempo tenho para concluir?",
    answer: "Você tem acesso vitalício ao curso. Recomendamos dedicar cerca de 3-6 meses para uma absorção adequada do conteúdo, mas você pode seguir seu próprio ritmo."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Se dentro de 7 dias você não estiver satisfeito por qualquer motivo, basta solicitar o reembolso integral. Sem perguntas, sem burocracia."
  }
];

const FAQ = () => {
  return (
    <section id="detalhes" className="section-padding bg-card">
      <div className="container-wide">
        {/* Features Grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Detalhes do Curso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
            Tudo que você precisa saber
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border/50"
            >
              <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-center mb-8">
            Perguntas Frequentes
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/50 rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
