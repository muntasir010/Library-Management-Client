import { Button } from "@/components/ui/button";
import type { IBook } from "@/type";
import { type ColumnDef } from "@tanstack/react-table";
import {
  BookCheckIcon,
  CheckCircle,
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
          <div>
            <Button size="icon" variant="ghost" onClick={() => onEdit(book)}>
              <PenIcon className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-red-500"
              onClick={() => onDelete(book._id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>

            <button
              onClick={() => navigate(`/borrow/${book._id}`)}
              className="text-blue-600"
            >
              <BookCheckIcon />
            </button>
          </div>
        );
      },
    },
  ];
};

// import { Button } from "@/components/ui/button";
// import type { IBook } from "@/type";
// import { type ColumnDef } from "@tanstack/react-table";
// import { BookCheck, PenIcon, Trash2 } from "lucide-react";

// interface Props {
//   onEdit: (book: IBook) => void;
//   onDelete: (id: string) => void;
//   onBorrow: (book: IBook) => void;
// }

// export function useBookColumns({ onEdit, onDelete, onBorrow }: Props): ColumnDef<IBook>[] {
//   return [
//     {
//       accessorKey: "title",
//       header: "Title",
//     },
//     {
//       accessorKey: "author",
//       header: "Author",
//     },
//     {
//       accessorKey: "genre",
//       header: "Genre",
//     },
//     {
//       accessorKey: "isbn",
//       header: "ISBN",
//     },
//     {
//       accessorKey: "copies",
//       header: "Copies",
//     },
//     {
//       accessorKey: "available",
//       header: "Availability",
//       cell: ({ row }) => {
//         const available = row.getValue("available") as boolean;
//         return available ? (
//           <span className="text-green-500 font-medium">Available</span>
//         ) : (
//           <span className="text-red-500 font-medium">Unavailable</span>
//         );
//       },
//     },
//     {
//       id: "actions",
//       header: "Actions",
//       cell: ({ row }) => {
//         const book = row.original;
//         return (
//           <div className="flex gap-2">
//             <Button size="icon" variant="ghost" onClick={() => onEdit(book)}>
//               <PenIcon className="w-4 h-4" />
//             </Button>
//             <Button
//               size="icon"
//               variant="ghost"
//               className="text-red-500"
//               onClick={() => onDelete(book._id)}
//             >
//               <Trash2 className="w-4 h-4" />
//             </Button>
//             <Button
//               size="icon"
//               variant="ghost"
//               className="text-blue-500"
//               onClick={() => onBorrow(book)}
//             >
//               <BookCheck className="w-4 h-4" />
//             </Button>
//           </div>
//         );
//       },
//     },
//   ];
// }
