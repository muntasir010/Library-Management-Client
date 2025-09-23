import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { IBook } from "@/type";
import { motion } from "framer-motion";

interface BookDetailsModalProps {
  book: IBook | null;
  open: boolean;
  onClose: () => void;
}

export function BookDetailsModal({ book, open, onClose }: BookDetailsModalProps) {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Book Details
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 text-md"
        >
          <motion.p
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="p-2 rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-bold">Title:</span> {book.title}
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
            className="p-2 rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-bold">Author:</span> {book.author}
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="p-2 rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-bold">Genre:</span> {book.genre}
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
            className="p-2 rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-bold">ISBN:</span> {book.isbn}
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="p-2 rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-bold">Quantity:</span> {book.copies}
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-bold">Description: </span>
            {book.description}
          </motion.p>
        </motion.div>

        <DialogFooter>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition-transform duration-200"
          >
            <Link to={`/borrow/${book._id}`}>Borrow Book</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
