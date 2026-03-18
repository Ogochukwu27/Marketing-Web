import { Link } from "wouter";
import { ArrowRight, BarChart3, Globe, PenTool, Target, Zap, ChevronRight } from "lucide-react";
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Abstract dark background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20"
            >
              <Zap className="w-4 h-4" />
              <span>Digital Marketing Agency of the Year</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              We don't just market.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                We multiply growth.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              Nexus is a performance-driven digital marketing agency helping modern brands scale through data, creative, and precision execution.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-100 h-14 px-8 text-lg shadow-xl shadow-primary/25"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 bg-background border-2 border-border text-foreground hover:border-primary hover:text-primary h-14 px-8 text-lg"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why ambitious brands choose us</h2>
            <p className="text-lg text-muted-foreground">We blend creative thinking with rigorous data analysis to deliver campaigns that actually impact your bottom line.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "Data-Driven Strategy",
                desc: "Every decision is backed by analytics. We don't guess; we test, measure, and optimize for maximum ROI."
              },
              {
                icon: <PenTool className="w-8 h-8 text-primary" />,
                title: "Creative Excellence",
                desc: "Stand out in a crowded market with thumb-stopping creative that resonates with your target audience."
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Omnichannel Approach",
                desc: "Reach your customers wherever they are with cohesive messaging across all digital touchpoints."
              }
            ].map((prop, idx) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Ready to dominate your market?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">Stop leaving money on the table. Let's build a growth engine for your business.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 bg-white text-primary hover:bg-gray-100 hover:scale-[1.02] active:scale-100 h-16 px-10 text-lg shadow-xl"
          >
            Get Your Free Proposal
            <ChevronRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
