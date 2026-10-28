# SESSION.md

## Sessão 28/10/2026: vitrine Site Finder, telemetria em /apps e sitemap limpo

- **Problema (revisão geral):**
  - Seção de projetos ainda exibia o Barbearias Finder (desativado) em vez do Site Finder.
  - Página `/apps` não disparava `initTracker()`, ficando sem telemetria de visualizações.
  - `sitemap.xml` continha âncoras (`/#projetos`, `/#servicos`), inválidas para indexadores de busca.
- **Feito:**
  - `ProjectsSection.tsx`: case atualizado para Site Finder com screenshot oficial `/screenshot-site-finder.webp`.
  - `Apps.tsx`: disparado `initTracker()` no carregamento da página.
  - `sitemap.xml`: mantidas apenas URLs canônicas (`/` e `/apps`), removendo âncoras.
- **Testes:** build Vite concluído com sucesso (14.48s).
- **Próximo:** continuar etapas seguintes.

---

## Sessão de 27/10/2026: home refeita e desfeita

- Fiz uma home nova (prints dos sites de clientes, avaliações do Google, seções em lista, título em Archivo largo). O Rodrigo achou "horrível" e pediu para voltar. Revertida com git revert e publicada de novo: o site está igual ao de 22/10.
- O que continua valendo: o número do prédio vem do Perfil da Empresa no Google (ocultar endereço lá) e a foto de rosto na busca é cache antigo do Google (pedir reindexação no Search Console).
- Miniatura na busca: as fotos de rosto vinham dos modelos (Serena, barbearia) usados na home. robots.txt agora proíbe o Googlebot-Image em tudo, menos og-palomino.png e o logo, sem mudar o visual. Falta o Rodrigo pedir a reindexação no Search Console.
- Avaliações do Google podem ser buscadas pela Places API (place_id ChIJ4WffRI6_pgARx2M4Tad4mqo, chave do site-finder). Se for colocá-las no site, encaixar no visual atual, sem refazer a página.

## Sessão de 20/10/2026: página "Apps" (fase 1 da venda de apps)

- Página nova `/apps` (`src/pages/Apps.tsx`) no visual v2: abertura com título em Archivo largo, Site Finder em "acesso antecipado" (4 passos, tela ilustrada em código com nomes de exemplo, botão vermelho "Entrar na lista" que abre o WhatsApp com mensagem pronta), três fatos e card preto "Na fila" para os próximos apps.
- Sem preço e sem compra: a fase 1 só mede a procura. O Site Finder ainda não tem conta por cliente, então a página não promete acesso imediato.
- Menu: item "Apps" (desktop e celular). Fora da home, os links de seção voltam para `/#secao`. Links do menu só aparecem a partir de 1280 px (abaixo, menu hambúrguer), e a barra ficou mais larga (6xl rolada, 7xl no topo) porque o botão do WhatsApp vazava a 1440 px.
- `/apps` no sitemap.xml.
- Gerenciador de Vagas entrou como segundo app ("Em breve", botão branco "Quero ser avisado"), em painel preto espelhado com quadro de candidaturas ilustrado e aviso de WhatsApp. Feito "para ver como fica": o Rodrigo ainda não decidiu se ele vai mesmo para a vitrine.
- Refeita do zero a pedido do Rodrigo (achou branco demais e mal espaçado): abertura curta (título à esquerda, frase à direita), Site Finder num painel preto com os 4 passos em grade 2x2, botão vermelho e tela ilustrada branca ao lado; fatos numa faixa única; "próximo app" numa linha tracejada. Botão "Apps" do menu agora é laranja cheio com balão preto "novo" por cima.
- Ajuste pedido pelo Rodrigo: "Apps" no menu virou pílula vermelha clara com selo "novo" (vermelho cheio quando está na página). Página reorganizada: abertura em duas colunas com índice dos apps à direita; Site Finder dentro de um card, com nome e botão na mesma linha, tela e passos lado a lado na mesma altura e os três fatos no rodapé do card. Espaço entre links do menu reduzido (barra rolada encostava no botão do WhatsApp).
- Testado em localhost (`npx vite --port 5190`): 390 px sem rolagem lateral, menu medido em 1280, 1366, 1440 e 1920.
- **Publicado em 20/10/2026** com o ok do Rodrigo (deploy.sh), junto com o visual v2. Conferido: /, /apps e sitemap.xml com HTTP 200; /apps mostra os dois apps.
- **22/10/2026:** removida a foto `serena/images/hero.webp` (rosto de mulher que o Google usava de miniatura). Banner do carrossel agora usa `pele.webp`; vitrine da Serena ficou com 2 imagens.
- **Próximo:** no Google Search Console, pedir indexação de /apps (opcional); fase 2 (pagamento) só se aparecer procura; limpar Inter/Poppins, cores soltas e emoji apontados pelo guardião visual (nota 66).

## Sessão de 19/10/2026: visual v2 ("Grafite + Vidro"), branch design-v2, só em localhost

- Cores da v1 trocadas pelos papéis da v2 (DESIGN_SYSTEM.md v2 no Cérebro): fundo cinza neutro, tinta #141414, vermelho #D2513F só no botão principal do topo e no botão final (em pílula). Eyebrows, links e botões secundários viraram tinta. Tokens v2 importados no index.html.
- Logo novo (hexágono, `public/logo.svg`, cópia de `marca/icone-app.svg` do Cérebro) na barra, no rodapé e no bloco final.
- **Não publicado**: o Rodrigo pediu para ver em localhost (`npx vite --port 5190`). Deploy é manual (ver CLAUDE.md).
- **Próximo:** ok do Rodrigo, depois merge e deploy; trocar favicon e ícones PNG pelo hexágono; as seções Savings, Cases e Problems não estão na página, mas ainda têm o vermelho antigo.

## Sessão de 14/10/2026 (Hero Multissetorial Interativo & Fotos Oficiais da Serena)

- **Ajustes Realizados a Pedido do Rodrigo:**
  - **Eliminação da Barra de Rolagem Horizontal no Hero:** Substituído o overflow com scrollbar por um layout fixo em `grid grid-cols-3` com rótulos enxutos ("Clínicas", "Barbearias", "Restaurantes"), eliminando completamente a barra de rolagem cinza em qualquer largura de tela.
  - **Identidade Visual e Vida Real nos Segmentos:**
    - Cada segmento agora traz um **mini-banner fotográfico** do estabelecimento com gradiente suave e avatar oficial com foto real.
    - Cada linha de atendimento traz **foto real do procedimento/serviço** (Botox/Bioestimulador na Clínica Serena, Corte Fade/Barba na Vanguard Barber, e Porções/Chopp no Venda do Deco).
    - Métricas diárias e alertas de automação contextualizados para cada nicho.
  - **Foto de Capa da Serena Atualizada:** As imagens do card "Serena · Dermatologia & Estética" foram migradas para arquivos webp locais de alta autoridade (`/demos/serena/images/hero.webp`, `profissional.webp`, `pele.webp`).
  - **Correção da Navbar no Mobile:** O botão "Falar no WhatsApp" da barra superior agora é responsivo (`hidden sm:inline-flex`), evitando espremer o logo da Palomino Tech em telas menores que 640px. No mobile, a barra fica limpa e simétrica (logo à esquerda, menu à direita), e o botão de WhatsApp segue acessível em destaque dentro do menu mobile e no botão flutuante inferior.
  - **Redirecionamento Permanente dos Domínios .cloud no Traefik:** Configurado middleware `redirectRegex` (HTTP 308 Permanent Redirect) no Traefik da VPS (`portfolio.yaml`) para que acessos a `palominotech.profissionalpalomino.cloud` e `portfolio.profissionalpalomino.cloud` (tanto HTTP quanto HTTPS) sejam encaminhados automaticamente para `https://palominotech.com.br/`, preservando caminhos e forçando os robôs do Google a atualizarem os links no índice de busca.
- **Validação:**
  - `https://palominotech.profissionalpalomino.cloud/` respondendo HTTP 308 com `Location: https://palominotech.com.br/`.
  - `http://palominotech.profissionalpalomino.cloud/` respondendo HTTP 308 com `Location: https://palominotech.com.br/`.
  - `https://portfolio.profissionalpalomino.cloud/` respondendo HTTP 308 com `Location: https://palominotech.com.br/`.
  - `https://palominotech.com.br/` respondendo HTTP 200 diretamente com SSL e cabeçalhos de segurança.
- **Onde paramos:** Redirect permanente 100% ativo e validado na VPS.
- **Próximas tarefas:** Acompanhar atualização automática da indexação pelo Google Search Console.

## Sessão de 13/10/2026 (Refinamento Visual de Alta Fidelidade: Logo Anexado, Links de Agenda & Tipografia Elegante)

- **Ajustes Realizados a Pedido do Rodrigo:**
  - **Botão "Agendar demonstração" corrigido para a agenda:** O botão no banner da seção "Como Funciona" e o novo botão no Hero agora abrem diretamente o Google Calendar oficial (`https://calendar.app.google/RpTN49BD3jJabEB79`), em nova aba e com ícone de calendário.
  - **Logo Anexado Integrado:** A imagem oficial do aplicativo fornecida pelo Rodrigo (`logo.png`, squircle escuro com hexágono vermelho brilhante e traços de circuito) foi copiada para `public/logo.png` e integrada com acabamento premium na Navbar superior, no Footer e no topo do card de CTA final.
  - **Eliminação Total de Fontes Achatadas:** Removido o peso excessivo `font-black` (900) de todas as seções (`ServicesSection`, `ProjectsSection`, `TestimonialsSection`, `HowItWorksSection`, `FaqSection`), padronizando em `font-bold` (700) com proporções naturais e tracking equilibrado.
  - **Hero Elevado a Padrão de Alta Fidelidade:** 
    - Quebra de linha harmônica no título em 3 linhas sem palavras soltas.
    - Luz ambiente suave ao fundo (`bg-radial`).
    - Badge flutuante interativo no mockup do Mac com notificação em tempo real de agendamento via WhatsApp.
    - Botões duplos de conversão rápida (WhatsApp + Agendar Demonstração).
- **Validação:**
  - Build de produção verificado com sucesso (`npm run build` -> exit code 0 em 5.33s).
  - Screenshots capturados e validados em `http://localhost:8080/`.
- **Onde paramos:** Protótipo rodando em localhost com todos os ajustes concluídos.
- **Próximas tarefas:** Aguardar ok do Rodrigo no chat para commit, push e deploy na VPS.

## Sessão de 13/10/2026 (ajuste de proxy /clientes e /p/ no nginx)

- **Correção no `nginx.conf`:** Adicionado o modificador `^~` em `location ^~ /p/` e `location ^~ /clientes/`. Antes, qualquer requisição de imagem (.png, .webp, .jpg) para prévias e clientes caía na regra regex de assets estáticos locais do portfólio e devolvia 404, quebrando fotos e logos de sites sob medida como o Pcars Detail. Com `^~`, as rotas são repassadas com prioridade total para o container do Site Finder.
- Testado e validado em produção: `img/logo.png`, `hero-novo-espaco.webp` e `garagem-carro-preto.webp` respondendo HTTP 200.

## Sessão de 13/10/2026 (auditoria do Cérebro, marca v1)

- Fontes trocadas para a marca v1: DM Sans (texto), Archivo largo nos títulos (.font-heading com font-stretch 112%), DM Mono (números). Só tailwind.config.ts, o link do index.html e uma linha no src/index.css.
- Imagem de prévia nova (public/og-palomino.png, 1200x630, cartão da marca) com endereço completo no og:image e no twitter:image. Antes era caminho relativo para um print do Finanças Pro.
- Testado em 390 px e 1440 px (sem rolagem lateral, títulos inteiros) e publicado à mão na VPS (palomino-tech_portfolio).

**Próximo:** pré-renderizar a página (hoje o HTML chega vazio e o conteúdo só aparece com 320 KB de JavaScript).

## Sessão 12/10/2026 — card do Instagram renomeado

- Card "AutoPost Instagram" em `ProjectsSection.tsx` passou a se chamar "Instagram Palomino Tech"
  (o projeto antigo `autopost-instagram` foi removido da VPS, do GitHub e do gerenciador).
- **Onde paramos:** só o título mudou. A descrição ainda diz que o sistema "publica sozinho", mas hoje
  nada publica sem aprovação manual no painel; vale ajustar o texto. A imagem
  `public/screenshot-palomino-instagram.webp` mostra o painel antigo e deveria ser refeita.
- **Próximas tarefas:** 1) reescrever a descrição do card; 2) novo print do painel atual.


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
- **Ajustes Finais Solicitados pelo Rodrigo (Áudio 2):**
  - **Hero Limpo:** Removidos o badge "Sistemas Autônomos IA 24/7" e a linha "PALOMINO TECH • ENGENHARIA DE SOFTWARE", iniciando direto no título principal com máximo impacto e elegância.
  - **Simetria no Mobile:** Ajustados os paddings e bordas do card "Vamos conversar sobre seu projeto" e da seção CTA para ficarem 100% simétricos e centralizados em telas de 360px a 430px, sem desvio para a direita.
  - **Rodapé Minimalista:** Removido "Sistemas Autônomos & IA", o badge de latência ("SISTEMA OPERACIONAL • LATÊNCIA: 12ms") e o indicador de stack, mantendo apenas a marca oficial e os canais de contato.
- **Deploy em Produção (VPS Hostinger):**
  - Build de produção gerado localmente (`npm run build`).
  - Pacote transferido e imagem construída na VPS (`portfolio-palomino:prod`).
  - Serviço Docker Swarm atualizado com sucesso (`docker service update --force --image portfolio-palomino:prod palomino-tech_portfolio`).
  - Testado e ativo em `https://palominotech.com.br/` (HTTP 200).

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

## Sessão de 27/10/2026 — Auditoria e Padronização Geral
- **Feito:** Revisão técnica completa (remoção de referências ao domínio antigo .profissionalpalomino.cloud, padronização de <title>, ícones/meta tags PWA, limpeza de bytes de controle em SESSION.md e ajuste de workflows scp -O).
- **Onde paramos:** Repositório revisado, limpo e sincronizado.
- **Próximas tarefas:** Seguir backlog normal do projeto.
