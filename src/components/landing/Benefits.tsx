import { 
  Heart, 
  Brain, 
  Flame, 
  Zap, 
  Shield, 
  Scale, 
  Sun,
  Target
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Saúde Integral",
    description: "Harmonização do corpo, mente e emoções através de movimentos suaves e respiração consciente."
  },
  {
    icon: Brain,
    title: "Redução do Estresse",
    description: "Técnicas comprovadas para diminuir ansiedade e alcançar paz mental duradoura."
  },
  {
    icon: Flame,
    title: "Meditação em Movimento",
    description: "Uma prática física e contemplação em uma experiência transformadora única."
  },
  {
    icon: Zap,
    title: "Energia Vital (Chi)",
    description: "Desperte e cultive sua energia vital através de exercícios ancestrais refinados."
  },
  {
    icon: Shield,
    title: "Arte Marcial Interna",
    description: "Aprenda a forma Wu San Dji Tao completa, uma arte marcial suave e poderosa."
  },
  {
    icon: Scale,
    title: "Equilíbrio Emocional",
    description: "Desenvolva autodomínio e estabilidade emocional para enfrentar a vida moderna."
  },
  {
    icon: Sun,
    title: "Abertura Espiritual",
    description: "Conecte-se com o Tao e desperte faculdades superiores latentes em você."
  },
  {
    icon: Target,
    title: "Propósito e Disciplina",
    description: "Cultive uma rotina saudável com disciplina suave que transforma seu dia a dia."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
            Transformações que o Tai Chi pode trazer para sua vida
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais do que uma prática física, o Tai Chi Chuan é um caminho completo de desenvolvimento pessoal.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
