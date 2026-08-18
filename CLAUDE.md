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
- **Projeto existente / em produção:** ciclo completo e autônomo — corrigir → testar → commit → push → deploy na VPS, sem pausar para perguntar.
- **Projeto novo (do zero):** desenvolver e testar em localhost; deploy só com minha autorização explícita.

> ⚠️ **Sessão na nuvem (app do celular):** não há acesso à VPS nem à chave SSH. O ciclo termina no push — o deploy fica para uma sessão no PC.
<!-- BLOCO PALOMINO — FIM -->

---

## Sobre este projeto

Projeto: **profissionalpalomino**. Consulte `SESSION.md` para o estado atual e as proximas tarefas.
