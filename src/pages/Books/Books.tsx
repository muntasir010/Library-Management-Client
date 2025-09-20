import { useState } from "react";
import { getColumns, type IBook } from "./columns";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/api/booksCreatedApi";
import Spinners from "@/Spinners/Spinners";
import { DataTable } from "./DataTable";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import UpdateForm from "../UpdateBook/UpdateBook";
import toast from "react-hot-toast";

export default function Books() {
  const [editBook, setEditBook] = useState<IBook | null>(null);
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data || [];
  const [deleteBook] = useDeleteBookMutation();
  if (isLoading) {
    return <Spinners />;
  }

  const handleEdit = (book: IBook) => {
    setEditBook(book);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Book Deleted Successfully");
    } catch (error) {
      toast.error("Failed to delete book");
    }
  };

  return (
    <div className=" my-8">
      <div className="flex justify-between items-center">
        <p className="text-3xl text-white my-2"> Books List</p>
        <Link to={"/create-book"}>
          <Button>Add Book</Button>
        </Link>
      </div>

      <DataTable
        columns={getColumns(handleEdit, handleDelete)}
        data={books}
      ></DataTable>

      {editBook && (
        <UpdateForm
          book={editBook}
          open={true}
          onClose={() => setEditBook(null)}
        />
      )}
    </div>
  );
}
