import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";
const AGENDA_URL = "https://calendar.app.google/RpTN49BD3jJabEB79";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 mx-auto px-4 ${
        scrolled 
          ? "top-3 max-w-5xl" 
          : "top-4 max-w-6xl"
      }`}
    >
      <div 
        className="w-full transition-all duration-300 rounded-full bg-white/95 dark:bg-[#181818]/95 backdrop-blur-md border border-border dark:border-[#2A2A2A] shadow-[0_2px_12px_rgba(20,20,20,0.06)] px-5 py-2.5 sm:px-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo Oficial Anexado */}
          <div 
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0" 
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/logo.svg"
              alt="Palomino Tech"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl shadow-xs object-cover transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <span className="font-heading text-xs sm:text-base font-bold tracking-[0.14em] uppercase text-foreground dark:text-[#F2F2F0] whitespace-nowrap">
              PALOMINO <span className="text-muted-foreground font-normal">TECH</span>
            </span>
          </div>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-muted-foreground dark:text-[#B4B4B0]">
            <button 
              onClick={() => scrollTo('servicos')} 
              className="hover:text-foreground dark:hover:text-[#F2F2F0] transition-colors"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollTo('processo')} 
              className="hover:text-foreground dark:hover:text-[#F2F2F0] transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollTo('projetos')} 
              className="hover:text-foreground dark:hover:text-[#F2F2F0] transition-colors"
            >
              Projetos & Demos
            </button>
            <button 
              onClick={() => scrollTo('depoimentos')} 
              className="hover:text-foreground dark:hover:text-[#F2F2F0] transition-colors"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollTo('duvidas')} 
              className="hover:text-foreground dark:hover:text-[#F2F2F0] transition-colors"
            >
              Dúvidas
            </button>
          </nav>

          {/* CTAs Desktop & Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Link Agendar com Google Calendar (mesmo link de rodrigo.palominotech.com.br) */}
            <a
              href={AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground dark:text-[#F2F2F0] hover:text-foreground px-3.5 py-2.5 rounded-full hover:bg-secondary dark:hover:bg-[#26221F] border border-border dark:border-[#2A2A2A] transition-all"
              title="Agendar conversa pelo Google Calendar"
            >
              <Calendar className="h-4 w-4 text-foreground" />
              <span>Agendar</span>
            </a>

            {/* Botão Falar no WhatsApp visível em sm+ (desktop e tablet) */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-foreground hover:bg-foreground/85 text-white text-xs sm:text-sm md:text-base font-bold px-4 sm:px-7 py-2 sm:py-3.5 h-auto rounded-full transition-all shadow-[0_4px_12px_-6px_rgba(20,20,20,0.35)] hover:shadow-[0_4px_12px_-6px_rgba(20,20,20,0.35)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o site da Palomino Tech e quero conversar sobre um projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 bg-white dark:bg-[#181818] rounded-2xl border border-border dark:border-[#2A2A2A] shadow-xl flex flex-col gap-4 text-sm font-medium text-foreground dark:text-[#F2F2F0]">
          <button onClick={() => scrollTo('servicos')} className="text-left py-2 border-b border-border/50">
            Soluções
          </button>
          <button onClick={() => scrollTo('processo')} className="text-left py-2 border-b border-border/50">
            Como Funciona
          </button>
          <button onClick={() => scrollTo('projetos')} className="text-left py-2 border-b border-border/50">
            Projetos & Demos
          </button>
          <button onClick={() => scrollTo('depoimentos')} className="text-left py-2 border-b border-border/50">
            Clientes
          </button>
          <button onClick={() => scrollTo('duvidas')} className="text-left py-2 border-b border-border/50">
            Dúvidas
          </button>
          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border dark:border-[#2A2A2A] bg-background dark:bg-[#221E1B] text-foreground dark:text-[#F2F2F0] font-semibold text-sm hover:border-foreground transition-colors"
          >
            <Calendar className="h-4 w-4 text-foreground" />
            <span>Agendar Conversa (Google Calendar)</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o site da Palomino Tech e quero conversar sobre um projeto.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-foreground text-white font-bold py-3.5 rounded-xl text-base shadow-[0_4px_12px_-6px_rgba(20,20,20,0.35)] flex items-center justify-center gap-2"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
