import CategoryList from "./CategoryList";
import BookList from "./BookList";
import { useSelector } from "react-redux";

export default function Home() {
  const books = useSelector(state => state.books);
  const popular = books.slice(0, 6); // First 6 books

  return (
    <div>
      {/* Welcome section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl gravitas-one-regular font-bold text-[#007387]">Welcome to Our Library</h1>
        <p className="text-gray-600 mt-2 text-lm">Find and manage your favorite books.</p>
      </section>

      {/* Popular books section */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Popular Books :</h2>
        <BookList booksData={popular} />
        <div className="text-center mt-6">
          <a href="/browse" className="text-sm text-white bg-[#007387] px-4 py-2 rounded hover:bg-[#007e87]">
            View All
          </a>
        </div>
      </section>

      {/* Categories section */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
        <CategoryList />
      </section>
    </div>
  );
}
