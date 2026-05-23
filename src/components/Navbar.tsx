import { useState, useEffect } from "react";
import { Hexagon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "5531984773813";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 mx-auto px-4 ${
        scrolled 
          ? "top-4 max-w-4xl" 
          : "top-0 max-w-7xl"
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 border ${
          scrolled 
            ? "rounded-2xl bg-card/85 backdrop-blur-xl border-[#261318] shadow-[0_8px_32px_rgba(19,13,15,0.8)] px-6 py-3" 
            : "rounded-none bg-transparent border-transparent px-5 py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(244,63,94,0.1)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              <Hexagon className="h-5 w-5 text-primary fill-primary/5 transition-transform duration-500 group-hover:rotate-180" />
            </div>
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
              Palomino <span className="text-primary transition-all duration-300 group-hover:text-primary-foreground group-hover:bg-primary group-hover:px-1.5 group-hover:py-0.5 group-hover:rounded-md">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
            <Button
              size="sm"
              asChild
              className="bg-primary text-primary-foreground hover:brightness-110 border border-primary/20 transition-all duration-300 rounded-full px-5 py-4 font-semibold text-xs shadow-[0_0_20px_rgba(244,63,94,0.2)] hover:shadow-[0_0_30px_rgba(244,63,94,0.45)] hover:scale-[1.03]"
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá! Quero transformar meu negócio com a Palomino Tech.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                Falar Conosco
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
