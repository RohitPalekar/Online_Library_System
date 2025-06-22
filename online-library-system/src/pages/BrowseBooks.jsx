import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookList from "../Components/BookList";
import SearchBooks from "../Components/SearchBooks";
export default function BrowseBooks() {

  //  To get value from the URL
  const { category } = useParams();
  // To get all books
  const allBooks = useSelector(state => state.books);

  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let results = allBooks;
    
    // Filter by category if specified
    if (category) {
      results = results.filter(book => 
        book.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by search term if specified
    if (searchTerm) {
      results = results.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredBooks(results);
  }, [category, searchTerm, allBooks]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {category ? `${category} Books` : "All Books"}
        </h1>
        
      </div>

      <SearchBooks onSearch={setSearchTerm} />

      {filteredBooks.length > 0 ? (
        <BookList booksData={filteredBooks} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No books found</p>
          <button 
            onClick={() => setSearchTerm("")} 
            className="mt-4 text-[#007387] hover:text-[#007e87]"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}