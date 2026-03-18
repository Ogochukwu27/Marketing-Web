import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Megaphone, PenTool, BarChart, MonitorPlay, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Search className="w-10 h-10" />,
    title: "SEO & Search",
    description: "Dominate search results with technically sound, content-rich strategies that drive compounding organic traffic.",
    features: ["Technical Audits", "Keyword Strategy", "Link Building", "Local SEO"]
  },
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Paid Advertising",
    description: "Highly targeted, ROI-focused ad campaigns across Google, Meta, TikTok, and LinkedIn to scale customer acquisition.",
    features: ["Search Ads", "Social Ads", "Retargeting", "Conversion Tracking"]
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Content Marketing",
    description: "Compelling narratives that educate, engage, and convert your audience at every stage of the funnel.",
    features: ["Blog Strategy", "Whitepapers", "Video Content", "Email Newsletters"]
  },
  {
    icon: <MonitorPlay className="w-10 h-10" />,
    title: "Social Media",
    description: "Build a loyal community and elevate brand awareness with authentic, platform-native social strategies.",
    features: ["Community Management", "Influencer Collabs", "Platform Strategy", "Content Calendar"]
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Brand Strategy",
    description: "Position your company as an industry leader with a cohesive, memorable identity that resonates.",
    features: ["Brand Identity", "Voice & Tone", "Market Positioning", "Competitor Analysis"]
  },
  {
    icon: <BarChart className="w-10 h-10" />,
    title: "Analytics & CRO",
    description: "Turn data into action. We optimize your user journey to convert more of the traffic you already have.",
    features: ["A/B Testing", "UX Audits", "Funnel Optimization", "Custom Dashboards"]
  }
];

export function Services() {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Capabilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Comprehensive digital marketing solutions engineered to accelerate growth and maximize your return on investment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 flex-1">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center text-sm font-medium text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className="inline-flex items-center text-primary font-bold hover:underline group/link mt-auto"
              >
                Discuss this service
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-muted/50 rounded-3xl p-10 lg:p-16 text-center border border-border"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need a custom approach?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. We build tailored strategies that combine multiple disciplines to solve your specific challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg shadow-lg"
          >
            Get a Custom Strategy
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
