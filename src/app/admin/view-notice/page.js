"use client";

import { ViewPage } from "@/components/view-page";
import { DataTableColumnHeader } from "@/components/column-header";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

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
      id: "title",
      accessorKey: "title",
      header: "Title",
      filterable: true,
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
      id: "image",
      header: "Notice Image",
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
              View Notice Image
            </Button>
          </a>
        );
      },
    },
  ];

  return (
    <ViewPage
      title="Notices"
      endpoint="/api/notice"
      columns={columns}
      editableColumns={[
        { id: "title", label: "Title", type: "text" },
        { id: "image", label: "Notice Image", type: "file" },
      ]}
      emptyMessage={{
        title: "No notices found",
        description: "Notices will appear here once submitted.",
      }}
    />
  );
}
