import AnimatedSection from "./AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Clínica odontológica",
    text: "Melhor investimento que fiz. Minha recepcionista agora foca no que importa e o WhatsApp roda sozinho.",
    initials: "RM",
  },
  {
    name: "Ana Paula Silva",
    role: "Loja de roupas femininas",
    text: "Eu achava que automação era coisa de empresa grande. Hoje vendo até dormindo.",
    initials: "AP",
  },
  {
    name: "Carlos Eduardo",
    role: "Escritório de advocacia",
    text: "Simples, rápido e funciona. Não precisa entender nada de tecnologia.",
    initials: "CE",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Depoimentos
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
              O que dizem meus clientes
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 relative">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-white/70 leading-relaxed">"{t.text}"</p>
                
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
