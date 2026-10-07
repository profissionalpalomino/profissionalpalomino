import { motion } from "framer-motion";
import { Calendar, ArrowDown, ExternalLink, Zap, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const marqueeItems = [
  "SITES DE ALTA CONVERSÃO",
  "SISTEMAS WEB SOB MEDIDA",
  "AGENTES DE INTELIGÊNCIA ARTIFICIAL",
  "AUTOMAÇÃO NO WHATSAPP (EVOLUTION API)",
  "DASHBOARDS & GESTÃO FINANCEIRA",
  "INTEGRAÇÕES N8N & PYTHON",
  "PROSPECÇÃO AUTOMÁTICA DE LEADS",
  "ZERO PLANILHAS MANUAIS",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-36 pb-16 lg:pt-40 flex flex-col justify-between overflow-hidden bg-grid-dots">
      {/* Glows de Alta Voltagem ao Fundo */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-15%] w-[550px] h-[550px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[160px] pointer-events-none" />

      <div className="container-narrow relative z-10 w-full px-5 lg:px-8">
        
        {/* Top Badges & Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              SISTEMA OPERACIONAL • ATENDIMENTO & IA 24/7
            </span>
          </div>

          <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground/80 mb-4">
            ENGENHARIA DE SOFTWARE & AUTOMAÇÃO COM IA
          </p>

          {/* Título Principal de Alto Impacto */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.94] mb-6">
            TRANSFORME PROCESSOS LENTOS EM <br className="hidden sm:block" />
            <span className="text-neon">SISTEMAS AUTÔNOMOS.</span>
          </h1>

          {/* Subtítulo Focado em Faturamento e Dor Real */}
          <p className="max-w-3xl font-sans text-base sm:text-lg md:text-xl text-muted-foreground font-normal leading-relaxed mb-10">
            Criamos <strong>sites de altíssima conversão</strong>, <strong>aplicativos sob medida</strong> e <strong>automações de WhatsApp com IA</strong> que eliminam retrabalho manual, atendem seus clientes e escalam seu negócio sem dor de cabeça.
          </p>

          {/* Ações / CTAs de Conversão */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-primary text-white font-heading font-extrabold text-xs uppercase tracking-[0.14em] px-8 py-6 rounded-full shadow-[0_0_35px_rgba(244,63,94,0.4)] hover:shadow-[0_0_55px_rgba(244,63,94,0.7)] hover:scale-[1.03] transition-all duration-300"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o site da Palomino Tech e quero falar sobre um projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <WhatsAppIcon className="h-5 w-5 text-white" />
                Chamar no WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 text-white font-heading font-bold text-xs uppercase tracking-[0.14em] px-8 py-6 rounded-full transition-all duration-300"
            >
              <a
                href="https://calendar.app.google/RpTN49BD3jJabEB79"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <Calendar className="h-4 w-4 text-primary" />
                Agendar Reunião Online
              </a>
            </Button>

            <a
              href="#projetos"
              className="text-xs font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-white transition-colors flex items-center gap-2 px-4 py-2"
            >
              Ver Demonstrações <ArrowDown className="h-3.5 w-3.5 text-primary" />
            </a>
          </div>
        </motion.div>

        {/* ─── MOCKUP 3D CENTRAL COM CARDS HOLOGRÁFICOS (Estilo BizNext / Systeme.io / Morph AI) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-5xl mx-auto my-6"
        >
          {/* Card Flutuante 1 — Topo Esquerdo */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex items-center gap-3 absolute -top-8 -left-6 z-30 glass-card px-4 py-3 rounded-2xl shadow-xl border border-white/10 bg-[#0b0f19]/90 backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">Automação WhatsApp</div>
              <div className="font-heading text-xs font-extrabold text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                +142 atendimentos hoje
              </div>
            </div>
          </motion.div>

          {/* Card Flutuante 2 — Topo Direito */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:flex items-center gap-3 absolute -top-8 -right-6 z-30 glass-card px-4 py-3 rounded-2xl shadow-xl border border-white/10 bg-[#0b0f19]/90 backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">Leads & Conversão</div>
              <div className="font-heading text-xs font-extrabold text-white">
                3.821 clientes qualificados
              </div>
            </div>
          </motion.div>

          {/* O Laptop Showcase 3D */}
          <div className="relative rounded-[2rem] p-3 sm:p-4 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#070a12] aspect-[16/9] shadow-inner flex flex-col">
              
              {/* Barra superior de janela de sistema */}
              <div className="h-8 bg-[#0b0f19] border-b border-white/10 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                  palomino.cloud / cockpit-executivo
                </div>
                <div className="w-10 text-right">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold">ONLINE</span>
                </div>
              </div>

              {/* Conteúdo simulado do dashboard de alta tecnologia */}
              <div className="p-4 sm:p-6 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-br from-[#090d18] to-[#04060c]">
                
                {/* Coluna 1: Métricas de Vendas & Tráfego */}
                <div className="glass-card p-4 rounded-xl flex flex-col justify-between border border-white/5 bg-white/[0.015]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted-foreground">Funil de Leads Ativos</span>
                    <div className="font-heading text-2xl font-black text-white mt-1">R$ 148.920,00</div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">+28.4% este mês</span>
                  </div>
                  <div className="h-16 flex items-end gap-1.5 pt-4">
                    <span className="w-1/6 h-[30%] bg-primary/30 rounded-t" />
                    <span className="w-1/6 h-[45%] bg-primary/40 rounded-t" />
                    <span className="w-1/6 h-[60%] bg-primary/50 rounded-t" />
                    <span className="w-1/6 h-[40%] bg-primary/40 rounded-t" />
                    <span className="w-1/6 h-[75%] bg-primary/70 rounded-t" />
                    <span className="w-1/6 h-[100%] bg-primary rounded-t shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
                  </div>
                </div>

                {/* Coluna 2: Automações em Execução */}
                <div className="glass-card p-4 rounded-xl flex flex-col justify-between border border-white/5 bg-white/[0.015]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted-foreground">Automações Ativas</span>
                    <div className="font-heading text-2xl font-black text-white mt-1">42 Agentes IA</div>
                    <span className="text-[10px] font-mono text-primary font-bold">Zero fila de espera</span>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>WhatsApp Prospecção</span>
                      <span className="text-emerald-400 font-mono font-bold">ATIVO</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[85%]" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>Lembretes Financeiros</span>
                      <span className="text-emerald-400 font-mono font-bold">DISPARADO</span>
                    </div>
                  </div>
                </div>

                {/* Coluna 3: Status dos Serviços & Servidores */}
                <div className="glass-card p-4 rounded-xl flex flex-col justify-between border border-white/5 bg-white/[0.015]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted-foreground">Infraestrutura em Nuvem</span>
                    <div className="font-heading text-2xl font-black text-white mt-1">99.98% Uptime</div>
                    <span className="text-[10px] font-mono text-muted-foreground">VPS Hostinger • Ubuntu 24.04</span>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-slate-300">Latência de Resposta</div>
                    <div className="text-xs font-mono font-black text-emerald-400">12ms</div>
                  </div>
                </div>

              </div>

              {/* Rodapé da janela */}
              <div className="h-6 bg-[#080b12] border-t border-white/5 px-4 flex items-center justify-between text-[9px] font-mono text-muted-foreground/60">
                <span>ESTADO: PRODUÇÃO CONECTADA</span>
                <span>DOCKER SWARM: 12 CONTAINERS</span>
              </div>
            </div>
          </div>

          {/* Card Flutuante 3 — Inferior Esquerdo */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden sm:flex items-center gap-3 absolute -bottom-5 left-10 z-30 glass-card px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 bg-[#0b0f19]/90 backdrop-blur-xl"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-heading font-extrabold text-white">
              Sistemas Autônomos Sem Erro Humano
            </span>
          </motion.div>

          {/* Card Flutuante 4 — Inferior Direito */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="hidden sm:flex items-center gap-3 absolute -bottom-5 right-10 z-30 glass-card px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 bg-[#0b0f19]/90 backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-heading font-extrabold text-white">
              Sites e Apps em PWA para Celular
            </span>
          </motion.div>
        </motion.div>

        {/* Métricas Numéricas de Impacto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10">
          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-white">9+</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Projetos & LPs Ativos</div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-emerald-400">100%</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Autonomia Operacional</div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-primary">0</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Planilhas e Retrabalho</div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-white">12ms</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Latência de Servidor</div>
          </div>
        </div>

      </div>

      {/* ─── MARQUEE INFINITO DE TECNOLOGIAS & ESPECIALIDADES (Estilo WE03 / Elleven) ─── */}
      <div className="w-full mt-16 py-4 bg-[#080b12] border-y border-white/10 overflow-hidden relative">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase text-muted-foreground/80 hover:text-white transition-colors">
                {item}
              </span>
              <span className="text-primary font-bold text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
