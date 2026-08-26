import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter algum sistema especial?",
    a: "Não. A automação funciona com o que você já usa — WhatsApp, planilha, agenda do Google, sistema de gestão. Se você usa, eu integro.",
  },
  {
    q: "É difícil de usar depois que estiver pronto?",
    a: "Não. Você não precisa mexer em nada. Funciona sozinho. E se precisar de algum ajuste, é só me chamar.",
  },
  {
    q: "E se eu precisar mudar alguma coisa?",
    a: "Sem problema. Tudo é flexível. Mudou o preço? Mudou o horário? Eu ajusto rápido e sem dor de cabeça.",
  },
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "Depende da complexidade do projeto. Após entender sua necessidade, te passo um prazo realista — sem enrolação.",
  },
];

const FaqSection = () => {
  return (
    <section className="section-padding bg-background bg-dot-pattern relative">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Dúvidas
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
              Perguntas frequentes
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 rounded-2xl border bg-background p-6 shadow-sm">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0">
                  <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FaqSection;
