import { Mail, MessageCircle, Instagram, Calendar } from "lucide-react";

const WHATSAPP = "5531984773813";

const Footer = () => {
  return (
    <footer className="bg-[#080b12] border-t border-white/10 py-16 px-5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Logo and descriptor */}
        <div className="flex items-center gap-3">
          <svg 
            width="34" 
            height="34" 
            viewBox="0 0 32 32" 
            fill="none"
            className="transition-transform duration-500 hover:scale-110"
            style={{ filter: "drop-shadow(0 0 10px rgba(244,63,94,0.6))" }}
          >
            <polygon points="16,2 27.1,8.5 27.1,21.5 16,28 4.9,21.5 4.9,8.5" fill="none" stroke="#f43f5e" strokeWidth="2.2" />
          </svg>
          <div>
            <span className="font-heading text-lg font-black tracking-[0.2em] uppercase text-white">
              PALOMINO <span className="text-primary">TECH</span>
            </span>
            <p className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">
              Sistemas Autônomos & IA
            </p>
          </div>
        </div>

        {/* Telemetry Status indicator */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 bg-[#0b0f19] border border-white/10 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[9px] text-emerald-400 font-bold tracking-widest uppercase">
              SISTEMA OPERACIONAL • LATÊNCIA: 12ms
            </span>
          </div>
          <span className="font-mono text-[8px] text-muted-foreground/60 tracking-wider uppercase mt-1">
            STACK: [VITE + TAILWIND + DOCKER SWARM]
          </span>
        </div>

        {/* Links and email */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center items-center gap-5 text-xs font-heading font-bold uppercase tracking-wider">
            <a 
              href={`https://wa.me/${WHATSAPP}?text=Olá! Vi o rodapé da Palomino Tech e quero tirar dúvidas.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              WhatsApp
            </a>
            <a 
              href="https://calendar.app.google/RpTN49BD3jJabEB79" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <Calendar className="h-4 w-4 text-primary" />
              Agenda
            </a>
            <a 
              href="https://instagram.com/palominotech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <Instagram className="h-4 w-4 text-primary" />
              Instagram
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=profissionalpalomino@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <Mail className="h-4 w-4 text-slate-400" />
              E-mail
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground/60 font-medium font-sans">
            © {new Date().getFullYear()} Palomino Tech • Todos os direitos reservados
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
