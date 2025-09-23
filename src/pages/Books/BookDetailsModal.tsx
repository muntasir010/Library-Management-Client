import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { BookDetailsModalProps } from "@/type";
import { Link } from "react-router";

export function BookDetailsModal({
  book,
  open,
  onClose,
}: BookDetailsModalProps) {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Book Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 text-md">
          <p>
            <span className="font-bold">Author:</span> {book.title}
          </p>
          <p>
            <span className="font-bold">Author:</span> {book.author}
          </p>
          <p>
            <span className="font-bold">Genre:</span> {book.genre}
          </p>
          <p>
            <span className="font-bold">ISBN:</span> {book.isbn}
          </p>
          <p>
            <span className="font-bold">Quantity:</span> {book.copies}
          </p>
          <p>
            <span className="font-bold">Description: </span>
            {book.description}
          </p>
        </div>
        <DialogFooter>
          <Button>
            <Link to={`/borrow/${book._id}`}>Borrow Book</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
