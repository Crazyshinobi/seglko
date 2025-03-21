"use client";

import axios from "axios";
import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import Image from 'next/image';
export default function page() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("/api/placement");
    const placements = result?.data?.data;
    console.log("placements", placements);
    setData(placements);
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
      accessorKey: "course",
      header: "Course",
    },
    {
      accessorKey: "company",
      header: "Company Name",
    },
    {
      accessorKey: "compensation",
      header: "Package (₹ in LPA)",
    },
    {
      accessorKey: "Student Image",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <Image
            src={rowData.image}
            width={400}
            height={200}
            alt={rowData.name}
          />
        );
      },
    },
  ];

  useEffect(() => {
    document.title = "Seglko Admin - View Placement";
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader heading={"View Placements"} onRefresh={() => fetchData()} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          {data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <p className="text-center p-10">No Data</p>
          )}
        </div>
      </div>
    </>
  );
}
