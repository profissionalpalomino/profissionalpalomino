import AnimatedSection from "./AnimatedSection";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Clínica odontológica",
    result: "Parou de perder paciente por falta de confirmação.",
    metric: "+40%",
    metricLabel: "taxa de presença",
  },
  {
    title: "Loja de roupas",
    result: "Passou a vender no fim de semana sem ninguém online.",
    metric: "+25%",
    metricLabel: "faturamento mensal",
  },
  {
    title: "Escritório de advocacia",
    result: "Reduziu tempo gasto respondendo perguntas repetitivas.",
    metric: "-80%",
    metricLabel: "tempo em respostas",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding bg-background bg-dot-pattern relative">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Cases
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
              Resultados reais
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="group rounded-2xl border bg-background p-6 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:bg-primary/10" />
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.title}</span>
                  </div>
                  
                  <p className="text-3xl font-extrabold text-primary">{c.metric}</p>
                  <p className="text-sm text-muted-foreground mb-4">{c.metricLabel}</p>
                  
                  <p className="text-foreground font-medium leading-relaxed">{c.result}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
