// Sistema Oficial de Telemetria e Analytics em Tempo Real — Palomino Tech
// Conectado ao Dashboard do Site Finder (analytics.db)

const TRACK_ENDPOINT = 
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "https://site-finder.profissionalpalomino.cloud/api/analytics/track"
    : "https://site-finder.profissionalpalomino.cloud/api/analytics/track";

const SLUG = "palominotech";
const SITE_NAME = "Palomino Tech (Site Oficial)";

export function initTracker() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const urlRef = params.get("ref") || params.get("origem") || params.get("c") || "";
  const refKey = "pt_ref";
  const clientRef = urlRef || sessionStorage.getItem(refKey) || "";
  if (urlRef) sessionStorage.setItem(refKey, urlRef);

  const chave = SLUG + "_" + (clientRef || "direto");
  const sidKey = "pt_sid_" + chave;
  let sid = sessionStorage.getItem(sidKey);
  const visitKey = "pt_vc_" + chave;
  let visitas = parseInt(localStorage.getItem(visitKey) || "0", 10);
  const nova = !sid;

  if (nova) {
    sid = "s_" + Math.random().toString(36).slice(2, 11) + "_" + Date.now();
    sessionStorage.setItem(sidKey, sid);
    visitas++;
    try {
      localStorage.setItem(visitKey, String(visitas));
    } catch (e) {}
  }

  const device =
    window.innerWidth <= 768
      ? "mobile"
      : window.innerWidth <= 1024
      ? "tablet"
      : "desktop";

  let humano = false;
  let confirmadoEm = 0;
  const aoConfirmar: Array<() => void> = [];

  function confirmarHumano() {
    if (humano || navigator.webdriver) return;
    humano = true;
    confirmadoEm = Date.now();
    aoConfirmar.forEach((fn) => fn());
  }

  ["scroll", "wheel", "touchstart", "pointerdown", "keydown", "mousemove"].forEach(
    (t) => {
      window.addEventListener(t, confirmarHumano, { passive: true, capture: true });
    }
  );

  let ativo = 0;
  let ultimaAcao = Date.now();

  ["click", "touchstart", "mousemove", "scroll", "keydown"].forEach((t) => {
    window.addEventListener(
      t,
      () => {
        ultimaAcao = Date.now();
      },
      { passive: true }
    );
  });

  setInterval(() => {
    if (!document.hidden && Date.now() - ultimaAcao < 45000) {
      ativo++;
    }
  }, 1000);

  function enviar(tipo: string, nome?: string) {
    if (!humano) return;
    const corpo = JSON.stringify({
      sessionId: sid,
      slug: SLUG,
      leadName: clientRef ? `${SITE_NAME} (Ref: ${clientRef})` : SITE_NAME,
      eventType: tipo,
      eventName: nome || null,
      deviceType: device,
      visitNumber: visitas || 1,
      durationSec: ativo,
    });

    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([corpo], { type: "application/json" });
        navigator.sendBeacon(TRACK_ENDPOINT, blob);
      } else {
        fetch(TRACK_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: corpo,
          keepalive: true,
        }).catch(() => {});
      }
    } catch (e) {}
  }

  // Eventos ao confirmar interação humana
  aoConfirmar.push(() => {
    if (nova || !sessionStorage.getItem("pt_pv_" + chave)) {
      sessionStorage.setItem("pt_pv_" + chave, "1");
      enviar("pageview", visitas > 1 ? `acesso_${visitas}` : "primeiro_acesso");
    }
    // Confirma 5 segundos após abertura
    setTimeout(() => {
      if (!document.hidden) enviar("heartbeat");
    }, 5000);
  });

  // Rolagem por marcos percentuais
  const marcos: Record<number, boolean> = {};
  window.addEventListener(
    "scroll",
    () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) return;
      const pct = Math.min(100, Math.round((h.scrollTop / total) * 100));
      [25, 50, 75, 100].forEach((m) => {
        if (pct >= m && !marcos[m]) {
          marcos[m] = true;
          enviar("scroll", `scroll_${m}`);
        }
      });
    },
    { passive: true }
  );

  // Cliques automáticos em links e botões com tag
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const el = target.closest("a, button, summary");
    if (!el) return;

    const tag = el.getAttribute("data-track");
    const href = el.getAttribute("href") || "";

    if (tag) {
      enviar("click", tag);
    } else if (href.includes("wa.me")) {
      enviar("click", "whatsapp_outbound");
    } else if (href.includes("calendar.app.google")) {
      enviar("click", "calendar_outbound");
    } else if (href.includes("instagram.com")) {
      enviar("click", "instagram_outbound");
    }
  });

  // Heartbeat periódico a cada 20 segundos
  setInterval(() => {
    if (!document.hidden) enviar("heartbeat");
  }, 20000);

  // Registro ao fechar aba
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && Date.now() - confirmadoEm >= 4000) {
      enviar("heartbeat");
    }
  });

  // Exporta função global para disparo manual de cliques
  (window as unknown as { trackEvent: (type: string, name?: string) => void }).trackEvent = enviar;
}
