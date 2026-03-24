import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "AI & CRM Automations",
  "Email Marketing",
  "Branding",
  "GTM Marketing",
  "Reporting",
  "Market Research",
  "Web Design",
  "SEO",
  "Copywriting",
  "Social Media",
  "Content Production",
  "DEI & Ethical Marketing",
  "Event Marketing",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setServicesOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
      <nav
        className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border"
            : "bg-background/60 backdrop-blur-md border border-transparent"
        }`}
      >
        <button onClick={() => scrollTo("hero")} className="font-display text-lg font-bold tracking-widest">
          MRKT CNTR
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollTo("hero")} className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>

          {/* Services Dropdown */}
          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => scrollTo("services")}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              Services <ChevronDown className="w-3 h-3" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl p-4 w-56 animate-fade-in-up">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => scrollTo("services")}
                    className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => scrollTo("work")} className="text-muted-foreground hover:text-foreground transition-colors">
            Work
          </button>
          <Link to="/insider" className="text-muted-foreground hover:text-foreground transition-colors">
            Market Insider
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
