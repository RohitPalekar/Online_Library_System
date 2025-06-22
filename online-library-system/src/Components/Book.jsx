// Book card component to show each book in a simple way
export default function Book({ bookDetails }) {
  return (
    <div className="bg-white border rounded-md p-3 flex flex-col h-full">
      {/* Book image */}
      <div className="h-40 overflow-hidden mb-3">
        <img
          src={bookDetails.coverImage}
          alt={bookDetails.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Author of book */}
      <h3 className="text-md font-semibold text-gray-800 mb-1">{bookDetails.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{bookDetails.author}</p>

      {/* Description of book */}
      <p className="text-sm text-gray-500 line-clamp-2 mb-3">{bookDetails.description}</p>

      {/* star rating by just substracting from ratings from mockdata*/}
      <div className="text-yellow-500 text-sm mb-3">
        {"★".repeat(bookDetails.rating)}
        <span className="text-gray-400">{"★".repeat(5 - bookDetails.rating)}</span>
      </div>

      {/* View details button */}
      <button className="bg-[#007387] text-white py-1 text-sm rounded hover:bg-[#007e87] mt-auto">
        View Details
      </button>
    </div>
  );
}
