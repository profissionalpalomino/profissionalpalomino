import AnimatedSection from "./AnimatedSection";
import { Calendar, Globe, MessageSquare, ArrowRight, Check } from "lucide-react";

const WHATSAPP = "5531984773813";

const services = [
  {
    num: "01",
    icon: Calendar,
    title: "Sistemas de Agendamento & Operação",
    desc: "Seu cliente agenda sozinho em segundos, a confirmação vai no WhatsApp e o sistema calcula os repasses da equipe e o fechamento do caixa no final do dia.",
    points: [
      "Agenda online em tempo real",
      "Cálculo automático de comissões",
      "Página personalizada com sua identidade",
      "Zero dependência de balcão para marcar horários",
    ],
    nicho: "Para barbearias, clínicas, salões e estúdios",
  },
  {
    num: "02",
    icon: Globe,
    title: "Sites & Landing Pages de Alta Conversão",
    desc: "Páginas profissionais desenhadas para carregar em menos de 1 segundo no celular, passar autoridade imediata no Google e levar o cliente direto ao WhatsApp.",
    points: [
      "Carregamento ultra-rápido no 4G",
      "Otimizado para o Google (SEO Local)",
      "Catálogo ou cardápio com preços claros",
      "Botão de contato com mensagem personalizada",
    ],
    nicho: "Para comércios locais, médicos, estética e serviços",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Automações de WhatsApp & Fim de Planilhas",
    desc: "Lembretes automáticos de horário que reduzem furos na agenda, avisos matinais de contas a pagar e fluxos que conectam suas ferramentas sem cópia manual.",
    points: [
      "Lembretes de confirmação 2h antes",
      "Alertas diários de contas no WhatsApp",
      "Integração entre formulários e sistemas",
      "Eliminação de controles duplicados em papel",
    ],
    nicho: "Para empresas que perdem tempo com retrabalho",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-background text-foreground">
      <div className="container-narrow">
        
        {/* Cabeçalho da Seção */}
        <AnimatedSection>
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground bg-secondary px-3 py-1 rounded-full border border-border inline-block mb-3">
              Soluções Práticas
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Tecnologia que resolve a rotina do seu negócio.
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Você não precisa entender de programação. Nós entregamos a ferramenta pronta, ensinamos sua equipe a usar e cuidamos de toda a parte técnica.
            </p>
          </div>
        </AnimatedSection>

        {/* Grade de 3 Cards de Produto */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-border p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_2px_8px_rgba(20,20,20,0.04)] hover:border-foreground/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border text-foreground flex items-center justify-center">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono font-bold text-sm text-[var(--pal-text-faint)]">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 leading-snug">
                    {s.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <div className="space-y-2 mb-6 pb-6 border-b border-border">
                    {s.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-foreground">
                        <Check className="w-4 h-4 text-[var(--pal-success)] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-[var(--pal-text-faint)] mb-4">
                    {s.nicho}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Gostaria de saber mais sobre ${encodeURIComponent(s.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-foreground hover:text-foreground transition-colors"
                  >
                    <span>Quero para minha empresa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
