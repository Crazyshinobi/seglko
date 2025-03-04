"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";

export default function page() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contact/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
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
            onClick={() => handleDelete(rowData._id)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const fetchData = async () => {
    const result = await axios.get("/api/contact");
    const contacts = result?.data?.data;
    setData(contacts);
  };

  useEffect(() => {
    document.title = "View Contact - Seglko Admin";
    fetchData();
  }, []);

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <p>View Contacts</p>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          {data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <p className="text-center p-10">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
