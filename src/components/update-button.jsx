import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export function UpdateButton({ rowData, columns, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(() => {
    // Initialize form data from rowData
    const initialData = {};
    columns.forEach((column) => {
      initialData[column.id] = rowData[column.id] || "";
    });
    return initialData;
  });
  const handleChange = (e, columnId) => {
    setFormData((prev) => ({
      ...prev,
      [columnId]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `/api/placement-update/${rowData._id}`,
        formData
      );

      if (response.data.success) {
        toast.success("Update successful");
        onUpdate(response.data.data);
        setOpen(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="sm">
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Update the record
            </AlertDialogTitle>

            <div className="grid gap-4 py-4">
              {columns.map((column) => (
                <div
                  key={column.id}
                  className="grid grid-cols-4 items-center gap-4"
                >
                  <label htmlFor={column.id} className="text-right">
                    {column.label}
                  </label>
                  <Input
                    id={column.id}
                    type={column.type}
                    value={formData[column.id]}
                    onChange={(e) => handleChange(e, column.id)}
                    className="col-span-3"
                  />
                </div>
              ))}
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>Update</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
