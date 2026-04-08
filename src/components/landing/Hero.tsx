import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Clock, Award, Maximize } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-taichi.jpg";
import { useRef } from "react";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Prática de Tai Chi em floresta de bambu ao amanhecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pt-32">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm border border-primary/10 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              100% Online • Certificado Incluso
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6 animate-fade-up stagger-1">
            Resgate sua saúde e desperte seu espírito com a{" "}
            <span className="text-gradient">sabedoria milenar</span> do Tai Chi Chuan
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up stagger-2 max-w-xl mx-auto">
            Uma antiga técnica chinesa para o homem moderno não apenas se equilibrar, mas transcender seu{" "}
            <span className="text-gradient font-semibold">Espírito e Consciência</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-up stagger-3">
            <Button 
              variant="hero" 
              className="group"
              onClick={() => window.open('https://pay.hotmart.com/X69105803P?off=1j9pvv1o&sck=BTN1&utm_source=lp&utm_medium=button&utm_campaign=taichi', '_blank')}
            >
              Começar minha jornada agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="heroOutline" 
                  className="group"
                >
                  <Play className="w-5 h-5" />
                  Assistir aula gratuita
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black/95 border-none overflow-hidden">
                <DialogTitle className="sr-only">Aula Gratuita de Tai Chi Chuan</DialogTitle>
                <div ref={videoContainerRef} className="relative w-full aspect-video bg-black flex items-center justify-center group/video">
                  <iframe
                    className="w-full h-full pointer-events-auto"
                    src="https://www.youtube.com/embed/5EEKLi0HeH0?controls=0&modestbranding=1&rel=0&disablekb=1&showinfo=0&iv_load_policy=3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* Top blocker to prevent clicking on "Share", "Watch Later" and Title overlays */}
                  <div className="absolute top-0 inset-x-0 h-20 pointer-events-auto z-10"></div>
                  
                  {/* Bottom blocker to prevent clicking on the YouTube logo */}
                  <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-auto z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Botão de Tela Inteira */}
                  <button 
                    onClick={toggleFullScreen}
                    className="absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-lg text-white/80 hover:text-white transition-colors z-20 pointer-events-auto"
                    title="Tela Inteira"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-up stagger-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">+68h de conteúdo</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm">+50 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;