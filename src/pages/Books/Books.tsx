import { useState } from "react";
import { getColumns, type IBook } from "./columns";
import { useGetBooksQuery } from "@/redux/api/booksCreatedApi";
import Spinners from "@/Spinners/Spinners";
import { DataTable } from "./DataTable";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import UpdateForm from "../UpdateBook/UpdateBook";

export default function Books() {
  const [editBook, setEditBook] = useState<IBook | null>(null);
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data || [];
  if (isLoading) {
    return <Spinners />;
  }

  const handleEdit = (book: IBook) => {
    setEditBook(book);
  };

  return (
    <div className=" my-8">
      <div className="flex justify-between items-center">
        <p className="text-3xl text-white my-2"> Books List</p>
        <Link to={"/create-book"}>
          <Button>Add Book</Button>
        </Link>
      </div>

      <DataTable columns={getColumns(handleEdit)} data={books}></DataTable>

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
