import { Mail, MessageCircle, Hexagon } from "lucide-react";

const WHATSAPP = "5531984773813";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-[#261318] py-16 px-5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Logo and descriptor */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Hexagon className="h-6 w-6 text-primary fill-primary/5" />
          </div>
          <div>
            <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
              Palomino <span className="text-primary">Tech</span>
            </span>
            <p className="text-[10px] text-muted-foreground font-mono mt-0.5 tracking-wider uppercase">
              Sistemas de Alta Precisão
            </p>
          </div>
        </div>

        {/* Telemetry Status indicator */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 bg-[#1a1013] border border-[#261318] px-3.5 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[9px] text-emerald-400 font-bold tracking-widest uppercase">
              SISTEMA OPERACIONAL • LATÊNCIA: 12ms
            </span>
          </div>
          <span className="font-mono text-[8px] text-muted-foreground/60 tracking-wider uppercase mt-1">
            STACK DEPLOYED: [VITE + RADIX + SWARM]
          </span>
        </div>

        {/* Links and email */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-6 text-xs font-semibold">
            <a 
              href={`https://wa.me/${WHATSAPP}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a 
              href="mailto:profissionalpalomino@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              E-mail
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground/60 font-medium">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
