import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageCircle, Calendar } from "lucide-react";

const WHATSAPP = "5531984773813";
const AGENDA_URL = "https://calendar.app.google/RpTN49BD3jJabEB79";

const CtaSection = () => {
  return (
    <section className="section-padding bg-white border-t border-border text-foreground">
      <div className="container-narrow max-w-4xl mx-auto">
        <div className="rounded-3xl bg-[#181818] text-white p-8 sm:p-14 lg:p-16 text-center shadow-lg relative overflow-hidden">
          
          <AnimatedSection>
            {/* Logo Oficial no Topo */}
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.svg" 
                alt="Palomino Tech" 
                className="w-14 h-14 rounded-2xl shadow-xl ring-2 ring-white/10" 
              />
            </div>

            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-4">
              Canal Direto
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Vamos ver o que faz sentido para o seu negócio?
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
              Mande uma mensagem agora, conte qual é o principal gargalo da sua empresa e receba uma estimativa clara de viabilidade, prazo e investimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-8">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-primary hover:bg-[var(--pal-primary-hover)] text-white font-sans font-semibold text-sm px-8 py-6 rounded-full transition-all shadow-sm"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Gostaria de conversar sobre um projeto para minha empresa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white font-sans font-medium text-sm px-6 py-6 rounded-xl transition-all"
              >
                <a
                  href={AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-foreground" />
                  <span>Agendar no Google Calendar</span>
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/50 font-sans">
              <span>✓ Sem compromisso inicial</span>
              <span>✓ Resposta no mesmo dia útil</span>
              <span>✓ Atendimento em todo o Brasil</span>
            </div>

          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
