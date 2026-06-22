import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

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
            <span className="text-gradient animate-text-gradient bg-[length:200%_auto] from-primary via-[#F0584C] to-primary">
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
              className="bg-primary text-primary-foreground hover:brightness-110 text-sm font-bold px-8 py-6 rounded-xl shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(230,59,46,0.35)]"
            >
              <a
                href="https://calendar.app.google/RpTN49BD3jJabEB79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Reunião
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm font-bold px-8 py-6 rounded-xl border-border hover:border-primary/40 bg-secondary/50"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Oi! Vi o portfólio da Palomino Tech e quero fazer um projeto.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm font-bold px-8 py-6 rounded-xl border-border hover:border-primary/40 hover:bg-secondary/50"
            >
              <a href="#projetos">
                Ver projetos
                <ArrowDown className="ml-2 h-4 w-4" />
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
