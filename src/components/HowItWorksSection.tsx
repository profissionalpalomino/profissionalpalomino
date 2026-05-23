import AnimatedSection from "./AnimatedSection";
import { ClipboardList, LayoutTemplate, Code, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, num: "01", title: "Alinhamento & Escopo", desc: "Entendemos seu desafio e desenhamos a solução técnica ideal." },
  { icon: LayoutTemplate, num: "02", title: "Proposta & UI/UX", desc: "Apresentamos o protótipo, cronograma e valores transparentes." },
  { icon: Code, num: "03", title: "Desenvolvimento Agile", desc: "Construção do software com entregas contínuas e validações." },
  { icon: Rocket, num: "04", title: "Deploy & Suporte", desc: "Lançamento do produto e garantia de estabilidade contínua." },
];

const HowItWorksSection = () => {
  return (
    <section id="processo" className="section-padding relative bg-background bg-dot-pattern">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Processo de Trabalho
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-5xl text-foreground">
              Como transformamos ideias em código
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative text-center">
                {/* Number circle */}
                <div className="mx-auto mb-6 relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-extrabold mx-auto shadow-[var(--shadow-glow)]">
                    {step.num}
                  </div>
                </div>
                
                <div className="rounded-2xl border bg-card/60 p-6 shadow-sm min-h-[180px]">
                  <step.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
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
