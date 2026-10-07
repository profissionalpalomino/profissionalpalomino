import AnimatedSection from "./AnimatedSection";
import { MonitorSmartphone, Code2, Bot, CloudCog, ArrowRight } from "lucide-react";

const WHATSAPP = "5531984773813";

const services = [
  {
    icon: Code2,
    num: "01",
    title: "Sites & Landing Pages de Alta Conversão",
    desc: "Sites com design cinematográfico, carregamento instantâneo no celular e arquitetura persuasiva voltada para transformar visitantes em dinheiro no caixa da sua empresa.",
    tech: "Tailwind CSS • SEO • Mobile First",
    color: "from-primary/30 to-transparent",
    accent: "text-primary"
  },
  {
    icon: MonitorSmartphone,
    num: "02",
    title: "Sistemas Web & Aplicativos Sob Medida",
    desc: "Painéis de agendamento, controle de estoque, CRM, portais de clientes e aplicativos web/PWA que funcionam exatamente com as regras e particularidades do seu negócio.",
    tech: "React • Node.js • PWA Instalável",
    color: "from-blue-500/30 to-transparent",
    accent: "text-blue-400"
  },
  {
    icon: Bot,
    num: "03",
    title: "Agentes de IA & Automação de WhatsApp",
    desc: "Agentes de Inteligência Artificial que atendem clientes, tiram dúvidas, qualificam orçamentos, agendam horários e disparam alertas 24 horas por dia sem descanso.",
    tech: "Evolution API • LLMs • Autônomo 24/7",
    color: "from-emerald-500/30 to-transparent",
    accent: "text-emerald-400"
  },
  {
    icon: CloudCog,
    num: "04",
    title: "Integrações de Fluxos & Fim de Planilhas",
    desc: "Conectamos seus sistemas (CRM, Google Sheets, ERPs e Bancos) para que os dados fluam sem ninguém da sua equipe precisar redigitar ou copiar e colar na mão.",
    tech: "n8n • Webhooks • Python • Docker",
    color: "from-purple-500/30 to-transparent",
    accent: "text-purple-400"
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden bg-[#0b0f19]">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[180px] pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-heading font-bold text-primary mb-4 uppercase tracking-[0.2em]">
              Nossas Especialidades
            </span>
            <h2 className="font-heading text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
              Tecnologia de ponta <br />
              <span className="text-neon">sem complicação para você.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-sans">
              Você não precisa ser técnico. A gente traduz seu gargalo operacional em código de alta performance, sem jargões confusos e com foco total em ROI.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group glass-card relative overflow-hidden rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_15px_45px_rgba(244,63,94,0.18)] bg-[#080b12]/90 flex flex-col justify-between h-full">
                {/* Linha superior luminosa */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${s.color}`} />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                      <s.icon className={`h-7 w-7 ${s.accent}`} />
                    </div>
                    <span className="font-heading font-black text-3xl text-white/10 group-hover:text-primary/30 transition-colors">
                      {s.num}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-black text-white uppercase mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                    {s.tech}
                  </span>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Gostaria de saber mais sobre ${encodeURIComponent(s.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
                  >
                    Conversar <ArrowRight className="h-3 w-3" />
                  </a>
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
