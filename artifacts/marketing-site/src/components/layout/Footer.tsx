import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-primary-foreground font-display font-extrabold text-2xl shadow-lg shadow-primary/20">
                T
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                TES-M Marketing
              </span>
            </Link>
            <p className="text-lg text-white/70 max-w-md leading-relaxed">
              We help ambitious brands scale, engage, and convert their audiences into loyal customers through data-driven digital strategies.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-xl text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors font-medium">Services</Link></li>
              <li><Link href="/founders" className="text-white/70 hover:text-primary transition-colors font-medium">Founders</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors font-medium">Careers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-xl text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors font-medium">SEO & Search</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors font-medium">Social Media</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors font-medium">Content Marketing</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors font-medium">Paid Advertising</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xl text-white mb-6">Newsletter</h3>
            <p className="text-white/70 mb-6 font-medium">Stay updated with our latest insights and strategies.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-primary text-primary-foreground px-4 rounded-xl hover:bg-primary/90 transition-colors font-bold flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} TES-M Marketing. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
