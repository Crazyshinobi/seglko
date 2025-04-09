"use client";
import { DataTableColumnHeader } from "@/components/column-header";
import { ViewPage } from "@/components/view-page";

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
      accessorKey: "subject",
      id: "subject",
      header: "Subject",
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
  ];

  return (
    <ViewPage
      title="Jobs"
      endpoint="/api/job"
      columns={columns}
      editableColumns={[
        { id: "name", label: "Name", type: "text" },
        { id: "subject", label: "Subject", type: "text" },
      ]}
      emptyMessage={{
        title: "No Jobs found",
        description: "Jobs will appear here once submitted.",
      }}
    />
  );
}
