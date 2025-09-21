export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface Borrow {
  _id?: string;
  bookId: string;
  quantity: number;
  dueDate: string;
}

export interface BorrowSummary {
  bookTitle: string;
  isbn: string;
  totalQuantity: number;
}