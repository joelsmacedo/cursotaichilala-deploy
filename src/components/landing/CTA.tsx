import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-bamboo-dark to-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-narrow relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground/90">
            Vagas limitadas
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6">
          Comece sua jornada de transformação hoje
        </h2>
        
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Junte-se a milhares de alunos que já descobriram os benefícios do Tai Chi Chuan 
          com o método exclusivo do Professor Laércio Fonseca.
        </p>

        {/* CTA Button */}
        <Button 
          variant="secondary" 
          size="xl" 
          className="text-primary font-semibold shadow-elevated hover:shadow-card mb-8"
          onClick={() => window.open('https://pay.hotmart.com/X69105803P?off=1j9pvv1o&sck=BTN1&utm_source=lp&utm_medium=button&utm_campaign=taichi', '_blank')}
        >
          Quero começar agora
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span className="text-sm">Certificado incluso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;