import { motion } from "framer-motion";
import { Globe2, Wallet, Zap, ShieldCheck, RefreshCw, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Globe2,
    title: "Virtual USD Accounts",
    description: "Get a real US bank account number in your name. Receive ACH and Wire transfers from clients like a local.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Deposits",
    description: "Seamlessly deposit via stablecoins (USDC, USDT) or cash via our global network of authorized agents.",
  },
  {
    icon: Wallet,
    title: "Multi-Currency Vaults",
    description: "Hold balances in USD, EUR, and GBP. Exchange between currencies at the real mid-market rate.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money to other Infinite users instantly for free. Withdraw to local banks in 50+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description: "Your funds are safeguarded in regulated US banks. Biometric login and 2FA keep your account secure.",
  },
  {
    icon: Smartphone,
    title: "Built for Mobile",
    description: "Manage your entire financial life from your phone. Instant notifications for every transaction.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section id="features" className="flex justify-center py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Everything you need to <span className="text-primary">grow global</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop losing money on fees and bad exchange rates. Infinite gives you the tools to work with clients worldwide.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="h-full bg-background/50 border-white/10 hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
