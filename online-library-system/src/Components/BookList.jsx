// Shows all books in a grid
import { Link } from "react-router-dom";
import Book from "./book";

export default function BookList({ booksData }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {booksData.map(book => (
        <Link key={book.id} to={`/book/${book.id}`}>
          <Book bookDetails={book} />
        </Link>
      ))}
    </div>
  );
}
