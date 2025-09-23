import { useBookColumns } from "./columns";
import { DataTable } from "./DataTable";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/api/booksCreatedApi";
import { useState } from "react";
import UpdateForm from "../UpdateBook/UpdateBook";
import type { IBook } from "@/type";
import { BorrowBookModal } from "../Borrow/BorrowBookModal";
import Spinners from "@/Spinners/Spinners";
import { BookDetailsModal } from "./BookDetailsModal";

export default function Books() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books: IBook[] = data?.data || [];

  const [editBook, setEditBook] = useState<IBook | null>(null);
  const [borrowBookData, setBorrowBookData] = useState<IBook | null>(null);
  const [detailsBook, setDetailsBook] = useState<IBook | null>(null);
  const [deleteBook] = useDeleteBookMutation();

  const columns = useBookColumns({
    onEdit: (book) => setEditBook(book),
    onDelete: (id) => deleteBook(id),
    onBorrow: (book) => setBorrowBookData(book),
    onDetails: (book) => setDetailsBook(book),
  });
  if (isLoading) {
    return <Spinners />;
  }
  return (
    <div>
      <DataTable columns={columns} data={books} />

      {/* Update Form */}
      {editBook && (
        <UpdateForm
          book={editBook}
          open={true}
          onClose={() => setEditBook(null)}
        />
      )}

      {/* Borrow Modal */}
      {borrowBookData && (
        <BorrowBookModal
          book={borrowBookData}
          open={true}
          onClose={() => setBorrowBookData(null)}
        />
      )}

      {/* Details Modal */}
      {detailsBook && (
        <BookDetailsModal
          book={detailsBook}
          open={true}
          onClose={() => setDetailsBook(null)}
        />
      )}
    </div>
  );
}
