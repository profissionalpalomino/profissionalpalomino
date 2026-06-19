import AnimatedSection from "./AnimatedSection";
import { MonitorSmartphone, Code2, Bot, CloudCog } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sites e Landing Pages",
    desc: "Site profissional pra sua empresa aparecer no Google, passar credibilidade e converter visita em cliente. Entregamos rápido, sem template genérico.",
    tech: "Do zero, feito pra você",
    color: "from-rose-500/20 to-pink-500/10"
  },
  {
    icon: MonitorSmartphone,
    title: "Aplicativos e Sistemas Web",
    desc: "Tem uma ideia de app ou precisa de um sistema pra organizar o seu negócio? A gente constrói do zero — bolão, controle de estoque, agendamento, o que precisar.",
    tech: "Web e Mobile",
    color: "from-pink-500/20 to-rose-500/10"
  },
  {
    icon: Bot,
    title: "Automações com IA",
    desc: "Tarefas que você faz na mão todo dia podem rodar sozinhas: postar no Instagram, disparar mensagem no WhatsApp, gerar relatório, qualificar lead.",
    tech: "Funciona enquanto você dorme",
    color: "from-rose-500/20 to-red-500/10"
  },
  {
    icon: CloudCog,
    title: "Integrações entre Sistemas",
    desc: "Seu CRM não fala com o financeiro? O WhatsApp não entra no funil? A gente conecta tudo — sem precisar trocar de sistema nem contratar programador pra cada ajuste.",
    tech: "Seus sistemas conversando",
    color: "from-rose-600/20 to-pink-600/10"
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding dark-section relative overflow-hidden bg-background">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
              O que a gente faz
            </span>
            <h2 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-5xl text-foreground">
              Sem mistério. Aqui é o cardápio.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Se tem um problema no seu negócio que você resolve na mão todo dia, a gente provavelmente consegue automatizar ou construir um sistema pra isso.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-white/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-[0_8px_30px_rgba(244,63,94,0.1)] hover:-translate-y-1">
                {/* Visual Top Glow Bar */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${s.color}`} />
                
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 border border-border group-hover:border-primary/45 group-hover:bg-primary/10 transition-colors duration-300">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed min-h-[60px]">{s.desc}</p>
                
                {/* Tech Badge */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-[10px] text-primary/80 tracking-wider uppercase font-semibold">
                    {s.tech}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
