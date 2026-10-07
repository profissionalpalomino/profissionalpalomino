import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP = "5531984773813";

const WhatsAppButton = () => {
  return (
    <aside 
      aria-label="Atendimento rápido e redes sociais"
      style={{
        bottom: "max(14px, env(safe-area-inset-bottom, 14px))",
        right: "max(14px, env(safe-area-inset-right, 14px))",
      }}
      className="fixed z-50 flex flex-col items-center gap-2.5"
    >
      {/* Botão Flutuante do Instagram */}
      <a
        href="https://instagram.com/palominotech"
        target="_blank"
        rel="noopener noreferrer"
        data-track="instagram_floating"
        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_4px_16px_rgba(220,39,67,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(220,39,67,0.65)] focus:outline-none focus:ring-4 focus:ring-pink-500/40 group"
        aria-label="Acessar Instagram @palominotech"
        title="Instagram @palominotech"
      >
        <span className="sr-only">Instagram @palominotech</span>
        <Instagram className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Olá! Vi o site da Palomino Tech e quero tirar dúvidas sobre um projeto.`}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_floating"
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_35px_rgba(37,211,102,0.65)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
        aria-label="Falar com a Palomino Tech no WhatsApp"
        title="Falar no WhatsApp"
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-300 border-2 border-[#25D366]"></span>
        </span>
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-105" fill="currentColor" />
      </a>
    </aside>
  );
};

export default WhatsAppButton;
