import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Calendar, Instagram } from "lucide-react";

const WHATSAPP = "5531984773813";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const CtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden dark:bg-[#0b0f19] bg-white px-4 sm:px-6">
      {/* Dynamic blurred glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[200px] pointer-events-none" />
      
      <div className="container-narrow relative z-10 w-full mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border dark:border-white/10 border-slate-800 bg-[#080b12]/95 backdrop-blur-2xl p-6 sm:p-14 md:p-20 text-center shadow-[0_20px_70px_rgba(0,0,0,0.8)] w-full mx-auto box-border">
          {/* Subtle inside glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <AnimatedSection>
            {/* Hexágono Oficial no Topo */}
            <div className="flex justify-center mb-6">
              <svg 
                width="44" 
                height="44" 
                viewBox="0 0 32 32" 
                fill="none"
                style={{ filter: "drop-shadow(0 0 12px rgba(244,63,94,0.7))" }}
              >
                <polygon points="16,2 27.1,8.5 27.1,21.5 16,28 4.9,21.5 4.9,8.5" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
              </svg>
            </div>

            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-heading font-bold text-primary mb-6 uppercase tracking-[0.2em]">
              Vamos conversar sobre seu projeto?
            </span>
            
            <h2 className="font-heading text-3xl font-black text-white sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.02] mb-6">
              Tem uma ideia ou gargalo? <br className="hidden sm:block" />
              <span className="text-neon">A gente coloca no ar.</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans mb-10">
              Mande uma mensagem agora, conte o que sua empresa precisa e retornaremos com uma estimativa clara de viabilidade, custo e prazo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-primary text-white font-heading font-extrabold text-xs uppercase tracking-[0.14em] px-8 py-6 rounded-full shadow-[0_0_35px_rgba(244,63,94,0.45)] hover:shadow-[0_0_55px_rgba(244,63,94,0.75)] hover:scale-[1.03] transition-all duration-300"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o site da Palomino Tech e quero iniciar um projeto.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                  Chamar no WhatsApp Direto
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-white/15 bg-white/[0.04] text-white hover:bg-white/10 hover:border-white/30 font-heading font-bold text-xs uppercase tracking-[0.14em] px-8 py-6 rounded-full transition-all hover:scale-[1.03]"
              >
                <a
                  href="https://calendar.app.google/RpTN49BD3jJabEB79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  Agendar no Google Calendar
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-white/10 text-muted-foreground hover:text-white hover:bg-white/5 font-heading font-bold text-xs uppercase tracking-[0.14em] px-6 py-6 rounded-full transition-all"
              >
                <a
                  href="https://instagram.com/palominotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  Instagram
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
