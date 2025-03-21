"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "../../../components/data-table";
import { toast } from "sonner";
import { AdminHeader } from "@/components/admin-header";
import { DeleteButton } from "@/components/delete-button";
import { Loader2 } from "lucide-react";

export default function page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/contact/${id}`);
      if (response.data.success) {
        setData((prev) => prev.filter((item) => item._id !== id));
        toast.success("Contact deleted successfully");
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
      cell: ({ row }) => row.index + 1, // row index starts from 0, so add 1
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "message",
      header: "Message",
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
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const rowData = row.original;
        return <DeleteButton onDelete={() => handleDelete(rowData._id)} />;
      },
    },
  ];

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get("/api/contact");
      const contacts = result?.data?.data;
      setData(contacts);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      toast.error("Failed to load contacts");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Seglko Admin - View Contact ";
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader heading={"View Contacts"} onRefresh={() => fetchData()} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading contacts...</span>
            </div>
          ) : data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
              <p className="text-lg font-medium">No contacts found</p>
              <p className="text-sm">
                Contacts will appear here once submitted.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
