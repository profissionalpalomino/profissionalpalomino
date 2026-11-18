import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Check,
  ArrowUpRight,
  MessageSquare,
  Scale,
  Scissors,
  MapPin,
  LayoutGrid,
  CalendarCheck,
  Monitor,
  type LucideIcon,
} from "lucide-react";

const WHATSAPP = "5531984773813";

type Projeto = {
  title: string;
  description: string;
  functions: string[];
  screenshots: string[];
  tag: string;
  url?: string;
  icon?: LucideIcon;
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
      "/demos/serena/images/profissional.webp",
      "/demos/serena/images/pele.webp",
    ],
    tag: "Saúde & Estética",
    url: "/demos/serena/index.html",
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
    id: "gestao-nicho",
    titulo: "Organização & Gestão por Nicho",
    dor: "Sistemas pensados para a rotina de cada área, sem planilhas nem retrabalho no atendimento.",
    projetos: [
      {
        title: "Gestão Odonto",
        description:
          "Organiza a base de pacientes e leads da clínica, dispara lembretes de retorno automáticos e ajuda a equipe a resgatar orçamentos parados no WhatsApp.",
        functions: ["Base de Pacientes & Leads", "Retornos Automáticos", "Resgate de Orçamentos no WhatsApp"],
        screenshots: [],
        tag: "Clínicas Odontológicas",
        icon: MessageSquare,
      },
      {
        title: "Gestão de Advogados",
        description:
          "Reúne clientes, processos, prazos em dias úteis e controle de honorários num só lugar, com busca automática de publicações no DJEN e andamentos no DataJud.",
        functions: ["Processos & Clientes", "Prazos Automáticos DJEN / DataJud", "Controle de Honorários"],
        screenshots: [],
        tag: "Escritórios de Advocacia",
        icon: Scale,
      },
      {
        title: "Gestão Barbearia",
        description:
          "Agenda prática com link para o cliente marcar horário, cálculo de comissão da equipe e lista de clientes sumidos para chamar de volta no WhatsApp.",
        functions: ["Agenda & Link de Horários", "Comissão da Equipe", "Clientes Sumidos no WhatsApp"],
        screenshots: [],
        tag: "Barbearias & Estúdios",
        icon: Scissors,
      },
    ],
  },
  {
    id: "atendimento-captacao",
    titulo: "Atendimento, Conteúdo & Captação",
    dor: "Ferramentas práticas para captar clientes, organizar sessões e manter a presença nas redes com controle.",
    projetos: [
      {
        title: "Site Finder",
        description:
          "Encontra negócios locais no Google Maps que ainda não têm site, filtra contatos com WhatsApp e prepara prévias personalizadas para apresentar na abordagem.",
        functions: ["Mapeamento no Google Maps", "Filtro de Negócios sem Site", "Prévias & Contato no WhatsApp"],
        screenshots: ["/screenshot-site-finder.webp"],
        tag: "Captação Comercial",
        icon: MapPin,
      },
      {
        title: "Posts Instagram",
        description:
          "Prepara carrosséis e stories para escritórios e clínicas com cronograma visual, revisão com trava ética e aprovação em 1 toque antes de publicar.",
        functions: ["Cronograma para Escritórios e Clínicas", "Aprovação em 1 Toque", "Trava Ética de Conteúdo"],
        screenshots: ["/screenshot-palomino-instagram.webp"],
        tag: "Conteúdo & Redes",
        icon: LayoutGrid,
      },
      {
        title: "Gestão de Psicólogos",
        description:
          "Controle simples de agenda e financeiro para consultórios: mostra sessões do dia, pagamentos em aberto e organiza os dados de cada recebimento para o Receita Saúde.",
        functions: ["Agenda de Sessões", "Controle de Pagamentos", "Dados para o Receita Saúde"],
        screenshots: [],
        tag: "Consultórios de Psicologia",
        icon: CalendarCheck,
      },
    ],
  },
];

function Carousel({
  images,
  title,
  tag,
  Icon = Monitor,
}: {
  images: string[];
  title: string;
  tag?: string;
  Icon?: LucideIcon;
}) {
  const [idx, setIdx] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] bg-background border border-border flex flex-col">
        <div className="h-7 px-3 border-b border-border bg-white/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
          {tag && (
            <span className="font-mono text-[10px] text-[var(--pal-text-faint)] truncate max-w-[70%]">
              {tag}
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-5 text-center">
          <div className="w-11 h-11 rounded-xl bg-white border border-border shadow-2xs flex items-center justify-center mb-2.5 text-foreground">
            <Icon className="w-5 h-5" strokeWidth={1.6} />
          </div>
          <p className="font-heading font-bold text-sm text-foreground tracking-tight">
            {title}
          </p>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--pal-text-faint)] mt-1">
            Demonstração guiada
          </span>
        </div>
      </div>
    );
  }

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

const totalSistemas = gruposSistemas.reduce((acc, g) => acc + g.projetos.length, 0);

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
        <div className="flex flex-wrap items-center gap-2 p-1 bg-white rounded-xl border border-border w-fit max-w-full mb-12 shadow-xs">
          <button
            onClick={() => setTab("demos")}
            className={`px-4 py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-all ${
              tab === "demos"
                ? "bg-[#141414] text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Modelos de Sites & Demos ({sitesLandingPages.length})
          </button>
          <button
            onClick={() => setTab("sistemas")}
            className={`px-4 py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-all ${
              tab === "sistemas"
                ? "bg-[#141414] text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sistemas & Automações ({totalSistemas})
          </button>
        </div>

        {/* Conteúdo Aba Demos */}
        {tab === "demos" && (
          <div className="grid gap-8 md:grid-cols-3">
            {sitesLandingPages.map((proj, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_2px_8px_rgba(20,20,20,0.04)] hover:border-foreground/40 transition-all">
                  <div>
                    <Carousel images={proj.screenshots} title={proj.title} tag={proj.tag} Icon={proj.icon} />

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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {grupo.projetos.map((proj, pIdx) => (
                    <AnimatedSection key={pIdx} delay={pIdx * 0.1}>
                      <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_2px_8px_rgba(20,20,20,0.04)]">
                        <div>
                          <Carousel images={proj.screenshots} title={proj.title} tag={proj.tag} Icon={proj.icon} />

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
