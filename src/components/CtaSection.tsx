import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP = "5531984773813";

const CtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background px-4">
      {/* Dynamic blurred glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-white/90 backdrop-blur-xl p-8 sm:p-12 md:p-16 text-center shadow-[var(--shadow-lg)]">
          {/* Subtle inside glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <AnimatedSection>
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6 uppercase tracking-wider">
              Vamos conversar?
            </span>
            
            <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
              Tem uma ideia?<br className="hidden sm:block" /> A gente coloca no ar.
            </h2>

            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Manda uma mensagem, conta o problema ou a ideia — e a gente já diz se é possível, quanto custa e quanto tempo leva.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:brightness-110 text-sm font-bold px-8 py-6 rounded-xl shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(230,59,46,0.3)] hover:scale-[1.03]"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Oi! Vi o portfólio da Palomino Tech e quero conversar sobre um projeto.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Iniciar Conversa no WhatsApp
                </a>
              </Button>
              
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-secondary text-sm font-bold px-8 py-6 rounded-xl transition-all hover:scale-[1.03]"
              >
                <a href="mailto:profissionalpalomino@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar E-mail Direto
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
