import { Award, BookOpen, Users, Calendar } from "lucide-react";
// import professorImage from "@/assets/professor-laercio.jpg";

const achievements = [
  { icon: Calendar, label: "+50 anos", description: "de prática e estudo" },
  { icon: Users, label: "+1500", description: "palestras realizadas" },
  { icon: BookOpen, label: "9 livros", description: "publicados" },
  { icon: Award, label: "12 Cursos", description: "de Alimentação à Física Quântica" },
];

const Professor = () => {
  return (
    <section id="professor" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://lh3.googleusercontent.com/u/0/d/1N_F6N7VDDXJHAr0Xlq-m2lOCYHLS_TH2"
                alt="Professor Laércio Fonseca"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Achievement */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-elevated p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-primary">50+</div>
                  <p className="text-sm text-muted-foreground">Anos dedicados</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Seu Instrutor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
              Professor Laércio Fonseca
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Físico formado pela Unicamp (1980), especializado em Astrofísica e Cosmologia,
              o Professor Laércio Fonseca é uma das maiores autoridades brasileiras na união
              entre ciência e espiritualidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Há mais de 50 anos desenvolve treinamento interior em artes marciais e
              espiritualismo. É fundador do Espaço Caminho Da Luz e da Associação Wu San Dji Tao,
              dedicando sua vida à disseminação de conhecimentos que transformam vidas.
            </p>

            {/* Book Highlight */}
            <div className="p-4 rounded-xl bg-accent/50 border border-primary/10 mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Autor reconhecido:</span> Entre suas obras está
                "Física Quântica e Espiritualidade", que conecta ciência moderna com sabedoria ancestral.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-lg font-semibold text-foreground">{item.label}</div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professor;
