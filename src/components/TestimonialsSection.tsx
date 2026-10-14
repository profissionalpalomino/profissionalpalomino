import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

const cases = [
  {
    empresa: "Barbearia & Salão",
    responsavel: "Operação de 3 cadeiras",
    cidade: "Belo Horizonte, MG",
    frase: "Eu não vendia tempo, eu vendia atenção dividida entre atender e responder mensagem de agendamento no celular.",
    antes: "Recepção parando no meio do expediente para responder WhatsApp, clientes esquecendo horário e fechamento do mês levando horas com calculadora na mão.",
    depois: "Clientes agendam sozinhos pelo link em qualquer horário. A equipe só abre a agenda pelo celular e o caixa fecha com as comissões prontas.",
  },
  {
    empresa: "Alca Eventos & Festas",
    responsavel: "Coordenação Geral",
    cidade: "Belo Horizonte, MG",
    frase: "Eliminou as comandas de papel e a fila no balcão. Os convidados pediram tudo pelo celular sem atrito nenhum.",
    antes: "Fila acumulada para pedir bebidas e música, comandas em papel se perdendo e dificuldade em fechar o consumo total.",
    depois: "Sistema web direto no celular de cada convidado (sem precisar baixar aplicativo) e painel em tempo real na TV comandando a festa.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-white border-y border-[#E5E1DC] text-[#1A1714]">
      <div className="container-narrow">
        
        <AnimatedSection>
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C42B13] bg-[#FCEDE9] px-3 py-1 rounded-full border border-[#F2C4B9] inline-block mb-3">
              Casos Reais
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
              Menos improviso. Mais tempo para cuidar do seu negócio.
            </h2>
            <p className="font-sans text-base text-[#57524C] leading-relaxed">
              O que muda no dia a dia de quem substitui controles em papel e atendimento manual por sistemas da Palomino Tech:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#FAF9F7] rounded-2xl border border-[#E5E1DC] p-6 sm:p-8 flex flex-col justify-between h-full shadow-[0_2px_8px_rgba(26,23,20,0.03)]">
                <div>
                  <Quote className="w-8 h-8 text-[#E8341C]/40 mb-4" />
                  
                  <blockquote className="font-heading text-lg sm:text-xl font-bold text-[#1A1714] leading-snug mb-6">
                    "{c.frase}"
                  </blockquote>

                  <div className="space-y-4 pt-6 border-t border-[#E5E1DC] mb-6">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B42318] mb-1">
                        Como era antes:
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#57524C] leading-relaxed">
                        {c.antes}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1E7A3B] mb-1">
                        Como ficou depois:
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#1A1714] leading-relaxed font-medium">
                        {c.depois}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E1DC] flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#1A1714]">
                      {c.empresa}
                    </h3>
                    <p className="font-sans text-[11px] text-[#78716A]">
                      {c.responsavel} · {c.cidade}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-[#1E7A3B] bg-[#E5F3E9] px-2.5 py-1 rounded border border-[#E5F3E9]">
                    Validado na prática
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
