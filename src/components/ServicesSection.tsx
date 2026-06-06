import AnimatedSection from "./AnimatedSection";
import { MonitorSmartphone, Code2, Bot, Database, CloudCog, ShieldCheck } from "lucide-react";

const services = [
  { 
    icon: Code2, 
    title: "Sistemas Web Sob Medida", 
    desc: "Plataformas, painéis administrativos, portais de clientes e CRMs desenvolvidos sob medida para acelerar seu fluxo de negócios.", 
    tech: "React • TypeScript • Tailwind",
    color: "from-rose-500/20 to-pink-500/10" 
  },
  { 
    icon: MonitorSmartphone, 
    title: "Aplicativos Mobile", 
    desc: "Aplicações nativas e híbridas de alta performance e excelente usabilidade para iOS e Android.", 
    tech: "React Native • Expo • APIs REST",
    color: "from-pink-500/20 to-rose-500/10" 
  },
  { 
    icon: Bot, 
    title: "Automação de Processos (RPA / IA)", 
    desc: "Criação de robôs inteligentes que eliminam tarefas repetitivas, disparam notificações e integram dados do cliente.", 
    tech: "n8n • Python • OpenAI API",
    color: "from-rose-500/20 to-red-500/10" 
  },
  { 
    icon: Database, 
    title: "Arquitetura de Bancos de Dados", 
    desc: "Modelagem estruturada, migração limpa e otimização avançada de queries de bancos relacionais e NoSQL.", 
    tech: "PostgreSQL • SQLite • Redis",
    color: "from-red-500/20 to-rose-500/10" 
  },
  { 
    icon: CloudCog, 
    title: "Integrações de APIs", 
    desc: "Conectamos de ponta a ponta todos os seus softwares isolados (CRM, ERP, Planilhas, Gateway de Pagamento).", 
    tech: "Evolution API • Webhooks • JSON",
    color: "from-rose-600/20 to-pink-600/10" 
  },
  { 
    icon: ShieldCheck, 
    title: "Infraestrutura & Cloud Devops", 
    desc: "Hospedagem robusta em servidores dedicados na nuvem com conteinerização, segurança SSL e monitoramento constante.", 
    tech: "Docker Swarm • Easypanel • VPS",
    color: "from-pink-600/20 to-rose-600/10" 
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
              Expertise Técnica
            </span>
            <h2 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-5xl text-foreground">
              Como ajudamos sua empresa a crescer
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Desenvolvemos produtos digitais premium de alto padrão, cuidando de cada linha de código até o deploy final na nuvem.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
