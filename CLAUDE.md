<!-- BLOCO PALOMINO — INÍCIO (não editar à mão; vale também para sessões na nuvem/celular) -->
# Rodrigo — Palomino Tech

## REGRA ZERO — leia antes de qualquer coisa

O cérebro central da Palomino Tech fica em:
**`github.com/profissionalpalomino/configs-palomino-tech`**

Comece por `MASTER_PROMPT.md` — ele indica qual arquivo ler em seguida.

| Tarefa | Arquivo a ler |
|---|---|
| Qualquer projeto (sempre) | `MASTER_PROMPT.md` |
| PRD, backlog, testes rastreáveis por ID | `METODOLOGIA_PRD.md` |
| Identidade, tom de voz, serviços | `PERFIL_PALOMINO.md` |
| Landing page ou site | `LANDING_PAGE_SYSTEM.md` |
| Automação, agente de IA, sistema | `PROTOCOLO_VLAEG.md` |
| Proposta comercial | `PROPOSTAS_COMERCIAIS.md` |
| Código, deploy, infra, servidor | `DIRETRIZES_TECNICAS.md` |

Para ler sem clonar:
```bash
gh api repos/profissionalpalomino/configs-palomino-tech/contents/MASTER_PROMPT.md \
  -H "Accept: application/vnd.github.raw"
```

Se não houver acesso de rede, siga as regras abaixo — elas são o essencial destilado.

## Como falar comigo
- Português brasileiro, sempre.
- Explicação simples, sem jargão técnico desnecessário.
- Sempre mostrar o custo estimado das soluções propostas.
- Explicar o "porquê" de cada decisão técnica relevante.
- Perguntar antes de decisões arquiteturais importantes.
- Priorizar soluções práticas e funcionais sobre complexidade técnica.

## Git — obrigatório
- `git pull` **antes** de começar a trabalhar.
- Commits pequenos, um assunto por commit, mensagem em português.
- Tipos: `init:` `feat:` `fix:` `refactor:` `docs:` `config:` `style:` `content:`
- **Push imediatamente após o commit.** Não parar no commit local esperando eu pedir.
- `.env` e credenciais **nunca** são commitados. `.gitignore` sempre presente.

## SESSION.md — obrigatório
- **Ler primeiro** ao iniciar a sessão, para retomar o contexto exato.
- **Atualizar antes de qualquer commit**: o que foi feito, onde paramos, próximas tarefas em ordem.
- É a memória do projeto entre sessões.

## Deploy
- **Projeto existente / em produção:** ciclo completo e autônomo — corrigir → testar → commit → push, sem pausar para perguntar.
- **Projeto novo (do zero):** desenvolver e testar em localhost; publicar só com minha autorização explícita.

> **Como saber se o push já publica:** se existir `.github/workflows/deploy.yml` neste
> repositório, o push na branch principal **é o deploy** — o GitHub Actions builda e sobe
> na VPS sozinho em ~2 minutos, e isso vale igual em sessão na nuvem (celular). Se o
> arquivo não existir, o ciclo termina no push e o deploy precisa de uma sessão no PC.

## PWA — obrigatório em todo app com interface
Todo app da Palomino Tech precisa ser instalável na tela inicial do celular:
- `public/manifest.webmanifest` com `display: standalone` e ícones **192 e 512** (o Chrome
  exige esses dois tamanhos para oferecer "Instalar app").
- `public/sw.js` registrado no carregamento — **sem service worker o Android não instala**,
  só o manifest não basta.
- Bloco de meta tags no `<head>`: `apple-mobile-web-app-capable`, `apple-touch-icon`,
  `theme-color` `#E8341C`. Sem elas, o iOS abre como aba do Safari em vez de app.
- Ícones vêm do boilerplate do `configs-palomino-tech` — nunca renomeie um SVG para `.png`.

O modelo `palomino-starter` já traz tudo isso pronto em `public/`.
<!-- BLOCO PALOMINO — FIM -->

---

## Sobre este projeto

Projeto: **profissionalpalomino**. Consulte `SESSION.md` para o estado atual e as proximas tarefas.
