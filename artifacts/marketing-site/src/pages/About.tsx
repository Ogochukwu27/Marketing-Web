import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, User } from "lucide-react";
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
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                Onyinyechi Nwankwo
              </h1>
              <p className="text-xl text-muted-foreground mb-4 font-medium">
                Founder & CEO, TES-M Marketing
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate marketing strategist based in Lagos, Nigeria, dedicated to helping businesses grow their brands, reach the right audiences, and achieve real, measurable results.
              </p>
            </motion.div>

            {/* Owner Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20"
            >
              {/* Photo placeholder — replace the src below with the owner's actual photo */}
              <img
                src={`${import.meta.env.BASE_URL}images/owner.jpg`}
                alt="Onyinyechi Nwankwo – Founder & CEO"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                }}
              />
              {/* Fallback shown until a real photo is uploaded */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center flex-col gap-4 text-center px-6"
                   style={{ display: "none" }}>
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Upload <code className="bg-muted px-1 rounded text-xs">public/images/owner.jpg</code><br />to display the owner's photo
                </p>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-display font-bold text-xl">Onyinyechi Nwankwo</p>
                <p className="text-white/80 text-sm">Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story / Bio */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 text-center">Her Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Onyinyechi Nwankwo founded TES-M Marketing with one clear conviction: that every business — no matter how small — deserves access to smart, strategic marketing that actually works. Based in Lagos State, she has built TES-M Marketing into a trusted agency known for creative thinking and tangible results.
            </p>
            <p>
              Her journey into marketing began long before the agency. With a sharp eye for consumer behavior and a natural talent for storytelling, Onyinyechi spent years honing her skills in digital marketing, brand strategy, and audience growth — learning what truly moves people to take action.
            </p>
            <p>
              Today, she leads TES-M Marketing with the same energy and passion that started it all — helping ambitious brands across Nigeria and beyond connect with the right people, at the right time, with the right message.
            </p>
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
