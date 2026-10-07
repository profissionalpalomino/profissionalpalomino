import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP = "5531984773813";

const WhatsAppButton = () => {
  return (
    <aside 
      aria-label="Atendimento rápido e redes sociais"
      style={{
        bottom: "max(20px, env(safe-area-inset-bottom, 20px))",
        right: "max(20px, env(safe-area-inset-right, 20px))",
      }}
      className="fixed z-50 flex flex-col items-center gap-3"
    >
      {/* Botão Flutuante do Instagram */}
      <a
        href="https://instagram.com/palominotech"
        target="_blank"
        rel="noopener noreferrer"
        data-track="instagram_floating"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_6px_20px_rgba(220,39,67,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(220,39,67,0.65)] focus:outline-none focus:ring-4 focus:ring-pink-500/40 md:h-13 md:w-13 group"
        aria-label="Acessar Instagram @palominotech"
        title="Instagram @palominotech"
      >
        <span className="sr-only">Instagram @palominotech</span>
        <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Olá! Vi o site da Palomino Tech e quero tirar dúvidas sobre um projeto.`}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_floating"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_35px_rgba(37,211,102,0.65)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 md:h-16 md:w-16 group"
        aria-label="Falar com a Palomino Tech no WhatsApp"
        title="Falar no WhatsApp"
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#25D366]"></span>
        </span>
        <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-105 md:h-8 md:w-8" fill="currentColor" />
      </a>
    </aside>
  );
};

export default WhatsAppButton;
