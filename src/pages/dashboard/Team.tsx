import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Mail, MoreHorizontal, UserPlus, Shield, Clock } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Owner",
    avatar: "JD",
    status: "Active",
    joined: "Jan 2024",
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Admin",
    avatar: "SW",
    status: "Active",
    joined: "Feb 2024",
  },
  {
    name: "Mike Chen",
    email: "mike@example.com",
    role: "Member",
    avatar: "MC",
    status: "Active",
    joined: "Mar 2024",
  },
  {
    name: "Emily Brown",
    email: "emily@example.com",
    role: "Member",
    avatar: "EB",
    status: "Pending",
    joined: "Apr 2024",
  },
];

const Team = () => {
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
              Team
            </motion.h1>
            <p className="text-muted-foreground">
              Manage your team members and their permissions.
            </p>
          </div>
          <Button variant="hero">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Users, label: "Total Members", value: "4" },
            { icon: Shield, label: "Admins", value: "2" },
            { icon: Clock, label: "Pending Invites", value: "1" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>A list of all team members in your organization.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.email}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold text-primary-foreground">
                        {member.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {member.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={member.role === "Owner" ? "gradient" : "outline"}>
                        {member.role}
                      </Badge>
                      <Badge variant={member.status === "Active" ? "success" : "warning"}>
                        {member.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground hidden md:block">
                        {member.joined}
                      </span>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
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

export default Team;
