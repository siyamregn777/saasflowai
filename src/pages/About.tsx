import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Building the future of
              <span className="gradient-text"> SaaS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to help ambitious teams build, scale, and succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "10,000+", desc: "Active Users" },
              { icon: Target, title: "99.9%", desc: "Uptime SLA" },
              { icon: Rocket, title: "500M+", desc: "API Requests" },
              { icon: Heart, title: "4.9/5", desc: "Customer Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card variant="glass" className="text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl font-bold">{stat.title}</p>
                    <p className="text-muted-foreground text-sm">{stat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
