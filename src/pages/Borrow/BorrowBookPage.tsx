import { useNavigate, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "@/redux/api/booksCreatedApi";
import { BorrowBookModal } from "./BorrowBookModal";

const BorrowBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useGetBookByIdQuery(id as string);
  if (!book) return null;

  return (
    <BorrowBookModal
      book={book.data}
      open={true}
      onClose={() => navigate("/books")}
    />
  );
};

export default BorrowBookPage;
