import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/dashboard/Analytics";
import Team from "./pages/dashboard/Team";
import Billing from "./pages/dashboard/Billing";
import Projects from "./pages/dashboard/Projects";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";
import Support from "./pages/dashboard/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/dashboard/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
            <Route path="/dashboard/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
            <Route path="/dashboard/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="/dashboard/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/dashboard/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
