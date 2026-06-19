import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";

const tags = [
  "Sites e Landing Pages",
  "Aplicativos Web",
  "Bolão da Copa",
  "App de Festa",
  "Gerenciador de Figurinhas",
  "Automação de Instagram",
  "Alertas de Financeiro no WhatsApp",
  "Prospecção de Clientes Automática",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-24 pb-16 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-background" />
      <div className="absolute top-[-10%] right-[5%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[130px] animate-pulse" />
      <div className="absolute bottom-[10%] left-[2%] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container-narrow relative z-10 w-full px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-primary mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Palomino Tech — Belo Horizonte
          </motion.div>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl text-foreground mb-6">
            Da ideia{" "}
            <span className="text-gradient animate-text-gradient bg-[length:200%_auto] from-primary via-rose-400 to-primary">
              ao ar
            </span>{" "}
            em dias.
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-8">
            Fazemos sites, aplicativos e automações para pequenos negócios.
            Sem enrolação, sem jargão técnico, com preço justo.
            Olha o que já construímos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:brightness-110 text-sm font-bold px-8 py-6 rounded-xl shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(244,63,94,0.35)]"
            >
              <a href="#projetos">
                Ver o que já fizemos
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm font-bold px-8 py-6 rounded-xl border-border hover:border-primary/40"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Oi! Vi o portfólio da Palomino Tech e quero fazer um projeto.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
