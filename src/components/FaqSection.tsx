import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter algum sistema ou servidor especial contratado?",
    a: "Não. As automações e sites são construídos para funcionar com o que você já utiliza no dia a dia — WhatsApp, planilhas, Google Agenda, sistemas de gestão ou redes sociais. Se você utiliza, nós integramos.",
  },
  {
    q: "É difícil de operar depois que o sistema estiver pronto?",
    a: "Não. A regra da Palomino Tech é simplicidade absoluta para o cliente: criamos sistemas autônomos que rodam sozinhos sem você precisar virar técnico. Você recebe os relatórios e as notificações no WhatsApp.",
  },
  {
    q: "Quanto tempo leva para colocar um projeto no ar?",
    a: "Landing pages e automações essenciais costumam ser entregues em poucos dias. Sistemas mais elaborados levam de 1 a 3 semanas, sempre com cronograma transparente e entregas parciais para você acompanhar.",
  },
  {
    q: "E se eu precisar alterar preços, textos ou funções depois?",
    a: "Tudo é flexível e modular. Mudou seu cardápio, tabela de procedimentos ou horários de atendimento? Ajustamos com rapidez e sem complicações.",
  },
  {
    q: "A Palomino Tech atende apenas em Belo Horizonte?",
    a: "Nossa sede é em Belo Horizonte/MG, com reuniões presenciais para empresas locais da Grande BH, mas desenvolvemos e implantamos sistemas para clientes em todo o Brasil com atendimento 100% online.",
  },
  {
    q: "Como funciona o suporte após a entrega do projeto?",
    a: "Todo projeto conta com período de garantia e acompanhamento próximo para validar o funcionamento no dia a dia. Também oferecemos planos contínuos de evolução e suporte preventivo.",
  },
];

const FaqSection = () => {
  return (
    <section id="duvidas" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <div className="container-narrow max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
              Tire suas dúvidas
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Tudo o que você precisa saber antes de iniciar seu projeto conosco com total clareza e segurança.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 rounded-[2rem] border border-border bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-[var(--shadow-md)]">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`faq-${i}`} 
                  className="border-b border-border/70 last:border-0 py-1"
                >
                  <AccordionTrigger className="text-left font-heading text-base sm:text-lg font-bold py-4 hover:no-underline hover:text-primary transition-colors text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 pr-4">
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
