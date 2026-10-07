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
    <section id="duvidas" className="section-padding dark:bg-[#080b12] bg-slate-50 border-t border-b dark:border-white/10 border-slate-200/80 relative overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[180px] pointer-events-none" />

      <div className="container-narrow max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-heading font-bold text-primary mb-4 uppercase tracking-[0.2em]">
              Transparência Total
            </span>
            <h2 className="font-heading text-3xl font-black dark:text-white text-slate-900 sm:text-4xl md:text-5xl uppercase tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-sans">
              Tudo o que você precisa saber antes de iniciar seu projeto conosco com total clareza e segurança.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 rounded-[2.5rem] border dark:border-white/10 border-slate-200/80 dark:bg-[#0b0f19]/90 bg-white backdrop-blur-2xl p-5 sm:p-10 shadow-xl dark:shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`faq-${i}`} 
                  className="border-b dark:border-white/10 border-slate-200 last:border-0 py-2"
                >
                  <AccordionTrigger className="text-left font-heading text-base sm:text-lg font-bold py-4 hover:no-underline hover:text-primary transition-colors dark:text-white text-slate-900">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 pr-4 font-sans">
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
