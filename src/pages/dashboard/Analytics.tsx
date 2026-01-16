import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Clock,
  MousePointer,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const pageViews = [
  { name: "Mon", views: 4000 },
  { name: "Tue", views: 3000 },
  { name: "Wed", views: 5000 },
  { name: "Thu", views: 4500 },
  { name: "Fri", views: 6000 },
  { name: "Sat", views: 3500 },
  { name: "Sun", views: 4200 },
];

const trafficSources = [
  { name: "Direct", value: 400, color: "hsl(199, 89%, 48%)" },
  { name: "Organic", value: 300, color: "hsl(270, 60%, 55%)" },
  { name: "Referral", value: 200, color: "hsl(142, 76%, 36%)" },
  { name: "Social", value: 100, color: "hsl(38, 92%, 50%)" },
];

const topPages = [
  { page: "/dashboard", views: 12500, bounce: "32%" },
  { page: "/pricing", views: 8400, bounce: "45%" },
  { page: "/features", views: 6200, bounce: "38%" },
  { page: "/about", views: 4100, bounce: "52%" },
  { page: "/blog", views: 3800, bounce: "41%" },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-2"
          >
            Analytics
          </motion.h1>
          <p className="text-muted-foreground">
            Track your performance and user engagement.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, label: "Total Visitors", value: "45.2K", change: "+12%" },
            { icon: MousePointer, label: "Click Rate", value: "4.5%", change: "+0.8%" },
            { icon: Clock, label: "Avg. Session", value: "2m 34s", change: "+15s" },
            { icon: Globe, label: "Bounce Rate", value: "38%", change: "-5%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <Badge variant="success" className="text-xs">{stat.change}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Page Views Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Page Views
                </CardTitle>
                <CardDescription>Daily page views this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pageViews}>
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
                      <Bar dataKey="views" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  Traffic Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(222, 47%, 7%)",
                          border: "1px solid hsl(215, 28%, 17%)",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {trafficSources.map((source) => (
                    <div key={source.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        />
                        <span className="text-sm">{source.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{source.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Page</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Views</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((page) => (
                      <tr key={page.page} className="border-b border-border last:border-0">
                        <td className="py-3 font-mono text-sm">{page.page}</td>
                        <td className="py-3 text-right">{page.views.toLocaleString()}</td>
                        <td className="py-3 text-right text-muted-foreground">{page.bounce}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
