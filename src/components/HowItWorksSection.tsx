import AnimatedSection from "./AnimatedSection";
import { ClipboardList, LayoutTemplate, Code, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, num: "01", title: "Conta pra gente", desc: "Explique sua dor ou ideia. Uma conversa rápida de 15 minutos no WhatsApp ou Google Meet já é suficiente." },
  { icon: LayoutTemplate, num: "02", title: "A proposta clara", desc: "Apresentamos exatamente como vai funcionar, a arquitetura, quanto custa e o dia exato da entrega. Sem surpresas." },
  { icon: Code, num: "03", title: "Construção ágil", desc: "Desenvolvemos em ciclos rápidos e você acompanha as telas no ar em tempo real. Precisou ajustar algo? Mudamos na hora." },
  { icon: Rocket, num: "04", title: "No ar & com suporte", desc: "Entregamos funcionando 100%, ensinamos sua equipe a operar e garantimos suporte contínuo para sua tranquilidade." },
];

const HowItWorksSection = () => {
  return (
    <section id="processo" className="section-padding relative bg-[#080b12] border-t border-b border-white/10 overflow-hidden">
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-heading font-bold text-primary mb-4 uppercase tracking-[0.2em]">
              Processo Transparente
            </span>
            <h2 className="font-heading text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
              Do "tenho uma ideia" <br />
              <span className="text-neon">ao ar em poucos dias.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-sans">
              Metodologia ágil sem burocracia: da concepção à produção com acompanhamento transparente.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-4 relative">
          {/* Linha conectora luminosa no desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 shadow-[0_0_15px_rgba(244,63,94,0.5)] z-0" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="relative text-center z-10 flex flex-col h-full">
                {/* Círculo com Número */}
                <div className="mx-auto mb-6 relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b0f19] border border-primary/40 text-primary font-heading font-black text-xl mx-auto shadow-[0_0_25px_rgba(244,63,94,0.3)] group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>
                </div>
                
                <div className="glass-card p-6 flex-1 flex flex-col justify-start rounded-[1.75rem] bg-[#0b0f19]/80 border border-white/10 hover:border-primary/40 transition-all">
                  <step.icon className="mx-auto mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-base font-heading font-black text-white uppercase mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
