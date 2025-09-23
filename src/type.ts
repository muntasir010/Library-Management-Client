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
  book: string;
}

export interface IBorrow {
  bookId: string;
  quantity: number;
  dueDate: string;
  book: string;
}

export interface BorrowSummary {
  bookTitle: string;
  isbn: string;
  totalQuantity: number;
}

export interface BookModalProps {
  bookId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface BorrowBookModalProps {
  book: IBook;
  open: boolean;
  onClose: () => void;
}

export interface BorrowForm {
  quantity: number;
  dueDate: string;
}
export interface singleBook {
  data: IBook;
  success: boolean;
  message: string;
}


export interface BorrowBook {
  title: string;
  isbn: string;
}

export interface BorrowedBookData {
  totalQuantity: number;
  book: BorrowBook;
}

export interface BorrowedBooksApiResponse {
  data: BorrowedBookData[];
  success: boolean;
  message: string;
}

export interface MyModalProps {
  book: IBook;
  open: boolean;
  onClose: () => void;
}
