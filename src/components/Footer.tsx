import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left - Nav */}
        <div>
          <p className="font-display text-lg font-bold tracking-widest mb-6">MRKT CNTR</p>
          <nav className="flex flex-col gap-3">
            {[
              { label: "About", id: "hero" },
              { label: "Services", id: "services" },
              { label: "Updates", id: "insider" },
              { label: "Resources", id: "insider" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-left text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right - Contact */}
        <div className="text-right md:text-right">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-6">Contact</p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@mrktcntr.io"
              className="flex items-center md:justify-end gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              <Mail className="w-4 h-4" /> info@mrktcntr.io
            </a>
            <a
              href="tel:+19718000085"
              className="flex items-center md:justify-end gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              <Phone className="w-4 h-4" /> (971) 800-0085
            </a>
            <span className="flex items-center md:justify-end gap-2 text-primary-foreground/60 text-sm">
              <MapPin className="w-4 h-4 shrink-0" /> 11315 Bayshore Rd, Eden Prairie, MN 55344
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} MRKT CNTR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
