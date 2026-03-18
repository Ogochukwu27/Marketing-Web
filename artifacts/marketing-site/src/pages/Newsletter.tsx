import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Zap, Mail } from "lucide-react";

// ✏️ Update this URL to your actual Substack link
const SUBSTACK_URL = "https://substack.com/@theearlystagemarketer";

const perks = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Real, actionable insights",
    desc: "No fluff. Every edition is packed with strategies B2B startup marketers can use immediately.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Built for early-stage teams",
    desc: "Written by someone who has been in the trenches as a first marketing hire — relatable and practical.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Growth frameworks that work",
    desc: "From product launches to community building — the plays that have doubled pipelines and grown waitlists 500%.",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Straight to your inbox",
    desc: "Subscribe once on Substack and never miss an edition. Unsubscribe anytime, no hard feelings.",
  },
];

export function Newsletter() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-8"
          >
            <Mail className="w-4 h-4" />
            Newsletter by Onyinyechi Nwankwo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6"
          >
            The{" "}
            <span className="text-primary">Early Stage</span>{" "}
            Marketer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Marketing insights for folks with 0–3 years of work experience in early-stage tech startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl font-bold text-lg transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-100 h-16 px-10 shadow-xl shadow-primary/25 group"
            >
              Read on Substack
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={SUBSTACK_URL + "?utm_source=website&subscribe=true"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl font-bold text-lg transition-all duration-300 bg-accent text-white hover:bg-accent/90 hover:scale-[1.02] active:scale-100 h-16 px-10 shadow-lg"
            >
              Subscribe Free
            </a>
          </motion.div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">What readers get</h2>
            <p className="text-lg text-muted-foreground">Each edition is written specifically for marketers at the 0–3 year mark — navigating the unique chaos of early-stage tech startups.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 flex items-start gap-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">{perk.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the author strip */}
      <section className="py-20 lg:py-28 bg-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Written by</p>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-white">Onyinyechi Nwankwo</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Product Marketing Manager · Community Builder · Event Host. I've been the first marketing hire at early-stage startups — leading launches, scaling pipelines, and building communities. This newsletter is everything I wish I had when I started.
              </p>
              <a
                href="/about"
                className="inline-flex items-center font-bold text-primary hover:underline text-lg group"
              >
                More about Onyinye
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}images/owner.jpg`}
                  alt="Onyinyechi Nwankwo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-6"
          >
            Start your journey with <span className="text-primary">The Early Stage Marketer.</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground mb-10">Free to subscribe. Marketing insights built for where you are right now — 0 to 3 years in.</p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl font-bold text-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] h-18 px-12 py-5 shadow-xl shadow-primary/25 group"
          >
            Subscribe on Substack
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}
