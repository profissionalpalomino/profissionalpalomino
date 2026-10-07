import { useState, useEffect } from "react";
import { MessageCircle, Calendar, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const WHATSAPP = "5531984773813";

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
      className={`fixed left-0 right-0 z-50 transition-all duration-500 mx-auto px-4 ${
        scrolled 
          ? "top-3 sm:top-4 max-w-5xl" 
          : "top-2 sm:top-4 max-w-6xl"
      }`}
    >
      <div 
        className="w-full transition-all duration-500 rounded-full dark:bg-[#0b0f19]/85 bg-white/90 backdrop-blur-2xl dark:border-white/10 border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] px-5 py-2.5 sm:px-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo Oficial Hexágono */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group" 
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 32 32" 
              fill="none"
              className="transition-transform duration-500 group-hover:scale-110"
              style={{ filter: "drop-shadow(0 0 8px rgba(244,63,94,0.6))" }}
            >
              <polygon points="16,2 27.1,8.5 27.1,21.5 16,28 4.9,21.5 4.9,8.5" fill="none" stroke="#f43f5e" strokeWidth="2.2" />
            </svg>
            <span className="font-heading text-sm sm:text-base font-extrabold tracking-[0.22em] uppercase text-primary">
              PALOMINO <span className="dark:text-white text-slate-900 font-black">TECH</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <button 
              onClick={() => scrollTo("projetos")} 
              className="hover:dark:text-white hover:text-slate-900 transition-colors duration-200"
            >
              Cases & Demos
            </button>
            <button 
              onClick={() => scrollTo("servicos")} 
              className="hover:dark:text-white hover:text-slate-900 transition-colors duration-200"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollTo("processo")} 
              className="hover:dark:text-white hover:text-slate-900 transition-colors duration-200"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollTo("duvidas")} 
              className="hover:dark:text-white hover:text-slate-900 transition-colors duration-200"
            >
              Dúvidas
            </button>
          </nav>

          {/* Action CTAs + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle />

            <Button
              size="sm"
              variant="outline"
              asChild
              className="dark:border-primary/30 border-primary/20 dark:bg-primary/10 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full px-4 py-2 font-heading font-bold text-[11px] uppercase tracking-wider"
            >
              <a
                href="https://calendar.app.google/RpTN49BD3jJabEB79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                Agendar Reunião
              </a>
            </Button>

            <Button
              size="sm"
              asChild
              className="bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 rounded-full px-4 py-2 font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_40px_rgba(244,63,94,0.65)] hover:scale-[1.03]"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá! Quero transformar meu negócio com a Palomino Tech.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-xl text-foreground hover:bg-secondary/60 border dark:border-white/10 border-slate-200 transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 dark:text-white text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t dark:border-white/10 border-slate-200 mt-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => scrollTo("projetos")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold dark:text-white text-slate-900 hover:dark:bg-white/5 hover:bg-slate-100 transition-colors"
            >
              <span>Projetos & Demos</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={() => scrollTo("servicos")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold dark:text-white text-slate-900 hover:dark:bg-white/5 hover:bg-slate-100 transition-colors"
            >
              <span>Especialidades & IA</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={() => scrollTo("processo")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold dark:text-white text-slate-900 hover:dark:bg-white/5 hover:bg-slate-100 transition-colors"
            >
              <span>Como Funciona</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={() => scrollTo("duvidas")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold dark:text-white text-slate-900 hover:dark:bg-white/5 hover:bg-slate-100 transition-colors"
            >
              <span>Perguntas Frequentes</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>

            <div className="pt-3 mt-1 flex flex-col gap-2.5 border-t dark:border-white/10 border-slate-200">
              <Button
                size="lg"
                asChild
                className="w-full bg-primary text-white font-extrabold text-xs uppercase tracking-wider h-12 rounded-xl shadow-[0_0_25px_rgba(244,63,94,0.35)]"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá! Quero transformar meu negócio com a Palomino Tech.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chamar no WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full dark:border-white/10 border-slate-300 dark:text-white text-slate-800 hover:dark:bg-white/5 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider h-12 rounded-xl"
              >
                <a
                  href="https://calendar.app.google/RpTN49BD3jJabEB79"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  Agendar Reunião Online
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
