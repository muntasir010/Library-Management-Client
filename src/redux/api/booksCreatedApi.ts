import type { BorrowedBooksApiResponse, singleBook } from "@/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["book", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),

    getBookById: builder.query<singleBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["book"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    getBorrowedBooks: builder.query<BorrowedBooksApiResponse, void>({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),

    borrowBook: builder.mutation({
      query: ({ book, quantity, dueDate }) => ({
        url: `/borrow`,
        method: "POST",
        body: { book, quantity, dueDate },
      }),
      invalidatesTags: ["borrow"],
    }),

    getBorrowSummary: builder.query({
      query: () => "/borrow-summary",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  useGetBookByIdQuery,
} = booksApi;
