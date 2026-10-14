import { Mail, MessageCircle, Instagram, Calendar, Linkedin } from "lucide-react";

const WHATSAPP = "5531984773813";
const AGENDA_URL = "https://calendar.app.google/RpTN49BD3jJabEB79";
const EMAIL = "profissionalpalomino@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/palominotech";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E1DC] py-12 px-5 text-[#57524C]">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Logo and descriptor */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Palomino Tech" 
            className="w-9 h-9 rounded-xl shadow-xs object-cover" 
          />
          <div>
            <span className="font-heading text-sm font-bold tracking-[0.16em] uppercase text-[#1A1714]">
              PALOMINO <span className="text-[#E8341C]">TECH</span>
            </span>
            <p className="font-sans text-[11px] text-[#78716A]">
              Sistemas e automações sob medida · Lagoa Santa, MG
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-5 text-xs font-sans font-medium text-[#57524C]">
          <a 
            href={`https://wa.me/${WHATSAPP}?text=Olá, Rodrigo! Vi o rodapé da Palomino Tech e quero falar sobre um projeto.`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-[#1A1714] transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-[#1E7A3B]" />
            <span>WhatsApp</span>
          </a>
          <a 
            href={AGENDA_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-[#1A1714] transition-colors"
            title="Agendar conversa pelo Google Calendar"
          >
            <Calendar className="h-4 w-4 text-[#E8341C]" />
            <span>Agendar Reunião</span>
          </a>
          <a 
            href={LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://instagram.com/palominotech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-[#1A1714] transition-colors"
          >
            <Instagram className="h-4 w-4 text-[#78716A]" />
            <span>Instagram</span>
          </a>
          <a 
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-1.5 hover:text-[#1A1714] transition-colors"
            title={EMAIL}
          >
            <Mail className="h-4 w-4 text-[#78716A]" />
            <span>{EMAIL}</span>
          </a>
        </div>

      </div>

      <div className="container-narrow mt-8 pt-6 border-t border-[#E5E1DC]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78716A] font-sans gap-2">
        <p>© 2026 Palomino Tech. Todos os direitos reservados.</p>
        <p className="font-mono">Desenvolvido com foco em resultados reais.</p>
      </div>
    </footer>
  );
};

export default Footer;
