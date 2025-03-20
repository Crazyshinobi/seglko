"use client";
import { AdminHeader } from "@/components/admin-header";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Seglko Admin - Dashboard";
  }, []);

  return (
    <>
      <AdminHeader heading={"Dashboard"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
