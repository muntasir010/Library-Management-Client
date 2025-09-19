import { Button } from "@/components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { CheckCircle, PenIcon, XCircle } from "lucide-react";

export interface IBook {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | " FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}
export const getColumns = (
  onEdit: (item: IBook) => void
): ColumnDef<IBook>[] => [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Availability",
    cell: ({ row }) => {
      const available = row.getValue("available") as boolean;

      return available ? (
        <CheckCircle className="text-green-500 w-5 h-5" />
      ) : (
        <XCircle className="text-red-500 w-5 h-5" />
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div>
          <Button size="icon" variant="ghost" onClick={() => onEdit(item)}>
            <PenIcon className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
