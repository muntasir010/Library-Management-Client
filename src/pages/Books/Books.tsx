import { useState } from "react";
import { getColumns, type IBook } from "./columns";
import { useGetBooksQuery } from "@/redux/api/booksCreatedApi";
import Spinners from "@/Spinners/Spinners";
import { DataTable } from "./DataTable";

export default function ItemPage() {
  const [editItem, setEditItem] = useState<IBook | null>(null);
  const { data, isLoading } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <Spinners/>
  }

  const handleEdit = (item: IBook) => {
    setEditItem(item);
   // eventually open modal here
  };

  return (
    <div>
      <p className="text-3xl text-white my-2"> Books</p>

      <DataTable columns={getColumns(handleEdit)} data={data?.data}></DataTable>

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