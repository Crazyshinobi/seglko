"use client";

import { DataTableColumnHeader } from "@/components/column-header";
import { ViewPage } from "@/components/view-page";

export default function Page() {

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
      id: "name",
      accessorKey: "name",
      header: "Name",
      sortingFn: "alphanumeric",
      filterable: true,
    },
    {
      accessorKey: "email",
      id: "email",
      header: "Email",
      filterable: true,
    },
    {
      accessorKey: "message",
      header: "Message",
      cell: ({ row }) => (
        <textarea
          value={row.original.message}
          disabled
          className="w-full p-2 border rounded bg-gray-100 text-gray-700 resize-none"
          rows={3}
        />
      ),
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
    }
  ];

  return (
    <ViewPage
      title="Contacts"
      endpoint="/api/contact"
      columns={columns}
      emptyMessage={{
        title: "No contacts found",
        description: "Contacts will appear here once submitted.",
      }}
    />
  );
}
