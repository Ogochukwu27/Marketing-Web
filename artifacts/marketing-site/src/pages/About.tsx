import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                Rewriting the rules of digital growth.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're a collective of strategists, creatives, and technologists united by a single purpose: helping brands fulfill their potential.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/about-bg.png`} 
                alt="Modern office interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground text-left">
            <p>
              Founded in 2018, Nexus started with a simple observation: most agencies focus on vanity metrics instead of business outcomes. We set out to build an agency that cares about one thing above all else — profitable growth for our clients.
            </p>
            <p>
              We've grown from a small team of three founders in a cramped office to a global force of 45+ digital specialists. What hasn't changed is our obsessive focus on data, our relentless pursuit of creative excellence, and our commitment to transparency.
            </p>
            <p>
              Today, we partner with industry-leading brands and ambitious startups, acting not just as an external vendor, but as an integrated extension of their own teams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              The principles that guide how we work, hire, and make decisions.
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
                title: "Collective Genius",
                desc: "Great ideas can come from anywhere. We foster an environment where every voice is heard and valued."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-white shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-primary-foreground/90 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Want to meet the team?</h2>
          <p className="text-xl text-muted-foreground mb-10">Get to know the experts behind the campaigns.</p>
          <Link
            href="/founders"
            className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg shadow-lg"
          >
            Meet the Founders
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
