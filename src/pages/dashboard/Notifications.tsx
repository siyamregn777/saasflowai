import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Bell, Check, Mail, CreditCard, Users, AlertTriangle, CheckCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    icon: CheckCircle,
    title: "Payment Successful",
    message: "Your subscription payment of $29.00 was processed successfully.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "info",
    icon: Users,
    title: "New Team Member",
    message: "Emily Brown has joined your team as a member.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    icon: AlertTriangle,
    title: "API Rate Limit Warning",
    message: "You've used 80% of your monthly API requests.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "info",
    icon: Mail,
    title: "Weekly Report Ready",
    message: "Your weekly analytics report is now available.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    type: "info",
    icon: CreditCard,
    title: "Subscription Renewal",
    message: "Your Pro plan will renew on February 1, 2024.",
    time: "3 days ago",
    read: true,
  },
];

const Notifications = () => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-2"
            >
              Notifications
            </motion.h1>
            <p className="text-muted-foreground">
              Stay updated with important alerts and messages.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="glow">{unreadCount} unread</Badge>
            <Button variant="outline">
              <Check className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                All Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 rounded-lg border transition-colors ${
                      notification.read
                        ? "border-border bg-transparent"
                        : "border-primary/30 bg-primary/5"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-2 rounded-lg ${
                          notification.type === "success"
                            ? "bg-success/10 text-success"
                            : notification.type === "warning"
                            ? "bg-warning/10 text-warning"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <notification.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{notification.title}</h4>
                          {!notification.read && (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {notification.message}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
