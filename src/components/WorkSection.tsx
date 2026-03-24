import { Award } from "lucide-react";

const clients = ["Make-A-Wish", "Special Olympics"];

const certifications = [
  { name: "Google Ads Partner", badge: "Google" },
  { name: "Meta Business Partner", badge: "Meta" },
  { name: "HubSpot Solutions Partner", badge: "HubSpot" },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium">Our work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Trusted by the best.</h2>
        <p className="text-muted-foreground text-lg">
          We partner with organizations that make a difference.
        </p>
      </div>

      {/* Infinite scroll logos */}
      <div className="relative mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-left">
          {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center justify-center min-w-[240px] h-24 mx-4 bg-card rounded-2xl border border-border px-8"
            >
              <span className="font-display font-semibold text-muted-foreground/50 text-lg tracking-wider uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-accent text-sm uppercase tracking-widest mb-8 font-medium text-center">Certified & Partnered</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-4 bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">{cert.name}</p>
                <p className="text-muted-foreground text-xs">{cert.badge} Certified</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
