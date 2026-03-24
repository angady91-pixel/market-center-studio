const clients = [
  "Apple", "Google", "Microsoft", "Amazon", "Meta",
  "Nike", "Tesla", "Netflix", "Spotify", "Adobe",
  "Salesforce", "Oracle", "IBM", "Intel", "Cisco",
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium">Our work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Trusted by the best.</h2>
        <p className="text-muted-foreground text-lg">
          Fortune 500 companies and category leaders choose MRKT CNTR.
        </p>
      </div>

      {/* Infinite scroll logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-left">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center justify-center min-w-[200px] h-24 mx-4 bg-card rounded-2xl border border-border px-8"
            >
              <span className="font-display font-semibold text-muted-foreground/50 text-lg tracking-wider uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
