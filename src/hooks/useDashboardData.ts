import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export interface DashboardMetric {
  id: string;
  user_id: string;
  date: string;
  revenue: number;
  active_users: number;
  api_requests: number;
  conversion_rate: number;
  page_views: number;
  created_at: string;
}

export interface ActivityLogEntry {
  id: string;
  user_id: string;
  action: string;
  description: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
}

function calcChange(current: number, previous: number): string {
  if (previous === 0) return current > 0 ? "+100%" : "0%";
  const pct = ((current - previous) / previous) * 100;
  return `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
}

export function useDashboardMetrics() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["dashboard-metrics", user?.id],
    enabled: !!user?.id,
    queryFn: async () => {
      // Get last 7 months of data for charts
      const sevenMonthsAgo = new Date();
      sevenMonthsAgo.setMonth(sevenMonthsAgo.getMonth() - 7);

      const { data, error } = await supabase
        .from("dashboard_metrics")
        .select("*")
        .eq("user_id", user!.id)
        .gte("date", sevenMonthsAgo.toISOString().split("T")[0])
        .order("date", { ascending: true });

      if (error) throw error;

      const metrics = (data || []) as DashboardMetric[];

      // Aggregate totals for current month vs previous month
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      const currentMonthData = metrics.filter((m) => {
        const d = new Date(m.date);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      });

      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const prevMonthData = metrics.filter((m) => {
        const d = new Date(m.date);
        return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
      });

      const sum = (arr: DashboardMetric[], key: keyof DashboardMetric) =>
        arr.reduce((acc, m) => acc + Number(m[key] || 0), 0);
      const avg = (arr: DashboardMetric[], key: keyof DashboardMetric) =>
        arr.length ? sum(arr, key) / arr.length : 0;

      const totalRevenue = sum(currentMonthData, "revenue");
      const prevRevenue = sum(prevMonthData, "revenue");
      const totalUsers = sum(currentMonthData, "active_users");
      const prevUsers = sum(prevMonthData, "active_users");
      const totalRequests = sum(currentMonthData, "api_requests");
      const prevRequests = sum(prevMonthData, "api_requests");
      const avgConversion = avg(currentMonthData, "conversion_rate");
      const prevConversion = avg(prevMonthData, "conversion_rate");

      // Monthly chart data - aggregate by month
      const monthlyMap = new Map<string, { revenue: number; users: number }>();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      metrics.forEach((m) => {
        const d = new Date(m.date);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        const existing = monthlyMap.get(key) || { revenue: 0, users: 0 };
        existing.revenue += Number(m.revenue);
        existing.users += Number(m.active_users);
        monthlyMap.set(key, existing);
      });

      const chartData = Array.from(monthlyMap.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, val]) => {
          const month = parseInt(key.split("-")[1]);
          return { name: monthNames[month], value: val.revenue, users: val.users };
        });

      return {
        stats: {
          totalRevenue,
          revenueChange: calcChange(totalRevenue, prevRevenue),
          revenueTrend: totalRevenue >= prevRevenue ? "up" : "down",
          activeUsers: totalUsers,
          usersChange: calcChange(totalUsers, prevUsers),
          usersTrend: totalUsers >= prevUsers ? "up" : "down",
          apiRequests: totalRequests,
          requestsChange: calcChange(totalRequests, prevRequests),
          requestsTrend: totalRequests >= prevRequests ? "up" : "down",
          conversionRate: avgConversion,
          conversionChange: calcChange(avgConversion, prevConversion),
          conversionTrend: avgConversion >= prevConversion ? "up" : "down",
        },
        chartData,
        hasData: metrics.length > 0,
      };
    },
  });
}

export function useActivityLog() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["activity-log", user?.id],
    enabled: !!user?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("activity_log")
        .select("*")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) throw error;
      return (data || []) as ActivityLogEntry[];
    },
  });
}

export function formatCurrency(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toString();
}

export function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
}
