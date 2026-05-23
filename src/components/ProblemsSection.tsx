import AnimatedSection from "./AnimatedSection";
import { AlertCircle, ArrowDown } from "lucide-react";

const problems = [
  { text: "Sua recepcionista esquece de confirmar consulta?", emoji: "😤" },
  { text: "Seu cliente some depois do orçamento?", emoji: "👻" },
  { text: "Você perde venda fora do horário comercial?", emoji: "💸" },
  { text: "Paga salário pra alguém responder sempre a mesma coisa?", emoji: "🔁" },
];

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-dot-pattern relative">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-semibold text-destructive mb-4">
              O problema
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
              Isso acontece no seu negócio?
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-destructive/15 bg-background p-6 transition-all duration-300 hover:border-destructive/30 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-destructive/5 rounded-bl-full" />
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{problem.emoji}</span>
                  <p className="text-base font-semibold leading-snug md:text-lg">{problem.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-14 text-center">
            <div className="inline-block rounded-2xl bg-primary/8 border border-primary/20 px-8 py-5">
              <p className="text-lg font-bold text-primary md:text-xl">
                ✅ Isso tem solução. E custa menos do que um funcionário.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemsSection;
