import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/newsletter", label: "Newsletter" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 ${
          isScrolled ? "glassmorphism border border-border/50 shadow-lg shadow-black/5" : "bg-transparent"
        }`}>
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-primary-foreground font-display font-extrabold text-2xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              T
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">TES-M Marketing</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:text-primary relative group ${
                  location === link.href ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:scale-105 h-12 px-8 group shadow-xl"
            >
              Start Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 glassmorphism border border-border/50 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-lg font-bold transition-colors ${
                    location === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border/50">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center rounded-xl text-lg font-bold transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground h-14 shadow-md"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
