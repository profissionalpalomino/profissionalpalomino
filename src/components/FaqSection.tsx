import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Tem mensalidade extra por funcionário?",
    a: "Não. Sistema de prateleira costuma cobrar por cadeira ou por profissional cadastrado. Aqui o sistema é feito para a sua operação e não tem cobrança escondida por pessoa.",
  },
  {
    q: "Minha equipe não entende de tecnologia. Vai conseguir usar?",
    a: "Vai. Tudo é pensado para quem usa o celular na correria do dia. Abre direto no navegador, sem baixar aplicativo.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Site e agendamento costumam sair em poucos dias, muitas vezes em menos de uma semana. Sistema com regra própria leva de 1 a 3 semanas, e você acompanha cada etapa.",
  },
  {
    q: "E se eu precisar mudar preço, serviço ou profissional depois?",
    a: "Você mesmo muda pelo painel. E se travar em alguma coisa, é só chamar.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Direto no WhatsApp com quem desenvolveu o sistema. Sem fila de espera e sem abrir chamado.",
  },
];

const FaqSection = () => {
  return (
    <section id="duvidas" className="section-padding border-t border-border">
      <div className="container-narrow grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-20">
        <AnimatedSection>
          <p className="rotulo mb-4">Dúvidas</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            O que mais me perguntam.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="w-full border-t border-foreground">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FaqSection;
