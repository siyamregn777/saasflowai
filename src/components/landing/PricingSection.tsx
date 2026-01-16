import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "forever",
    features: [
      "Up to 3 projects",
      "1,000 API requests/month",
      "Basic analytics",
      "Community support",
      "1 team member",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing businesses",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited projects",
      "100,000 API requests/month",
      "Advanced analytics",
      "Priority support",
      "Up to 10 team members",
      "Custom integrations",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Unlimited API requests",
      "Dedicated support",
      "Unlimited team members",
      "SSO & SAML",
      "Custom SLA",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_60%_55%/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plans that scale
            <span className="gradient-text"> with you</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant={plan.popular ? "glow" : "default"}
                className={`h-full relative ${plan.popular ? 'scale-105 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="gradient" className="py-1 px-4">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/auth?mode=signup">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
