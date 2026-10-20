import { Zap, ShieldCheck, Smartphone, MessageSquare } from "lucide-react";

const pilares = [
  {
    icon: Zap,
    title: "No ar em dias",
    desc: "Cronograma direto e entregas rápidas, sem meses de espera.",
  },
  {
    icon: ShieldCheck,
    title: "Sem taxas por usuário",
    desc: "Código sob medida para sua empresa, sem cobranças abusivas.",
  },
  {
    icon: Smartphone,
    title: "Simples de operar",
    desc: "Feito para funcionar no celular: sua equipe aprende em 10 minutos.",
  },
  {
    icon: MessageSquare,
    title: "Suporte direto",
    desc: "Canal aberto no WhatsApp com quem programa o seu sistema.",
  },
];

const PilaresSection = () => {
  return (
    <section className="bg-white border-y border-border py-8 sm:py-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pilares.map((p, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-secondary text-foreground flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-0.5">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
