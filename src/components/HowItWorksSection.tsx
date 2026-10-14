import AnimatedSection from "./AnimatedSection";
import { Smartphone, BellRing, Calculator, ArrowRight, Calendar, MessageCircle } from "lucide-react";

const WHATSAPP = "5531984773813";
const AGENDA_URL = "https://calendar.app.google/RpTN49BD3jJabEB79";

const passosRotina = [
  {
    step: "01",
    icon: Smartphone,
    title: "O cliente agenda sozinho",
    desc: "Ele acessa o link pelo celular, escolhe o serviço, o profissional e o horário disponível. Sem esperar ninguém responder no WhatsApp.",
    highlight: "Funciona 24h por dia, inclusive à noite e nos fins de semana.",
  },
  {
    step: "02",
    icon: BellRing,
    title: "Lembrete automático no WhatsApp",
    desc: "O sistema confirma na hora e dispara uma mensagem de lembrete 2 horas antes do horário. O cliente confirma com um toque.",
    highlight: "Reduz esquecimentos e furos de agenda a quase zero.",
  },
  {
    step: "03",
    icon: Calculator,
    title: "Caixa e repasses fechados",
    desc: "Cada profissional vê seus atendimentos no celular. No fim do dia, o faturamento e as comissões já estão calculados sem erro.",
    highlight: "Chega de perder horas somando caderninho ou planilha.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="processo" className="section-padding bg-white border-y border-[#E5E1DC] text-[#1A1714]">
      <div className="container-narrow">
        
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C42B13] bg-[#FCEDE9] px-3 py-1 rounded-full border border-[#F2C4B9] inline-block mb-3">
              Como Funciona na Prática
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
              A rotina do seu negócio, sem atrito.
            </h2>
            <p className="font-sans text-base text-[#57524C] leading-relaxed">
              Veja como a operação da sua empresa funciona depois que o sistema é implantado:
            </p>
          </div>
        </AnimatedSection>

        {/* Grade dos 3 Passos da Rotina */}
        <div className="grid gap-8 md:grid-cols-3 relative mb-16">
          {passosRotina.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#FAF9F7] rounded-2xl border border-[#E5E1DC] p-6 sm:p-7 flex flex-col justify-between h-full relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1DC] text-[#E8341C] flex items-center justify-center">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#78716A]">
                      PASSO {p.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#1A1714] mb-3">
                    {p.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#57524C] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E5E1DC]/80 font-sans text-xs text-[#1E7A3B] font-medium">
                  {p.highlight}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Faixa de Como Trabalhamos */}
        <AnimatedSection delay={0.3}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F7] border border-[#E5E1DC] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-mono text-[11px] font-semibold text-[#78716A] uppercase tracking-wider block mb-1">
                Do primeiro contato à entrega
              </span>
              <h4 className="font-heading font-bold text-lg text-[#1A1714] mb-1">
                Quer saber como implantar na sua empresa?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#57524C]">
                Conversamos 15 minutos pelo WhatsApp, entendemos suas regras e mostramos uma demonstração funcionando antes de você fechar qualquer contrato.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={AGENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E8341C] hover:bg-[#C9280F] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(232,52,28,0.25)] hover:shadow-[0_6px_20px_rgba(232,52,28,0.35)] shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar demonstração</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Quero ver como funciona a implantação na minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F3F0] text-[#1A1714] border border-[#E5E1DC] text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#1E7A3B]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default HowItWorksSection;
