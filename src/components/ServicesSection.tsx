import AnimatedSection from "./AnimatedSection";

const servicos = [
  {
    titulo: "Sites",
    texto:
      "Rápido no 4G, fácil de achar no Google e com o botão do WhatsApp sempre à mão. Com as suas fotos, os seus preços e as avaliações que você já tem.",
    exemplos: "Comércio, oficina, escritório, clínica, restaurante",
  },
  {
    titulo: "Sistemas sob medida",
    texto:
      "Agenda online, controle de caixa, comissão da equipe, estoque. O que hoje mora no caderno ou na planilha vira uma tela que abre no celular, sem baixar aplicativo.",
    exemplos: "Barbearia, salão, clínica, eventos",
  },
  {
    titulo: "Automação de WhatsApp",
    texto:
      "Lembrete de horário antes do atendimento, aviso de conta a vencer, resposta para quem chama fora do expediente. O que se repete todo dia passa a acontecer sozinho.",
    exemplos: "Quem atende muito pelo WhatsApp",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding border-t border-border">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="rotulo mb-4">O que eu faço</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground max-w-3xl">
            Três coisas, bem feitas.
          </h2>
        </AnimatedSection>

        <div className="mt-12 sm:mt-16 border-t border-foreground">
          {servicos.map((s, i) => (
            <AnimatedSection key={s.titulo} delay={i * 0.05}>
              <div className="grid gap-3 sm:gap-8 py-8 sm:py-10 border-b border-border sm:grid-cols-[60px_1fr_1.4fr]">
                <span className="font-mono text-sm text-muted-foreground pt-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{s.titulo}</h3>
                <div>
                  <p className="text-[15px] sm:text-base leading-relaxed text-foreground/85">{s.texto}</p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">{s.exemplos}</p>
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
