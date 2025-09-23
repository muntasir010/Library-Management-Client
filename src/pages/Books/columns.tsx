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
  BookOpen,
  CheckCircle,
  Eye,
  PenIcon,
  Trash2,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router";
interface Props {
  onEdit: (book: IBook) => void;
  onDelete: (id: string) => void;
  onBorrow: (book: IBook) => void;
  onDetails: (book: IBook) => void;
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
          <div>
            {/* update book */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(book)}
                  >
                    <PenIcon className="w-4 h-4 text-cyan-500" />
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
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(`/books/${book._id}`)}
                    className="text-blue-600"
                  >
                    <Eye className="h-4 w-4 btn btn-ghost text-blue-500" />
                  </Button>
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDetails(book)}
                  >
                    <Eye className="h-4 w-4 text-blue-500" />
                  </Button> */}
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(`/borrow/${book._id}`)}
                    className="text-blue-600"
                  >
                    <BookOpen className="w-4 text-yellow-500" />
                  </Button>
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
