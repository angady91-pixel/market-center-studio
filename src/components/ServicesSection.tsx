import { useState } from "react";
import {
  Bot, Mail, Palette, Rocket, BarChart3, Search,
  Globe, PenTool, Share2, Camera, Heart, PartyPopper,
  Users, X
} from "lucide-react";

const services = [
  {
    title: "AI & CRM Automations",
    icon: Bot,
    description: "Supercharge your sales pipeline with intelligent automations. Lead scoring, outreach sequences, and workflow optimization that turns prospects into revenue — on autopilot.",
    details: "Our AI-powered CRM solutions integrate seamlessly with your existing tech stack. We build custom lead scoring models, automated outreach sequences, intelligent chatbots, and workflow automations that eliminate manual tasks. From HubSpot to Salesforce, we optimize every touchpoint in your sales pipeline to maximize conversion rates and minimize response times.",
  },
  {
    title: "Email Marketing",
    icon: Mail,
    description: "Automated email campaigns with full funnel architecture. We build, optimize, and scale your lists — turning cold leads into loyal customers.",
    details: "We architect complete email ecosystems: welcome sequences, nurture flows, re-engagement campaigns, and post-purchase automations. Our team handles list segmentation, A/B testing, deliverability optimization, and analytics. We've helped clients grow their email lists by 300%+ and achieve open rates well above industry benchmarks.",
  },
  {
    title: "Branding",
    icon: Palette,
    description: "From zero or a full rebrand — we craft identities that resonate. Strategy, visuals, voice. Your brand, but unforgettable.",
    details: "Our branding process starts with deep market research and competitive analysis. We develop comprehensive brand guidelines including logo systems, color palettes, typography, tone of voice, and visual language. Whether you're launching from scratch or refreshing an existing identity, we ensure every touchpoint tells a cohesive story.",
  },
  {
    title: "GTM Marketing",
    icon: Rocket,
    description: "Go-to-market strategies that actually launch. We align product, market, and message to make your entry impossible to ignore.",
    details: "We build launch playbooks that cover positioning, messaging, channel strategy, content calendars, PR outreach, and paid acquisition. Our GTM frameworks have helped startups and enterprise products alike achieve successful market entries with measurable traction from day one.",
  },
  {
    title: "Reporting",
    icon: BarChart3,
    description: "Data-driven dashboards and insights that make sense. Know exactly what's working, what's not, and where to double down.",
    details: "We build custom reporting dashboards that consolidate data from all your marketing channels into a single source of truth. Real-time KPI tracking, attribution modeling, ROI analysis, and monthly strategic reviews ensure you always know where your marketing dollars are performing best.",
  },
  {
    title: "Market Research",
    icon: Search,
    description: "From B2B C-suite executives to Gen Z consumers — we decode your audience with surveys, focus groups, and deep market analysis.",
    details: "Our research capabilities span quantitative surveys, qualitative focus groups, competitive intelligence, and trend analysis. We deliver actionable insights with clear strategic recommendations — not just data dumps. Our research has informed product launches, rebrand initiatives, and market expansion strategies across industries.",
    link: "insider",
  },
  {
    title: "Web Design",
    icon: Globe,
    description: "Clean, conversion-focused websites that look stunning and perform. Design meets function — every pixel earns its place.",
    details: "We design and develop responsive websites optimized for conversion. From landing pages to full e-commerce platforms, our team handles UX research, wireframing, visual design, development, and performance optimization. Every site we build is mobile-first, accessible, and built to convert visitors into customers.",
  },
  {
    title: "SEO",
    icon: PenTool,
    description: "Organic growth that compounds. Technical SEO, content strategy, and link building that gets you found — and keeps you there.",
    details: "Our SEO approach combines technical optimization, strategic content creation, and authority building. We conduct comprehensive site audits, keyword research, on-page optimization, and develop content strategies that drive sustainable organic traffic growth. Our clients typically see 2-5x organic traffic increases within 6-12 months.",
  },
  {
    title: "Copywriting",
    icon: PenTool,
    description: "Words that sell. Brand voice development, ad copy, landing pages — every sentence engineered for impact.",
    details: "From taglines to long-form content, our copywriters craft messaging that resonates and converts. We develop brand voice guidelines, write ad copy that stops scrollers, create landing pages that convert, and produce blog content that ranks. Every word is intentional, tested, and optimized for your audience.",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    description: "Strategy-first social. We create, schedule, and optimize content that builds communities and drives real engagement.",
    details: "We manage end-to-end social media strategy across all major platforms. Content creation, community management, influencer partnerships, paid social campaigns, and performance analytics. We build engaged audiences that translate into real business results — not just vanity metrics.",
  },
  {
    title: "Content Production",
    icon: Camera,
    description: "Photo, video, graphics, and everything in between. Premium content that tells your story and stops the scroll.",
    details: "Our in-house creative team produces broadcast-quality video, professional photography, motion graphics, and custom illustrations. From social content to brand films, we handle concept development, production, and post-production — delivering assets optimized for every platform and format.",
  },
  {
    title: "DEI & Ethical Marketing",
    icon: Heart,
    description: "Inclusive marketing that expands your reach authentically. Representation matters — we make sure your brand reflects it.",
    details: "We help brands build authentic, inclusive marketing strategies. From audience research and inclusive content creation to accessibility audits and cultural consulting, we ensure your marketing resonates with diverse audiences while avoiding missteps. Ethical marketing isn't just right — it's good business.",
  },
  {
    title: "Event Marketing & Brand Activation",
    icon: PartyPopper,
    description: "Unforgettable experiences that bring your brand to life. Pop-ups, launches, activations — we make moments people talk about.",
    details: "We plan and execute experiential marketing campaigns that create lasting impressions. From product launch events and trade show activations to pop-up experiences and sponsorship strategies, we handle concept, logistics, promotion, and post-event amplification. Every activation is designed to generate buzz, capture leads, and build brand loyalty.",
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
  const [openService, setOpenService] = useState<string | null>(null);

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
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setOpenService(s.title)}
            >
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-5 h-5 text-accent" />
                <h3 className="font-display font-semibold text-lg group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              <button className="mt-4 text-accent text-sm font-medium hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {openService && (() => {
          const service = services.find((s) => s.title === openService);
          if (!service) return null;
          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/60 backdrop-blur-sm"
              onClick={() => setOpenService(null)}
            >
              <div
                className="bg-background rounded-3xl p-8 md:p-10 max-w-lg w-full border border-border shadow-2xl animate-fade-in-up relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpenService(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.details}</p>
                {service.link && (
                  <button
                    onClick={() => {
                      setOpenService(null);
                      document.getElementById(service.link!)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-accent text-sm font-medium hover:underline"
                  >
                    Explore Research →
                  </button>
                )}
                <button
                  onClick={() => {
                    setOpenService(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full mt-6 bg-accent text-accent-foreground py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          );
        })()}

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
