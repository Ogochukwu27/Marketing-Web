import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

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
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Meet the Founders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            The visionaries combining data science, creative storytelling, and growth strategy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg border border-border">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${founder.image}`}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-1">{founder.name}</h3>
              <p className="text-primary font-semibold mb-4">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-border"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join our growing team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for brilliant minds to join our mission. If you're passionate about digital marketing and driving real results, we want to hear from you.
              </p>
              <a href="/contact" className="inline-flex items-center text-primary font-bold text-lg hover:underline">
                View Open Positions →
              </a>
            </div>
            {/* simple generic office stock image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              {/* office environment collaboration */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
