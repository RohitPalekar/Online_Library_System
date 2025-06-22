import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.find(item => item.id.toString() === id)
  );

  return (
    // All book details
    <div className="max-w-3xl mx-auto bg-white border p-6 rounded-md">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={book?.coverImage}
          alt={book?.title}
          className="w-full md:w-1/3 h-64 object-cover rounded"
        />

        <div className="md:w-2/3">
          <h1 className="text-xl font-bold text-gray-800">{book?.title}</h1>
          <p className="text-md text-gray-600 mb-2">by {book?.author}</p>

          <div className="text-yellow-500 text-lg mb-4">
            {"★".repeat(book?.rating || 0)}
            <span className="text-gray-400">
              {"★".repeat(5 - (book?.rating || 0))}
            </span>
          </div>

          <p className="text-sm text-gray-700 mb-4">{book?.description}</p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div><strong>Category:</strong> {book?.category}</div>
            <div><strong>Published:</strong> {book?.publishDate}</div>
            <div><strong>Pages:</strong> {book?.pages}</div>
          </div>

          <Link
            to="/browse"
            className="inline-block mt-6 bg-[#007387] text-white px-4 py-2 rounded hover:bg-[#007e87]"
          >
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}
