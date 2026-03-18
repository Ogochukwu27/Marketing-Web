import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                T
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                TES-M Marketing
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              We help ambitious brands scale, engage, and convert their audiences into loyal customers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/founders" className="text-gray-400 hover:text-primary transition-colors">Founders</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">SEO & Search</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Social Media</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Content Marketing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Paid Advertising</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest insights and strategies.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TES-M Marketing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
