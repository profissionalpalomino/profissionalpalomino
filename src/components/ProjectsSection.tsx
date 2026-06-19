import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Alca Party",
    description:
      "A Alca precisava organizar pedidos de música, comida e drinks numa festa sem papel e sem bagunça. Fizemos um app pra todo mundo usar no celular — e um painel na TV mostrando o ranking de consumo em tempo real.",
    functions: ["Jukebox com Spotify", "Cardápio no Celular", "Ranking ao Vivo na TV"],
    link: "https://pizzaparty.simpletechdata.cloud",
    screenshots: ["/screenshot-alca-party.png"],
    tag: "App de Festa",
    telemetry: "STATUS: ACTIVE • SPEED: REALTIME WEBSOCKET",
  },
  {
    title: "Finanças Pro",
    description:
      "Perder o controle dos boletos e esquecer de pagar custa caro. Fizemos uma plataforma que centraliza todos os pagamentos num painel visual e manda lembretes automáticos no WhatsApp no dia certo.",
    functions: ["Painel de Contas", "Alerta no WhatsApp", "Histórico Completo"],
    link: "https://financaspro.profissionalpalomino.cloud",
    screenshots: ["/screenshot-financas-pro.png"],
    tag: "Plataforma Web",
    telemetry: "STATUS: ACTIVE • DEPLOY: ONLINE 200 OK",
  },
  {
    title: "Bolão Copa 2026",
    description:
      "Bolão da Copa com a família não precisa ser planilha. Fizemos um sistema com palpites, ranking ao vivo — e IA que lê o papel escrito à mão e importa os palpites automaticamente, sem digitar nada.",
    functions: ["Palpites Online", "Ranking em Tempo Real", "IA que Lê Papel Manuscrito"],
    link: "https://bolao-dindinha.187-77-57-158.sslip.io",
    screenshots: ["/screenshot-bolao.png"],
    tag: "Web App",
    telemetry: "STATUS: ACTIVE • VISION: GROQ PARSER OK",
  },
  {
    title: "Palomino Stickers",
    description:
      "Controlar figurinhas faltantes e repetidas pelo WhatsApp vira uma bagunça rápido. O app organiza tudo e usa IA pra sugerir as melhores trocas baseadas no que você tem e no que precisa.",
    functions: ["Catálogo de Faltantes", "Lista do WhatsApp colada direto", "IA de Trocas"],
    link: "https://figurinhas.profissionalpalomino.cloud",
    screenshots: ["/screenshot-stickers.png"],
    tag: "App de Figurinhas",
    telemetry: "STATUS: ACTIVE • ENGINE: AI TRADE ANALYSIS",
  },
  {
    title: "AutoPost Instagram",
    description:
      "Manter o Instagram atualizado 3x por semana consome tempo todo dia. O sistema cria os temas, escreve as legendas, desenha as imagens e publica sozinho — sem você precisar fazer nada.",
    functions: ["Publica Sozinho", "Escreve Legenda com IA", "Cria a Imagem do Post"],
    link: "https://palomino-instagram.profissionalpalomino.cloud/",
    screenshots: ["/screenshot-palomino-instagram.png"],
    tag: "Automação de Instagram",
    telemetry: "STATUS: ACTIVE • AUTOMATIC PUBLISH",
  },
  {
    title: "Barbearias Finder",
    description:
      "Prospectar barbearia por barbearia no Google é lento e manual. A ferramenta encontra, filtra e já manda mensagem personalizada no WhatsApp automaticamente — sem abrir o Google nem escrever uma linha.",
    functions: ["Busca Automática", "Disparo no WhatsApp", "Lista de Leads"],
    link: "https://barbearias.profissionalpalomino.cloud/?t=Tz4nJ8vL5cF1dY3",
    screenshots: ["/screenshot-barbearias-finder.png"],
    tag: "Prospecção Automática",
    telemetry: "STATUS: ACTIVE • DEPLOY: ONLINE 200 OK",
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
        className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
        onError={(e) => {
          // Fallback image using dynamic abstract design pattern
          e.currentTarget.src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
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

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding relative bg-secondary/50">
      {/* Visual background textures */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
              Portfólio
            </span>
            <h2 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-5xl mb-6 text-foreground">
              O que já construímos
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base text-muted-foreground">
              Cada projeto aqui foi uma ideia real que virou realidade. Problema, solução, no ar.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="group border border-border bg-white/90 backdrop-blur-sm rounded-[2rem] h-full flex flex-col transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-[0_8px_30px_rgba(244,63,94,0.08)]">
                
                {/* Carousel container */}
                <div className="p-4 pb-0">
                  <Carousel images={project.screenshots} title={project.title} />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider font-mono">{project.tag}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground mt-0.5">{project.title}</h3>
                    </div>
                    {/* External link button removed to hide sensitive links */}
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-foreground/80 uppercase tracking-wider mb-2.5">
                        Destaques da Solução
                      </p>
                      <ul className="space-y-2">
                        {project.functions.map((func, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="text-xs font-medium text-foreground/90">{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>


                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
