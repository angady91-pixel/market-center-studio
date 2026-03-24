const services = [
  {
    title: "AI & CRM Automations",
    description: "Supercharge your sales pipeline with intelligent automations. Lead scoring, outreach sequences, and workflow optimization that turns prospects into revenue — on autopilot.",
  },
  {
    title: "Email Marketing",
    description: "Automated email campaigns with full funnel architecture. We build, optimize, and scale your lists — turning cold leads into loyal customers.",
  },
  {
    title: "Branding",
    description: "From zero or a full rebrand — we craft identities that resonate. Strategy, visuals, voice. Your brand, but unforgettable.",
  },
  {
    title: "GTM Marketing",
    description: "Go-to-market strategies that actually launch. We align product, market, and message to make your entry impossible to ignore.",
  },
  {
    title: "Reporting",
    description: "Data-driven dashboards and insights that make sense. Know exactly what's working, what's not, and where to double down.",
  },
  {
    title: "Market Research",
    description: "From B2B C-suite executives to Gen Z consumers — we decode your audience with surveys, focus groups, and deep market analysis.",
    link: "insider",
  },
  {
    title: "Web Design",
    description: "Clean, conversion-focused websites that look stunning and perform. Design meets function — every pixel earns its place.",
  },
  {
    title: "SEO",
    description: "Organic growth that compounds. Technical SEO, content strategy, and link building that gets you found — and keeps you there.",
  },
  {
    title: "Copywriting",
    description: "Words that sell. Brand voice development, ad copy, landing pages — every sentence engineered for impact.",
  },
  {
    title: "Social Media Marketing",
    description: "Strategy-first social. We create, schedule, and optimize content that builds communities and drives real engagement.",
  },
  {
    title: "Content Production",
    description: "Photo, video, graphics, and everything in between. Premium content that tells your story and stops the scroll.",
  },
  {
    title: "DEI & Ethical Marketing",
    description: "Inclusive marketing that expands your reach authentically. Representation matters — we make sure your brand reflects it.",
  },
];

const comparisonData = {
  agency: {
    title: "MRKT CNTR Retainer",
    price: "$1,200",
    period: "/mo",
    features: [
      "Full-stack marketing team",
      "Proven track record",
      "Multi-industry experience",
      "Scalable on demand",
      "No HR, benefits, or overhead",
      "Strategic + execution",
    ],
  },
  inHouse: {
    title: "Entry-Level Hire",
    price: "$3,500+",
    period: "/mo",
    features: [
      "Single generalist",
      "Learning on the job",
      "Limited perspective",
      "Fixed capacity",
      "Benefits, PTO, equipment",
      "Execution only",
    ],
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium">What we do</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          We are an entire marketing department for small businesses looking for their first marketing hire.
          Skip the learning curve — get a team that delivers from day one.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              {s.link && (
                <button
                  onClick={() => document.getElementById(s.link!)?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-4 text-accent text-sm font-medium hover:underline"
                >
                  Explore Research →
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-bold text-center mb-4">Why outsource?</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Over 60% of small to mid-size businesses — and even large enterprises — partner with agencies for some or all of their marketing functions. You should too.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Agency Card */}
            <div className="bg-foreground text-primary-foreground rounded-2xl p-8 border-2 border-accent relative">
              <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{comparisonData.agency.title}</h4>
              <div className="mb-6">
                <span className="text-4xl font-bold">{comparisonData.agency.price}</span>
                <span className="text-primary-foreground/60">{comparisonData.agency.period}</span>
              </div>
              <ul className="space-y-3">
                {comparisonData.agency.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* In-House Card */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h4 className="font-display font-semibold text-lg mb-2">{comparisonData.inHouse.title}</h4>
              <div className="mb-6">
                <span className="text-4xl font-bold">{comparisonData.inHouse.price}</span>
                <span className="text-muted-foreground">{comparisonData.inHouse.period}</span>
              </div>
              <ul className="space-y-3">
                {comparisonData.inHouse.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
