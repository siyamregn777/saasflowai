import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Check, CreditCard, Download, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: ["3 projects", "1,000 API requests", "Basic analytics", "Community support"],
    current: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    features: ["Unlimited projects", "100K API requests", "Advanced analytics", "Priority support", "API access"],
    current: false,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    features: ["Everything in Pro", "Unlimited API", "Dedicated support", "SSO & SAML", "Custom SLA"],
    current: false,
  },
];

const invoices = [
  { id: "INV-001", date: "Jan 1, 2024", amount: "$29.00", status: "Paid" },
  { id: "INV-002", date: "Dec 1, 2023", amount: "$29.00", status: "Paid" },
  { id: "INV-003", date: "Nov 1, 2023", amount: "$29.00", status: "Paid" },
];

const Billing = () => {
  const { profile } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-2"
          >
            Billing
          </motion.h1>
          <p className="text-muted-foreground">
            Manage your subscription and payment methods.
          </p>
        </div>

        {/* Current Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <Badge variant="gradient" className="mb-2">Current Plan</Badge>
                  <h3 className="text-2xl font-bold">
                    {profile?.subscription_plan?.charAt(0).toUpperCase() + profile?.subscription_plan?.slice(1) || "Free"} Plan
                  </h3>
                  <p className="text-muted-foreground">
                    You're on the {profile?.subscription_plan || "free"} plan. Upgrade to unlock more features.
                  </p>
                </div>
                <Button variant="hero" asChild>
                  <Link to="/pricing">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Upgrade Plan
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Plans Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.popular ? "glow" : "default"}
                className={plan.current ? "border-primary/50" : ""}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.popular && <Badge variant="gradient">Popular</Badge>}
                    {plan.current && <Badge variant="outline">Current</Badge>}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.current ? "outline" : plan.popular ? "hero" : "default"}
                    className="w-full"
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                    {!plan.current && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Payment Method & Invoices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg border border-border bg-muted/30">
                  <p className="text-muted-foreground text-center py-4">
                    No payment method on file. Add one to upgrade your plan.
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>Download past invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border"
                    >
                      <div>
                        <p className="font-medium">{invoice.id}</p>
                        <p className="text-sm text-muted-foreground">{invoice.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{invoice.amount}</span>
                        <Badge variant="success">{invoice.status}</Badge>
                        <Button variant="ghost" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
