import { motion } from "framer-motion";
import { Calendar, ArrowDown, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
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
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-8 overflow-hidden bg-grid-dots">
      {/* Glows de Fundo Sutis */}
      <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

      <div className="container-narrow relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-12">
        {/* Layout Dividido: Texto elegante à esquerda, Ações e Métricas à direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Coluna Esquerda: Conteúdo Direto, Elegante e Proporcional */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col items-start text-left w-full"
          >
            {/* Título com escala muito mais proporcional e equilibrada */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
              TRANSFORME PROCESSOS LENTOS EM <br className="hidden sm:block" />
              <span className="text-neon">SISTEMAS AUTÔNOMOS.</span>
            </h1>

            {/* Subtítulo Objetivo */}
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Desenvolvemos <strong>sites de alta conversão</strong>, <strong>aplicativos sob medida</strong> e <strong>automações de WhatsApp com inteligência artificial</strong> para eliminar retrabalho e acelerar o crescimento do seu negócio.
            </p>

            {/* Três Diferenciais Rápidos */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs text-slate-300 font-sans mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero planilhas manuais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Atendimento 24h com IA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>No ar em poucos dias</span>
              </div>
            </div>

            <a
              href="#projetos"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground hover:text-white transition-colors py-1"
            >
              <span>Explorar Demonstrações ao Vivo</span>
              <ArrowDown className="h-3.5 w-3.5 text-primary" />
            </a>
          </motion.div>

          {/* Coluna Direita: Caixa Executiva de Ação Rápida + Métricas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 w-full"
          >
            <div className="w-full glass-card rounded-[2rem] p-5 sm:p-7 bg-[#080b12]/90 border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative overflow-hidden box-border">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-emerald-400 to-transparent" />

              <div className="mb-5 text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">
                  CANAL DIRETO
                </span>
                <h3 className="font-heading text-lg font-black text-white uppercase mt-0.5">
                  Vamos conversar sobre seu projeto?
                </h3>
                <p className="text-xs text-muted-foreground mt-1 font-sans">
                  Retornamos com estimativa clara de viabilidade, custo e prazo de entrega.
                </p>
              </div>

              {/* Botões de Ação Imediata */}
              <div className="space-y-3 mb-6">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-primary text-white font-heading font-extrabold text-xs uppercase tracking-[0.14em] py-5 rounded-xl shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_35px_rgba(244,63,94,0.6)] hover:scale-[1.02] transition-all"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o site da Palomino Tech e quero falar sobre um projeto.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="hero_whatsapp"
                    className="flex items-center justify-center gap-2.5"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-white" />
                    Chamar no WhatsApp Direto
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full border-white/15 bg-white/[0.03] hover:bg-white/10 text-white font-heading font-bold text-xs uppercase tracking-[0.14em] py-5 rounded-xl transition-all"
                >
                  <a
                    href="https://calendar.app.google/RpTN49BD3jJabEB79"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="hero_calendar"
                    className="flex items-center justify-center gap-2.5"
                  >
                    <Calendar className="h-4 w-4 text-primary" />
                    Agendar Reunião Online
                  </a>
                </Button>
              </div>

              {/* Métricas Compactas de Telemetria */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white/[0.02]">
                  <div className="font-heading font-black text-lg text-white">9+</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Cases no Ar</div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02]">
                  <div className="font-heading font-black text-lg text-emerald-400">100%</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Autonomia</div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02]">
                  <div className="font-heading font-black text-lg text-primary">12ms</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Latência</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ─── MARQUEE INFINITO DE TECNOLOGIAS & ESPECIALIDADES (Elogiado pelo usuário) ─── */}
      <div className="w-full py-3.5 bg-[#080b12] border-y border-white/10 overflow-hidden relative">
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
