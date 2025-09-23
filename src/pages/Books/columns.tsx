import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { IBook } from "@/type";
import { type ColumnDef } from "@tanstack/react-table";
import {
  BookCheckIcon,
  CheckCircle,
  ListCheck,
  PenIcon,
  Trash2,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router";
interface Props {
  onEdit: (book: IBook) => void;
  onDelete: (id: string) => void;
  onBorrow: (book: IBook) => void;
}

export const useBookColumns = ({
  onEdit,
  onDelete,
}: Props): ColumnDef<IBook>[] => {
  const navigate = useNavigate();

  return [
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
        const book = row.original;
        return (
          <div className="flex items-center">
            {/* update book */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(book)}
                  >
                    <PenIcon className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Update Book</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* book details */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(book)}
                  >
                    <BookCheckIcon className="w-4 h-4 text-emerald-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Book Details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* borrow book */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => navigate(`/borrow/${book._id}`)}
                    className="text-blue-600"
                  >
                    <ListCheck className="w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Borrow Book</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* delete book */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-red-500"
                    onClick={() => onDelete(book._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete Book</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      },
    },
  ];
};
