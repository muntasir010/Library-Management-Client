import { useGetBorrowSummaryQuery } from "@/redux/api/booksCreatedApi";
import Spinners from "@/Spinners/Spinners";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p className="text-center mt-10">
    <Spinners/>
  </p>;
  if (isError)
    return (
      <p className="text-red-500 text-center mt-10">Failed to fetch data.</p>
    );

  const summary = data?.data || [];

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Borrow Summary</h1>
      {summary.length === 0 ? (
        <p className="text-center">No books have been borrowed yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white text-black shadow-2xl rounded-md">
          <table className="min-w-full  border">
            <thead>
              <tr className="bg-orange-400 text-left">
                <th className="py-3 px-4 border-b">Title</th>
                <th className="py-3 px-4 border-b">ISBN</th>
                <th className="py-3 px-4 border-b">Total Quantity Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((book: any, index: number) => (
                <tr
                  key={index}
                >
                  <td className="py-2 px-4 border-b">{book.book?.title}</td>
                  <td className="py-2 px-4 border-b">{book.book?.isbn}</td>
                  <td className="py-2 px-4 border-b">{book.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BorrowSummary;