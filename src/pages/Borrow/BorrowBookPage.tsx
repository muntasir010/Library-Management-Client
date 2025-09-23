import { useNavigate, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "@/redux/api/booksCreatedApi";
import { BorrowBookModal } from "./BorrowBookModal";
import Spinners from "@/Spinners/Spinners";

const BorrowBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookByIdQuery(id as string);
  if (!book) return null;
  if (isLoading) {
    <Spinners />;
  }
  return (
    <BorrowBookModal
      book={book.data}
      open={true}
      onClose={() => navigate("/books")}
    />
  );
};

export default BorrowBookPage;
