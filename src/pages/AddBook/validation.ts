import { z } from "zod";

export const bookSchema = z.object({
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

export type BookFormValues = z.infer<typeof bookSchema>;
