import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Check, ArrowUpRight } from "lucide-react";

const WHATSAPP = "5531984773813";

type Projeto = {
  title: string;
  description: string;
  functions: string[];
  screenshots: string[];
  tag: string;
  url?: string;
};

type Grupo = {
  id: string;
  titulo: string;
  dor: string;
  projetos: Projeto[];
};

const sitesLandingPages: Projeto[] = [
  {
    title: "Vanguard Barber & Studio",
    description:
      "Modelo completo para barbearias e estúdios: catálogo de serviços com preços, galeria de cortes em mosaico e botão para agendamento direto pelo WhatsApp ou link próprio.",
    functions: ["Menu de Serviços & Preços", "Agendamento Direto no WhatsApp", "Galeria de Estilos"],
    screenshots: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=900&auto=format&fit=crop",
    ],
    tag: "Beleza & Barbearia",
    url: "/demos/barbearia/index.html",
  },
  {
    title: "Serena · Dermatologia & Estética",
    description:
      "Landing page de alta autoridade para clínicas de saúde e procedimentos estéticos. Apresentação médica com CRM/RQE, tratamentos clínicos e botão de agendamento.",
    functions: ["Agendamento no WhatsApp", "Tratamentos & Formação Médica", "Perguntas Frequentes"],
    screenshots: [
      "/demos/serena/images/hero.webp",
      "/demos/serena/images/profissional.webp",
      "/demos/serena/images/pele.webp",
    ],
    tag: "Saúde & Estética",
    url: "https://clinicas.palominotech.com.br/modelo",
  },
  {
    title: "Venda do Deco · Bar & Petiscaria",
    description:
      "Página sensorial para restaurantes e bares: cardápio visual com preços e fotos autênticas, história do espaço desde 1996, horários de funcionamento e reserva no WhatsApp.",
    functions: ["Cardápio com Preços & Fotos", "Horários & Endereço", "Reserva de Mesas no WhatsApp"],
    screenshots: [
      "/demos/venda-do-deco/img/salao-balcao.webp",
      "/demos/venda-do-deco/img/casarao.webp",
      "/demos/venda-do-deco/img/deco.webp",
    ],
    tag: "Gastronomia & Bar",
    url: "/demos/venda-do-deco/index.html",
  },
];

const gruposSistemas: Grupo[] = [
  {
    id: "operacao",
    titulo: "Organização & Financeiro",
    dor: "Controle de caixa e contas a pagar centralizado, sem planilhas quebradas.",
    projetos: [
      {
        title: "Finanças Pro",
        description:
          "Plataforma que centraliza todos os pagamentos e contas fixas num painel visual com alertas matinais automáticos no WhatsApp no dia do vencimento.",
        functions: ["Painel de Vencimentos", "Alertas no WhatsApp", "Histórico de Pagamentos"],
        screenshots: ["/screenshot-financas-pro.webp"],
        tag: "Gestão Financeira",
      },
      {
        title: "Alca Party",
        description:
          "Sistema de eventos com cardápio no celular para os convidados fazerem pedidos sem fila e painel na TV atualizando o consumo em tempo real.",
        functions: ["Cardápio no Celular", "Ranking ao Vivo na TV", "Sem Fila de Balcão"],
        screenshots: ["/screenshot-alca-party.webp"],
        tag: "App de Eventos",
      },
    ],
  },
  {
    id: "prospeccao",
    titulo: "Atendimento & Prospecção",
    dor: "Captação de leads e respostas automatizadas sem perda de tempo.",
    projetos: [
      {
        title: "Barbearias Finder",
        description:
          "Mapeia comércios locais no Google Maps, filtra estabelecimentos sem site e estabelece primeiro contato via mensagem personalizada.",
        functions: ["Mapeamento no Google", "Filtro de Contatos", "Contato Personalizado"],
        screenshots: ["/screenshot-barbearias-finder.webp"],
        tag: "Prospecção Comercial",
      },
      {
        title: "Instagram Palomino Tech",
        description:
          "Painel de curadoria de publicações para redes sociais com criação de artes, revisão rápida de textos e aprovação em um toque.",
        functions: ["Geração de Posts", "Painel de Aprovação", "Agendamento de Conteúdo"],
        screenshots: ["/screenshot-palomino-instagram.webp"],
        tag: "Gestão de Conteúdo",
      },
    ],
  },
];

function Carousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] bg-background group border border-border">
      <img
        src={images[idx]}
        alt={`Screenshot de ${title}`}
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-300"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
        }}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 text-foreground shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 text-foreground shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "bg-foreground w-4" : "bg-white/70 w-1.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const ProjectsSection = () => {
  const [tab, setTab] = useState<"demos" | "sistemas">("demos");

  return (
    <section id="projetos" className="section-padding bg-background text-foreground">
      <div className="container-narrow">
        
        {/* Cabeçalho */}
        <AnimatedSection>
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground bg-secondary px-3 py-1 rounded-full border border-border inline-block mb-3">
              Projetos & Portfólio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Veja nossos sistemas no ar.
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Você pode testar as demonstrações ao vivo agora mesmo para ver como ficaria na sua empresa:
            </p>
          </div>
        </AnimatedSection>

        {/* Seletor de Abas Estilo Segmented Control */}
        <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-border w-fit mb-12 shadow-xs">
          <button
            onClick={() => setTab("demos")}
            className={`px-4 py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-all ${
              tab === "demos"
                ? "bg-[#141414] text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Modelos de Sites & Demos (3)
          </button>
          <button
            onClick={() => setTab("sistemas")}
            className={`px-4 py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-all ${
              tab === "sistemas"
                ? "bg-[#141414] text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sistemas & Automações (4)
          </button>
        </div>

        {/* Conteúdo Aba Demos */}
        {tab === "demos" && (
          <div className="grid gap-8 md:grid-cols-3">
            {sitesLandingPages.map((proj, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_2px_8px_rgba(20,20,20,0.04)] hover:border-foreground/40 transition-all">
                  <div>
                    <Carousel images={proj.screenshots} title={proj.title} />

                    <div className="flex items-center justify-between mt-5 mb-2">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--pal-text-faint)] bg-background px-2 py-0.5 rounded border border-border">
                        {proj.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {proj.title}
                    </h3>

                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-5">
                      {proj.description}
                    </p>

                    <div className="space-y-1.5 mb-6 pb-5 border-b border-border">
                      {proj.functions.map((fn, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-[var(--pal-success)]" />
                          <span>{fn}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.url && (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-foreground hover:bg-foreground/85 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors"
                      >
                        <span>Abrir Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Gostei do modelo de ${encodeURIComponent(proj.title)} e quero falar sobre ele.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-border hover:bg-secondary text-foreground transition-colors"
                      title="Conversar sobre este modelo no WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[var(--pal-success)]" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Conteúdo Aba Sistemas */}
        {tab === "sistemas" && (
          <div className="space-y-12">
            {gruposSistemas.map((grupo, gIdx) => (
              <div key={gIdx}>
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                    {grupo.titulo}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground">
                    {grupo.dor}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {grupo.projetos.map((proj, pIdx) => (
                    <AnimatedSection key={pIdx} delay={pIdx * 0.1}>
                      <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_2px_8px_rgba(20,20,20,0.04)]">
                        <div>
                          <Carousel images={proj.screenshots} title={proj.title} />

                          <div className="mt-5 mb-2">
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--pal-text-faint)] bg-background px-2 py-0.5 rounded border border-border">
                              {proj.tag}
                            </span>
                          </div>

                          <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                            {proj.title}
                          </h4>

                          <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-5">
                            {proj.description}
                          </p>

                          <div className="space-y-1.5 mb-6 pb-5 border-b border-border">
                            {proj.functions.map((fn, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground">
                                <Check className="w-3.5 h-3.5 text-[var(--pal-success)]" />
                                <span>{fn}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <a
                            href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o sistema ${encodeURIComponent(proj.title)} e quero ver como funciona.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-background hover:bg-secondary text-foreground border border-border text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 text-[var(--pal-success)]" />
                            <span>Solicitar demonstração pelo WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
