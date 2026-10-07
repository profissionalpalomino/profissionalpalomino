/* Venda do Deco: pequenos detalhes. Sem dependências. */
(function () {
  document.documentElement.classList.add('js');

  // Marca o dia de hoje no horário (fuso de Brasília, que é onde a casa fica).
  try {
    var dia = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })).getDay();
    var li = document.querySelector('#horas li[data-d="' + dia + '"]');
    if (li) li.classList.add('hoje');
  } catch (e) { /* sem destaque, sem problema */ }

  // Entrada suave das seções ao rolar.
  var alvos = document.querySelectorAll('.secao h2, .historia-texto, .relicario, .velharias, .citacao, .tradicao, .destaque, .itens li, .folha, .cardapio .btn, .galeria li, .cartas li, .chegar-info, .mapa');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vista'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    alvos.forEach(function (el) { el.classList.add('revela'); io.observe(el); });
  }

  // Foto ampliada.
  var luz = document.getElementById('luz');
  if (luz && luz.showModal) {
    var img = luz.querySelector('img'), leg = luz.querySelector('.luz-leg');
    document.querySelectorAll('.galeria button').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.querySelector('img');
        img.src = f.currentSrc || f.src; img.alt = f.alt;
        leg.textContent = f.alt + ' (foto de ' + (b.dataset.credito || 'cliente') + ', no Google Maps)';
        luz.showModal();
      });
    });
    luz.addEventListener('click', function (e) { if (e.target === luz) luz.close(); });
  }

  // Preservação de parâmetro de referência (?ref= / ?lead=) nos links de WhatsApp
  try {
    var p = new URLSearchParams(window.location.search);
    var ref = p.get('ref') || p.get('lead') || '';
    if (ref) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(function(a) {
        var u = new URL(a.href);
        var t = u.searchParams.get('text') || '';
        if (t && t.indexOf('Ref:') === -1) {
          u.searchParams.set('text', t + ' (Ref: ' + ref + ')');
          a.href = u.toString();
        }
      });
    }
  } catch(e) {}
})();
