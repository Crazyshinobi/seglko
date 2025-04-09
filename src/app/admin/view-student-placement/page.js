"use client";

import { Eye } from "lucide-react";
import { DataTableColumnHeader } from "@/components/column-header";
import { ViewPage } from "@/components/view-page";
import { Button } from "@/components/ui/button";

export default function page() {
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
      accessorKey: "name",
      id: "name",
      header: "Name",
      filterable: true,
    },
    {
      accessorKey: "course",
      id: "course",
      header: "Course",
      filterable: true,
    },
    {
      accessorKey: "company",
      id: "company",
      header: "Company Name",
      filterable: true,
    },
    {
      accessorKey: "designation",
      id: "designation",
      header: "Job Role (Designation)",
      filterable: true,
    },
    {
      accessorKey: "compensation",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Package (₹ in LPA)" />
      ),
      sortingFn: "basic",
    },
    {
      accessorKey: "Student Image",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_URL}${rowData.image}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm">
              <Eye className="h-4 w-4" />
              View Student Image
            </Button>
          </a>
        );
      },
    },
  ];

  return (
    <ViewPage
      title="Student Placements"
      endpoint="/api/placement"
      columns={columns}
      editableColumns={[
        { id: "name", label: "Name", type: "text" },
        { id: "course", label: "Course", type: "text" },
        { id: "designation", label: "Job Role (Designation)", type: "text" },
        { id: "company", label: "Company Name", type: "text" },
        { id: "compensation", label: "Package (₹ in LPA)", type: "text" },
        { id: "image", label: "Student Image", type: "file" },
      ]}
      emptyMessage={{      
        title: "No Student Placements found",
        description: "Student Placements will appear here once submitted.",
      }}
    />
  );
}
