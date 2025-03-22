"use client";

import axios from "axios";
import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get("/api/notice");
      const placements = result?.data?.data;
      setData(placements);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      toast.error("Failed to load contacts");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    {
      id: "serialNo",
      header: "S.No",
      cell: ({ row }) => row.index + 1, // row index starts from 0, so add 1
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      header: "Date",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
        rowData.createdAt.split("T")[0].split("-").reverse().join("-")
        );
      },
    },
    {
      header: "Notice Image",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <Image
            src={rowData.image}
            width={280}
            height={160}
            alt={rowData.name}
            className="object-cover rounded-md"
          />
        );
      },
    },
  ];

  useEffect(() => {
    document.title = "Seglko Admin - View Notices";
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader heading={"View Placements"} onRefresh={() => fetchData()} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading Notices...</span>
            </div>
          ) : data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
              <p className="text-lg font-medium">No Notices found</p>
              <p className="text-sm">Notices will appear here once submitted.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
