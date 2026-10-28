import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { AVALIACOES_URL, waLink } from "@/lib/contato";

const HeroSection = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="container-narrow">
        <p className="rotulo mb-6">Palomino Tech · Grande BH</p>

        <h1 className="titulo-vitrine text-foreground text-[2.6rem] sm:text-6xl lg:text-[5.4rem] max-w-5xl">
          Site que traz cliente. Sistema que tira o papel do balcão.
        </h1>

        <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Faço sites, sistemas de agendamento e automações de WhatsApp para comércio, clínica e escritório.
            Você fala direto com quem desenvolve, do orçamento ao suporte depois que tudo está no ar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a
              href={waLink("Olá, Rodrigo! Vi o site da Palomino Tech e quero conversar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[var(--pal-primary)] hover:bg-[var(--pal-primary-hover)] text-[var(--pal-primary-ink)] text-[15px] font-semibold transition-colors"
            >
              Chamar no WhatsApp
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#trabalhos"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-border bg-white text-foreground text-[15px] font-semibold hover:border-foreground transition-colors"
            >
              Ver trabalhos entregues
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>

        <a
          href={AVALIACOES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="flex gap-0.5 text-foreground" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
            ))}
          </span>
          <span>
            <span className="font-mono text-foreground">5,0</span> no Google, com 13 avaliações de clientes
          </span>
        </a>

        {/* Trabalho real no ar, em vez de foto de banco de imagem */}
        <figure className="mt-14 sm:mt-20 relative">
          <div className="rounded-[20px] overflow-hidden border border-border bg-white shadow-[0_30px_60px_-30px_rgba(20,20,20,0.35)]">
            <div className="flex items-center gap-2 px-4 h-9 border-b border-border bg-[var(--pal-bg-subtle)]">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--pal-border)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--pal-border)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--pal-border)]" />
              </span>
              <span className="mx-auto font-mono text-[11px] text-muted-foreground">paulinbaterias.com.br</span>
            </div>
            <img
              src="/trabalhos/paulin.webp"
              alt="Página inicial do site da Paulín Baterias, feito pela Palomino Tech"
              width={1280}
              height={800}
              className="w-full h-auto block"
            />
          </div>
          <img
            src="/trabalhos/paulin-celular.webp"
            alt=""
            aria-hidden
            width={520}
            height={1126}
            className="hidden md:block absolute -bottom-10 right-6 lg:right-10 w-[180px] lg:w-[210px] rounded-[28px] border-[6px] border-[var(--pal-strong)] shadow-[0_24px_48px_-20px_rgba(20,20,20,0.5)]"
          />
          <figcaption className="mt-4 font-mono text-[11px] text-muted-foreground">
            Paulín Baterias, Santa Luzia · site com domínio próprio, no ar desde outubro de 2026
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
