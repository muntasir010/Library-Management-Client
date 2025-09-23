import { useNavigate, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "@/redux/api/booksCreatedApi";
import { BookDetailsModal } from "./BookDetailsModal";

export default function BooksDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useGetBookByIdQuery(id as string);
  if (!book) return null;
  return (
    <div>
      <BookDetailsModal
        book={book.data}
        open={true}
        onClose={() => navigate("/books")}
      />
    </div>
  );
}
