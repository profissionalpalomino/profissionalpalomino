import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Clock, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";

const HeroSection = () => {
  const [hours, setHours] = useState(15);
  const [cost, setCost] = useState(50);

  // Math calculations
  const savedHoursPerYear = Math.round(hours * 0.8 * 52); // Assume 80% efficiency gains
  const annualSavings = savedHoursPerYear * cost;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-background pt-24 pb-16 lg:pt-32">
      {/* Dynamic gradient meshes and blurred background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-background" />
      <div className="absolute top-[-10%] right-[5%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[130px] animate-pulse" />
      <div className="absolute bottom-[10%] left-[2%] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container-narrow relative z-10 w-full px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Typographic Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-primary"
            >
              <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "3s" }} />
              <span>Sistemas & Automações de Alta Precisão</span>
            </motion.div>

            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl text-foreground">
              Seu negócio rodando em{" "}
              <span className="text-gradient animate-text-gradient bg-[length:200%_auto] from-primary via-rose-400 to-primary">
                piloto automático
              </span>.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground md:text-xl max-w-xl">
              Desenvolvemos softwares sob medida, integrações de APIs e robôs inteligentes que eliminam tarefas chatas, reduzem custos operacionais e aumentam seu faturamento 24/7.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:brightness-110 text-sm font-bold px-8 py-6 rounded-xl shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(244,63,94,0.35)]"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá! Fiz o cálculo no simulador e quero automatizar minha operação com a Palomino Tech.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garantir Minha Automação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Performance Metric badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-border"
            >
              {[
                { value: "100%", label: "Customizado" },
                { value: "+80%", label: "Eficiência" },
                { value: "Zero", label: "Downtime" },
              ].map((stat, i) => (
                <div key={i} className="text-left border-l-2 border-primary/30 pl-3">
                  <p className="font-heading text-xl sm:text-2xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive ROI Widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative group overflow-hidden rounded-[2rem] border border-border bg-white/90 backdrop-blur-xl p-6 sm:p-8 shadow-[var(--shadow-lg)]">
              {/* Outer pink border glow */}
              <div className="absolute inset-0 border border-primary/10 rounded-[2rem] pointer-events-none group-hover:border-primary/20 transition-colors" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-emerald-500 uppercase">Simulador de ROI Operacional</span>
                </div>
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                Economize tempo e dinheiro
              </h3>
              <p className="text-xs text-muted-foreground mb-8">
                Descubra o quanto sua empresa economiza ao delegar processos repetitivos para a IA e integrações automatizadas.
              </p>

              {/* Slider 1: Hours */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground flex items-center gap-1.5 font-medium">
                    <Clock className="h-3.5 w-3.5 text-primary" /> Horas gastas/semana em tarefas manuais
                  </span>
                  <span className="font-mono text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded">{hours}h</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Slider 2: Cost */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground flex items-center gap-1.5 font-medium">
                    <Landmark className="h-3.5 w-3.5 text-primary" /> Custo médio da hora de trabalho
                  </span>
                  <span className="font-mono text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded">R$ {cost}/h</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Outputs display */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border bg-secondary p-4 rounded-xl">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Horas recuperadas / ano</span>
                  <span className="font-mono font-bold text-xl sm:text-2xl text-emerald-600">
                    {savedHoursPerYear} hrs
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Recurso economizado / ano</span>
                  <span className="font-mono font-bold text-xl sm:text-2xl text-primary">
                    R$ {annualSavings.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="text-[10px] text-muted-foreground inline-block">
                  *Cálculo projeta eliminação de 80% das tarefas manuais usando n8n + IA.
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Elegant bottom section fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
