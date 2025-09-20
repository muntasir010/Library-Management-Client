import { useState } from "react";
import { getColumns, type IBook } from "./columns";
import { useGetBooksQuery } from "@/redux/api/booksCreatedApi";
import Spinners from "@/Spinners/Spinners";
import { DataTable } from "./DataTable";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function ItemPage() {
  const [editItem, setEditItem] = useState<IBook | null>(null);
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data || [];
  if (isLoading) {
    return <Spinners />;
  }

  const handleEdit = (item: IBook) => {
    setEditItem(item);
    // eventually open modal here
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

      {/* {editItem && (
        <UpdateForm
          item={editItem}
          open={true}
          onClose={() => setEditItem(null)}
        />
      )} */}
    </div>
  );
}
