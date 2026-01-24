import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Apple, Play } from "lucide-react";
import heroBg from "@dark_futuristic_cybernetic_financial_network_background.png";
import appMock from "@modern_smartphone_displaying_translucent_neobank_app_interface.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-10" />
        <img
          src="/dark_futuristic_cybernetic_financial_network_background.png"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
            <span className="flex w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
            Now available globally
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
            Banking without <br />
            <span className="text-gradient">Boundaries</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Open a virtual USD account in seconds. Deposit via crypto or cash agents, spend globally, and get paid like a local—wherever you are.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1"><Apple className="w-4 h-4" /> iOS</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1"><Play className="w-4 h-4" /> Android</span>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            {/* Trusted by logos placeholder */}
            <p className="text-sm font-medium text-muted-foreground">Trusted by 50,000+ freelancers</p>
          </div>
        </motion.div>

        {/* App Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
            <img
              src="modern_smartphone_displaying_translucent_neobank_app_interface.png"
              alt="Infinite App Interface"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl rounded-[3rem] border-[8px] border-white/10"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -right-8 glass p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                $
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Payment Received</p>
                <p className="font-bold text-sm">+$2,450.00 USD</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-40 -left-12 glass p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                ❄️
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Exchange Rate</p>
                <p className="font-bold text-sm">1 USDC = 1.00 USD</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
