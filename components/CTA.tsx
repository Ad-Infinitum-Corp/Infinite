import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative flex justify-center overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-primary p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold">
              Ready to break free?
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of freelancers who have already switched to Infinite. Open your account today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-14 px-8 rounded-full text-lg w-full sm:w-auto">
                <Download className="mr-2 w-5 h-5" /> Download App
              </Button>
              <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-black/20 hover:bg-black/30 text-white w-full sm:w-auto">
                Visit Help Center
              </Button>
            </div>
            <p className="text-sm text-white/60 pt-4">
              No credit card required. Free standard plan available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
