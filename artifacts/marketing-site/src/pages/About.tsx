import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function About() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Meet the Founder</p>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-4">
                Onyinyechi Nwankwo
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Product Marketing Manager", "Community Builder", "Event Host", "Newsletter Author"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pioneer author of a fast-growing newsletter for marketers in early-stage startups.
              </p>
            </motion.div>

            {/* Owner Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/owner.jpg`}
                alt="Onyinyechi Nwankwo – Founder & CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-display font-bold text-xl">Onyinyechi Nwankwo</p>
                <p className="text-white/80 text-sm">Founder & CEO, TES-M Marketing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story / Bio */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 text-center">Hi, I'm Onyinye</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a Product Marketing Manager who helps B2B startups understand their customers and bring products to market with clarity and confidence. I've been the first marketing hire and marketing lead at early-stage startups, where I led product launches, scaled inbound pipelines, and built thriving communities.
            </p>
            <p>
              My track record speaks for itself — I doubled inbound leads in six months and grew a product waitlist by <strong className="text-foreground">500% in just two weeks</strong>. These results come from a deep understanding of customer psychology, a love for bold storytelling, and an obsession with strategy that actually converts.
            </p>
            <p>
              I bring a strong editorial eye, a customer-first mindset, and a belief in the power of content, community, and clarity to drive business growth. Through TES-M Marketing, I channel all of that into helping ambitious brands make their mark.
            </p>
          </div>

          {/* Highlight stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl font-display font-bold text-primary mb-2">2×</p>
              <p className="text-sm text-muted-foreground font-medium">Inbound leads doubled<br />in 6 months</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl font-display font-bold text-accent mb-2">500%</p>
              <p className="text-sm text-muted-foreground font-medium">Waitlist growth<br />in 2 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">What We Stand For</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              The principles that guide every campaign, every client, every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Radical Transparency",
                desc: "No black boxes. We share our data, our strategies, and our reasoning openly with every client."
              },
              {
                title: "Impact Over Output",
                desc: "We don't just deliver work; we deliver results. Everything we do is tied back to tangible business goals."
              },
              {
                title: "Continuous Evolution",
                desc: "The digital landscape changes daily. We stay ahead by constantly learning, testing, and adapting."
              },
              {
                title: "Client-First Always",
                desc: "Your growth is our success. We treat every client's brand with the same care we'd give our own."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-primary-foreground/90 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let's start a conversation about growing your brand.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg shadow-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
