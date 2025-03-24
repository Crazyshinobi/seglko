"use client";
import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { DataTable } from "../../../components/data-table";
import { DataTableColumnHeader } from "@/components/column-header";
import { UpdateButton } from "@/components/update-button";
import { DeleteButton } from "@/components/delete-button";
import { toast } from "sonner";
import axios from "axios";
import { Input } from "@/components/ui/input";

export default function page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get("/api/placement-update");
      const placementUpdates = result?.data?.data;
      setData(placementUpdates);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      toast.error("Failed to load contacts");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/placement-update/${id}`);
      if (response.data.success) {
        setData((prev) => prev.filter((item) => item._id !== id));
        toast.success(
          response.data.message || "Placement Update deleted successfully"
        );
      }
    } catch (error) {
      console.error("Failed to delete:", error);
      toast.error(error.response?.data?.message || "Failed to delete contact");
    }
  };

  const handleUpdate = (updatedRow) => {
    setData((prev) =>
      prev.map((row) => (row._id === updatedRow._id ? updatedRow : row))
    );
  };

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
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <div className="flex gap-3 items-center">
            <UpdateButton
              rowData={rowData}
              columns={[
                { id: "company", label: "Company Name", type: "text" },
                { id: "course", label: "Course", type: "text" },
              ]}
              onUpdate={handleUpdate}
            />
            <DeleteButton onDelete={() => handleDelete(rowData._id)} />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    document.title = "Seglko Admin - View Placement Updates ";
    fetchData();
  }, []);

  const handleFilterChange = (event, columnId) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnId]: value,
    }));
  };

  const filteredData = data.filter((row) => {
    return Object.entries(filters).every(([columnId, filterValue]) => {
      if (!filterValue) return true; // If no filter, show all
      const cellValue = row[columnId]?.toString()?.toLowerCase();
      return cellValue?.includes(filterValue.toLowerCase());
    });
  });

  return (
    <>
      <AdminHeader
        heading={"View Placement Updates"}
        onRefresh={() => fetchData()}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading Placements Update...</span>
            </div>
          ) : data.length > 0 ? (
            <>
              <div className="mb-4">
                {/* Filters Section */}
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
              <DataTable columns={columns} data={filteredData} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
              <p className="text-lg font-medium">No Placement Updates found</p>
              <p className="text-sm">
                Placement Updates will appear here once submitted.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
