"use client";
import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { DataTable } from "../../../components/data-table";
import { DeleteButton } from "@/components/delete-button";
import { toast } from "sonner";
import axios from "axios";

export default function page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get("/api/placement-update");
      const placementUpdates = result?.data?.data;
      setData(placementUpdates);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      toast.error("Failed to load contacts");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/placement-update/${id}`);
      if (response.data.success) {
        setData((prev) => prev.filter((item) => item._id !== id));
        toast.success(response.data.message || "Placement Update deleted successfully");
      }
    } catch (error) {
      console.error("Failed to delete:", error);
      toast.error(error.response?.data?.message || "Failed to delete contact");
    }
  };

  const columns = [
    {
      id: "serialNo",
      header: "S.No",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "company",
      header: "Company Name",
    },
    {
      accessorKey: "course",
      header: "Course",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const rowData = row.original;
        return <DeleteButton onDelete={() => handleDelete(rowData._id)} />;
      },
    },
  ];

  useEffect(() => {
    document.title = "Seglko Admin - View Placement Updates ";
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader
        heading={"View Placement Updates"}
        onRefresh={() => fetchData()}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading Placements Update...</span>
            </div>
          ) : data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
              <p className="text-lg font-medium">No Placements Update found</p>
              <p className="text-sm">
                Placements Update will appear here once submitted.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
