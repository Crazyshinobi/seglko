"use client";

import axios from "axios";
import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/column-header";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

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
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="S.No" />
      ),
      accessorFn: (_, index) => index + 1,
      sortingFn: "basic",
    },
    {
      id: "title",
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "createdAt",
      id: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) =>
        row.original.createdAt.split("T")[0].split("-").reverse().join("-"),
      sortingFn: "datetime",
    },
    {
      accessorKey: "image",
      id: "image", // Ensure it has a unique ID
      header: "Notice Image",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <div className="flex items-center justify-center">
            <img
              src={rowData.image}
              alt={rowData.name}
              className="w-28 h-16 object-cover rounded-md border shadow-sm"
              loading="lazy"
            />
          </div>
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
      <AdminHeader heading={"View Notice"} onRefresh={() => fetchData()} />
      <div className="flex justify-center flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
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
              <p className="text-sm">
                Notices will appear here once submitted.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
