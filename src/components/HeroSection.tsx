import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScroll(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] mb-6">
          MRKT CNTR
        </h1>
        <div className="w-full max-w-2xl mx-auto h-px bg-foreground/20 mb-8" />
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
          Your search is over. A full-service marketing department — without the overhead.
        </p>
      </div>

      {showScroll && (
        <div className="absolute bottom-12 animate-bounce-slow transition-opacity duration-1000">
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
