import { useEffect } from "react";
import { ArrowUpRight, ArrowDown, MapPin, Search, Download, MessageCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP = "5531984773813";
const LINK_LISTA = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá, Rodrigo! Vi o Site Finder na página de apps da Palomino Tech e quero entrar na lista de acesso antecipado."
)}`;

const PASSOS = [
  { titulo: "Busque por cidade, CEP ou ramo", texto: "Barbearia em Lagoa Santa, oficina num raio de 5 km. A busca vem do Google Maps." },
  { titulo: "Veja só quem não tem site", texto: "O filtro tira da lista quem já tem site. Sobra quem precisa de você." },
  { titulo: "Baixe a lista", texto: "Nome, telefone, endereço e nota no Google, numa planilha pronta." },
  { titulo: "Mostre a prévia do site", texto: "Gere uma prévia com a cara do negócio e mande pelo seu WhatsApp." },
];

const FATOS = [
  { rotulo: "Onde roda", valor: "No navegador, do celular ou do computador. Nada para instalar." },
  { rotulo: "Origem", valor: "A ferramenta que a Palomino Tech usa todo dia para achar clientes." },
  { rotulo: "Lançamento", valor: "Quem está na lista recebe o acesso e o preço de lançamento primeiro." },
];

// Leads de exemplo para ilustrar a tela; não são negócios reais.
const LEADS = [
  { nome: "Barbearia do Teco", bairro: "Centro", nota: "4,8" },
  { nome: "Studio Navalha", bairro: "Vila Pinto", nota: "4,9" },
  { nome: "Corte & Cia", bairro: "Joana Marques", nota: "4,6" },
  { nome: "Dom Bigode", bairro: "Lundcéia", nota: "4,7" },
];

const vidro = { backdropFilter: "var(--pal-glass)", WebkitBackdropFilter: "var(--pal-glass)" };

const TelaSiteFinder = () => (
  <div
    className="relative rounded-[var(--pal-radius)] border border-[var(--pal-border-card)] bg-[var(--pal-bg-card)] shadow-[var(--pal-shadow-float)] overflow-hidden"
    style={vidro}
    aria-label="Ilustração da tela do Site Finder"
  >
    {/* Barra da janela */}
    <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-[var(--pal-border)]">
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="ml-3 font-mono text-[11px] text-[var(--pal-text-faint)]">sitefinder · busca</span>
    </div>

    <div className="p-4 sm:p-6">
      {/* Campo de busca */}
      <div className="flex items-center gap-2.5 rounded-[var(--pal-radius-control)] border border-[var(--pal-border)] bg-[var(--pal-bg-subtle)] px-3.5 h-11">
        <Search className="h-4 w-4 text-[var(--pal-text-muted)] shrink-0" strokeWidth={1.5} />
        <span className="text-sm text-[var(--pal-text)] truncate">Barbearia</span>
        <span className="text-[var(--pal-text-faint)]">·</span>
        <MapPin className="h-3.5 w-3.5 text-[var(--pal-text-muted)] shrink-0" strokeWidth={1.5} />
        <span className="text-sm text-[var(--pal-text-muted)] truncate">Lagoa Santa, MG</span>
        <span className="ml-auto hidden sm:inline font-mono text-[11px] text-[var(--pal-text-faint)] shrink-0">5 km</span>
      </div>

      {/* Resumo */}
      <div className="flex items-baseline justify-between mt-5 mb-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--pal-text-faint)]">Sem site</p>
        <p className="font-mono text-[11px] text-[var(--pal-text-muted)]">
          <span className="text-[var(--pal-text)]">18</span> de 43 encontrados
        </p>
      </div>

      {/* Lista */}
      <ul className="divide-y divide-[var(--pal-border)]">
        {LEADS.map((l, i) => (
          <li key={l.nome} className="flex items-center gap-3 py-3">
            <span className="w-8 h-8 rounded-full bg-[var(--pal-bg-subtle)] border border-[var(--pal-border)] flex items-center justify-center font-mono text-[11px] text-[var(--pal-text-muted)] shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[var(--pal-text)] truncate">{l.nome}</p>
              <p className="text-xs text-[var(--pal-text-faint)] truncate">{l.bairro}</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-[var(--pal-text-muted)]">
              <Star className="h-3 w-3" strokeWidth={1.5} />
              {l.nota}
            </span>
            <span
              className={`font-mono text-[11px] px-2 py-1 rounded-[6px] shrink-0 ${
                i === 0
                  ? "bg-[var(--pal-strong)] text-[var(--pal-strong-ink)]"
                  : "bg-[var(--pal-bg-subtle)] text-[var(--pal-text-muted)]"
              }`}
            >
              {i === 0 ? "Prévia pronta" : "Sem site"}
            </span>
          </li>
        ))}
      </ul>

      {/* Ações */}
      <div className="flex gap-2 mt-4">
        <span className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-[var(--pal-border)] text-xs text-[var(--pal-text-muted)]">
          <Download className="h-3.5 w-3.5" strokeWidth={1.5} /> Baixar planilha
        </span>
        <span className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-[var(--pal-strong)] text-xs text-[var(--pal-strong-ink)]">
          <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} /> Mandar prévia
        </span>
      </div>
    </div>
  </div>
);

const Apps = () => {
  useEffect(() => {
    document.title = "Apps · Palomino Tech";
    window.scrollTo(0, 0);
    return () => {
      document.title = "Palomino Tech";
    };
  }, []);

  return (
    <div className="min-h-screen text-[var(--pal-text)]" style={{ background: "var(--pal-bg-gradient)" }}>
      <Navbar />

      <main>
        {/* Abertura: título à esquerda, índice dos apps à direita */}
        <section className="px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className="container-narrow grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-end">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--pal-text-faint)]">
                Apps Palomino Tech
              </p>
              <h1
                className="mt-5 text-[2.4rem] leading-[1.02] sm:text-6xl font-bold"
                style={{ fontFamily: "var(--pal-font-display)", fontStretch: "var(--pal-font-display-stretch)", letterSpacing: "-0.035em" }}
              >
                As ferramentas da casa, para você usar.
              </h1>
              <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-[var(--pal-text-muted)]">
                O que a gente constrói para os nossos próprios projetos e decide abrir para quem trabalha do mesmo jeito.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <nav aria-label="Apps disponíveis" className="border-t border-[var(--pal-border)]">
                <a href="#site-finder" className="group flex items-center gap-4 py-4 border-b border-[var(--pal-border)]">
                  <span className="font-mono text-xs text-[var(--pal-text-faint)]">01</span>
                  <span className="flex-1 text-[15px] font-semibold text-[var(--pal-text)]">Site Finder</span>
                  <span className="font-mono text-[11px] px-2 py-1 rounded-[6px] bg-[var(--pal-primary-tint)] text-[var(--pal-primary-text)]">
                    Acesso antecipado
                  </span>
                  <ArrowDown className="h-4 w-4 text-[var(--pal-text-faint)] transition-transform group-hover:translate-y-0.5" strokeWidth={1.5} />
                </a>
                <div className="flex items-center gap-4 py-4 border-b border-[var(--pal-border)]">
                  <span className="font-mono text-xs text-[var(--pal-text-faint)]">02</span>
                  <span className="flex-1 text-[15px] text-[var(--pal-text-faint)]">Próximo app</span>
                  <span className="font-mono text-[11px] text-[var(--pal-text-faint)]">Em breve</span>
                </div>
              </nav>
            </AnimatedSection>
          </div>
        </section>

        {/* Site Finder */}
        <section id="site-finder" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div
            className="container-narrow rounded-[var(--pal-radius-lg)] border border-[var(--pal-border-card)] bg-[var(--pal-bg-card)] shadow-[var(--pal-shadow-card)] p-4 sm:p-8 lg:p-12"
            style={vidro}
          >
            {/* Cabeçalho: nome e frase à esquerda, botão alinhado à direita */}
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 lg:pb-10 border-b border-[var(--pal-border)]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--pal-text-faint)]">01</span>
                    <span className="font-mono text-[11px] px-2 py-1 rounded-[6px] bg-[var(--pal-bg-subtle)] border border-[var(--pal-border)] text-[var(--pal-text-muted)]">
                      Acesso antecipado
                    </span>
                  </div>
                  <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-[-0.035em]">Site Finder</h2>
                  <p className="mt-3 text-lg sm:text-xl leading-snug text-[var(--pal-text)] max-w-xl">
                    Ache os negócios da sua cidade que ainda não têm site e mostre a eles como o deles ficaria.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--pal-text-muted)] max-w-xl">
                    Para quem faz site, social media ou tráfego e precisa de cliente novo toda semana.
                  </p>
                </div>
                <div className="flex flex-col items-stretch sm:items-start lg:items-end gap-2.5 shrink-0">
                  <a
                    href={LINK_LISTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--pal-primary)] hover:bg-[var(--pal-primary-hover)] text-[var(--pal-primary-ink)] text-[15px] font-semibold transition-colors"
                  >
                    Entrar na lista
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <p className="text-xs text-[var(--pal-text-faint)] text-center sm:text-left lg:text-right">
                    Sem compromisso. A conversa é pelo WhatsApp, direto comigo.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Tela e passos lado a lado, mesma altura */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pt-8 lg:pt-10 items-stretch">
              <AnimatedSection>
                <TelaSiteFinder />
                <p className="mt-3 font-mono text-[11px] text-[var(--pal-text-faint)]">Ilustração. Nomes de exemplo.</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="flex">
                <ol className="flex-1 flex flex-col border-t border-[var(--pal-border)]">
                  {PASSOS.map((p, i) => (
                    <li key={p.titulo} className="flex-1 grid grid-cols-[2.25rem_1fr] gap-x-3 content-center py-5 border-b border-[var(--pal-border)]">
                      <span className="font-mono text-xs text-[var(--pal-text-faint)] pt-[3px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[15px] font-semibold text-[var(--pal-text)]">{p.titulo}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--pal-text-muted)]">{p.texto}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </AnimatedSection>
            </div>

            {/* Fatos */}
            <AnimatedSection>
              <dl className="grid sm:grid-cols-3 mt-8 lg:mt-10 border-t border-[var(--pal-border)]">
                {FATOS.map((f, i) => (
                  <div
                    key={f.rotulo}
                    className={`pt-6 sm:pr-8 ${i > 0 ? "mt-6 sm:mt-0 border-t sm:border-t-0 sm:border-l sm:pl-8 border-[var(--pal-border)]" : ""}`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--pal-text-faint)]">{f.rotulo}</dt>
                    <dd className="mt-2.5 text-[15px] leading-relaxed text-[var(--pal-text)]">{f.valor}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </section>

        {/* Próximos apps */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="rounded-[var(--pal-radius-lg)] bg-[var(--pal-strong)] text-[var(--pal-strong-ink)] p-7 sm:p-10 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">Na fila</p>
                  <p className="mt-3 text-2xl sm:text-[28px] leading-tight font-semibold tracking-[-0.02em] max-w-lg">
                    Mais apps entram aqui quando estiverem prontos para uso de outras pessoas.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Rodrigo! Vi a página de apps da Palomino Tech e queria ser avisado dos próximos.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[var(--pal-strong-ink)] text-[var(--pal-strong)] text-sm font-semibold shrink-0 hover:opacity-90 transition-opacity"
                >
                  Quero ser avisado
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Apps;
