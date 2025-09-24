import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/booksCreatedApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import type { IBook } from "@/type";
import Spinners from "@/Spinners/Spinners";

// Schema
const bookSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  author: z.string().min(1, { message: "Author is required." }),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ]),
  isbn: z.string().min(1, { message: "ISBN is required." }),
  description: z.string().min(5, { message: "Description is required." }),
  copies: z
    .number({ error: "Copies must be a number." })
    .int()
    .min(0, { message: "Copies cannot be negative." }),
  available: z.boolean({
    error: "Available must be true or false.",
  }),
});

type FormValues = z.infer<typeof bookSchema>;

interface UpdateFormProps {
  book: IBook;
  open: boolean;
  onClose: () => void;
}

export default function UpdateForm({ book, open, onClose }: UpdateFormProps) {
  const [updateBook, { isLoading }] = useUpdateBookMutation();
  if (isLoading) {
    <Spinners />;
  }
  const form = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      copies: book.copies,
      description: book.description || "",
      available: book.available,
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const res = await updateBook({ id: book._id, body: values });
      console.log(res)
      toast.success("Book Update Successfully");
    } catch (error) {
      toast.error("Failed to updating book");
      console.log(error)
    }
    onClose();
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl text-black my-8 p-4 rounded-xl">
      <AlertDialog open={open} onOpenChange={onClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update Book</AlertDialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter book title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Author */}
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter author name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Genre */}
                <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genre</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select genre" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="FICTION">Fiction</SelectItem>
                            <SelectItem value="NON_FICTION">
                              Non-Fiction
                            </SelectItem>
                            <SelectItem value="SCIENCE">Science</SelectItem>
                            <SelectItem value="HISTORY">History</SelectItem>
                            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                            <SelectItem value="FANTASY">Fantasy</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ISBN */}
                <FormField
                  control={form.control}
                  name="isbn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ISBN</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter ISBN" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Copies */}
                <FormField
                  control={form.control}
                  name="copies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Copies</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter number of copies"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write description..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Available */}
                <FormField
                  control={form.control}
                  name="available"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormLabel>Available</FormLabel>
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Update Book
                </Button>
              </form>
            </Form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
