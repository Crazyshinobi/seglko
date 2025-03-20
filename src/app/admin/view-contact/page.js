"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "../../../components/data-table";
import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";
import { toast } from "sonner";
import { AdminHeader } from "@/components/admin-header";

export default function page() {
  const [data, setData] = useState([]);

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
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleDelete(rowData._id)}
          >
            <Archive className="h-4 w-4" />
            Delete
          </Button>
        );
      },
    },
  ];

  const fetchData = async () => {
    const result = await axios.get("/api/contact");
    const contacts = result?.data?.data;
    console.log("contacts", contacts)
    setData(contacts);
  };

  useEffect(() => {
    document.title = "Seglko Admin - View Contact ";
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader heading={"View Contacts"}/>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          {data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <p className="text-center p-10">No Contacts</p>
          )}
        </div>
      </div>
    </>
  );
}
