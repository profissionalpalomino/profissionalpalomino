import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowDown, 
  Check, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  Stethoscope, 
  Scissors, 
  UtensilsCrossed 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";
const AGENDA_URL = "https://calendar.app.google/RpTN49BD3jJabEB79";

type SegmentId = "clinica" | "barbearia" | "restaurante";

interface SegmentData {
  id: SegmentId;
  label: string;
  icon: typeof Stethoscope;
  empresa: string;
  subtitulo: string;
  bannerImg: string;
  avatarImg: string;
  statusBadge: string;
  statusClass: string;
  faturamento: string;
  faturamentoSub: string;
  metrica2Label: string;
  metrica2Valor: string;
  metrica2Sub: string;
  atendimentos: Array<{
    hora: string;
    nome: string;
    detalhe: string;
    img: string;
    badge: string;
    badgeClass: string;
  }>;
  alertaTitulo: string;
  alertaTexto: string;
}

const SEGMENTOS: Record<SegmentId, SegmentData> = {
  clinica: {
    id: "clinica",
    label: "Clínicas",
    icon: Stethoscope,
    empresa: "Clínica Serena · Estética Avançada",
    subtitulo: "Dra. Marina Costa · CRM 48.912",
    bannerImg: "/demos/serena/images/pele.webp",
    avatarImg: "/demos/serena/images/profissional.webp",
    statusBadge: "9 atendimentos",
    statusClass: "text-[var(--pal-success)] bg-[var(--pal-success-tint)] border border-[#1E7A3B]/20",
    faturamento: "R$ 3.850,00",
    faturamentoSub: "▲ +24% em procedimentos",
    metrica2Label: "Retornos no WhatsApp",
    metrica2Valor: "100% ativos",
    metrica2Sub: "Lembrete automático 6 meses",
    atendimentos: [
      {
        hora: "09:30",
        nome: "Mariana Silva",
        detalhe: "Toxina Botulínica (Botox Facial)",
        img: "/demos/serena/images/botox.webp",
        badge: "Confirmou WhatsApp",
        badgeClass: "text-[var(--pal-success)] bg-[var(--pal-success-tint)]",
      },
      {
        hora: "11:00",
        nome: "Beatriz Vasconcelos",
        detalhe: "Bioestimulador de Colágeno",
        img: "/demos/serena/images/bioestimulador.webp",
        badge: "Ficha Digital OK",
        badgeClass: "text-[var(--pal-warning)] bg-[var(--pal-warning-tint)]",
      },
      {
        hora: "14:30",
        nome: "Camila Rocha",
        detalhe: "Harmonização Facial & Retoque",
        img: "/demos/serena/images/harmonizacao.webp",
        badge: "Lembrete Enviado",
        badgeClass: "text-muted-foreground bg-secondary",
      },
    ],
    alertaTitulo: "Recall Preventivo:",
    alertaTexto: "4 pacientes de Botox receberam aviso automático de retoque de 6 meses hoje.",
  },
  barbearia: {
    id: "barbearia",
    label: "Barbearias",
    icon: Scissors,
    empresa: "Vanguard Barber Studio",
    subtitulo: "Estúdio Premium · 4 Cadeiras",
    bannerImg: "/demos/barbearia/images/lounge.webp",
    avatarImg: "/demos/barbearia/images/barba.webp",
    statusBadge: "8 agendamentos",
    statusClass: "text-[var(--pal-warning)] bg-[var(--pal-warning-tint)] border border-[#8A5300]/20",
    faturamento: "R$ 560,00",
    faturamentoSub: "▲ +18% vs semana passada",
    metrica2Label: "Repasses da Equipe",
    metrica2Valor: "R$ 224,00",
    metrica2Sub: "Cálculo automático 40%",
    atendimentos: [
      {
        hora: "10:00",
        nome: "Carlos Eduardo",
        detalhe: "Corte Fade + Barboterapia",
        img: "/demos/barbearia/images/fade.webp",
        badge: "WhatsApp OK",
        badgeClass: "text-[var(--pal-success)] bg-[var(--pal-success-tint)]",
      },
      {
        hora: "11:00",
        nome: "Lucas Almeida",
        detalhe: "Barba Alinhada na Toalha Quente",
        img: "/demos/barbearia/images/barba.webp",
        badge: "Agendou no Link",
        badgeClass: "text-[var(--pal-warning)] bg-[var(--pal-warning-tint)]",
      },
      {
        hora: "14:00",
        nome: "Matheus Rocha",
        detalhe: "Pomada Modeladora & Finalização",
        img: "/demos/barbearia/images/produtos.webp",
        badge: "Lembrete Enviado",
        badgeClass: "text-muted-foreground bg-secondary",
      },
    ],
    alertaTitulo: "Atendimento 24h:",
    alertaTexto: "3 clientes agendaram esta madrugada enquanto a barbearia estava fechada.",
  },
  restaurante: {
    id: "restaurante",
    label: "Restaurantes",
    icon: UtensilsCrossed,
    empresa: "Venda do Deco · Bar & Cozinha",
    subtitulo: "Tradição desde 1996 · Salão & Balcão",
    bannerImg: "/demos/venda-do-deco/img/salao-balcao.webp",
    avatarImg: "/demos/venda-do-deco/img/porcao.webp",
    statusBadge: "Mesas ativas",
    statusClass: "text-foreground bg-secondary border border-[#C42B13]/20",
    faturamento: "R$ 2.480,00",
    faturamentoSub: "▲ Pix sem comissão de app",
    metrica2Label: "Contas & Boletos",
    metrica2Valor: "R$ 0 em atraso",
    metrica2Sub: "Aviso matinal no WhatsApp",
    atendimentos: [
      {
        hora: "12:15",
        nome: "Mesa 08 · Almoço Executivo",
        detalhe: "Porção de Torresmo & Prato Feito",
        img: "/demos/venda-do-deco/img/porcao.webp",
        badge: "Comanda Aberta",
        badgeClass: "text-[var(--pal-success)] bg-[var(--pal-success-tint)]",
      },
      {
        hora: "13:30",
        nome: "Balcão · Chopp & Bebidas",
        detalhe: "Conta encerrada via QR Code Pix",
        img: "/demos/venda-do-deco/img/cerveja.webp",
        badge: "Pago no Pix",
        badgeClass: "text-[var(--pal-warning)] bg-[var(--pal-warning-tint)]",
      },
      {
        hora: "14:45",
        nome: "Reserva de Mesa · WhatsApp",
        detalhe: "Aniversário 10 pessoas (Sexta)",
        img: "/demos/venda-do-deco/img/salao-mesas.webp",
        badge: "Confirmado",
        badgeClass: "text-muted-foreground bg-secondary",
      },
    ],
    alertaTitulo: "Zero planilhas:",
    alertaTexto: "Cardápio digital, controle de comandas e fechamento de caixa no automático.",
  },
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<SegmentId>("clinica");
  const current = SEGMENTOS[activeTab];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-background text-foreground">
      {/* Luz ambiente suave de profundidade */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-radial from-foreground/[0.05] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grade sutil e refinada */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(#1A1714 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-narrow relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Coluna Esquerda: Texto Direto, Aberto e Elegante */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-foreground font-mono text-[11px] font-semibold tracking-wide uppercase mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <span>Sistemas & Automações Sob Medida</span>
            </div>

            {/* Título Principal — Proporções altas, naturais e elegantes */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground leading-[1.16] tracking-[-0.03em] mb-6">
              Seu negócio organizado. <br />
              <span className="text-foreground">Menos tempo no WhatsApp</span> <br />
              e no papel.
            </h1>

            {/* Subtítulo Sem Jargões — Claro e multissetorial */}
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Desenvolvemos sistemas web, páginas rápidas e automações sob medida para clínicas, barbearias, restaurantes e comércios locais atenderem melhor, eliminarem planilhas e fecharem o caixa no automático.
            </p>

            {/* Três Diferenciais Concretos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full font-sans text-xs text-muted-foreground mb-8 pb-7 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[var(--pal-success-tint)] text-[var(--pal-success)] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-foreground">No ar em até 7 dias</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[var(--pal-success-tint)] text-[var(--pal-success)] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-foreground">Zero planilhas manuais</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[var(--pal-success-tint)] text-[var(--pal-success)] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-foreground">Suporte direto no WhatsApp</span>
              </div>
            </div>

            {/* Botões de Conversão */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-3">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-[var(--pal-primary-hover)] text-white font-sans font-bold text-sm px-6 py-6 rounded-full shadow-[0_4px_12px_-6px_rgba(20,20,20,0.35)] hover:shadow-[0_4px_12px_-6px_rgba(20,20,20,0.35)] transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Quero conversar sobre um sistema para a minha empresa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Conversar sobre meu projeto</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border bg-white hover:bg-secondary text-foreground font-sans font-semibold text-sm px-5 py-6 rounded-xl transition-colors shadow-2xs"
              >
                <a
                  href={AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4 text-foreground" />
                  <span>Agendar Demonstração</span>
                </a>
              </Button>
            </div>

            <a
              href="#projetos"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[var(--pal-text-faint)] hover:text-foreground transition-colors mt-2"
            >
              <span>ou veja demonstrações ao vivo abaixo</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Coluna Direita: Dashboard Multissetorial com Alma e Vida Real */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 w-full relative"
          >
            {/* Badge Flutuante Ativo em Tempo Real */}
            <div className="absolute -top-3.5 -right-2 sm:-right-3 z-20 bg-[#141414] text-white px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xl border border-white/10 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping shrink-0" />
              <div className="text-left">
                <p className="font-sans text-[11px] font-semibold leading-tight text-white">Novo Agendamento</p>
                <p className="font-mono text-[9px] text-[#A3A3A0]">há 2 min · via WhatsApp</p>
              </div>
            </div>

            {/* Janela de App com Barra Mac Minimalista */}
            <div className="bg-white rounded-2xl border border-border shadow-[0_20px_50px_rgba(20,20,20,0.08)] overflow-hidden">
              
              {/* Barra de Janela */}
              <div className="bg-background px-4 py-2.5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <span className="font-mono text-[11px] font-medium text-[var(--pal-text-faint)]">
                  painel.palominotech.com.br
                </span>
                <span className="w-8" />
              </div>

              {/* Seletor Rápido de Segmentos — 100% responsivo em 3 colunas, ZERO barra de rolagem */}
              <div className="bg-background p-1.5 border-b border-border">
                <div className="grid grid-cols-3 gap-1">
                  {(Object.keys(SEGMENTOS) as SegmentId[]).map((segId) => {
                    const seg = SEGMENTOS[segId];
                    const Icon = seg.icon;
                    const isActive = activeTab === segId;
                    return (
                      <button
                        key={segId}
                        type="button"
                        onClick={() => setActiveTab(segId)}
                        className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg font-sans text-xs font-semibold transition-all select-none ${
                          isActive
                            ? "bg-white text-foreground shadow-xs border border-border"
                            : "text-[var(--pal-text-faint)] hover:text-foreground hover:bg-white/60"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-foreground" : "text-[var(--pal-text-faint)]"}`} />
                        <span className="truncate">{seg.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Conteúdo Dinâmico por Segmento */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col"
                >
                  {/* Mini-Banner Fotográfico com Alma do Estabelecimento */}
                  <div className="relative h-20 w-full overflow-hidden bg-[#141414]">
                    <img 
                      src={current.bannerImg} 
                      alt={current.empresa} 
                      className="w-full h-full object-cover opacity-65"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img 
                          src={current.avatarImg} 
                          alt={current.empresa}
                          className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-md shrink-0" 
                        />
                        <div className="min-w-0 truncate text-white">
                          <p className="font-heading font-bold text-xs sm:text-sm leading-tight truncate text-white">{current.empresa}</p>
                          <p className="font-sans text-[10px] sm:text-[11px] text-white/80 truncate">{current.subtitulo}</p>
                        </div>
                      </div>
                      <span className={`font-mono text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${current.statusClass}`}>
                        {current.statusBadge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    {/* Métricas Diárias Dinâmicas */}
                    <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                      <div className="p-3 rounded-xl bg-background border border-border/80">
                        <span className="font-sans text-[11px] text-muted-foreground block mb-0.5">Faturamento do Dia</span>
                        <span className="font-mono text-base sm:text-lg font-bold text-foreground tracking-tight">
                          {current.faturamento}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--pal-success)] block mt-0.5 truncate">
                          {current.faturamentoSub}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-background border border-border/80">
                        <span className="font-sans text-[11px] text-muted-foreground block mb-0.5">{current.metrica2Label}</span>
                        <span className="font-mono text-base sm:text-lg font-bold text-foreground tracking-tight">
                          {current.metrica2Valor}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--pal-text-faint)] block mt-0.5 truncate">
                          {current.metrica2Sub}
                        </span>
                      </div>
                    </div>

                    {/* Lista de Atendimentos com Fotos dos Serviços */}
                    <div className="space-y-2 mb-3.5">
                      {current.atendimentos.map((atendimento, i) => (
                        <div 
                          key={i}
                          className="p-2.5 sm:p-3 rounded-xl bg-white border border-border flex items-center justify-between hover:border-[#1A1714]/20 transition-colors shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img 
                              src={atendimento.img} 
                              alt={atendimento.detalhe}
                              className="w-8 h-8 rounded-lg object-cover border border-border shrink-0" 
                            />
                            <div className="min-w-0 truncate">
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-[10px] font-bold text-foreground">{atendimento.hora}</span>
                                <span className="text-[#E4E4E1]">·</span>
                                <p className="font-sans text-xs font-semibold text-foreground truncate">{atendimento.nome}</p>
                              </div>
                              <p className="font-sans text-[11px] text-[var(--pal-text-faint)] truncate">{atendimento.detalhe}</p>
                            </div>
                          </div>
                          <span className={`font-mono text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded shrink-0 ml-2 ${atendimento.badgeClass}`}>
                            {atendimento.badge}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Micro Alerta de Valor Real */}
                    <div className="p-2.5 rounded-xl bg-background border border-border flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-secondary text-foreground flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <p className="font-sans text-[11px] text-muted-foreground leading-snug">
                        <strong className="text-foreground">{current.alertaTitulo} </strong>
                        {current.alertaTexto}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
