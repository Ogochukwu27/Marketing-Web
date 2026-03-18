import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function About() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                Meet the Founder
              </div>
              <h1 className="text-6xl md:text-7xl font-display font-extrabold leading-tight mb-6">
                Onyinyechi <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Nwankwo</span>
              </h1>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Product Marketing Manager", "Community Builder", "Event Host", "Newsletter Author"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-4 py-2 rounded-xl bg-card text-foreground text-sm font-bold border border-border shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 py-2">
                Pioneer author of a fast-growing newsletter for marketers in early-stage startups.
              </p>
            </motion.div>

            {/* Owner Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-[2.5rem] rotate-3 opacity-20 blur-xl" />
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-background bg-card">
                <img
                  src={`${import.meta.env.BASE_URL}images/owner.jpg`}
                  alt="Onyinyechi Nwankwo – Founder & CEO"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-accent via-accent/80 to-transparent p-8 pt-20">
                  <p className="text-white font-display font-bold text-2xl mb-1">Onyinyechi Nwankwo</p>
                  <p className="text-primary font-semibold">Founder & CEO, TES-M Marketing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story / Bio */}
      <section className="py-24 lg:py-32 relative bg-muted/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Hi, I'm Onyinye</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-medium">
            <p className="text-foreground text-2xl font-display leading-relaxed">
              I am a Product Marketing Manager who helps B2B startups understand their customers and bring products to market with clarity and confidence. 
            </p>
            <p>
              I've been the first marketing hire and marketing lead at early-stage startups, where I led product launches, scaled inbound pipelines, and built thriving communities.
            </p>
            <p>
              My track record speaks for itself — I doubled inbound leads in six months and grew a product waitlist by <strong className="text-primary font-bold">500% in just two weeks</strong>. These results come from a deep understanding of customer psychology, a love for bold storytelling, and an obsession with strategy that actually converts.
            </p>
            <p>
              I bring a strong editorial eye, a customer-first mindset, and a belief in the power of content, community, and clarity to drive business growth. Through TES-M Marketing, I channel all of that into helping ambitious brands make their mark.
            </p>
          </div>

          {/* Highlight stats */}
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-3xl p-10 text-center shadow-lg hover:shadow-xl hover:border-primary/30 transition-all">
              <p className="text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-600 mb-4">2×</p>
              <p className="text-lg text-foreground font-bold uppercase tracking-wide">Inbound leads doubled<br /><span className="text-muted-foreground text-sm">in 6 months</span></p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-10 text-center shadow-lg hover:shadow-xl hover:border-primary/30 transition-all">
              <p className="text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-600 mb-4">500%</p>
              <p className="text-lg text-foreground font-bold uppercase tracking-wide">Waitlist growth<br /><span className="text-muted-foreground text-sm">in 2 weeks</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">What We Stand For</h2>
            <p className="text-2xl text-white/70 max-w-2xl mx-auto font-light">
              The principles that guide every campaign, every client, every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <CheckCircle2 className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-8">Ready to work together?</h2>
          <p className="text-2xl text-muted-foreground mb-12 font-medium">Let's start a conversation about growing your brand.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 h-20 px-12 text-xl shadow-[0_0_40px_rgba(254,171,50,0.4)]"
          >
            Get In Touch
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>

    </div>
  );
}
