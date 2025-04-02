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
      accessorKey: "company",
      id: "company",
      header: "Company Name",
      filterable: true,
    },
    {
      accessorKey: "course",
      id: "course",
      header: "Course",
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
      title="Placement Updates"
      endpoint="/api/placement-update"
      columns={columns}
      editableColumns={[
        { id: "company", label: "Company Name", type: "text" },
        { id: "course", label: "Course", type: "text" },
      ]}
      emptyMessage={{
        title: "No Placement Updates found",
        description: "Placement Updates will appear here once submitted.",
      }}
    />
  );
}
