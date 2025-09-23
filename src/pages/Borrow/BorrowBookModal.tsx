import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBorrowBookMutation } from "@/redux/api/booksCreatedApi";
import type { IBook } from "@/type";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface BorrowBookModalProps {
  book: IBook;
  open: boolean;
  onClose: () => void;
}

export const BorrowBookModal = ({
  book,
  open,
  onClose,
}: BorrowBookModalProps) => {
  const [borrowBook] = useBorrowBookMutation();
  const { register, handleSubmit } = useForm<{
    quantity: number;
    dueDate: string;
  }>();
  const navigate = useNavigate();
  const onSubmit = async (data: { quantity: number; dueDate: string }) => {
    try {
      await borrowBook({
        book: book._id,
        quantity: data.quantity,
        dueDate: data.dueDate,
      }).unwrap();

      toast.success("Book borrowed successfully!");
      onClose();
      navigate("/borrow-summary");
    } catch {
      toast.error("Failed to borrow book");
    }
  };

  return (
    // <Dialog open={open} onOpenChange={onClose}>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>Borrow {book.title}</DialogTitle>
    //     </DialogHeader>
    //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    //       <div>
    //         <label>Quantity</label>
    //         <input
    //           type="number"
    //           {...register("quantity", { required: true })}
    //         />
    //       </div>
    //       <div>
    //         <label>Due Date</label>
    //         <input type="date" {...register("dueDate", { required: true })} />
    //       </div>
    //       <button type="submit">Submit</button>
    //     </form>
    //   </DialogContent>
    // </Dialog>
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-2xl">Borrow Book</DialogHeader>
        <DialogHeader>
          <DialogTitle>Name: {book.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Quantity</Label>
              <Input
                {...register("quantity", { required: true })}
                type="number"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Due Date</Label>
              <Input type="date" {...register("dueDate", { required: true })} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
