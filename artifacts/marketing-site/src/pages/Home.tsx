import { Link } from "wouter";
import { ArrowRight, Globe, PenTool, Target, Zap, ChevronRight, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Clients Served", value: "250+" },
  { label: "Revenue Generated", value: "$40M+" },
  { label: "Team Members", value: "45" },
  { label: "Awards Won", value: "12" },
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-background">
        {/* Decorative Mesh & Abstract Patterns */}
        <div className="absolute inset-0 mesh-bg opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md text-foreground font-semibold text-sm mb-8 border border-border shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Digital Marketing Agency of the Year
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] tracking-tight mb-8"
            >
              We don't just market.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary relative">
                We multiply growth.
                {/* Glow effect behind text */}
                <span className="absolute -inset-1 blur-2xl bg-primary/20 -z-10" />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              TES-M Marketing is a performance-driven digital marketing agency helping modern brands scale through data, creative, and precision execution.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 h-16 px-10 text-lg shadow-[0_0_40px_rgba(254,171,50,0.4)]"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 border-border text-foreground hover:border-primary hover:text-primary h-16 px-10 text-lg hover:bg-card"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-accent text-accent-foreground py-4 overflow-hidden border-y border-border/10">
        <div className="whitespace-nowrap flex">
          <div className="animate-marquee flex gap-12 text-lg font-display font-semibold uppercase tracking-wider items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex gap-12 items-center">
                <span>SEO Strategy</span>
                <span className="text-primary">•</span>
                <span>Paid Ads</span>
                <span className="text-primary">•</span>
                <span>Content Marketing</span>
                <span className="text-primary">•</span>
                <span>Community Building</span>
                <span className="text-primary">•</span>
                <span>Brand Identity</span>
                <span className="text-primary">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-background relative border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-32 relative bg-background overflow-hidden">
        {/* Glow blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Why ambitious brands choose us</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">We blend creative thinking with rigorous data analysis to deliver campaigns that actually impact your bottom line.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Target className="w-10 h-10 text-primary" />,
                title: "Data-Driven Strategy",
                desc: "Every decision is backed by analytics. We don't guess; we test, measure, and optimize for maximum ROI."
              },
              {
                icon: <PenTool className="w-10 h-10 text-primary" />,
                title: "Creative Excellence",
                desc: "Stand out in a crowded market with thumb-stopping creative that resonates with your target audience."
              },
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: "Omnichannel Approach",
                desc: "Reach your customers wherever they are with cohesive messaging across all digital touchpoints."
              }
            ].map((prop, idx) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(254,171,50,0.15)] hover:-translate-y-2 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 text-lg">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA Section */}
      <section className="py-32 relative bg-accent overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-white leading-tight">Ready to dominate <br/> your market?</h2>
            <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light">Stop leaving money on the table. Let's build a growth engine for your business.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-white hover:text-accent hover:scale-105 active:scale-95 h-20 px-12 text-xl shadow-[0_0_50px_rgba(254,171,50,0.5)]"
            >
              Get Your Free Proposal
              <ChevronRight className="ml-3 w-8 h-8" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
