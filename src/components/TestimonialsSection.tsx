import AnimatedSection from "./AnimatedSection";
import { Star, Quote, Building2, UtensilsCrossed } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative dark:bg-[#0b0f19] bg-white overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[180px] pointer-events-none" />

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-heading font-bold text-emerald-400 mb-4 uppercase tracking-[0.2em]">
              Prova Social & Resultados
            </span>
            <h2 className="font-heading text-3xl font-black sm:text-4xl md:text-5xl dark:text-white text-slate-900 uppercase tracking-tight mb-4">
              O que dizem os <span className="text-neon">parceiros da Palomino Tech</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-sans">
              Negócios reais que substituíram processos manuais e planilhas por sistemas rápidos e autônomos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          
          {/* Depoimento 1: Alca Eventos */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] dark:bg-[#080b12]/90 bg-slate-50/90 border dark:border-white/10 border-slate-200 shadow-lg dark:shadow-none hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5 text-primary" />
                    <span>ALCA EVENTOS</span>
                  </div>
                </div>

                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <p className="dark:text-slate-200 text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8 font-sans">
                  "O sistema da Palomino Tech eliminou completamente a confusão de pedidos de drinks e músicas nas nossas festas. Os convidados usaram o app direto no celular e o painel na TV atualizando o ranking ao vivo impressionou todo mundo."
                </p>
              </div>

              <div className="pt-4 border-t dark:border-white/10 border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-heading font-extrabold text-sm dark:text-white text-slate-900 uppercase">Coordenação Geral</div>
                  <div className="text-[11px] font-mono text-muted-foreground">Alca Party • Belo Horizonte</div>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Case Validado
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Depoimento 2: Venda do Deco */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] dark:bg-[#080b12]/90 bg-slate-50/90 border dark:border-white/10 border-slate-200 shadow-lg dark:shadow-none hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-400" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <UtensilsCrossed className="h-3.5 w-3.5 text-emerald-400" />
                    <span>GASTRONOMIA DESDE 1996</span>
                  </div>
                </div>

                <Quote className="h-8 w-8 text-emerald-400/30 mb-4" />
                
                <p className="dark:text-slate-200 text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8 font-sans">
                  "Nosso cardápio agora tem fotos reais de cada porção com preços sempre atualizados. Os clientes veem antes de pedir e mandam reserva direta no WhatsApp sem congestionar o balcão. O retorno foi imediato."
                </p>
              </div>

              <div className="pt-4 border-t dark:border-white/10 border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-heading font-extrabold text-sm dark:text-white text-slate-900 uppercase">Direção Operacional</div>
                  <div className="text-[11px] font-mono text-muted-foreground">Venda do Deco • Tradição</div>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Case Validado
                </span>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
