import AnimatedSection from "./AnimatedSection";

const passos = [
  {
    titulo: "Você me conta como é hoje",
    texto: "Uma conversa no WhatsApp ou uma chamada de 15 minutos. Quero entender onde o tempo e o cliente estão escapando.",
  },
  {
    titulo: "Você vê antes de decidir",
    texto: "Mostro uma prévia com a sua marca e o seu conteúdo. Ajusta o que precisar antes de qualquer coisa ir ao ar.",
  },
  {
    titulo: "Vai ao ar e eu continuo por perto",
    texto: "Publico, ensino a usar e o suporte segue direto comigo no WhatsApp. Sem fila, sem ticket, sem robô.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="processo" className="section-padding bg-[var(--pal-strong)] text-white">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 mb-4">Como funciona</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Do primeiro "oi" ao site no ar.
          </h2>
        </AnimatedSection>

        <ol className="mt-12 sm:mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {passos.map((p, i) => (
            <AnimatedSection key={p.titulo} delay={i * 0.08}>
              <li className="border-t border-white/20 pt-6">
                <span className="font-mono text-sm text-white/55">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight">{p.titulo}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{p.texto}</p>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
