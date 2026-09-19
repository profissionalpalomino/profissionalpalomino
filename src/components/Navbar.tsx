import { useState, useEffect } from "react";
import { MessageCircle, Calendar, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
          ? "top-3 sm:top-4 max-w-4xl" 
          : "top-0 max-w-7xl"
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 border ${
          scrolled || mobileMenuOpen
            ? "rounded-2xl bg-white/95 backdrop-blur-xl border-border shadow-[var(--shadow-md)] px-5 py-3 sm:px-6"
            : "rounded-none bg-transparent border-transparent px-4 py-5 sm:px-5 sm:py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group" 
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none"
                 className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-180 sm:w-[34px] sm:h-[34px]"
                 style={{ filter: "drop-shadow(0 0 7px rgba(230,59,46,.5))" }}>
              <polygon points="50,5 89.8,27.5 89.8,72.5 50,95 10.2,72.5 10.2,27.5"
                       stroke="#E8341C" strokeWidth="7" strokeLinejoin="round" />
            </svg>
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
              Palomino <span className="text-primary transition-all duration-300 group-hover:text-primary-foreground group-hover:bg-primary group-hover:px-1.5 group-hover:py-0.5 group-hover:rounded-md">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollTo("projetos")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-[1px]"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollTo("servicos")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-[1px]"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollTo("processo")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-[1px]"
            >
              Processo
            </button>
            <button 
              onClick={() => scrollTo("duvidas")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-[1px]"
            >
              Dúvidas
            </button>
            <Button
              size="sm"
              variant="outline"
              asChild
              className="text-muted-foreground hover:text-foreground border-border hover:bg-secondary transition-all duration-300 rounded-full px-5 py-4 font-semibold text-xs ml-2"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá! Quero transformar meu negócio com a Palomino Tech.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-primary text-primary-foreground hover:brightness-110 border border-primary/20 transition-all duration-300 rounded-full px-5 py-4 font-semibold text-xs shadow-[0_0_20px_rgba(230,59,46,0.2)] hover:shadow-[0_0_30px_rgba(230,59,46,0.45)] hover:scale-[1.03]"
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
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-foreground hover:bg-secondary border border-border/80 transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border/60 mt-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => scrollTo("projetos")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <span>Projetos & Demos</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={() => scrollTo("servicos")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <span>Serviços Oferecidos</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={() => scrollTo("processo")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <span>Como Funciona</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={() => scrollTo("duvidas")} 
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <span>Perguntas Frequentes</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>

            <div className="pt-2 mt-1 flex flex-col gap-2 border-t border-border/40">
              <Button
                size="lg"
                asChild
                className="w-full bg-primary text-primary-foreground hover:brightness-110 font-bold text-sm h-12 rounded-xl shadow-md shadow-primary/20"
              >
                <a
                  href="https://calendar.app.google/RpTN49BD3jJabEB79"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Reunião
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-border text-foreground hover:bg-secondary font-bold text-sm h-12 rounded-xl"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá! Quero transformar meu negócio com a Palomino Tech.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" />
                  Falar no WhatsApp
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
