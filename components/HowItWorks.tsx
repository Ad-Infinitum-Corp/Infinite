import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Create your account",
    description: "Download the app and verify your identity in under 3 minutes. No paperwork required.",
  },
  {
    step: "02",
    title: "Get your USD details",
    description: "Instantly receive your own routing and account number to share with clients.",
  },
  {
    step: "03",
    title: "Deposit via crypto or cash",
    description: "Send USDC/USDT from your wallet or deposit physical cash through an Infinite agent near you.",
  },
  {
    step: "04",
    title: "Spend anywhere",
    description: "Use your virtual debit card for online purchases or withdraw to your local bank.",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="how-it-works" className="flex justify-center py-32 relative" ref={containerRef}>
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              From zero to <br />
              <span className="text-gradient">global in minutes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We've stripped away the complexity of international banking. No branch visits, no hidden fees, just pure financial freedom.
            </p>
            
            <div className="space-y-8 pt-8">
              {steps.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center font-bold font-mono text-primary bg-primary/5">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 shadow-2xl">
            {/* Abstract UI representation */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            
            <motion.div style={{ y }} className="space-y-4">
              {/* Simulated Notification Stack */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass p-4 rounded-xl flex items-center gap-4 animate-in slide-in-from-bottom duration-1000">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                    <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
                  <div className="h-8 w-16 bg-white/5 rounded" />
                </div>
              ))}
              
              <div className="glass p-6 rounded-2xl mt-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-4 w-32 bg-white/20 rounded" />
                  <div className="h-8 w-8 bg-white/10 rounded-full" />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">$12,450.00</div>
                <div className="text-sm text-white/50">Total Balance</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
