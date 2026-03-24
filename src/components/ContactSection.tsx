import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", position: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-accent text-sm uppercase tracking-widest mb-4 font-medium text-center">Get in touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">Let's talk.</h2>
        <p className="text-muted-foreground text-lg text-center mb-12">
          Ready to grow? Drop us a line.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
            />
            <input
              name="position"
              placeholder="Position"
              value={form.position}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
