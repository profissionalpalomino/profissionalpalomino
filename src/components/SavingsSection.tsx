import AnimatedSection from "./AnimatedSection";
import { X, Check, Crown, AlertTriangle } from "lucide-react";

const SavingsSection = () => {
  return (
    <section className="section-padding dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Comparativo
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
              Quanto você pode economizar
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Funcionário */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/60" />
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-white">Funcionário tradicional</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Salário + encargos todo mês",
                  "Férias, 13° e FGTS",
                  "Trabalha só 8h por dia",
                  "Falta, atrasa, esquece",
                  "Precisa de treinamento constante",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <X className="h-4 w-4 shrink-0 text-destructive" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Automação */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm p-8 relative overflow-hidden shadow-[var(--shadow-glow)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Crown className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Automação</h3>
                <span className="ml-auto text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full">RECOMENDADO</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Custo fixo muito menor",
                  "Sem encargos trabalhistas",
                  "Funciona 24/7, inclusive feriados",
                  "Nunca esquece, nunca atrasa",
                  "Configurou uma vez, funciona sempre",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
