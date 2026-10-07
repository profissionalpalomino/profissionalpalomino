import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Globe, Cpu, MessageCircle } from "lucide-react";

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

const gruposSistemas: Grupo[] = [
  {
    id: "clientes",
    titulo: "Trazer mais clientes",
    dor: "Prospectar na mão e manter a rede social viva consome o dia inteiro. Estes sistemas fazem isso sozinhos.",
    projetos: [
      {
        title: "Barbearias Finder",
        description:
          "Prospectar barbearia por barbearia no Google é lento e manual. A ferramenta encontra, filtra e já manda mensagem personalizada no WhatsApp automaticamente — sem abrir o Google nem escrever uma linha.",
        functions: ["Busca Automática", "Disparo no WhatsApp", "Lista de Leads"],
        screenshots: ["/screenshot-barbearias-finder.webp"],
        tag: "Prospecção de Nicho",
      },
      {
        title: "AutoPost Instagram",
        description:
          "Manter o Instagram atualizado 3x por semana consome tempo todo dia. O sistema cria os temas, escreve as legendas, desenha as imagens e publica sozinho — sem você precisar fazer nada.",
        functions: ["Publica Sozinho", "Escreve Legenda com IA", "Cria a Imagem do Post"],
        screenshots: ["/screenshot-palomino-instagram.webp"],
        tag: "Automação de Instagram",
      },
    ],
  },
  {
    id: "operacao",
    titulo: "Organizar a operação",
    dor: "Quando o controle vive em papel, planilha e cabeça, alguma coisa sempre escapa. Estes sistemas põem tudo num lugar só.",
    projetos: [
      {
        title: "Finanças Pro",
        description:
          "Perder o controle dos boletos e esquecer de pagar custa caro. Fizemos uma plataforma que centraliza todos os pagamentos num painel visual e manda lembretes automáticos no WhatsApp no dia certo.",
        functions: ["Painel de Contas", "Alerta no WhatsApp", "Histórico Completo"],
        screenshots: ["/screenshot-financas-pro.webp"],
        tag: "Plataforma Web",
      },
      {
        title: "Alca Party",
        description:
          "A Alca precisava organizar pedidos de música, comida e drinks numa festa sem papel e sem bagunça. Fizemos um app pra todo mundo usar no celular — e um painel na TV mostrando o ranking de consumo em tempo real.",
        functions: ["Jukebox com Spotify", "Cardápio no Celular", "Ranking ao Vivo na TV"],
        screenshots: ["/screenshot-alca-party.webp"],
        tag: "App de Evento",
      },
    ],
  },
  {
    id: "sobmedida",
    titulo: "App sob medida",
    dor: "Quando nada pronto no mercado resolve, a saída é construir exatamente o que o problema pede.",
    projetos: [
      {
        title: "Bolão Copa 2026",
        description:
          "Bolão da Copa com a família não precisa ser planilha. Fizemos um sistema com palpites, ranking ao vivo — e IA que lê o papel escrito à mão e importa os palpites automaticamente, sem digitar nada.",
        functions: ["Palpites Online", "Ranking em Tempo Real", "IA que Lê Papel Manuscrito"],
        screenshots: ["/screenshot-bolao.webp"],
        tag: "Web App",
      },
      {
        title: "Palomino Stickers",
        description:
          "Controlar figurinhas faltantes e repetidas pelo WhatsApp vira uma bagunça rápido. O app organiza tudo e usa IA pra sugerir as melhores trocas baseadas no que você tem e no que precisa.",
        functions: ["Catálogo de Faltantes", "Lista do WhatsApp colada direto", "IA de Trocas"],
        screenshots: ["/screenshot-stickers.webp"],
        tag: "App de Figurinhas",
      },
    ],
  },
];

function appendQuery(url?: string): string | undefined {
  if (!url) return undefined;
  if (typeof window === "undefined") return url;
  const search = window.location.search;
  if (!search) return url;
  const params = search.startsWith("?") ? search.slice(1) : search;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${params}`;
}

const sitesLandingPages: Projeto[] = [
  {
    title: "Vanguard Barber & Studio",
    description:
      "Modelo premium de barbearia inspirado na referência GoGrin: estética dark com dourado, selo artesanal em traço, círculos de serviços, galeria em mosaico e reserva direta de horários no WhatsApp sem fila de espera.",
    functions: ["Menu de Serviços & Preços", "Reserva de Horário WhatsApp", "Galeria de Estilo em Mosaico"],
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
      "Landing page de alta conversão para clínicas de estética e saúde. Tratamentos clínicos com fotos, responsável técnica com CRM/RQE, FAQ estruturada para Google/IAs e agendamento direto no WhatsApp.",
    functions: ["Agendamento no WhatsApp", "Tratamentos & Formação Médica", "FAQ para Google e IAs"],
    screenshots: [
      "https://images.unsplash.com/photo-1699206791200-414d95e68450?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1731355771418-f10ab62c9f86?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624819318229-3460c441275f?q=80&w=900&auto=format&fit=crop",
    ],
    tag: "Saúde & Estética Avançada",
    url: "https://clinica.profissionalpalomino.cloud/modelo",
  },
  {
    title: "Venda do Deco · Bar & Petiscaria",
    description:
      "Site sensorial para restaurantes, bistrôs, bares e cafeterias. Cardápio visual com preços e fotos reais de porções, história do espaço desde 1996, horários de funcionamento e pedido direto pelo WhatsApp.",
    functions: ["Cardápio com Preços & Fotos", "Horários & Endereço", "Pedido & Reserva no WhatsApp"],
    screenshots: [
      "/demos/venda-do-deco/img/salao-balcao.webp",
      "/demos/venda-do-deco/img/casarao.webp",
      "/demos/venda-do-deco/img/deco.webp",
    ],
    tag: "Gastronomia, Bar & Bistrô",
    url: "/demos/venda-do-deco/index.html",
  },
];

function Carousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl aspect-video bg-gray-100 group border border-border">
      <img
        src={images[idx]}
        alt={`Screenshot do projeto ${title}`}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === idx ? "bg-primary w-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CardProjeto({ project }: { project: Projeto }) {
  return (
    <div className="group glass-card rounded-[2rem] h-full flex flex-col overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_15px_45px_rgba(244,63,94,0.18)] dark:bg-[#0b0f19]/80 bg-white shadow-lg dark:shadow-none">
      <div className="p-3 pb-0">
        <Carousel images={project.screenshots} title={project.title} />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.16em] font-mono inline-block px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
            {project.tag}
          </span>
          <h3 className="font-heading text-lg font-black dark:text-white text-slate-900 uppercase mt-2">{project.title}</h3>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-grow font-sans">
          {project.description}
        </p>

        <div>
          <p className="text-[10px] font-bold dark:text-slate-300 text-slate-600 uppercase tracking-wider mb-2.5 font-mono">
            Destaques da Solução
          </p>
          <ul className="space-y-2 mb-6">
            {project.functions.map((func, j) => (
              <li key={j} className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium dark:text-slate-200 text-slate-700">{func}</span>
              </li>
            ))}
          </ul>

          {project.url ? (
            <a
              href={appendQuery(project.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary text-white text-xs font-heading font-extrabold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:shadow-[0_0_35px_rgba(244,63,94,0.6)]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Ver Demonstração ao Vivo
            </a>
          ) : (
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                `Olá, Rodrigo! Gostaria de ver uma demonstração do sistema ${project.title}.${
                  typeof window !== "undefined" && new URLSearchParams(window.location.search).get("ref")
                    ? ` (Ref: ${new URLSearchParams(window.location.search).get("ref")})`
                    : ""
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-heading font-extrabold uppercase tracking-wider hover:bg-emerald-500 hover:text-white transition-all shadow-[0_0_20px_rgba(74,222,128,0.2)]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Solicitar Demonstração no WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const [categoria, setCategoria] = useState<"sites" | "sistemas">("sites");

  const handleTrocaCategoria = (novaCat: "sites" | "sistemas") => {
    if (categoria === novaCat) return;
    setCategoria(novaCat);
    // Preserva ancoragem estável sem tranco visual na página
    const el = document.getElementById("projetos");
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < -80) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="projetos" className="section-padding relative dark:bg-[#080b12] bg-slate-50 border-t border-b dark:border-white/10 border-slate-200/80 overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-heading font-bold text-primary mb-4 uppercase tracking-[0.2em]">
              Portfólio & Demonstrações ao Vivo
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 dark:text-white text-slate-900 uppercase tracking-tight">
              Projetos no ar, <span className="text-neon">gerando resultado real</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xs sm:text-sm text-muted-foreground mb-8 font-sans">
              Clique nas abas abaixo para alternar entre os modelos de sites para negócios e os sistemas operacionais com inteligência artificial.
            </p>

            {/* Seletor de Categoria (Segmented Control Grande e Inconfundível) */}
            <div className="inline-flex flex-col sm:flex-row p-2 dark:bg-[#0b0f19] bg-white border dark:border-white/15 border-slate-200 rounded-3xl sm:rounded-full shadow-xl gap-2 max-w-full">
              {/* Aba 1: Sites & Landing Pages */}
              <button
                type="button"
                onClick={() => handleTrocaCategoria("sites")}
                data-track="tab_sites"
                className={`flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 rounded-2xl sm:rounded-full font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-300 ${
                  categoria === "sites"
                    ? "bg-primary text-white shadow-[0_0_30px_rgba(244,63,94,0.45)] ring-2 ring-primary/40"
                    : "bg-black/[0.03] dark:bg-white/[0.03] sm:bg-transparent text-muted-foreground hover:text-foreground hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Globe className={`h-4 w-4 ${categoria === "sites" ? "text-white" : "text-primary"}`} />
                  <span>Sites & Landing Pages</span>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                  categoria === "sites" ? "bg-white/20 text-white" : "dark:bg-white/5 bg-slate-100 text-muted-foreground"
                }`}>
                  {sitesLandingPages.length} MODELOS
                </span>
              </button>

              {/* Aba 2: Sistemas & Automações */}
              <button
                type="button"
                onClick={() => handleTrocaCategoria("sistemas")}
                data-track="tab_sistemas"
                className={`flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 rounded-2xl sm:rounded-full font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-300 ${
                  categoria === "sistemas"
                    ? "bg-primary text-white shadow-[0_0_30px_rgba(244,63,94,0.45)] ring-2 ring-primary/40"
                    : "bg-black/[0.03] dark:bg-white/[0.03] sm:bg-transparent text-muted-foreground hover:text-foreground hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className={`h-4 w-4 ${categoria === "sistemas" ? "text-white" : "text-emerald-400"}`} />
                  <span>Sistemas & Automações</span>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                  categoria === "sistemas" ? "bg-white/20 text-white" : "dark:bg-white/5 bg-slate-100 text-muted-foreground"
                }`}>
                  {gruposSistemas.reduce((n, g) => n + g.projetos.length, 0)} SISTEMAS
                </span>
              </button>
            </div>

            {/* Feedback Visual Imediato da Categoria Ativa */}
            <div className="mt-4 text-xs font-mono text-muted-foreground">
              {categoria === "sites" ? (
                <span>Exibindo <strong className="dark:text-white text-slate-900">3 modelos de alta conversão</strong> com demonstração interativa ao vivo</span>
              ) : (
                <span>Exibindo <strong className="dark:text-white text-slate-900">6 sistemas e automações com IA</strong> desenvolvidos sob medida</span>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Container Estabilizado para Evitar Pulos na Página */}
        <div className="min-h-[550px] transition-opacity duration-300">
          {categoria === "sites" ? (
            <div className="mt-10 animate-in fade-in duration-300">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sitesLandingPages.map((site, i) => (
                  <AnimatedSection key={site.title} delay={i * 0.1}>
                    <CardProjeto project={site} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-12 space-y-16 animate-in fade-in duration-300">
              {gruposSistemas.map((grupo, gi) => (
                <div key={grupo.id}>
                  <AnimatedSection delay={gi * 0.05}>
                    <div className="flex items-baseline gap-3 mb-2 border-b dark:border-white/10 border-slate-200 pb-4">
                      <span className="font-mono text-xs font-bold text-primary">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-black dark:text-white text-slate-900 uppercase">
                        {grupo.titulo}
                      </h3>
                      <span className="ml-auto text-[11px] font-mono text-muted-foreground shrink-0 uppercase">
                        {grupo.projetos.length}{" "}
                        {grupo.projetos.length === 1 ? "projeto" : "projetos"}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-2xl font-sans">{grupo.dor}</p>
                  </AnimatedSection>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {grupo.projetos.map((project, i) => (
                      <AnimatedSection key={project.title} delay={i * 0.1}>
                        <CardProjeto project={project} />
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
