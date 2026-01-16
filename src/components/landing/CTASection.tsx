import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(199_89%_48%/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-8">
            <Zap className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to accelerate
            <span className="gradient-text block">your growth?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of teams building the future with SaaSFlow. 
            Start your free trial today — no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/auth?mode=signup">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            ✓ 14-day free trial &nbsp;·&nbsp; ✓ No credit card required &nbsp;·&nbsp; ✓ Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
