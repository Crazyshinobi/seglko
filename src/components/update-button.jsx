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

export function UpdateButton({ endpoint, rowData, columns, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(() => {
    // Initialize form data from rowData
    const initialData = {};
    columns.forEach((column) => {
      if (column.type !== "file") {
        initialData[column.id] = rowData[column.id] || "";
      }
    });
    return initialData;
  });
  const handleChange = (e, columnId, type) => {
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [columnId]: e.target.files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [columnId]: e.target.value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const submitFormData = new FormData();

      columns.forEach((column) => {
        if (column.type === "file") {
          if (formData[column.id]) {
            submitFormData.append(column.id, formData[column.id]);
          }
        } else {
          submitFormData.append(column.id, formData[column.id]);
        }
      });

      const response = await axios.patch(
        `${endpoint}/${rowData._id}`,
        submitFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        toast.success("Update successful");
        onUpdate(response.data.data);
        setLoading(false);
        setOpen(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
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

            <div className="grid sm:grid-cols-12 gap-6 py-4">
              {columns.map((column) => (
                <div
                  key={column.id}
                  className="lg:col-span-12 flex flex-col items-start gap-2"
                >
                  <Label htmlFor={column.id} className="text-right">
                    {column.label}
                  </Label>
                  {column.type === "file" ? (
                    <Input
                      id={column.id}
                      type="file"
                      onChange={(e) => handleChange(e, column.id, "file")}
                      className="col-span-3"
                      accept="image/*"
                    />
                  ) : (
                    <Input
                      id={column.id}
                      type={column.type}
                      value={formData[column.id]}
                      onChange={(e) => handleChange(e, column.id)}
                      className="col-span-3"
                    />
                  )}
                </div>
              ))}
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex mt-3">
            <AlertDialogCancel className="basis-1/2 w-100">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={loading}
              className="basis-1/2 w-100"
              onClick={handleSubmit}
            >
              {loading ? "Updating...." : "Update"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
