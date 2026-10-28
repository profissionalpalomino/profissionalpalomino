import { useEffect } from "react";
import { ArrowUpRight, MapPin, Search, Download, MessageCircle, Star, Monitor, Repeat, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { initTracker } from "@/lib/tracker";

const WHATSAPP = "5531984773813";
const zap = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
const LINK_LISTA = zap("Olá, Rodrigo! Vi o Site Finder na página de apps da Palomino Tech e quero entrar na lista de acesso antecipado.");
const LINK_AVISO = zap("Olá, Rodrigo! Vi a página de apps da Palomino Tech e queria ser avisado dos próximos.");

const PASSOS = [
  { titulo: "Busque", texto: "Por cidade, CEP ou ramo, direto do Google Maps." },
  { titulo: "Filtre", texto: "Fica só quem ainda não tem site." },
  { titulo: "Baixe", texto: "Nome, telefone e endereço numa planilha." },
  { titulo: "Mostre", texto: "Uma prévia do site, mandada pelo seu WhatsApp." },
];

const PASSOS_VAGAS = [
  { titulo: "Receba", texto: "Vagas novas todo dia, cada uma com nota de 0 a 10." },
  { titulo: "Organize", texto: "Um quadro do candidatei até a proposta." },
  { titulo: "Acompanhe", texto: "Lê o seu e-mail e move o card quando a empresa responde." },
  { titulo: "Lembre", texto: "Aviso no WhatsApp na véspera da entrevista." },
];

// Vagas de exemplo para ilustrar a tela; não são empresas reais.
const COLUNAS = [
  { nome: "Candidatei", total: 6, cards: [{ empresa: "Nuvem Pay", cargo: "Analista de Dados", nota: "8,7" }, { empresa: "Atlas Log", cargo: "Analista de BI", nota: "7,9" }] },
  { nome: "Entrevista", total: 2, cards: [{ empresa: "Loja Ponto", cargo: "Cientista de Dados", nota: "9,1" }] },
  { nome: "Proposta", total: 1, cards: [{ empresa: "Vale Tech", cargo: "Analista Sênior", nota: "8,4" }] },
];

const FATOS = [
  { icone: Monitor, texto: "Roda no navegador, do celular ou do computador" },
  { icone: Repeat, texto: "A mesma ferramenta que a Palomino Tech usa todo dia" },
  { icone: Clock, texto: "Quem está na lista recebe o acesso e o preço primeiro" },
];

// Leads de exemplo para ilustrar a tela; não são negócios reais.
const LEADS = [
  { nome: "Barbearia do Teco", bairro: "Centro", nota: "4,8" },
  { nome: "Studio Navalha", bairro: "Vila Pinto", nota: "4,9" },
  { nome: "Corte & Cia", bairro: "Joana Marques", nota: "4,6" },
  { nome: "Dom Bigode", bairro: "Lundcéia", nota: "4,7" },
];

const TelaSiteFinder = () => (
  <div
    className="rounded-[var(--pal-radius)] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
    aria-label="Ilustração da tela do Site Finder"
  >
    <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[var(--pal-border)]">
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="ml-3 font-mono text-[11px] text-[var(--pal-text-faint)]">sitefinder · busca</span>
    </div>

    <div className="p-4 sm:p-5">
      <div className="flex items-center gap-2.5 rounded-[var(--pal-radius-control)] border border-[var(--pal-border)] bg-[var(--pal-bg-subtle)] px-3.5 h-11">
        <Search className="h-4 w-4 text-[var(--pal-text-muted)] shrink-0" strokeWidth={1.5} />
        <span className="text-sm text-[var(--pal-text)] truncate">Barbearia</span>
        <span className="text-[var(--pal-text-faint)]">·</span>
        <MapPin className="h-3.5 w-3.5 text-[var(--pal-text-muted)] shrink-0" strokeWidth={1.5} />
        <span className="text-sm text-[var(--pal-text-muted)] truncate">Lagoa Santa, MG</span>
        <span className="ml-auto hidden sm:inline font-mono text-[11px] text-[var(--pal-text-faint)] shrink-0">5 km</span>
      </div>

      <div className="flex items-baseline justify-between mt-4 mb-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--pal-text-faint)]">Sem site</p>
        <p className="font-mono text-[11px] text-[var(--pal-text-muted)]">
          <span className="text-[var(--pal-text)]">18</span> de 43 encontrados
        </p>
      </div>

      <ul className="divide-y divide-[var(--pal-border)]">
        {LEADS.map((l, i) => (
          <li key={l.nome} className="flex items-center gap-3 py-2.5">
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

      <div className="flex gap-2 mt-3">
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

const TelaVagas = () => (
  <div
    className="relative rounded-[var(--pal-radius)] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
    aria-label="Ilustração da tela do Gerenciador de Vagas"
  >
    <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[var(--pal-border)]">
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pal-border)]" />
      <span className="ml-3 font-mono text-[11px] text-[var(--pal-text-faint)]">vagas · candidaturas</span>
    </div>

    <div className="p-4 sm:p-5 grid grid-cols-3 gap-2 sm:gap-3">
      {COLUNAS.map((c) => (
        <div key={c.nome} className="min-w-0 rounded-[var(--pal-radius-control)] bg-[var(--pal-bg-subtle)] p-2 sm:p-2.5">
          <div className="flex items-center justify-between px-0.5 mb-2">
            <span className="text-[11px] sm:text-xs font-semibold text-[var(--pal-text)] truncate">{c.nome}</span>
            <span className="hidden sm:inline font-mono text-[10px] px-1.5 py-0.5 rounded-full bg-white text-[var(--pal-text-muted)]">{c.total}</span>
          </div>
          <div className="space-y-2">
            {c.cards.map((v) => (
              <div key={v.empresa} className="rounded-[10px] bg-white border border-[var(--pal-border)] p-2 sm:p-2.5">
                <p className="text-[11px] sm:text-xs font-semibold text-[var(--pal-text)] truncate">{v.empresa}</p>
                <p className="text-[10px] sm:text-[11px] text-[var(--pal-text-faint)] truncate">{v.cargo}</p>
                <p className="mt-1.5 font-mono text-[10px] sm:text-[11px] text-[var(--pal-text-muted)]">nota {v.nota}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Aviso que chega no WhatsApp */}
    <div className="mx-4 sm:mx-5 mb-4 sm:mb-5 flex items-start gap-3 rounded-[var(--pal-radius-control)] bg-[var(--pal-strong)] text-[var(--pal-strong-ink)] px-3.5 py-3">
      <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 opacity-70" strokeWidth={1.5} />
      <div className="min-w-0">
        <p className="text-xs font-semibold">Loja Ponto respondeu</p>
        <p className="text-[11px] opacity-60 truncate">Convite para entrevista. Card movido para Entrevista.</p>
      </div>
      <span className="ml-auto font-mono text-[10px] opacity-50 shrink-0">09:12</span>
    </div>
  </div>
);

const Apps = () => {
  useEffect(() => {
    initTracker();
    document.title = "Apps · Palomino Tech";
    window.scrollTo(0, 0);
    return () => {
      document.title = "Palomino Tech";
    };
  }, []);

  return (
    <div className="min-h-screen text-[var(--pal-text)]" style={{ background: "var(--pal-bg-gradient)" }}>
      <Navbar />

      <main className="px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 sm:pb-24">
        <div className="container-narrow">
          {/* Abertura */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-10 mb-8 sm:mb-10">
              <h1
                className="text-[2.3rem] leading-[1.02] sm:text-5xl lg:text-[3.6rem] font-bold max-w-2xl"
                style={{ fontFamily: "var(--pal-font-display)", fontStretch: "var(--pal-font-display-stretch)", letterSpacing: "-0.035em" }}
              >
                Ferramentas da casa, para você usar.
              </h1>
              <p className="text-[15px] leading-relaxed text-[var(--pal-text-muted)] md:max-w-xs md:text-right md:pb-2">
                O que a Palomino Tech constrói para os próprios projetos e abre para quem trabalha do mesmo jeito.
              </p>
            </div>
          </AnimatedSection>

          {/* Vitrine do Site Finder */}
          <AnimatedSection delay={0.05}>
            <section
              id="site-finder"
              className="rounded-[var(--pal-radius-lg)] bg-[var(--pal-strong)] text-[var(--pal-strong-ink)] p-5 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-white/40">01</span>
                  <span className="font-mono text-[11px] px-2 py-1 rounded-[6px] border border-white/15 text-white/70">
                    Acesso antecipado
                  </span>
                </div>

                <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-[-0.035em]">Site Finder</h2>
                <p className="mt-3 text-lg leading-snug text-white/75 max-w-md">
                  Ache os negócios da sua cidade que ainda não têm site e mostre a eles como o deles ficaria.
                </p>

                <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-7">
                  {PASSOS.map((p, i) => (
                    <li key={p.titulo}>
                      <p className="flex items-baseline gap-2">
                        <span className="font-mono text-[11px] text-white/35">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[15px] font-semibold">{p.titulo}</span>
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-white/55">{p.texto}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <a
                    href={LINK_LISTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--pal-primary)] hover:bg-[var(--pal-primary-hover)] text-[var(--pal-primary-ink)] text-[15px] font-semibold transition-colors"
                  >
                    Entrar na lista
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <p className="text-xs leading-relaxed text-white/45 text-center sm:text-left">
                    Sem compromisso. A conversa é pelo<br className="hidden sm:block" /> WhatsApp, direto comigo.
                  </p>
                </div>
              </div>

              <div>
                <TelaSiteFinder />
                <p className="mt-3 font-mono text-[11px] text-white/35">Ilustração com nomes de exemplo.</p>
              </div>
            </section>
          </AnimatedSection>

          {/* Vitrine do Gerenciador de Vagas: espelhada, tela à esquerda */}
          <AnimatedSection>
            <section
              id="gerenciador-de-vagas"
              className="mt-4 rounded-[var(--pal-radius-lg)] bg-[var(--pal-strong)] text-[var(--pal-strong-ink)] p-5 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center"
            >
              <div className="order-2 lg:order-1 min-w-0">
                <TelaVagas />
                <p className="mt-3 font-mono text-[11px] text-white/35">Ilustração com nomes de exemplo.</p>
              </div>

              <div className="order-1 lg:order-2 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-white/40">02</span>
                  <span className="font-mono text-[11px] px-2 py-1 rounded-[6px] border border-white/15 text-white/70">Em breve</span>
                </div>

                <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-[-0.035em]">Gerenciador de Vagas</h2>
                <p className="mt-3 text-lg leading-snug text-white/75 max-w-md">
                  As vagas certas chegam até você, e cada candidatura fica acompanhada até a resposta.
                </p>

                <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-7">
                  {PASSOS_VAGAS.map((p, i) => (
                    <li key={p.titulo}>
                      <p className="flex items-baseline gap-2">
                        <span className="font-mono text-[11px] text-white/35">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[15px] font-semibold">{p.titulo}</span>
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-white/55">{p.texto}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <a
                    href={zap("Olá, Rodrigo! Vi o Gerenciador de Vagas na página de apps da Palomino Tech e quero ser avisado quando abrir.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--pal-strong-ink)] text-[var(--pal-strong)] text-[15px] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Quero ser avisado
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <p className="text-xs leading-relaxed text-white/45 text-center sm:text-left">
                    Para quem está procurando emprego<br className="hidden sm:block" /> e quer parar de perder vaga e resposta.
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Fatos, numa faixa só */}
          <AnimatedSection>
            <ul
              className="mt-4 grid md:grid-cols-3 rounded-[var(--pal-radius)] border border-[var(--pal-border-card)] bg-[var(--pal-bg-card)] divide-y md:divide-y-0 md:divide-x divide-[var(--pal-border)]"
              style={{ backdropFilter: "var(--pal-glass)", WebkitBackdropFilter: "var(--pal-glass)" }}
            >
              {FATOS.map(({ icone: Icone, texto }) => (
                <li key={texto} className="flex items-center gap-3 px-5 py-4">
                  <Icone className="h-[18px] w-[18px] text-[var(--pal-text-muted)] shrink-0" strokeWidth={1.5} />
                  <span className="text-sm leading-snug text-[var(--pal-text)]">{texto}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Próximo app */}
          <AnimatedSection>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-[var(--pal-radius)] border border-dashed border-[var(--pal-border)] px-5 py-4">
              <span className="font-mono text-[11px] text-[var(--pal-text-faint)]">03</span>
              <p className="flex-1 text-sm text-[var(--pal-text-muted)]">
                O próximo app entra aqui quando estiver pronto para uso de outras pessoas.
              </p>
              <a
                href={LINK_AVISO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--pal-text)] hover:opacity-70 transition-opacity"
              >
                Quero ser avisado
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apps;
