import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

type Trabalho = {
  cliente: string;
  lugar: string;
  tipo: string;
  texto: string;
  imagem: string;
  celular: string;
  url?: string;
  endereco: string;
};

// A Paulín Baterias aparece no topo da página (HeroSection). Só clientes reais, com print tirado do site publicado (pasta public/trabalhos).
const trabalhos: Trabalho[] = [
  {
    cliente: "SG Advocacia",
    lugar: "Belo Horizonte e Contagem",
    tipo: "Site institucional",
    texto:
      "A equipe de verdade na capa e cada área explicada em português claro. O cliente escolhe o assunto, o site monta a mensagem e ele chega no WhatsApp do escritório já contando o caso.",
    imagem: "/trabalhos/sg.webp",
    celular: "/trabalhos/sg-celular.webp",
    url: "https://sgadvocacia.palominotech.com.br/",
    endereco: "sgadvocacia.palominotech.com.br",
  },
  {
    cliente: "Faria Quites",
    lugar: "Gutierrez, Belo Horizonte",
    tipo: "Site institucional",
    texto:
      "Sociedade de advogados desde 2010. O site apresenta os sócios, as áreas de atuação e o serviço de correspondência jurídica para outros escritórios.",
    imagem: "/trabalhos/faria.webp",
    celular: "/trabalhos/faria-celular.webp",
    endereco: "em publicação",
  },
];

const TrabalhosSection = () => {
  return (
    <section id="trabalhos" className="section-padding border-t border-border">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end mb-14 sm:mb-20">
            <div>
              <p className="rotulo mb-4">Trabalhos entregues</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Clientes reais, sites no ar.
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md lg:justify-self-end">
              Nada de modelo pronto com foto de banco de imagem. Cada site parte da foto, das avaliações e do
              jeito de atender de quem contratou.
            </p>
          </div>
        </AnimatedSection>

        <div className="divide-y divide-border border-y border-border">
          {trabalhos.map((t, i) => (
            <AnimatedSection key={t.cliente}>
              <article className="py-10 sm:py-14 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14 items-center">
                <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={t.imagem}
                    alt={`Site da ${t.cliente}`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-auto rounded-[14px] border border-border block"
                  />
                  <img
                    src={t.celular}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={520}
                    height={1126}
                    className="absolute -bottom-6 -right-2 sm:right-4 w-[92px] sm:w-[130px] rounded-[18px] border-[4px] border-[var(--pal-strong)] shadow-[0_16px_32px_-14px_rgba(20,20,20,0.5)]"
                  />
                </div>

                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-3">
                    {String(i + 1).padStart(2, "0")} · {t.tipo}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{t.cliente}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.lugar}</p>
                  <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-foreground/85">{t.texto}</p>
                  {t.url ? (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 min-h-[44px] font-mono text-[13px] text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
                    >
                      {t.endereco}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <p className="mt-6 font-mono text-[13px] text-muted-foreground">{t.endereco}</p>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-14 grid gap-8 sm:grid-cols-[200px_1fr]">
            <p className="rotulo pt-1">Além de sites</p>
            <ul className="space-y-5 text-[15px] leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">Alça Party 2026.</span>{" "}
                <span className="text-muted-foreground">
                  Os convidados pedem bebida e música pelo próprio celular, sem baixar aplicativo, e um painel na TV
                  mostra tudo em tempo real. Acabou a comanda de papel e a fila no balcão.
                </span>
              </li>
              <li>
                <span className="font-semibold text-foreground">Site Finder.</span>{" "}
                <span className="text-muted-foreground">
                  Ferramenta própria que acha no Google Maps os negócios que ainda não têm site.{" "}
                  <Link to="/apps" className="text-foreground underline underline-offset-4">
                    Ver na página de apps
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrabalhosSection;
