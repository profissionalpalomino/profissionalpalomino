'use strict';

/* Protótipo OdontoLaf. Nada aqui conversa com servidor: os dados são fixos
   e as ações só mexem no estado da tela. É a referência visual do produto. */

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const dinheiro = (n) => (n || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
/* Nome de campanha vem do que a pessoa digita. Sem escapar, uma aspa ou um `<b>`
   entram como HTML e quebram a tabela e os atributos dos botões de filtro. */
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ─────────────────────────────────────────────────────────
// Dados de exemplo
// ─────────────────────────────────────────────────────────
/* `nasc` e `consulta` são os dois campos que a régua automática precisa e que o
   sistema da clínica exporta. Wellington está sem nascimento de propósito: mostra
   que quem vem com o campo vazio fica de fora da régua de aniversário.
   Quem responde sai da campanha — por isso Patrícia, Rafael e Wellington, que
   estão na aba Responderam, aparecem aqui sem campanha nenhuma. */
const LEADS = [
  { id: 1,  nome: 'Juliana Moreira',    tel: '(31) 9 8412-7730', canal: 'Instagram', situacao: 'lead',    dias: 22,  nasc: '14/03/1991', consulta: null, campanhas: [] },
  { id: 2,  nome: 'Marcos Vinícius',    tel: '(31) 9 9106-4482', canal: 'Google',    situacao: 'lead',    dias: 34,  nasc: '02/11/1986', consulta: null, campanhas: ['Resgate de leads'] },
  { id: 3,  nome: 'Patrícia Salgado',   tel: '(31) 9 8877-2019', canal: 'Facebook',  situacao: 'lead',    dias: 9,   nasc: '30/07/1994', consulta: null, campanhas: [] },
  { id: 4,  nome: 'Eduardo Rezende',    tel: '(31) 9 9433-5561', canal: 'Instagram', situacao: 'lead',    dias: 17,  nasc: '08/05/1983', consulta: null, campanhas: [] },
  { id: 5,  nome: 'Cláudia Bernardes',  tel: '(31) 9 8290-6634', canal: 'Indicação', situacao: 'lead',    dias: 41,  nasc: '19/09/1978', consulta: null, campanhas: ['Resgate de leads'] },
  { id: 6,  nome: 'Rafael Toledo',      tel: '(31) 9 9721-1148', canal: 'Google',    situacao: 'lead',    dias: 5,   nasc: '25/01/1996', consulta: null, campanhas: [] },
  { id: 7,  nome: 'Simone Prado',       tel: '(31) 9 8663-9042', canal: 'Instagram', situacao: 'cliente', dias: 63,  nasc: '01/09/1988', consulta: 0,   campanhas: ['Aniversário'] },
  { id: 8,  nome: 'Antônio Barreto',    tel: '(31) 9 9358-7715', canal: 'Indicação', situacao: 'cliente', dias: 128, nasc: '11/12/1971', consulta: 190, campanhas: ['Retorno 180 dias', 'Aniversário'] },
  { id: 9,  nome: 'Larissa Fonseca',    tel: '(31) 9 8145-3327', canal: 'Facebook',  situacao: 'cliente', dias: 12,  nasc: '06/04/1990', consulta: 1,   campanhas: ['Aniversário', 'Parceria Cheirinho Bom'] },
  { id: 10, nome: 'Wellington Souza',   tel: '(31) 9 9502-8830', canal: 'Instagram', situacao: 'cliente', dias: 201, nasc: '',           consulta: 201, campanhas: [] },
  { id: 11, nome: 'Beatriz Nogueira',   tel: '(31) 9 8734-1206', canal: 'Google',    situacao: 'cliente', dias: 28,  nasc: '23/02/1985', consulta: 34,  campanhas: ['Aniversário'] },
  { id: 12, nome: 'Gustavo Lemos',      tel: '(31) 9 9847-6653', canal: 'Instagram', situacao: 'lead',    dias: 3,   nasc: '17/06/1999', consulta: null, campanhas: [] },
];
const RESPOSTAS = [
  {
    nome: 'Patrícia Salgado', base: 'lead', tel: '(31) 9 8877-2019', campanha: 'Resgate de leads', quando: 'hoje · 09:14',
    ultima: 'Pode ser sim, tenho disponibilidade quinta à tarde',
    msgs: [
      { lado: 'saiu', txt: 'Oi Patrícia, tudo bem? Aqui é da OdontoLaf.\n\nVi que a nossa conversa acabou parando por aqui. Sua avaliação continua de pé, é rapidinho e sem compromisso.\n\nQuer que eu separe um horário essa semana?', hora: '09:02' },
      { lado: 'entrou', txt: 'Oi! Pode ser sim, tenho disponibilidade quinta à tarde', hora: '09:14' },
    ],
  },
  {
    nome: 'Rafael Toledo', base: 'lead', tel: '(31) 9 9721-1148', campanha: 'Resgate de leads', quando: 'hoje · 08:41',
    ultima: 'Quanto fica o implante? Cheguei a ver com vocês em julho',
    msgs: [
      { lado: 'saiu', txt: 'Oi Rafael, tudo bem? Aqui é da OdontoLaf.\n\nVi que a nossa conversa acabou parando por aqui. Sua avaliação continua de pé, é rapidinho e sem compromisso.', hora: '08:30' },
      { lado: 'entrou', txt: 'Opa, boa', hora: '08:40' },
      { lado: 'entrou', txt: 'Quanto fica o implante? Cheguei a ver com vocês em julho', hora: '08:41' },
    ],
  },
  {
    nome: 'Wellington Souza', base: 'cliente', tel: '(31) 9 9502-8830', campanha: 'Retorno 180 dias', quando: 'ontem · 16:22',
    ultima: 'Obrigado pelo lembrete! Vou passar aí semana que vem',
    msgs: [
      { lado: 'saiu', txt: 'Oi Wellington! Já faz um tempinho desde a sua última visita à OdontoLaf.\n\nQue tal agendar uma revisão? É rápido e ajuda a evitar problema maior lá na frente.', hora: '16:10' },
      { lado: 'entrou', txt: 'Obrigado pelo lembrete! Vou passar aí semana que vem', hora: '16:22' },
    ],
  },
];

/* `entrada` é o que separa os dois mundos. Na campanha por regra ninguém vincula
   nada: uma varredura diária avalia a base e quem passa a bater entra sozinho.
   Na campanha por lista quem escolhe é a pessoa, no painel filtrado. */
const CAMPANHAS = [
  { nome: 'Aniversário',            tipo: 'automatica', entrada: 'regra',
    regra: 'Todo cliente, no dia do aniversário',                    quando: 'no dia, às 9h' },
  { nome: 'Retorno 180 dias',       tipo: 'automatica', entrada: 'regra',
    regra: 'Cliente que completou 180 dias desde a última consulta',  quando: '180 d. após a alta' },
  { nome: 'Resgate de leads',       tipo: 'automatica', entrada: 'regra',
    regra: 'Lead sem contato há mais de 30 dias que nunca respondeu', quando: 'toda segunda' },
  { nome: 'Parceria Cheirinho Bom', tipo: 'pontual',    entrada: 'lista',
    regra: null,                                                     quando: '20/09/2026' },
];

/* Contagem sai da base, não de um número guardado à parte, que sempre desencontra. */
const vinculados = (nome) => LEADS.filter((l) => l.campanhas.includes(nome)).length;
const porRegra = (nome) => (CAMPANHAS.find((c) => c.nome === nome) || {}).entrada === 'regra';

/* A varredura diária, aqui rodando na hora em que a campanha nasce. Sem isso a
   campanha por regra aparecia com zero na coluna "Na campanha" e desmentia o que
   a própria tela explica. Cada critério do select tem o seu teste aqui. */
const CRITERIOS = {
  'Todo cliente, no dia do aniversário':
    (l) => l.situacao === 'cliente' && !!l.nasc,
  'Cliente que completou 180 dias desde a última consulta':
    (l) => l.situacao === 'cliente' && l.consulta != null && l.consulta >= 180,
  'Cliente que completou 1 ano desde a última consulta':
    (l) => l.situacao === 'cliente' && l.consulta != null && l.consulta >= 365,
  'Lead sem contato há mais de 30 dias que nunca respondeu':
    (l) => l.situacao === 'lead' && l.dias > 30,
};

function varrerRegra(camp) {
  const teste = CRITERIOS[camp.regra];
  if (!teste) return 0;
  let n = 0;
  LEADS.forEach((l) => {
    if (teste(l) && !l.campanhas.includes(camp.nome)) { l.campanhas.push(camp.nome); n++; }
  });
  return n;
}

const ESTOQUE = [
  { nome: 'Implante Cone Morse 3.5 x 10mm',        sku: 'ODL-IMP-0001', tipo: 'implante',   saldo: 38, custo: 248,  min: 20, val: '30/06/2029' },
  { nome: 'Implante Cone Morse 4.0 x 11.5mm',      sku: 'ODL-IMP-0002', tipo: 'implante',   saldo: 29, custo: 248,  min: 20, val: '30/06/2029' },
  { nome: 'Implante Hexágono Externo 3.75 x 10mm', sku: 'ODL-IMP-0003', tipo: 'implante',   saldo: 21, custo: 196,  min: 15, val: '30/11/2028' },
  { nome: 'Implante Zigomático 42.5mm',            sku: 'ODL-IMP-0004', tipo: 'implante',   saldo: 8,  custo: 1180, min: 4,  val: '28/02/2030' },
  { nome: 'Mini Pilar Cone Morse 3.3',             sku: 'ODL-CMP-0001', tipo: 'componente', saldo: 58, custo: 92,   min: 30, val: '31/01/2031' },
  { nome: 'Munhão Universal 4.5 x 6mm',            sku: 'ODL-CMP-0002', tipo: 'componente', saldo: 39, custo: 118,  min: 25, val: '30/09/2030' },
  { nome: 'Cicatrizador 4.5 x 4mm',                sku: 'ODL-CMP-0003', tipo: 'componente', saldo: 68, custo: 38,   min: 40, val: '30/11/2026' },
  { nome: 'Parafuso de Cobertura 3.5',             sku: 'ODL-CMP-0004', tipo: 'componente', saldo: 76, custo: 22,   min: 50, val: '31/05/2031' },
  { nome: 'Análogo de Implante Cone Morse',        sku: 'ODL-CMP-0006', tipo: 'componente', saldo: 12, custo: 46,   min: 30, val: null },
];

const ATENDIMENTOS = [
  { data: '01/09/2026', hora: '14:12', paciente: 'Simone Prado', resp: 'Marcela Andrade', itens: [
    { peca: 'Implante Cone Morse 3.5 x 10mm', cod: 'ODL-IMP-0001/00042', qtd: 2, custo: 248, hora: '14:12' },
    { peca: 'Mini Pilar Cone Morse 3.3',      cod: 'ODL-CMP-0001/00118', qtd: 2, custo: 92, hora: '14:19' },
    { peca: 'Cicatrizador 4.5 x 4mm',         cod: 'ODL-CMP-0003/00204', qtd: 2, custo: 38, hora: '14:41' },
  ] },
  { data: '01/09/2026', hora: '14:40', paciente: 'Antônio Barreto', resp: 'Kelly Ferreira', itens: [
    { peca: 'Implante Cone Morse 4.0 x 11.5mm', cod: 'ODL-IMP-0002/00031', qtd: 1, custo: 248, hora: '14:40' },
    { peca: 'Munhão Universal 4.5 x 6mm',       cod: 'ODL-CMP-0002/00077', qtd: 1, custo: 118, hora: '14:47' },
  ] },
  { data: '31/08/2026', hora: '16:05', paciente: 'Larissa Fonseca', resp: 'Simone Prado', itens: [
    { peca: 'Implante Hexágono Externo 3.75 x 10mm', cod: 'ODL-IMP-0003/00019', qtd: 4, custo: 196, hora: '—' },
    { peca: 'Parafuso de Cobertura 3.5',             cod: 'ODL-CMP-0004/00203', qtd: 4, custo: 22, hora: '—' },
  ] },
  { data: '28/08/2026', hora: '09:20', paciente: 'Simone Prado', resp: 'Marcela Andrade', itens: [
    { peca: 'Cicatrizador 4.5 x 4mm', cod: 'ODL-CMP-0003/00188', qtd: 1, custo: 38, hora: '—' },
  ] },
];

const totalAtend = (a) => a.itens.reduce((t, i) => t + i.qtd * i.custo, 0);
const pecasAtend = (a) => a.itens.reduce((t, i) => t + i.qtd, 0);

// ─────────────────────────────────────────────────────────
// Estado da tela
// ─────────────────────────────────────────────────────────
const estado = {
  filtros: { dias: 0, canal: null, situacao: null, campanha: null },
  selecionados: new Set(),
  /* Lista, não um só: a clínica roda mais de uma cadeira ao mesmo tempo. */
  abertos: [
    { paciente: 'Simone Prado',    min: 40 },
    { paciente: 'Antônio Barreto', min: 12 },
  ],
  ultimoPaciente: 'Simone Prado',
  bipeAtual: null,
};

// ─────────────────────────────────────────────────────────
// Navegação
// ─────────────────────────────────────────────────────────
$$('.app-btn').forEach((b) => b.onclick = () => {
  $$('.app-btn').forEach((x) => x.classList.toggle('on', x === b));
  $('#app-leads').hidden = b.dataset.app !== 'leads';
  $('#app-estoque').hidden = b.dataset.app !== 'estoque';
  window.scrollTo({ top: 0 });
});

$$('.aba[data-aba]').forEach((b) => b.onclick = () => {
  $$('.aba[data-aba]').forEach((x) => x.classList.toggle('on', x === b));
  $$('[data-secao]').forEach((s) => s.hidden = s.dataset.secao !== b.dataset.aba);
});

$$('.aba[data-aba2]').forEach((b) => b.onclick = () => {
  $$('.aba[data-aba2]').forEach((x) => x.classList.toggle('on', x === b));
  $$('[data-secao2]').forEach((s) => s.hidden = s.dataset.secao2 !== b.dataset.aba2);
});

/* A trava no body impede o fundo de rolar enquanto a caixa está aberta. */
const abrir = (id) => { $(id).classList.add('on'); document.body.classList.add('trava'); };
const fechar = (el) => {
  el.classList.remove('on');
  if (!$('.fundo.on')) document.body.classList.remove('trava');
};
$$('[data-fecha]').forEach((b) => b.onclick = () => fechar(b.closest('.fundo')));
$$('.fundo').forEach((f) => f.onclick = (e) => { if (e.target === f) fechar(f); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') $$('.fundo.on').forEach(fechar); });

// ─────────────────────────────────────────────────────────
// Painel de leads
// ─────────────────────────────────────────────────────────
function leadsFiltrados() {
  const f = estado.filtros;
  return LEADS.filter((l) =>
    (!f.dias || l.dias >= f.dias)
    && (!f.canal || l.canal === f.canal)
    && (!f.situacao || l.situacao === f.situacao)
    && (!f.campanha || l.campanhas.includes(f.campanha)));
}

/** Duas primeiras campanhas visíveis; o resto vira "+N" com a lista no title. */
function etiquetasCampanha(lista) {
  if (!lista.length) return '<span style="color:var(--texto3)">—</span>';
  /* O raio marca quem entrou pela regra; sem ele, foi vinculado à mão. Saber a
     diferença importa: numa campanha por regra não adianta mexer no vínculo. */
  const vis = lista.slice(0, 2).map((c) => `<span class="tag accent" title="${
    porRegra(c) ? 'entrou pela regra da campanha' : 'vinculado à mão'}">${
    porRegra(c) ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>' : ''
  }${esc(c)}</span>`).join(' ');
  const resto = lista.length - 2;
  return vis + (resto > 0
    ? ` <span class="tag" title="${esc(lista.slice(2).join(', '))}">+${resto}</span>` : '');
}

/** Quantos contatos sobram se este valor for aplicado, mantendo os outros filtros. */
function contarCom(chave, valor) {
  const f = { ...estado.filtros, [chave]: valor };
  return LEADS.filter((l) =>
    (!f.dias || l.dias >= f.dias)
    && (!f.canal || l.canal === f.canal)
    && (!f.situacao || l.situacao === f.situacao)
    && (!f.campanha || l.campanhas.includes(f.campanha))).length;
}

/** Os botões de campanha nascem da lista de campanhas, não são fixos no HTML.
    O botão da campanha escolhida volta marcado: o filtro segue valendo depois de
    repintar, e sem a marca a lista aparecia curta sem nada explicando por quê. */
function pintarFiltrosCampanha() {
  const alvo = $('#filtrosCampanha');
  const usadas = CAMPANHAS.filter((c) => LEADS.some((l) => l.campanhas.includes(c.nome)));
  if (estado.filtros.campanha && !usadas.some((c) => c.nome === estado.filtros.campanha)) {
    estado.filtros.campanha = null; // a campanha ficou sem ninguém: o filtro não tem mais o que filtrar
  }
  alvo.innerHTML = usadas.map((c) =>
    `<button class="filtro${c.nome === estado.filtros.campanha ? ' on' : ''}"
       data-f="campanha" data-v="${esc(c.nome)}" data-rotulo="${esc(c.nome)}">${esc(c.nome)}</button>`).join('')
    || '<button class="filtro" disabled>nenhuma vinculada</button>';
  ligarFiltros();
}

/* O rótulo sai de data-rotulo, não do texto já pintado. Lendo do texto, um nome
   terminado em número ("Black Friday 2026") perdia o número junto com o contador. */
function pintarContadores() {
  $$('.filtro[data-f]').forEach((b) => {
    const { f, v } = b.dataset;
    if (!b.dataset.rotulo) b.dataset.rotulo = b.textContent.trim();
    const valor = f === 'dias' ? Number(v) : v;
    b.innerHTML = `${esc(b.dataset.rotulo)}<span class="n">${contarCom(f, valor)}</span>`;
  });
}

function pintarLeads() {
  const lista = leadsFiltrados();

  $('#kpiTotal').textContent = LEADS.length.toLocaleString('pt-BR');
  $('#kpiSem').textContent = LEADS.filter((l) => l.dias >= 15).length;
  $('#kpiCamp').textContent = LEADS.filter((l) => l.campanhas.length).length;

  $('#tbLeads').innerHTML = lista.length ? lista.map((l) => `
    <tr class="${estado.selecionados.has(l.id) ? 'sel' : ''}">
      <td><input type="checkbox" data-lead="${l.id}" ${estado.selecionados.has(l.id) ? 'checked' : ''}></td>
      <td><div style="font-weight:600">${l.nome}</div><div class="mono">${l.tel}</div></td>
      <td class="esconde-mob"><span class="tag">${l.canal}</span></td>
      <td class="esconde-mob"><span class="tag ${l.situacao === 'cliente' ? 'ok' : ''}">${l.situacao === 'cliente' ? 'cliente' : 'lead'}</span></td>
      <td>${l.dias === 0 ? 'hoje' : l.dias === 1 ? 'ontem' : `há ${l.dias} dias`}</td>
      <td>${etiquetasCampanha(l.campanhas)}</td>
    </tr>`).join('') : '<tr><td colspan="6" class="vazio">Nenhum paciente com esses filtros.</td></tr>';

  $$('[data-lead]').forEach((c) => c.onchange = () => {
    const id = Number(c.dataset.lead);
    c.checked ? estado.selecionados.add(id) : estado.selecionados.delete(id);
    pintarLeads();
  });

  const n = estado.selecionados.size;
  $('#contaSel').textContent = n ? `${n} selecionado(s)` : 'nenhum selecionado';
  $('#contaSel').className = n ? 'tag accent' : 'tag';
  $('#btnDisparar').disabled = !n;
  $('#btnVincular').disabled = !n;
  $('#selTodos').checked = n > 0 && lista.every((l) => estado.selecionados.has(l.id));
  $('#contaFiltro').textContent = `${lista.length} de ${LEADS.length} contatos`;
  pintarContadores();
}

function ligarFiltros() {
  $$('.filtro[data-f]').forEach((b) => b.onclick = () => {
    const { f, v } = b.dataset;
    if (f === 'dias') {
      estado.filtros.dias = Number(v);
      $$('[data-f="dias"]').forEach((x) => x.classList.toggle('on', x === b));
    } else {
      const atual = estado.filtros[f];
      estado.filtros[f] = atual === v ? null : v;
      $$(`[data-f="${f}"]`).forEach((x) => x.classList.toggle('on', x.dataset.v === estado.filtros[f]));
    }
    estado.selecionados.clear();
    pintarLeads();
  });
}
ligarFiltros();

$('#selTodos').onchange = (e) => {
  const lista = leadsFiltrados();
  estado.selecionados.clear();
  if (e.target.checked) lista.forEach((l) => estado.selecionados.add(l.id));
  pintarLeads();
};

$('#btnCsv').onclick = () => abrir('#modalCsv');

$('#btnDisparar').onclick = () => {
  $('#dispQtd').textContent = estado.selecionados.size;
  abrir('#modalDisparo');
};

$('#btnConfDisparo').onclick = () => {
  const n = estado.selecionados.size;
  LEADS.forEach((l) => { if (estado.selecionados.has(l.id)) l.dias = 0; });
  estado.selecionados.clear();
  fechar($('#modalDisparo'));
  pintarLeads();
  aviso(`${n} mensagem(ns) na fila de envio.`);
};

/* Só campanha por lista aceita vínculo manual. Numa campanha por regra o vínculo
   seria desfeito na varredura seguinte, então oferecer a opção só enganaria. */
$('#btnVincular').onclick = () => {
  $('#vincQtd').textContent = estado.selecionados.size;
  const manuais = CAMPANHAS.filter((c) => c.entrada === 'lista');
  $('#vincCamp').innerHTML = manuais.length
    ? manuais.map((c) => `<option>${esc(c.nome)}</option>`).join('')
    : '<option value="" disabled selected>Nenhuma campanha por lista criada</option>';
  $('#btnConfVincular').disabled = !manuais.length;
  $('#vincNota').textContent = CAMPANHAS.filter((c) => c.entrada === 'regra')
    .map((c) => c.nome).join(', ');
  abrir('#modalVincular');
};

$('#btnConfVincular').onclick = () => {
  const camp = $('#vincCamp').value;
  let n = 0;
  LEADS.forEach((l) => {
    if (estado.selecionados.has(l.id) && !l.campanhas.includes(camp)) { l.campanhas.push(camp); n++; }
  });
  estado.selecionados.clear();
  fechar($('#modalVincular'));
  pintarLeads(); pintarCampanhas(); pintarFiltrosCampanha(); pintarLeads();
  aviso(`${n} paciente(s) vinculados a "${camp}".`);
};

// ─────────────────────────────────────────────────────────
// Respostas e conversa
// ─────────────────────────────────────────────────────────
function pintarRespostas() {
  $('#tbRespostas').innerHTML = RESPOSTAS.map((r, i) => `
    <tr style="cursor:pointer" data-conv="${i}">
      <td><div style="font-weight:600">${r.nome}</div><div class="mono">${r.tel}</div></td>
      <td><span class="tag ${r.base === 'cliente' ? 'ok' : ''}">${r.base}</span></td>
      <td class="esconde-mob"><span class="tag accent">${r.campanha}</span></td>
      <td style="max-width:320px;color:var(--texto2)">${r.ultima}</td>
      <td class="num mono">${r.quando}</td>
    </tr>`).join('');

  $$('[data-conv]').forEach((tr) => tr.onclick = () => {
    const r = RESPOSTAS[Number(tr.dataset.conv)];
    $('#convNome').textContent = r.nome;
    $('#convTel').textContent = r.tel;
    $('#convCorpo').innerHTML = r.msgs.map((m) => `
      <div class="bolha ${m.lado}">${m.txt.replace(/\n/g, '<br>')}<span class="hora">${m.hora}</span></div>`).join('');
    abrir('#modalConversa');
  });
}

// ─────────────────────────────────────────────────────────
// Campanhas
// ─────────────────────────────────────────────────────────
function pintarCampanhas() {
  $('#tbCampanhas').innerHTML = CAMPANHAS.map((c) => `
    <tr>
      <td style="font-weight:600">${esc(c.nome)}</td>
      <td class="esconde-mob"><span class="tag ${c.tipo === 'automatica' ? 'ok' : 'alerta'}">${c.tipo === 'automatica' ? 'automática' : 'pontual'}</span></td>
      <td>
        <div style="font-size:.85rem">${c.entrada === 'regra' ? esc(c.regra) : 'Vinculado à mão, no painel'}</div>
        <div style="font-size:.78rem;color:var(--texto3);margin-top:2px">${c.quando}</div>
      </td>
      <td class="num">${vinculados(c.nome)}</td>
    </tr>`).join('');
}

/* A campanha por regra é sempre automática, e a pontual nunca tem regra: uma sai
   na data marcada, a outra na data de cada paciente. Deixar os dois campos soltos
   permitia criar "pontual que roda todo aniversário", que não existe. */
function sincronizarTipoRegra(origem) {
  const temRegra = !!$('#cRegra').value;
  if (origem === 'regra') $('#cTipo').value = temRegra ? 'automatica' : $('#cTipo').value;
  if (origem === 'tipo' && $('#cTipo').value === 'pontual') $('#cRegra').value = '';
  $('#cData').closest('div').hidden = !!$('#cRegra').value;
}
$('#cRegra').onchange = () => sincronizarTipoRegra('regra');
$('#cTipo').onchange = () => sincronizarTipoRegra('tipo');

$('#btnNovaCamp').onclick = () => {
  $('#cNome').value = ''; $('#cMsg').value = ''; $('#cData').value = '';
  $('#cTipo').value = 'automatica'; $('#cRegra').value = '';
  sincronizarTipoRegra('regra');
  abrir('#modalCamp');
};

$('#btnSalvarCamp').onclick = () => {
  const nome = $('#cNome').value.trim();
  if (!nome) return aviso('Dê um nome à campanha antes de criar.');
  if (CAMPANHAS.some((c) => c.nome.toLowerCase() === nome.toLowerCase())) {
    return aviso(`Já existe uma campanha chamada "${nome}".`);
  }
  const regra = $('#cRegra').value;
  const camp = {
    nome,
    tipo: regra ? 'automatica' : $('#cTipo').value,
    entrada: regra ? 'regra' : 'lista',
    regra: regra || null,
    quando: regra ? 'na varredura diária'
      : $('#cData').value ? $('#cData').value.split('-').reverse().join('/') : 'sem data',
  };
  CAMPANHAS.push(camp);

  /* Campanha por regra não espera ninguém vincular: a varredura roda agora. */
  const entraram = camp.entrada === 'regra' ? varrerRegra(camp) : 0;
  fechar($('#modalCamp'));
  pintarCampanhas(); pintarFiltrosCampanha(); pintarLeads();
  aviso(camp.entrada !== 'regra'
    ? `Campanha "${nome}" criada. Agora vincule os pacientes pelo painel.`
    : entraram
      ? `Campanha "${nome}" criada. A varredura já entrou com ${entraram} paciente(s).`
      : `Campanha "${nome}" criada. Ninguém na base bate o critério hoje — a varredura de amanhã tenta de novo.`);
};

// ─────────────────────────────────────────────────────────
// Estoque
// ─────────────────────────────────────────────────────────
/** Vence dentro de 90 dias contados de HOJE, a data em que a demonstração roda. */
function venceEm90(val) {
  if (!val) return false;
  const d = diasDesde(val); // negativo enquanto a validade está no futuro
  return d >= -90 && d <= 0;
}

function pintarEstoque() {
  const pecas = ESTOQUE.reduce((t, i) => t + i.saldo, 0);
  const valor = ESTOQUE.reduce((t, i) => t + i.saldo * i.custo, 0);
  $('#kpiPecas').textContent = pecas;
  $('#kpiValor').textContent = dinheiro(valor);
  $('#kpiMin').textContent = ESTOQUE.filter((i) => i.saldo <= i.min).length;
  /* Contado do catálogo. Fixo em 20, o número não batia com a coluna Situação. */
  $('#kpiVal').textContent = ESTOQUE.filter((i) => venceEm90(i.val))
    .reduce((t, i) => t + i.saldo, 0);
  $('#contaModelos').textContent = `${ESTOQUE.length} modelos`;

  $('#tbEstoque').innerHTML = ESTOQUE.map((i) => {
    const baixo = i.saldo <= i.min;
    const vencendo = venceEm90(i.val);
    return `<tr>
      <td><div style="font-weight:600">${i.nome}</div><div class="mono">${i.sku}</div></td>
      <td class="esconde-mob"><span class="tag">${i.tipo}</span></td>
      <td class="num" style="font-weight:600">${i.saldo}</td>
      <td class="num esconde-mob">${dinheiro(i.custo)}</td>
      <td class="num esconde-mob mono">${i.val || '—'}</td>
      <td class="num"><span class="tag ${baixo ? 'accent' : vencendo ? 'alerta' : 'ok'}">${baixo ? 'repor' : vencendo ? 'validade' : 'ok'}</span></td>
    </tr>`;
  }).join('');

  $('#tbAtend').innerHTML = ATENDIMENTOS.map((a, i) => `
    <tr style="cursor:pointer" data-at="${i}">
      <td class="mono">${a.data}<span style="color:var(--texto3)"> · ${a.hora}</span></td>
      <td style="font-weight:600">${a.paciente}</td>
      <td class="esconde-mob">${a.resp}</td>
      <td class="num">${pecasAtend(a)}</td>
      <td class="num" style="font-weight:600">${dinheiro(totalAtend(a))}</td>
    </tr>`).join('');

  $$('[data-at]').forEach((tr) => tr.onclick = () => {
    const a = ATENDIMENTOS[Number(tr.dataset.at)];
    $('#atNome').textContent = a.paciente;
    $('#atData').textContent = `${a.data} · ${a.resp}`;
    $('#atItens').innerHTML = a.itens.map((i) => `
      <div style="display:flex;gap:12px;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--linha2)">
        <div style="flex:1;min-width:0">
          <div style="font-weight:500;font-size:.88rem">${i.peca}</div>
          <div class="mono">${i.cod}${i.hora && i.hora !== '—' ? ' · ' + i.hora : ''}</div>
        </div>
        <div class="num" style="white-space:nowrap;color:var(--texto2)">${i.qtd} × ${dinheiro(i.custo)}</div>
      </div>`).join('');
    $('#atTotal').textContent = dinheiro(totalAtend(a));
    abrir('#modalAtend');
  });
}

/** Atendimento de hoje daquele paciente — é o que o card em aberto representa. */
function atendimentoDe(paciente) {
  return ATENDIMENTOS.find((a) => a.paciente === paciente && a.data === '01/09/2026');
}

function gastoAberto(paciente) {
  const a = atendimentoDe(paciente);
  return a ? `${pecasAtend(a)} peça(s), ${dinheiro(totalAtend(a))}` : 'nada registrado ainda';
}

function verAberto(paciente) {
  const at = atendimentoDe(paciente);
  if (!at) return aviso('Nada registrado neste atendimento ainda.');
  $('#atNome').textContent = at.paciente;
  $('#atData').textContent = `em aberto · iniciado ${at.hora} · ${at.resp}`;
  $('#atItens').innerHTML = at.itens.map((it) => `
    <div style="display:flex;gap:12px;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--linha2)">
      <div style="flex:1;min-width:0">
        <div style="font-weight:500;font-size:.88rem">${it.peca}</div>
        <div class="mono">${it.cod}${it.hora && it.hora !== '—' ? ' · ' + it.hora : ''}</div>
      </div>
      <div class="num" style="white-space:nowrap;color:var(--texto2)">${it.qtd} × ${dinheiro(it.custo)}</div>
    </div>`).join('');
  $('#atTotal').textContent = dinheiro(totalAtend(at));
  abrir('#modalAtend');
}

/* Um card por cadeira. Com mais de uma aberta o bipe deixa de vir preenchido,
   e o aviso abaixo existe para que isso não pareça defeito na hora de usar. */
function pintarAberto() {
  const lista = estado.abertos;
  $('#avisoAberto').innerHTML = lista.map((a, i) => `
    <div class="aberto">
      <span class="pulso"></span>
      <button class="aberto-ver" data-ver="${i}">
        <div style="font-weight:600;font-size:.88rem">Atendimento em aberto · ${a.paciente}</div>
        <div style="font-size:.79rem;color:var(--texto2)">Iniciado há ${a.min} min · ${gastoAberto(a.paciente)} · fecha sozinho em 3 h</div>
        <div class="aberto-dica">Ver o que já foi usado e o horário de cada peça</div>
      </button>
      <button class="b b2" data-encerra="${i}">Encerrar agora</button>
    </div>`).join('') + (lista.length > 1 ? `
    <div class="aberto-nota">
      ${lista.length} atendimentos ao mesmo tempo. Ao bipar, o paciente não vem preenchido —
      escolher errado joga a peça na conta do outro.
    </div>` : '');

  $$('[data-ver]').forEach((b) => b.onclick = () => verAberto(lista[Number(b.dataset.ver)].paciente));
  $$('[data-encerra]').forEach((b) => b.onclick = () => {
    const [a] = estado.abertos.splice(Number(b.dataset.encerra), 1);
    pintarAberto();
    aviso(`Atendimento de ${a.paciente} encerrado.`);
  });
}

/* Etiqueta que o leitor não reconhece tem de dizer isso. Antes qualquer texto caía
   no primeiro item do catálogo, e na demonstração parecia que o sistema adivinhava. */
function bipar(codigo) {
  const lido = String(codigo || '').trim().toUpperCase();
  if (!lido) return aviso('Bipe a etiqueta ou digite o código da peça.');
  const sku = lido.split('/')[0];
  const item = ESTOQUE.find((i) => i.sku === sku);
  if (!item) return aviso(`Código "${lido}" não está no catálogo. Confira a etiqueta.`);
  if (item.saldo <= 0) return aviso(`${item.nome} está com saldo zero. Reponha antes de dar baixa.`);
  estado.bipeAtual = { item, codigo: lido };

  $('#bipeNome').textContent = item.nome;
  $('#bipeCod').textContent = lido;
  /* O teto é o saldo: baixar mais peça do que existe gerava custo irreal na conta. */
  $('#bipeQtd').max = item.saldo;
  $('#bipeQtd').value = 1;
  $('#bipeSaldo').textContent = `${item.saldo} em estoque`;

  /* Com duas cadeiras abertas, pré-preencher é pior que não preencher: a auxiliar
     confirma no automático e a peça entra na conta do paciente errado, sem sinal
     nenhum na tela. Por isso o nome só vem pronto quando não há ambiguidade. */
  const abertos = estado.abertos.map((a) => a.paciente);
  const escolher = abertos.length > 1;
  const marcado = escolher ? null : (abertos[0] || estado.ultimoPaciente);
  const opcao = (n) => `<option ${n === marcado ? 'selected' : ''}>${n}</option>`;
  const outros = LEADS.map((l) => l.nome).filter((n) => !abertos.includes(n));

  $('#bipePaciente').innerHTML =
    (escolher ? '<option value="" selected disabled>Escolha o paciente</option>' : '')
    + (abertos.length ? `<optgroup label="Em atendimento agora">${abertos.map(opcao).join('')}</optgroup>` : '')
    + `<optgroup label="Outros da base">${outros.map(opcao).join('')}</optgroup>`;

  $('#bipeDica').textContent = escolher
    ? `${abertos.length} atendimentos em aberto, então o nome não vem preenchido. Confira a cadeira antes de registrar.`
    : abertos.length
      ? 'Paciente preenchido a partir do atendimento em aberto. O próximo bip repete este nome.'
      : marcado
        ? `Sem atendimento em aberto: veio o último paciente registrado (${marcado}). Confira antes de salvar.`
        : 'O próximo item bipado já vem com este paciente preenchido.';

  abrir('#modalBipe');
}

$('#btnBipe').onclick = () => bipar($('#campoBipe').value);
$('#campoBipe').onkeydown = (e) => { if (e.key === 'Enter') { bipar(e.target.value); e.target.value = ''; } };

$('#btnConfBipe').onclick = () => {
  const { item, codigo } = estado.bipeAtual;
  const pedida = Math.max(1, Math.floor(Number($('#bipeQtd').value) || 1));
  const qtd = Math.min(pedida, item.saldo);
  const paciente = $('#bipePaciente').value;
  if (!paciente) return aviso('Escolha o paciente antes de registrar.');
  if (pedida > item.saldo) {
    return aviso(`Só há ${item.saldo} de ${item.nome} em estoque. Ajuste a quantidade.`);
  }

  item.saldo = Math.max(0, item.saldo - qtd);
  estado.ultimoPaciente = paciente;
  if (!estado.abertos.some((a) => a.paciente === paciente)) estado.abertos.push({ paciente, min: 0 });
  const hoje = '01/09/2026';
  let at = ATENDIMENTOS.find((a) => a.paciente === paciente && a.data === hoje);
  if (!at) { at = { data: hoje, hora: 'agora', paciente, resp: 'Marcela Andrade', itens: [] }; ATENDIMENTOS.unshift(at); }
  const agora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  at.itens.push({ peca: item.nome, cod: codigo, qtd, custo: item.custo, hora: agora });

  fechar($('#modalBipe'));
  $('#campoBipe').value = '';
  pintarEstoque(); pintarClientes(); pintarAberto();
  aviso(`${qtd} × ${item.nome} registrado para ${paciente}.`);
};

// ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────
// Clientes: um por linha, com o histórico dentro do modal
// ─────────────────────────────────────────────────────────
const estadoCli = { busca: '', semVirHa: 0 };

/** Dias desde a última visita, a partir da data no formato dd/mm/aaaa. */
function diasDesde(dataBr) {
  const [d, m, a] = dataBr.split('/').map(Number);
  return Math.round((new Date(2026, 8, 1) - new Date(a, m - 1, d)) / 86400000);
}

function clientes() {
  const mapa = new Map();
  for (const a of ATENDIMENTOS) {
    if (!mapa.has(a.paciente)) mapa.set(a.paciente, { nome: a.paciente, atendimentos: [], total: 0 });
    const c = mapa.get(a.paciente);
    c.atendimentos.push(a);
    c.total += totalAtend(a);
  }
  for (const c of mapa.values()) {
    const l = LEADS.find((x) => x.nome === c.nome);
    c.tel = l ? l.tel : '—';
    c.ultima = c.atendimentos[0];
    c.dias = diasDesde(c.ultima.data);
  }
  return [...mapa.values()]
    .filter((c) => c.nome.toLowerCase().includes(estadoCli.busca.toLowerCase()))
    .filter((c) => !estadoCli.semVirHa || c.dias >= estadoCli.semVirHa)
    .sort((a, b) => b.total - a.total);
}

function pintarClientes() {
  const lista = clientes();
  $('#contaClientes').textContent = `${lista.length} cliente(s)`;
  $('#tbClientes').innerHTML = lista.length ? lista.map((c) => `
    <tr style="cursor:pointer" data-cli="${c.nome}">
      <td style="font-weight:600">${c.nome}</td>
      <td class="esconde-mob mono">${c.tel}</td>
      <td>${c.ultima.data}<span style="color:var(--texto3)"> · ${c.ultima.hora}</span></td>
      <td class="num">${c.atendimentos.length}</td>
      <td class="num" style="font-weight:600">${dinheiro(c.total)}</td>
    </tr>`).join('') : '<tr><td colspan="5" class="vazio">Nenhum cliente encontrado.</td></tr>';

  $$('[data-cli]').forEach((tr) => tr.onclick = () => abrirCliente(tr.dataset.cli));
}

function abrirCliente(nome) {
  const c = clientes().find((x) => x.nome === nome) || { nome, atendimentos: [], total: 0 };
  $('#clNome').textContent = c.nome;
  $('#clSub').textContent = `${c.atendimentos.length} atendimento(s) · ${dinheiro(c.total)} em material`;
  $('#voltarCliente').hidden = true;
  $('#clCorpo').innerHTML = c.atendimentos.map((a, i) => `
    <div data-ida="${i}" style="cursor:pointer;display:flex;gap:12px;align-items:baseline;padding:11px 0;border-bottom:1px solid var(--linha2)">
      <div style="flex:1">
        <div style="font-weight:500;font-size:.9rem">${a.data} · ${a.hora}</div>
        <div class="mono">${pecasAtend(a)} peça(s) · ${a.resp}</div>
      </div>
      <div class="num" style="font-weight:600;white-space:nowrap">${dinheiro(totalAtend(a))}</div>
    </div>`).join('') || '<div class="vazio">Sem atendimento registrado.</div>';

  $$('#clCorpo [data-ida]').forEach((el) => el.onclick = () => {
    const a = c.atendimentos[Number(el.dataset.ida)];
    $('#clSub').textContent = `${a.data} · ${a.hora} · ${a.resp}`;
    $('#voltarCliente').hidden = false;
    $('#clCorpo').innerHTML = a.itens.map((i) => `
      <div style="display:flex;gap:12px;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--linha2)">
        <div style="flex:1;min-width:0">
          <div style="font-weight:500;font-size:.88rem">${i.peca}</div>
          <div class="mono">${i.cod}</div>
        </div>
        <div class="num" style="white-space:nowrap;color:var(--texto2)">${i.qtd} × ${dinheiro(i.custo)}</div>
      </div>`).join('')
      + `<div style="display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--linha);margin-top:13px;padding-top:12px">
           <span style="font-weight:600">Custo do atendimento</span>
           <strong style="font-size:1.1rem;color:var(--accent)">${dinheiro(totalAtend(a))}</strong>
         </div>`;
  });

  abrir('#modalCliente');
}

$('#voltarCliente').onclick = () => abrirCliente($('#clNome').textContent);
$('#buscaCliente').oninput = (e) => { estadoCli.busca = e.target.value; pintarClientes(); };
$$('[data-fc]').forEach((b) => b.onclick = () => {
  estadoCli.semVirHa = b.dataset.fc === 'todos' ? 0 : Number(b.dataset.fc);
  $$('[data-fc]').forEach((x) => x.classList.toggle('on', x === b));
  pintarClientes();
});

/* Empilhados numa pilha própria: soltos na tela, dois avisos seguidos caíam um
   em cima do outro e só o último ficava legível. */
function aviso(texto) {
  let pilha = $('#avisos');
  if (!pilha) {
    pilha = document.createElement('div');
    pilha.id = 'avisos';
    document.body.appendChild(pilha);
  }
  const el = document.createElement('div');
  el.className = 'aviso-toast';
  el.textContent = texto;
  pilha.appendChild(el);
  /* No celular, mais de três empilhados tapariam a tela inteira. */
  while (pilha.children.length > 3) pilha.firstElementChild.remove();
  setTimeout(() => el.remove(), 3800);
}

/* O cliente vai apertar tudo — disparar para a base inteira, zerar saldo, criar
   campanha. Sem esta saída ele fica com a demonstração gasta e sem saber voltar. */
const INICIAL = JSON.stringify({ LEADS, CAMPANHAS, ESTOQUE, ATENDIMENTOS, abertos: estado.abertos });
$('#btnReset').onclick = () => {
  const base = JSON.parse(INICIAL);
  LEADS.length = 0; LEADS.push(...base.LEADS);
  CAMPANHAS.length = 0; CAMPANHAS.push(...base.CAMPANHAS);
  ESTOQUE.length = 0; ESTOQUE.push(...base.ESTOQUE);
  ATENDIMENTOS.length = 0; ATENDIMENTOS.push(...base.ATENDIMENTOS);
  estado.filtros = { dias: 0, canal: null, situacao: null, campanha: null };
  estado.selecionados.clear();
  estado.abertos = base.abertos;
  estado.ultimoPaciente = 'Simone Prado';
  estadoCli.busca = ''; estadoCli.semVirHa = 0;
  $('#buscaCliente').value = '';
  $$('.filtro[data-f]').forEach((b) => b.classList.toggle('on', b.dataset.f === 'dias' && b.dataset.v === '0'));
  $$('[data-fc]').forEach((b) => b.classList.toggle('on', b.dataset.fc === 'todos'));
  pintarTudo();
  aviso('Demonstração reiniciada com os dados de exemplo.');
};

function pintarTudo() {
  pintarFiltrosCampanha();
  pintarLeads();
  pintarRespostas();
  pintarCampanhas();
  pintarEstoque();
  pintarClientes();
  pintarAberto();
}
pintarTudo();
