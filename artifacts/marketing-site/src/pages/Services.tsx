import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Megaphone, PenTool, BarChart, MonitorPlay, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Search",
    description: "Dominate search results with technically sound, content-rich strategies that drive compounding organic traffic.",
    features: ["Technical Audits", "Keyword Strategy", "Link Building", "Local SEO"]
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Paid Advertising",
    description: "Highly targeted, ROI-focused ad campaigns across Google, Meta, TikTok, and LinkedIn to scale customer acquisition.",
    features: ["Search Ads", "Social Ads", "Retargeting", "Conversion Tracking"]
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Marketing",
    description: "Compelling narratives that educate, engage, and convert your audience at every stage of the funnel.",
    features: ["Blog Strategy", "Whitepapers", "Video Content", "Email Newsletters"]
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Social Media",
    description: "Build a loyal community and elevate brand awareness with authentic, platform-native social strategies.",
    features: ["Community Management", "Influencer Collabs", "Platform Strategy", "Content Calendar"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "Position your company as an industry leader with a cohesive, memorable identity that resonates.",
    features: ["Brand Identity", "Voice & Tone", "Market Positioning", "Competitor Analysis"]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics & CRO",
    description: "Turn data into action. We optimize your user journey to convert more of the traffic you already have.",
    features: ["A/B Testing", "UX Audits", "Funnel Optimization", "Custom Dashboards"]
  }
];

export function Services() {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight"
          >
            Capabilities that drive <span className="text-primary">impact.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Comprehensive digital marketing solutions engineered to accelerate growth and maximize your return on investment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(254,171,50,0.15)] hover:border-primary/50 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:from-primary group-hover:to-orange-500 group-hover:text-white transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 flex-1 text-lg">
                {service.description}
              </p>
              
              <div className="h-px w-full bg-border/50 mb-8 group-hover:bg-primary/20 transition-colors" />

              <ul className="space-y-4 mb-10">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center text-base font-medium text-foreground/80">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className="inline-flex items-center text-primary font-bold text-lg hover:text-primary/80 group/link mt-auto transition-colors"
              >
                Discuss this service
                <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 relative rounded-[3rem] overflow-hidden bg-accent text-accent-foreground p-12 lg:p-20 text-center shadow-2xl"
        >
          <div className="absolute inset-0 mesh-bg opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 text-white">Need a custom approach?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
              Every business is unique. We build tailored strategies that combine multiple disciplines to solve your specific challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-white hover:text-accent hover:scale-105 active:scale-95 h-16 px-10 text-lg shadow-xl"
            >
              Get a Custom Strategy
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
