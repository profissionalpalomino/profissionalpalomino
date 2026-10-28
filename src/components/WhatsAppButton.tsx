import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contato";

const WhatsAppButton = () => {
  return (
    <a
      href={waLink("Olá! Vi o site da Palomino Tech e quero tirar dúvidas sobre um projeto.")}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp_floating"
      style={{
        bottom: "max(16px, env(safe-area-inset-bottom, 16px))",
        right: "max(16px, env(safe-area-inset-right, 16px))",
      }}
      className="fixed z-50 flex h-12 items-center gap-2 rounded-full bg-[var(--pal-strong)] pl-4 pr-5 text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(20,20,20,0.6)] hover:bg-black transition-colors"
      aria-label="Falar com a Palomino Tech no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
