import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar mensalidade adicional por cada funcionário da equipe?",
    a: "Não. Diferente dos sistemas de prateleira que cobram taxas extras por cada cadeira ou profissional cadastrado, desenvolvemos o sistema sob medida para a sua operação sem cobranças ocultas.",
  },
  {
    q: "Minha equipe não entende de tecnologia, vamos conseguir usar?",
    a: "Sim. A premissa central é simplicidade: a interface foi pensada para quem usa o celular na correria do dia a dia. Funciona direto no navegador, sem precisar baixar aplicativo pesado.",
  },
  {
    q: "Quanto tempo leva para colocar o sistema no ar?",
    a: "Modelos de agendamento e landing pages costumam ficar prontos em poucos dias (muitas vezes em menos de 1 semana). Sistemas com regras personalizadas levam de 1 a 3 semanas, com cronograma transparente.",
  },
  {
    q: "E se eu precisar alterar preços, serviços ou profissionais depois?",
    a: "Tudo é flexível. Você mesmo consegue gerenciar seus serviços, horários e equipe diretamente pelo painel administrativo com total autonomia.",
  },
  {
    q: "Como funciona o suporte se eu tiver alguma dúvida ou problema?",
    a: "Você tem canal direto no WhatsApp com o desenvolvedor responsável. Sem filas de espera, sem abrir tickets demorados e sem falar com robôs.",
  },
];

const FaqSection = () => {
  return (
    <section id="duvidas" className="section-padding bg-[#FAF9F7] text-[#1A1714]">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C42B13] bg-[#FCEDE9] px-3 py-1 rounded-full border border-[#F2C4B9] inline-block mb-3">
              Perguntas Frequentes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
              Tire suas dúvidas antes de começar.
            </h2>
            <p className="font-sans text-base text-[#57524C]">
              Tudo o que você precisa saber com total clareza e transparência.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="bg-white rounded-2xl border border-[#E5E1DC] p-5 sm:p-8 shadow-xs">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-[#E5E1DC] last:border-0 pb-3"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-sm sm:text-base text-[#1A1714] hover:text-[#E8341C] transition-colors py-2">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-xs sm:text-sm text-[#57524C] leading-relaxed pt-2">
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
