import { Link } from "react-router-dom";
// Array of category objects wherw name and categoryName for browsing it
const categories = [
  { name: "Fiction", categoryName: "fiction" },
  { name: "Non-Fiction", categoryName: "non-fiction" },
  { name: "Science Fiction", categoryName: "sci-fi" },
  { name: "Fantasy", categoryName: "fantasy" },
  { name: "Mystery", categoryName: "mystery" },
  { name: "Romance", categoryName: "romance" },
];
// For rendering all Category and to redirect
export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          key={category.categoryName}
          to={`/browse/${category.categoryName}`}
          className="bg-[#007387] p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#007e87] shadow-amber-800 transition text-center"
        >
          <h3 className="font-medium text-white">{category.name}</h3>
        </Link>
      ))}
    </div>
  );
}