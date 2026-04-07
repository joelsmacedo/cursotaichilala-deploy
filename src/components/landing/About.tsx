import { BookOpen, Leaf, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Sobre o Curso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
              Uma prática ancestral para o{" "}
              <span className="text-gradient">mundo moderno</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Praticado por monges na velha China, o Tai Chi Chuan trabalha as energias do corpo
              de forma harmoniosa. No método do Professor Laércio Fonseca, as práticas estão
              intimamente ligadas ao caminho espiritual e ao despertar de faculdades superiores,
              unindo sabedoria milenar com aplicações práticas para o dia a dia.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/60 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Apostila de Filosofia Oriental</h3>
                  <p className="text-sm text-muted-foreground">
                    Material teórico completo sobre as bases filosóficas do Tai Chi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/60 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Bônus: Medicina Oriental</h3>
                  <p className="text-sm text-muted-foreground">
                    Apostila extra com Tchi Kung, Do In e ervas medicinais chinesas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/60 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Caminho Espiritual</h3>
                  <p className="text-sm text-muted-foreground">
                    Integração da prática física com o desenvolvimento interior
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 relative">
            <img
              src="https://lh3.googleusercontent.com/u/0/d/16itJPbktCOHKD1Z-t4xrDFNvmZi2o-XM"
              alt="21+ Aulas práticas e teóricas"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
