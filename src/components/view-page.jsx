"use client";

import axios from "axios";
import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { DeleteButton } from "@/components/delete-button";
import { UpdateButton } from "@/components/update-button";

export function ViewPage({
  title,
  endpoint,
  columns,
  editableColumns,
  refreshInterval,
  emptyMessage = {
    title: "No items found",
    description: "Items will appear here once submitted.",
  },
}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(endpoint);
      const items = result?.data?.data;
      setData(items);
    } catch (error) {
      console.error(`Failed to fetch ${title}:`, error);
      toast.error(`Failed to load ${title}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Add handleDelete function
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${endpoint}/${id}`);
      if (response.data.success) {
        setData((prev) => prev.filter((item) => item._id !== id));
        toast.success(`${title} deleted successfully`);
      }
    } catch (error) {
      console.error(`Failed to delete ${title}:`, error);
      toast.error(error.response?.data?.message || `Failed to delete ${title}`);
    }
  };

  const handleUpdate = (updatedRow) => {
    setData((prev) =>
      prev.map((row) => (row._id === updatedRow._id ? updatedRow : row))
    );
  };

  // Modify columns to include delete button
  const columnsWithActions = [
    ...columns,
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <div className="flex gap-3 items-center">
            {editableColumns && (
              <UpdateButton
              endpoint={endpoint}
                rowData={rowData}
                columns={editableColumns}
                onUpdate={handleUpdate}
              />
            )}
            <DeleteButton onDelete={() => handleDelete(rowData._id)} />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    document.title = `Seglko Admin - View ${title}`;
    fetchData();

    if (refreshInterval) {
      const interval = setInterval(fetchData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [title, endpoint, refreshInterval]);

  const handleFilterChange = (event, columnId) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnId]: value,
    }));
  };

  const filteredData = data.filter((row) => {
    return Object.entries(filters).every(([columnId, filterValue]) => {
      if (!filterValue) return true;
      const cellValue = row[columnId]?.toString()?.toLowerCase();
      return cellValue?.includes(filterValue.toLowerCase());
    });
  });

  return (
    <>
      <AdminHeader heading={`View ${title}`} onRefresh={fetchData} />
      <div className="flex justify-center flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading {title}...</span>
            </div>
          ) : data.length > 0 ? (
            <>
              <div className="mb-4">
                <div className="flex gap-4">
                  {columns.map((column) =>
                    column.filterable ? (
                      <div key={column.id} className="flex flex-col">
                        <Input
                          id={column.id}
                          placeholder={`Filter ${column.header}s...`}
                          value={filters[column.id] || ""}
                          onChange={(e) => handleFilterChange(e, column.id)}
                        />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
              <DataTable columns={columnsWithActions} data={filteredData} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
              <p className="text-lg font-medium">{emptyMessage.title}</p>
              <p className="text-sm">{emptyMessage.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
