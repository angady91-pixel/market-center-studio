import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, Mail, Users, Ticket, Video, MessageCircle,
  Bot, Gift, Check, ArrowRight, ChevronDown, Star,
  Sparkles, Zap, Brain, Phone, MapPin
} from "lucide-react";

const navItems = [
  { label: "Pricing", id: "pricing" },
  { label: "Benefits", id: "benefits" },
  { label: "Marky", id: "marky" },
  { label: "Login", id: "login" },
];

const benefits = [
  { icon: BookOpen, label: "Unlimited Course Access", desc: "Intro to Marketing, B2B, AI Automation, Social Media & more" },
  { icon: Mail, label: "Weekly Newsletter", desc: "Curated insights delivered every Monday" },
  { icon: Users, label: "Priority Webinar Seats", desc: "First access to all live sessions" },
  { icon: Ticket, label: "Free Event Access", desc: "Attend all MRKT CNTR events at no cost" },
  { icon: Video, label: "Video Library", desc: "Full archive of past webinars & tutorials" },
  { icon: MessageCircle, label: "Discord Community", desc: "Private channel with marketers & our team" },
  { icon: Bot, label: "Marky — AI Chatbot", desc: "Your 24/7 marketing strategy assistant" },
  { icon: Gift, label: "Tool Discounts", desc: "Gift cards & discounts for marketing tools" },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Browse free resources and sample content.",
    features: ["Limited course previews", "Blog access", "Community (read-only)"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "Everything you need to level up your marketing game.",
    features: [
      "Unlimited course access",
      "Weekly newsletter",
      "Priority webinar seats",
      "Free event access",
      "Full video library",
      "Discord community",
      "Marky AI chatbot",
      "Tool discounts & gift cards",
    ],
    cta: "Subscribe Now",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for teams and organizations.",
    features: ["Everything in Pro", "Team accounts", "Custom research", "Dedicated support", "White-label options"],
    cta: "Contact Us",
    highlighted: false,
  },
];

const MarketInsider = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-foreground text-primary-foreground">
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
        <nav className="flex items-center justify-between rounded-full px-6 py-3 bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/10">
          <Link to="/" className="font-display text-lg font-bold tracking-widest text-primary-foreground">
            MRKT CNTR
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <span className="text-accent text-sm uppercase tracking-widest font-medium mb-6">Market Insider</span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Your marketing<br />
          <span className="text-accent">edge.</span>
        </h1>
        <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
          Courses, research, tools, and an AI assistant — all in one subscription.
          Level up your marketing game.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo("pricing")}
            className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            View Pricing
          </button>
          <button
            onClick={() => scrollTo("benefits")}
            className="border border-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/5 transition-colors"
          >
            Explore Benefits
          </button>
        </div>

        <div className="mt-16 animate-bounce-slow">
          <button onClick={() => scrollTo("pricing")} className="text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium text-center">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">Simple, transparent pricing.</h2>
          <p className="text-primary-foreground/60 text-lg text-center mb-16 max-w-lg mx-auto">
            Start free. Upgrade when you're ready to unlock everything.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 border ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground border-accent relative"
                    : "bg-primary-foreground/5 border-primary-foreground/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-6 bg-foreground text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-accent-foreground/60" : "text-primary-foreground/60"}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-accent-foreground/80" : "text-primary-foreground/60"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? "text-accent-foreground" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium text-center">Benefits</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">Everything included.</h2>
          <p className="text-primary-foreground/60 text-lg text-center mb-16 max-w-lg mx-auto">
            One subscription. Full access to courses, research, community, and tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.label} className="flex items-start gap-4 p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">{b.label}</p>
                  <p className="text-primary-foreground/50 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marky AI */}
      <section id="marky" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Bot className="w-10 h-10 text-accent" />
          </div>
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium">AI Assistant</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Meet Marky.</h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Your 24/7 marketing strategy assistant. Ask Marky anything — from campaign ideas to competitor analysis,
            content calendars to ad copy. Powered by AI, trained on real marketing frameworks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: Brain, title: "Strategy On Demand", desc: "Get instant marketing strategies, frameworks, and campaign ideas tailored to your industry." },
              { icon: Sparkles, title: "Content Generation", desc: "Generate ad copy, email subjects, social captions, and blog outlines in seconds." },
              { icon: Zap, title: "Always Learning", desc: "Marky stays up-to-date with the latest marketing trends, tools, and best practices." },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <feature.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login */}
      <section id="login" className="py-24 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-3xl font-bold mb-2 text-center">Get Started</h2>
          <p className="text-primary-foreground/60 text-center mb-8">
            Sign in or create your Market Insider account.
          </p>

          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl p-8">
            <button className="w-full flex items-center justify-center gap-3 bg-primary-foreground text-foreground py-3 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-primary-foreground/10" />
              <span className="text-primary-foreground/40 text-xs uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-primary-foreground/10" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-primary-foreground/40 text-xs mt-4">
              Don't have an account? <button className="text-accent hover:underline">Create one</button>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-foreground/5 border-t border-primary-foreground/10 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="font-display text-lg font-bold tracking-widest mb-6">MRKT CNTR</p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
              <Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                ← Back to MRKT CNTR
              </Link>
            </nav>
          </div>

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
    </div>
  );
};

export default MarketInsider;
