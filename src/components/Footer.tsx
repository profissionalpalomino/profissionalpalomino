import { waLink, AGENDA_URL } from "@/lib/contato";

const EMAIL = "profissionalpalomino@gmail.com";

const links = [
  { rotulo: "WhatsApp", href: waLink("Olá, Rodrigo! Vi o rodapé da Palomino Tech e quero falar sobre um projeto.") },
  { rotulo: "Agendar chamada", href: AGENDA_URL },
  { rotulo: "Instagram", href: "https://instagram.com/palominotech" },
  { rotulo: "LinkedIn", href: "https://www.linkedin.com/company/palominotech" },
  { rotulo: EMAIL, href: `mailto:${EMAIL}` },
];

const Footer = () => {
  return (
    <footer className="border-t border-border px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pb-12">
      <div className="container-narrow flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Palomino Tech" className="w-9 h-9" />
          <div>
            <p className="text-sm font-bold tracking-[0.14em] uppercase text-foreground">
              Palomino <span className="text-muted-foreground font-normal">Tech</span>
            </p>
            <p className="text-xs text-muted-foreground">Sites, sistemas e automações · Grande BH</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.rotulo}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center hover:text-foreground transition-colors"
              >
                {l.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="container-narrow mt-8 font-mono text-[11px] text-muted-foreground">© 2026 Palomino Tech</p>
    </footer>
  );
};

export default Footer;
