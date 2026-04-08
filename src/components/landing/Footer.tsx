import { Mail, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-wide section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif text-background mb-4">
              Espaço Caminho Da Luz
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
        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/40 text-center md:text-left">
              © {currentYear} Buscai & Achareis. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
              <Dialog>
                <DialogTrigger className="text-sm text-background/40 hover:text-background/60 transition-colors">
                  Termos de Uso
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogTitle className="text-xl mb-2">Termos de Uso</DialogTitle>
                  <DialogDescription className="sr-only">Termos de uso e disclaimer</DialogDescription>
                  <div className="space-y-4 text-sm text-muted-foreground mt-4">
                    <p>Ao acessar este site, você concorda com os termos descritos abaixo.</p>

                    <h3 className="text-foreground font-semibold">Uso do site</h3>
                    <p>O conteúdo deste site é informativo e pode ser alterado sem aviso prévio.</p>

                    <h3 className="text-foreground font-semibold">Responsabilidade</h3>
                    <p>Não garantimos resultados específicos com o uso de qualquer produto ou serviço indicado.</p>

                    <h3 className="text-foreground font-semibold">Afiliados</h3>
                    <p>Este site pode promover produtos de terceiros e não é responsável por entregas, pagamentos ou suporte relacionados a esses produtos.</p>

                    <h3 className="text-foreground font-semibold">Propriedade intelectual</h3>
                    <p>Todo o conteúdo deste site é protegido e não pode ser copiado sem autorização.</p>

                    <h3 className="text-foreground font-semibold">Modificações</h3>
                    <p>Os termos podem ser alterados a qualquer momento.</p>

                    <h2 className="text-foreground font-bold text-lg mt-8 pt-4 border-t">DISCLAIMER (AFILIADO)</h2>
                    <p>Este site participa de programas de afiliados e pode receber comissões por indicações realizadas através dos links aqui presentes, sem custo adicional ao usuário.</p>
                    <p>Recomendamos apenas produtos que consideramos relevantes, mas a decisão de compra é de total responsabilidade do usuário.</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="text-sm text-background/40 hover:text-background/60 transition-colors">
                  Política de Privacidade
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogTitle className="text-xl mb-2">Política de Privacidade</DialogTitle>
                  <DialogDescription className="sr-only">Nossa política de privacidade</DialogDescription>
                  <div className="space-y-4 text-sm text-muted-foreground mt-4">
                    <p>A sua privacidade é importante para nós. Esta política descreve como as informações são coletadas, usadas e protegidas neste site.</p>

                    <h3 className="text-foreground font-semibold">Coleta de informações</h3>
                    <p>Este site pode coletar informações automaticamente por meio de cookies, pixels e tecnologias semelhantes, incluindo dados como endereço IP, tipo de navegador, páginas acessadas e tempo de navegação.</p>

                    <h3 className="text-foreground font-semibold">Uso das informações</h3>
                    <p>As informações coletadas são utilizadas para:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Melhorar a experiência do usuário</li>
                      <li>Analisar o desempenho da página</li>
                      <li>Exibir anúncios mais relevantes</li>
                    </ul>

                    <h3 className="text-foreground font-semibold">Cookies e tecnologias de rastreamento</h3>
                    <p>Utilizamos cookies e ferramentas como pixel de rastreamento para fins de análise e marketing. O usuário pode desativar os cookies nas configurações do seu navegador.</p>

                    <h3 className="text-foreground font-semibold">Compartilhamento de dados</h3>
                    <p>Não vendemos informações pessoais. Dados podem ser compartilhados com plataformas de terceiros para fins de análise e publicidade.</p>

                    <h3 className="text-foreground font-semibold">Links externos</h3>
                    <p>Este site pode conter links para páginas externas. Não somos responsáveis pelas políticas de privacidade de outros sites.</p>

                    <h3 className="text-foreground font-semibold">Consentimento</h3>
                    <p>Ao utilizar este site, você concorda com esta política de privacidade.</p>

                    <h3 className="text-foreground font-semibold">Alterações</h3>
                    <p>Esta política pode ser atualizada a qualquer momento, sem aviso prévio.</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="text-sm text-background/40 hover:text-background/60 transition-colors">
                  Criado por Afiliado Oficial
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogTitle className="text-xl mb-2">Aviso de Afiliado</DialogTitle>
                  <DialogDescription className="sr-only">Informações sobre o programa de afiliados</DialogDescription>
                  <div className="space-y-4 text-sm text-muted-foreground mt-4">
                    <p>Este site participa de programas de afiliados e pode receber comissões por indicações realizadas através dos links aqui presentes, sem custo adicional ao usuário.</p>
                    <p>Recomendamos apenas produtos que consideramos relevantes, mas a decisão de compra é de total responsabilidade do usuário.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
