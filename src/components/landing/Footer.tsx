import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-wide section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif text-background mb-4">
              Tai Chi Chuan
            </h3>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Curso online completo com o Professor Laércio Fonseca. 
              Transforme sua vida através da sabedoria milenar do Tai Chi.
            </p>
            <p className="text-sm text-background/60">
              Escola Wu San Dji Tao
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-sm text-background/60 hover:text-background transition-colors">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-sm text-background/60 hover:text-background transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#conteudo" className="text-sm text-background/60 hover:text-background transition-colors">
                  Conteúdo Programático
                </a>
              </li>
              <li>
                <a href="#professor" className="text-sm text-background/60 hover:text-background transition-colors">
                  Professor Laércio
                </a>
              </li>
              <li>
                <a href="#detalhes" className="text-sm text-background/60 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/40" />
                <a href="mailto:contato@laerciofonseca.com.br" className="text-sm text-background/60 hover:text-background transition-colors">
                  contato@laerciofonseca.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/40" />
                <span className="text-sm text-background/60">
                  WhatsApp disponível na área de membros
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/40 mt-0.5" />
                <span className="text-sm text-background/60">
                  Espaço Caminho Da Luz<br />
                  Associação Wu San Dji Tao
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/40">
              © {currentYear} Professor Laércio Fonseca. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/40 hover:text-background/60 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-sm text-background/40 hover:text-background/60 transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
