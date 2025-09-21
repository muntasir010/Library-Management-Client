import { useBorrowBookMutation } from "@/redux/api/booksCreatedApi";
import { useState } from "react";
const BorrowBook = () => {
  const [bookId, setBookId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [borrowBook, { isLoading, isSuccess, isError }] = useBorrowBookMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await borrowBook({ bookId, quantity, dueDate });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Borrow Book</h2>

        <input
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          min={1}
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Borrowing..." : "Borrow"}
        </button>

        {isSuccess && <p className="text-green-600 text-center">Book borrowed successfully!</p>}
        {isError && <p className="text-red-600 text-center">Failed to borrow book</p>}
      </form>
    </div>
  );
};

export default BorrowBook;
