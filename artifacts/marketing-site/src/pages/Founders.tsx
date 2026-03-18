import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const founders = [
  {
    name: "Elena Rostova",
    role: "CEO & Strategy Lead",
    bio: "With over 15 years in digital marketing, Elena previously led growth at two Fortune 500 tech companies before founding TES-M Marketing. She specializes in full-funnel performance strategy.",
    image: "founder-1.png",
  },
  {
    name: "Marcus Chen",
    role: "Chief Creative Officer",
    bio: "Marcus brings award-winning design experience to TES-M Marketing. His campaigns have generated millions of views and reshaped brand identities for both startups and legacy enterprises.",
    image: "founder-2.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Data & Analytics",
    bio: "A former data scientist, Sarah turns complex datasets into actionable growth levers. She built TES-M Marketing's proprietary analytics framework that guarantees ROI transparency.",
    image: "founder-3.png",
  }
];

export function Founders() {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
          >
            Our Leadership
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-8"
          >
            Meet the Founders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            The visionaries combining data science, creative storytelling, and growth strategy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-card bg-muted/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl mix-blend-overlay z-10" />
                
                <img 
                  src={`${import.meta.env.BASE_URL}images/${founder.image}`}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 z-20">
                  <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:scale-110">
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-display font-extrabold mb-2">{founder.name}</h3>
              <p className="text-primary font-bold text-lg mb-4">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-40 bg-card border border-border shadow-2xl rounded-[3rem] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Join our growing team</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                We're always looking for brilliant minds to join our mission. If you're passionate about digital marketing and driving real results, we want to hear from you.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg shadow-xl hover:scale-105 active:scale-95 w-fit">
                View Open Positions
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-20 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                alt="Team collaboration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
