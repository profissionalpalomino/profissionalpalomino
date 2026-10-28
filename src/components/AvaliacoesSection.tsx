import { ArrowUpRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { AVALIACOES_URL } from "@/lib/contato";

// Copiadas do perfil da Palomino Tech no Google (Places API, 27/10/2026), sem edição de texto.
const avaliacoes = [
  {
    nome: "Daniele Lages",
    texto:
      "Excelente! Me trouxe soluções inovadoras para minha empresa. Agora a operação funciona de forma muito mais fluida graças ao serviços da Palomino. Indico pra todos",
  },
  {
    nome: "Grazielle Ávila",
    texto:
      "Empresa confiável, com profissionais competentes e comprometidos com a qualidade do serviço prestado. Recomendo pela seriedade e profissionalismo!",
  },
  {
    nome: "Pedro Campos",
    texto: "Suas soluções em IA me economizou muito tempo e dinheiro! Indico para qualquer tipo de negócio",
  },
  {
    nome: "Lucas Corgozinho",
    texto: "Excelente serviço. Recomendo!",
  },
];

const Estrelas = ({ tamanho = "h-4 w-4" }: { tamanho?: string }) => (
  <span className="flex gap-0.5 text-foreground" aria-label="5 de 5 estrelas">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className={`${tamanho} fill-current`} strokeWidth={0} />
    ))}
  </span>
);

const AvaliacoesSection = () => {
  return (
    <section id="avaliacoes" className="section-padding bg-white border-t border-border">
      <div className="container-narrow grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
        <AnimatedSection>
          <div className="lg:sticky lg:top-32">
            <p className="rotulo mb-4">Avaliações no Google</p>
            <p className="font-mono text-7xl sm:text-8xl text-foreground leading-none">5,0</p>
            <div className="mt-4">
              <Estrelas tamanho="h-5 w-5" />
            </div>
            <p className="mt-3 text-muted-foreground">13 avaliações, todas com nota máxima.</p>
            <a
              href={AVALIACOES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm font-semibold text-foreground hover:border-foreground transition-colors"
            >
              Ler todas no Google
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>

        <div className="divide-y divide-border">
          {avaliacoes.map((a, i) => (
            <AnimatedSection key={a.nome} delay={i * 0.05}>
              <figure className="py-8 first:pt-0">
                <blockquote
                  className={`text-foreground leading-snug tracking-tight ${
                    a.texto.length > 60 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                  }`}
                >
                  “{a.texto}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-sm">
                  <span className="h-9 w-9 rounded-full bg-[var(--pal-bg-subtle)] text-foreground font-semibold grid place-items-center text-sm">
                    {a.nome[0]}
                  </span>
                  <span className="font-semibold text-foreground">{a.nome}</span>
                  <span className="text-muted-foreground hidden sm:inline">· avaliação no Google</span>
                  <span className="ml-auto">
                    <Estrelas tamanho="h-3.5 w-3.5" />
                  </span>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvaliacoesSection;
