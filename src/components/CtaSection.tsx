import { ArrowUpRight, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { AGENDA_URL, waLink } from "@/lib/contato";

const CtaSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      <AnimatedSection>
        <div className="container-narrow rounded-[20px] bg-[var(--pal-strong)] text-white px-6 py-12 sm:px-14 sm:py-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 mb-5">Próximo passo</p>
            <h2 className="titulo-vitrine text-4xl sm:text-6xl">Me conta o que está travando aí.</h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-lg">
              Respondo eu mesmo, normalmente no mesmo dia. Se não fizer sentido para o seu negócio, eu falo.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={waLink("Olá, Rodrigo! Vi o site da Palomino Tech e quero conversar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[var(--pal-primary)] hover:bg-[var(--pal-primary-hover)] text-[var(--pal-primary-ink)] text-[15px] font-semibold transition-colors"
            >
              Chamar no WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-white/25 text-white text-[15px] font-semibold hover:border-white transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Marcar uma chamada
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CtaSection;
