"use client";
import { AdminHeader } from "@/components/admin-header";
import StatCard from "@/components/stats-card";
import { useEffect, useState } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Seglko Admin - Dashboard";
  }, []);

  const [stats , setStats] = useState({})
  const [loading,setLoading] = useState(true)

   useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/count");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }finally{
        setLoading(false)
      }
    }
    fetchStats();
  }, []);


  return (
    <>
      <AdminHeader heading={"Dashboard"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <StatCard   
          title="Total Contact Enquires"
          value={stats.totalContacts}
          loading={loading}
          linkHref="/admin/view-contact"
          />
          <StatCard   
          title="Total Jobs Posted"
          value={stats.totaljobs}
          loading={loading}
          linkHref="/admin/view-job"
          />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
