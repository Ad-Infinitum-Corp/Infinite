import Link  from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, Globe, Download } from "lucide-react";
import { useState, useEffect } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
              ∞
            </div>
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
              Infinite
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How it Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Stories
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </Button>
            <Button className="rounded-full px-6 font-medium shadow-lg shadow-primary/20">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-background border-b border-border md:hidden p-4 flex flex-col space-y-4 shadow-2xl"
        >
          <a href="#features" className="text-lg font-medium p-2 hover:bg-muted rounded-lg" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="text-lg font-medium p-2 hover:bg-muted rounded-lg" onClick={() => setIsOpen(false)}>
            How it Works
          </a>
          <a href="#testimonials" className="text-lg font-medium p-2 hover:bg-muted rounded-lg" onClick={() => setIsOpen(false)}>
            Stories
          </a>
          <Button className="w-full gap-2" size="lg">
            <Download className="w-4 h-4" /> Download App
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
