# SESSION.md

## Sessão 07/10/2026 — Refinamentos por Áudio do Rodrigo (Hero Equilibrado, Abas Estáveis, Dupla Flutuante & Telemetria)

- **Hero Section Reequilibrado & Proporcional:**
  - Redução drástica da escala da tipografia (`text-3xl sm:text-4xl md:text-5xl font-black`) para eliminar o impacto de "susto" ao abrir em resoluções altas (2K/4K).
  - Estrutura dividida em 2 colunas equilibradas no desktop:
    - **Esquerda:** Status operacional compacto, títulos em tamanho harmônico, 3 diferenciais em checklist (`Zero planilhas`, `Atendimento 24h IA`, `No ar em dias`).
    - **Direita:** Card de ação executiva com botões diretos de conversão (WhatsApp e Google Calendar) + 3 métricas de telemetria compactas (`9+ Cases`, `100% Autonomia`, `12ms Latência`).
  - **Remoção do Mockup 3D Pesado:** Retirado o laptop com os blocos grandões verticais que consumiam espaço excessivo.
  - **Marquee Preservado:** Faixa contínua com estrelas (`✦`) e especialidades mantida exatamente como elogiado.
- **Botões Flutuantes Duplos (WhatsApp + Instagram):**
  - Removido o atalho do `@palominotech` da Navbar superior para manter o topo limpo.
  - Criada pilha flutuante ergonômica no canto inferior direito com safe-area insets:
    - **Instagram:** Ícone oficial com gradiente e hover scale.
    - **WhatsApp:** Ícone oficial com verde e pulso ativo.
- **Seletor de Abas da Seção de Projetos Reformulado:**
  - Segmented control de alto contraste com badges claros (`3 MODELOS ATIVOS` vs `6 SISTEMAS NO AR`).
  - Ancoragem suave com `min-h-[550px]` e transições `fade-in` para eliminar completamente qualquer tranco ou pulo na tela ao trocar de aba.
  - Rótulo dinâmico orientativo informando exatamente o que está sendo exibido.
- **Telemetria & Analytics em Tempo Real Integrados:**
  - Módulo `src/lib/tracker.ts` conectado ao endpoint do Site Finder (`/api/analytics/track`).
  - Rastreamento silencioso de visitantes humanos, tempo ativo de permanência (heartbeat a cada 20s), funil de rolagem (25%, 50%, 75%, 100%) e cliques em WhatsApp, Instagram, Calendar e abas.
  - O portfólio agora aparece e pontua automaticamente no painel de Telemetria do Site Finder sob o slug `palominotech`.
- **Validação:**
  - Build de produção (`npm run build`) concluído com zero erros em 9.7s.
  - Teste automatizado via navegador (`browser_subagent`) validando carregamento, transição estável entre abas sem tranco e funcionamento dos botões flutuantes.

---

## Sessão 07/10/2026 (tarde) — Enxugamento dos Templates de Sites & Repasse de Referências do Site Finder

- **Enxugamento de Templates:** A seção de templates ("Sites & Landing Pages") foi reduzida de 7 para os 3 modelos campeões e validados com referências visuais oficiais:
  1. **Vanguard Barber & Studio:** Modelo dark premium com dourado, inspirado na referência GoGrin (Pinterest) do Site Finder (`modelos/barbearia.js`), gerado com dados e fotos de alta autoridade (`/demos/barbearia/index.html`).
  2. **Serena · Dermatologia & Estética:** Modelo de alta conversão do ClínicaFlow com CRM/RQE, tratamentos clínicos e FAQ para Google/IAs (`https://clinica.profissionalpalomino.cloud/modelo`).
  3. **Venda do Deco · Bar & Petiscaria:** Modelo sensorial do Site Finder com história real desde 1996, cardápio visual com preços e fotos autênticas (`/demos/venda-do-deco/index.html`).
- **Propagação Dinâmica de Referências (`?ref=` / `?lead=`):**
  - No `ProjectsSection.tsx`: implementada função `appendQuery` que preserva e concatena qualquer parâmetro de URL (`window.location.search`) nos botões de "Ver Demonstração ao Vivo" e nas mensagens de solicitação via WhatsApp.
  - Nas demos locais (`barbearia` e `venda-do-deco`): injetado script que captura `?ref=` / `?lead=` da URL e insere o sufixo `(Ref: ...)` nos links de WhatsApp da página, garantindo atribuição completa de leads originados no Site Finder.

## Sessão 07/10/2026 — Card "Clínica Serena · Estética Avançada"

- A demo de consultório médico (`/demos/medica/`) foi criada e, na mesma sessão, substituída: o Rodrigo pediu um modelo genérico de clínica de estética, com rastreio. A página nova mora no ClínicaFlow (`https://clinica.profissionalpalomino.cloud/modelo`), onde o painel /analytics gera links por contato e mostra quem abriu, quanto leu e se clicou no WhatsApp.
- Aqui ficou só o card em `ProjectsSection.tsx` apontando para a URL externa (abre em nova aba). Pasta `public/demos/medica/` removida. Visitas vindas do portfólio aparecem no painel como acesso direto ao "Modelo de site".

## Sessão 19/09/2026 — Pente Fino Completo: Segurança, PWA, Mobile-First e Conversão

- **Segurança HTTP & Infraestrutura:**
  - `nginx.conf`: adicionados headers `server_tokens off`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` e `Permissions-Policy`.
  - `Dockerfile` & `deploy.sh`: otimização drástica para usar container Nginx puro servindo o `dist/` pré-compilado, eliminando build duplicado de Node/NPM na VPS e reduzindo o tempo de deploy para segundos sem risco de OOM.
  - Limpeza de dependências: remoção de `sharp` (C++ nativo de backend desnecessário no front) e `lovable-tagger` de `package.json` e `vite.config.ts`.
- **PWA & Mobile-First:**
  - `public/sw.js`: criado Service Worker oficial com cache-shell e network-first, registrado no `index.html` (requisito obrigatório para o Google Chrome oferecer instalação no Android).
  - `public/manifest.json` & `public/manifest.webmanifest`: configurados com `purpose: "maskable any"`.
  - `Navbar.tsx`: adicionado menu mobile responsivo completo com animação fluida, links para todas as seções e botões de agendamento e WhatsApp com touch targets ergonômicos (>= 48px).
  - `WhatsAppButton.tsx`: integrado e ativado em `Index.tsx` com posicionamento seguro para barras de navegação do iOS/Android (`max(20px, env(safe-area-inset...))`).
- **Conversão & SEO:**
  - `ProjectsSection.tsx`: adicionado CTA direto via WhatsApp nos cards de "Sistemas & Automações" sem demo pública aberta, permitindo solicitar demonstração com mensagem contextual personalizada.
  - `FaqSection.tsx`: redesenhado no padrão Clean Light, com 6 perguntas estratégicas que quebram as principais objeções de clientes, integrado ao `Index.tsx`.
  - `public/sitemap.xml`: criado para indexação de SEO.

**Onde paramos:** Código compilado com sucesso e pronto para commit, push e deploy em produção.

**Próximas tarefas:**
1. Rodar deploy em produção na VPS (`bash deploy.sh`).
2. Sincronizar nota correspondente no Obsidian (`configs-palomino-tech/anotacoes/`).

---

## Sessao 2026-09-01 — Peso das fotos das demos (8,9 MB -> 1,5 MB)

### O problema
As 6 demos de landing page ficaram prontas e no ar, mas as fotos foram salvas em
qualidade maxima: 12 arquivos entre 600 KB e 900 KB cada. A demo do salao sozinha
baixava cerca de 5 MB. Essas paginas existem para o Rodrigo mandar o link para um
lead pelo WhatsApp — quem abre esta no 4G, no celular, e desiste antes de carregar.

### O que foi feito
- Todas as fotos das demos recomprimidas em JPEG qualidade 82 (mozjpeg), com teto de
  1600px de largura. Nenhuma perda visivel; reducao media de 83%.
- `socios.jpg` (advocacia), que estava pendente sem commit com 827 KB, entrou junto
  com 152 KB.
- Total das demos: **8,9 MB -> 1,5 MB**.

### Peso final por demo, medido no viewport de celular (390px)
| Demo | Baixado | Imagens quebradas |
|---|---|---|
| salao | 1021 KB | 0 |
| restaurante | 429 KB | 0 |
| clinica | 407 KB | 0 |
| imobiliaria | 340 KB | 0 |
| barbearia | 307 KB | 0 |
| advocacia | 150 KB | 0 |

### Verificado
- 25 imagens das demos conferidas uma a uma: todas validas depois da recompressao.
- As 6 demos abertas em navegador headless no viewport de celular: 0 imagens
  quebradas, 0 requisicoes falhas, 0 erros de JS.
- Rodape de cada demo traz "Modelo Demonstrativo Palomino Tech" — quem abrir sabe
  que e demonstracao, nao cliente real.

### Pendencia conhecida
Os PNGs de screenshot da home (`screenshot-stickers.png` 884 KB,
`screenshot-alca-party.png` 837 KB, `bg_profile.png` 839 KB, `bg_cover.png` 800 KB)
seguem pesados. Nao foram tocados nesta sessao: PNG de captura de tela perde
nitidez de texto com compressao agressiva e merece tratamento a parte
(provavelmente WebP com fallback).

---

## Sessão 2026-08-31 — Padronização Fluent de Ícones e Favicons

- **O que foi feito:** Ícone e favicons redesenhados no padrão Fluent Design da Palomino Tech (fundo 100% transparente, cores da marca com sombra suave e múltiplos tamanhos PWA gerados).
- **Status:** Concluído e deploy automático disparado.

---
