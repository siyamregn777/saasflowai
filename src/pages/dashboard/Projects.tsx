import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FolderOpen, Plus, MoreHorizontal, Clock, Users } from "lucide-react";

const projects = [
  {
    name: "E-commerce Platform",
    description: "Full-stack online store with payment integration",
    status: "Active",
    team: 4,
    updated: "2 hours ago",
  },
  {
    name: "Mobile App API",
    description: "RESTful API for iOS and Android applications",
    status: "Active",
    team: 3,
    updated: "1 day ago",
  },
  {
    name: "Analytics Dashboard",
    description: "Real-time data visualization and reporting",
    status: "In Progress",
    team: 2,
    updated: "3 days ago",
  },
  {
    name: "Customer Portal",
    description: "Self-service portal for customer management",
    status: "Paused",
    team: 1,
    updated: "1 week ago",
  },
];

const Projects = () => {
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
              Projects
            </motion.h1>
            <p className="text-muted-foreground">
              Manage and organize all your projects.
            </p>
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="interactive" className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FolderOpen className="w-5 h-5 text-primary" />
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg mt-3">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        project.status === "Active"
                          ? "success"
                          : project.status === "In Progress"
                          ? "warning"
                          : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.team}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {project.updated}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Add New Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.1 }}
          >
            <Card className="h-full border-dashed hover:border-primary/50 transition-colors cursor-pointer group">
              <CardContent className="h-full flex flex-col items-center justify-center p-6 min-h-[200px]">
                <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors mb-4">
                  <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Create New Project
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
