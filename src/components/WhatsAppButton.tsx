import { MessageCircle } from "lucide-react";

const WHATSAPP = "5531984773813";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Olá! Quero saber mais sobre automações para meu negócio.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-[0_4px_20px_hsl(142,70%,45%,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_30px_hsl(142,70%,45%,0.6)] md:h-16 md:w-16"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
