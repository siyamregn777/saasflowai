import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    trend: "up",
    icon: CreditCard,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.3%",
    trend: "up",
    icon: Users,
  },
  {
    title: "API Requests",
    value: "1.2M",
    change: "+12.5%",
    trend: "up",
    icon: Activity,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
  },
];

const chartData = [
  { name: "Jan", value: 4000, users: 2400 },
  { name: "Feb", value: 3000, users: 1398 },
  { name: "Mar", value: 5000, users: 3800 },
  { name: "Apr", value: 4780, users: 3908 },
  { name: "May", value: 5890, users: 4800 },
  { name: "Jun", value: 6390, users: 5200 },
  { name: "Jul", value: 7490, users: 6100 },
];

const recentActivity = [
  { action: "New user signup", user: "john@example.com", time: "2 min ago" },
  { action: "Subscription upgraded", user: "sarah@startup.io", time: "15 min ago" },
  { action: "API key generated", user: "dev@techcorp.com", time: "1 hour ago" },
  { action: "Invoice paid", user: "billing@acme.com", time: "3 hours ago" },
];

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-2"
          >
            Welcome back, {profile?.full_name?.split(" ")[0] || "User"}!
          </motion.h1>
          <p className="text-muted-foreground">
            Here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="interactive">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge
                      variant={stat.trend === "up" ? "success" : "destructive"}
                      className="flex items-center gap-1"
                    >
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Revenue Overview
                </CardTitle>
                <CardDescription>Monthly revenue performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 28%, 17%)" />
                      <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                      <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(222, 47%, 7%)",
                          border: "1px solid hsl(215, 28%, 17%)",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(199, 89%, 48%)"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  User Growth
                </CardTitle>
                <CardDescription>Active users over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 28%, 17%)" />
                      <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                      <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(222, 47%, 7%)",
                          border: "1px solid hsl(215, 28%, 17%)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="users"
                        stroke="hsl(270, 60%, 55%)"
                        strokeWidth={2}
                        dot={{ fill: "hsl(270, 60%, 55%)", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest events in your workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
