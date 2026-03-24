import { FileText, Video, MessageCircle, BookOpen, Mail, Users, Gift, Bot, Ticket } from "lucide-react";

const alaCarteItems = [
  { type: "Research", title: "2024 B2B Marketing Trends Report", price: "$29" },
  { type: "Research", title: "Gen Z Consumer Behavior Study", price: "$39" },
  { type: "Research", title: "AI in Marketing: Industry Benchmark", price: "$49" },
  { type: "Lesson", title: "Email Funnel Masterclass", price: "$19" },
  { type: "Lesson", title: "Brand Positioning Framework", price: "$24" },
  { type: "Lesson", title: "SEO Audit Checklist & Guide", price: "$14" },
];

const subscriptionFeatures = [
  { icon: BookOpen, label: "Unlimited Course Access", desc: "Intro to Marketing, B2B, AI Automation, Social Media & more" },
  { icon: Mail, label: "Weekly Newsletter", desc: "Curated insights delivered every Monday" },
  { icon: Users, label: "Priority Webinar Seats", desc: "First access to all live sessions" },
  { icon: Ticket, label: "Free Event Access", desc: "Attend all MRKT CNTR events at no cost" },
  { icon: Video, label: "Video Library", desc: "Full archive of past webinars & tutorials" },
  { icon: MessageCircle, label: "Discord Community", desc: "Private channel with marketers & our team" },
  { icon: Bot, label: "Marky — AI Chatbot", desc: "Your 24/7 marketing strategy assistant" },
  { icon: Gift, label: "Tool Discounts", desc: "Gift cards & discounts for marketing tools" },
];

const InsiderSection = () => {
  return (
    <section id="insider" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium">Learn & grow</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Market Insider</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          Your hub for marketing courses, market research, and exclusive resources.
          Buy individual reports or unlock everything with a subscription.
        </p>

        {/* A la carte */}
        <h3 className="font-display text-2xl font-semibold mb-8">À la carte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {alaCarteItems.map((item) => (
            <div
              key={item.title}
              className="bg-background rounded-2xl p-6 border border-border hover:border-accent/30 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{item.type}</span>
              </div>
              <h4 className="font-display font-semibold mb-4 group-hover:text-accent transition-colors">{item.title}</h4>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.price}</span>
                <button className="text-sm text-accent font-medium hover:underline">Purchase →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription */}
        <div className="bg-foreground text-primary-foreground rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            <div>
              <span className="text-accent text-sm uppercase tracking-widest font-medium">Subscription</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">Market Insider Pro</h3>
              <p className="text-primary-foreground/60 max-w-md leading-relaxed">
                Everything you need to level up your marketing game. Courses, research, tools, community — all in one.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-primary-foreground/60">/mo</span>
              <div className="mt-3">
                <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subscriptionFeatures.map((f) => (
              <div key={f.label} className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5">
                <f.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{f.label}</p>
                  <p className="text-primary-foreground/50 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-foreground/40 text-xs mt-8">
            Monthly courses include: Intro to Marketing · B2B Marketing · AI Marketing Automation · Social Media Marketing
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsiderSection;
