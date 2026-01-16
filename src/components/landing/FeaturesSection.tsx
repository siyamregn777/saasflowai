import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Layers,
  Rocket,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with edge computing and smart caching for sub-100ms response times.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and advanced threat protection built-in.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights with customizable dashboards and AI-powered recommendations.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with role-based access and real-time sync.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with automatic scaling and multi-region support.",
  },
  {
    icon: Layers,
    title: "API First",
    description: "RESTful and GraphQL APIs with comprehensive documentation and SDKs.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "One-click deployments with automatic rollbacks and zero-downtime updates.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Fine-grained permissions with SSO, 2FA, and audit logging.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(199_89%_48%/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to
            <span className="gradient-text"> scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern teams. Build, deploy, and grow with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card variant="interactive" className="h-full">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
